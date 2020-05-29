import React from 'react'
import { Box, Text, Button, Stack, Flex } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { StatsContainer } from '../containers/stats';
import { useKana } from '../lib/kana-dict';

function StatsPage() {
  const stats = StatsContainer.useContainer();
  const worst = stats.getWorstHiragana();
  const best = stats.getBestHiragana();
  const kanaDict = useKana();

  return (
    <Stack align="center" padding={10}>
      <Flex wrap="wrap">
        <Box textAlign="center">
          <Text fontSize="2rem">Best character</Text>
          <Text fontSize="5em">{kanaDict.Kana[best.kanaId].char}</Text>
          <Text>Ratio: {best.timesCorrect / best.totalTimes}</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="2rem">Worst character</Text>
          <Text fontSize="5em">{kanaDict.getById(worst.kanaId)?.char ?? "None yet"}</Text>
          <Text>Ratio: {worst.timesCorrect / worst.totalTimes}</Text>
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
