import React from 'react'
import { Kana, useKana } from '@kanamoji/controllers';
import { KanaCheckbox } from './kana-checkbox';
import { KanaCheckboxBox } from './kana-checkbox-box';
import { Box, Checkbox, Stack, Flex } from '@chakra-ui/core';
import { ConfigContainer } from '@kanamoji/controllers';
import { SelectModeContainer } from '@kanamoji/controllers';

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
  const selecting = SelectModeContainer.useContainer().selecting;
  const config = ConfigContainer.useContainer();
  const kana = useKana()
    .Kana.filter(k =>
      k.shape === props.group &&
      k.monograph === props.monograph &&
      k.dakuten === props.dakuten
    );

  const ids = kana.map(k => k.id);
  const grouped = groupBy(kana, "column");

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number[] = JSON.parse(e.target.value);
    e.target.checked ? config.enableKanas(value) : config.deleteKanas(value);
  }

  const renderItems = () => {
    return grouped.map((g, i) => {
      return <Stack direction="row" justify="center" key={i}>
       <KanaCheckboxBox key={'kcb' + i}>
        {g.map(k =>
          <KanaCheckbox kana={k} key={k.id} />
        )}
      </KanaCheckboxBox>
      <Checkbox 
        key={'cb' + i}
        hidden={!selecting}
        borderColor="black"
        alignSelf="center"
        variantColor="teal"
        value={JSON.stringify(g.map(k => k.id))} 
        onChange={onCheckboxChange} 
        isChecked={config.areEnabled(g.map(k => k.id))} 
        />
      </Stack>
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
