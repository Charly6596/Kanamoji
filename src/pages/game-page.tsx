import React, { useEffect } from 'react'
import { Box, Text, Button, Stack, Flex } from '@chakra-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import CurrentMark from '../components/current-mark';
import GameInput from '../components/game-input';
import { GameContainer } from '../containers/game';
import GameSummaryModal from '../components/game-summary-modal';
import MainStack from '../components/main-stack';

function GamePage() {

  const game = GameContainer.useContainer();

  useEffect(() => {
    game.start();
  }, [])
  if (game.questions[game.currentQuestion] === undefined) {
    return <span>Loading...</span>;
  }

  return (
    <MainStack noTitle justifyContent="space-between">
      <GameSummaryModal game={game} />
      <Flex
        backgroundColor="gray.100"
        py={3}
        borderRadius={['0', '0', '0px 0px 20px 20px']}
        flexDir="column"
        alignItems="center"
      >
        <Box width="100%">
          <CurrentMark correct={game.correct} amount={game.questions.length} answered={game.currentQuestion} />
        </Box>
        <RouterLink to={ROUTES.HOME}>
          <Button variantColor="green">Leave game</Button>
        </RouterLink>
      </Flex>
      <Flex justifyContent="center" textAlign="center">
        <Text width={[]} borderRadius={10} color="gray.100" fontSize="5rem">{game.questions[game.currentQuestion].char}</Text>
      </Flex>
      <GameInput />
    </MainStack>
  )
}

export default GamePage
