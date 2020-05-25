import React from 'react'
import { Mark } from '../containers/game';
import { Box } from '@chakra-ui/core';

export const CurrentMark = React.memo<Mark>(({ correct, amount }) => {
  return (
    <Box textAlign="center">{correct} / {amount}</Box>
  )
});

export default CurrentMark
