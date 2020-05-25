import React, { useState, useCallback, useEffect } from 'react'
import { Box, Text, Button, Input, Stack } from '@chakra-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import GameContainer from '../containers/game';
import CurrentMark from '../components/current-mark';

function GamePage() {
  const game = GameContainer.useContainer();
  const [input, setInput] = useState('');

  useEffect(() => {
    game.start();
    return () => {
      if (!game.finished()) {
        game.stop()

      }
    }
  }, [])

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
    ,[]
  )

  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        game.sendAnswer(input);
        setInput('');
      }
    },
    [input],
  )

  const printStartButton = 
    () => {
      if (game.game.state === 'GAME_STARTED') {
        return <Button variantColor="green">Start game</Button>
      }
      else {
        return <Text>Game finished</Text>
      }
    }

  return (
    <Stack spacing={4} justify="center">
      <CurrentMark correct={game.currentMark().correct} amount={game.currentMark().amount}/>
      <Box textAlign="center">
        <Text fontSize="5rem">{game.question()}</Text>
      </Box>
      <Box>
        <Input placeholder="Enter your answer..." value={input} onChange={onInputChange} onKeyDown={onInputKeyDown} />
      </Box>
      <Stack
        isInline
        spacing={10}
        justify="center"

      >
        {printStartButton()}
        <RouterLink to={ROUTES.HOME}>
          <Button variantColor="green">Leave game</Button>
        </RouterLink>
      </Stack>
    </Stack>
  )
}

export default GamePage
