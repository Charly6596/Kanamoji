import React from 'react'
import { Kana, useKana } from '../lib/kana-dict';
import { KanaCheckbox } from './kana-checkbox';
import { KanaCheckboxBox } from './kana-checkbox-box';

type kanaGroup = "hiragana" | "katakana";

interface Props {
  group: kanaGroup,
  monograph: boolean;
  dakuten: boolean;
}

const groupBy = function (xs: any[], key: string | number): [Kana[]] {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, []);
};


const KanaTable = (props: Props) => {
  const kana = useKana()
    .Kana.filter(k =>
      k.shape === props.group &&
      k.monograph === props.monograph &&
      k.dakuten === props.dakuten
    );
  const grouped = groupBy(kana, "column");

  const renderItems = () => {
    return grouped.map((g, i) => {
      return <KanaCheckboxBox key={i}>
        {g.map(k =>
          <KanaCheckbox kana={k} key={k.id} />
        )}
      </KanaCheckboxBox>
    })
  }

  return (
    <>
      {renderItems()}
    </>
  )
};

export default KanaTable
