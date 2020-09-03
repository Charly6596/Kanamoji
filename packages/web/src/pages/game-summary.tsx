import React from 'react'
import { Box, Text, Button, Stack, Flex } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import { StatsContainer } from '@kanamoji/controllers';

function GameSummaryPage() {
  const stats = StatsContainer.useContainer().get();
  console.log(stats);
  const lastGameStats = stats[stats.length - 1];

  if (!lastGameStats) return <Text>loading...</Text>

  return (
    <Stack align="center" padding={10}>
      <Stack flexDirection={['column', 'row']} isInline shouldWrapChildren spacing={[0, 20]}>
        <Box textAlign="center">
          <Text fontSize="2rem">Score</Text>
          <Text fontSize="5em">{(lastGameStats.correct / lastGameStats.total * 100).toFixed(2)}%</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize='2em'>Points</Text>
          <Text fontSize="5em">{(lastGameStats.correct * 50).toFixed()}</Text>
        </Box>
      </Stack>
      <Link to={ROUTES.HOME}>
        <Button variantColor="green">Main page</Button>
      </Link>
    </Stack>
  )
}

export default GameSummaryPage

