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
    <Stack align="center" paddingX={10}>
      <Flex wrap="wrap" justifyContent="center">
        <Box textAlign="center">
          <Text fontSize="2rem">Best character</Text>
          <Text fontSize="5em">{kanaDict.Kana[best.kanaId].char}</Text>
          <Text>Ratio: {(best.timesCorrect / best.totalTimes).toFixed(2)}</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="2rem">Worst character</Text>
          <Text fontSize="5em">{kanaDict.getById(worst.kanaId)?.char ?? "None yet"}</Text>
          <Text>Ratio: {(worst.timesCorrect / worst.totalTimes).toFixed(2)}</Text>
        </Box>
        <Box>
          <Text fontSize="2rem">Worst character</Text>
        </Box>
      <Link to={ROUTES.HOME}>
        <Button variantColor="green">Main page</Button>
      </Link>
      </Flex>
    </Stack>
  )
}

export default StatsPage
