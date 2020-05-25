import React from 'react'
import { Box } from '@chakra-ui/core';
import { Mark } from '../model/Mark';

export const CurrentMark = React.memo<Mark>(({ correct, amount }) => {
  return (
    <Box textAlign="center">{correct} / {amount}</Box>
  )
});

export default CurrentMark
