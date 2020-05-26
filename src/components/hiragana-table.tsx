import React from 'react'
import { GOJUON_MONO } from '../lib/kana-dict';
import { Flex, Text, Checkbox, Box } from '@chakra-ui/core';
import { ConfigContainer } from '../containers/configuration';

function HiraganaTable() {
  const config = ConfigContainer.useContainer();

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    e.target.checked ? config.add(value) : config.remove(value);
  }

  const renderHiragana = () =>
    Object
      .values(GOJUON_MONO)
      .map((v, i) =>
        <Flex marginX={3} alignItems="center" flexDir="column" key={i}>
          <Checkbox value={i} size='lg' variantColor="green" onChange={onCheckboxChange} isChecked={config.isEnabled(i)} />
          {
            Object.values(v).map(v =>
              <Box p={1} key={v}>
                <Text fontSize="3em">{v}</Text>
              </Box>
            )
          }
        </Flex>
      )

  return (
    <Flex>
      { renderHiragana() }
    </Flex>
  )
}

export default HiraganaTable
