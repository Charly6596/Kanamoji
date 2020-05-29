import React, { useEffect } from 'react'
import { Box, Text, Button, Stack } from '@chakra-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import CurrentMark from '../components/current-mark';
import GameInput from '../components/game-input';
import { GameContainer } from '../containers/game';

function GamePage() {

  const game = GameContainer.useContainer();

  useEffect(() => {
    game.start();
  }, [])
  if(game.questions[game.currentQuestion] === undefined) {
    return <span>Loading...</span>;
  }

  return (
    <Stack spacing={4} justify="center">
      <CurrentMark correct={game.correct} amount={game.questions.length} />
      <Box textAlign="center">
        <Text fontSize="5rem">{game.questions[game.currentQuestion].char}</Text>
      </Box>
      <Box>
        <GameInput />
      </Box>
      <Stack
        isInline
        spacing={10}
        justify="center"

      >
        <RouterLink to={ROUTES.HOME}>
          <Button variantColor="green">Leave game</Button>
        </RouterLink>
      </Stack>
    </Stack>
  )
}

export default GamePage
