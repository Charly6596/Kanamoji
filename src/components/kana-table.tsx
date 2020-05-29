import React from 'react'
import { Kana, useKana } from '../lib/kana-dict';
import { KanaCheckbox } from './kana-checkbox';
import { KanaCheckboxBox } from './kana-checkbox-box';
import { Box, Checkbox } from '@chakra-ui/core';
import { ConfigContainer } from '../containers/configuration';

type kanaGroup = "hiragana" | "katakana";

interface Props {
  group: kanaGroup,
  title: string,
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
  const config = ConfigContainer.useContainer();
  const kana = useKana()
    .Kana.filter(k =>
      k.shape === props.group &&
      k.monograph === props.monograph &&
      k.dakuten === props.dakuten
    );

  const ids = kana.map(k => k.id);
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
    <Box>
      <Box
        as='button'
        width='100%'
        color={config.areEnabled(ids) ? 'teal.400' : 'gray.500'}
        textAlign='left'
        px={1}
        onClick={() => config.toggleAll(kana.map(k => k.id))}
      >
        {props.title}
      </Box>
      {renderItems()}
    </Box>
  )
};

export default KanaTable
