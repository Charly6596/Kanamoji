import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/core';
import { Mark } from '@kanamoji/controllers';

export const CurrentMark = React.memo<Mark>(({ correct, amount, answered }) => {
  return (
    <Flex justifyContent="space-around" fontWeight="bold">
      <Box color="green.500">{correct}</Box>
      <Box textAlign="center">{answered} / {amount}</Box>
      <Box color="red.500">{answered - correct}</Box>
    </Flex>
  )
});

export default CurrentMark
