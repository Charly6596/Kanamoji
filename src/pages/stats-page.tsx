import React from 'react'
import { Box, Text, Button, Stack, Flex } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { StatsContainer } from '../containers/stats';
import { useKana } from '../lib/kana-dict';
import MainStack from '../components/main-stack';
import AppFooter from '../components/app-footer';

function StatsPage() {
  const stats = StatsContainer.useContainer();
  const worst = stats.getWorstHiragana();
  const best = stats.getBestHiragana();
  const kanaDict = useKana();

  return (
    <>
    <MainStack>
      <Stack
        backgroundColor="gray.200"
        paddingY={5}
        borderRadius={['0', '0', '20px']}
        alignItems="center"
        spacing={5}
        >
      <Stack justifyContent="center">
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
        <Box textAlign="center">
          <Text fontSize="2rem">Games</Text>
        </Box>
      </Stack>
      <Link to={ROUTES.HOME}>
        <Button variantColor="green">Main page</Button>
      </Link>
    </Stack>
    </MainStack>
    <AppFooter />
    </>
  )
}

export default StatsPage
