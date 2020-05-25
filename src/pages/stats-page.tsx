import React from 'react'
import { Box, Text, Button, Stack, Flex } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import StatsContainer from '../containers/stats'

function StatsPage() {
  const stats = StatsContainer.useContainer();
  stats.getBestRow();

  return (
    <Stack align="center" padding={10}>
      <Flex wrap="wrap">
        <Box textAlign="center">
          <Text fontSize="2rem">Worst character</Text>
          <Text fontSize="5em">{stats.getWorstHiragana().character}</Text>
          <Text>Ratio: {stats.getWorstHiragana().correct / stats.getWorstHiragana().total}</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="2rem">Worst character</Text>
          <Text fontSize="5em">{stats.getBestHiragana().character}</Text>
          <Text>Ratio: {stats.getBestHiragana().correct / stats.getBestHiragana().total}</Text>
        </Box>
        <Box>
          <Text fontSize="2rem">Worst character</Text>
        </Box>
      </Flex>
      <Link to={ROUTES.HOME}>
        <Button variantColor="green">Main page</Button>
      </Link>
    </Stack>
  )
}

export default StatsPage
