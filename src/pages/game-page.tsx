import React, { useEffect, useState, useRef } from 'react'
import { Box, Text, Button, Stack, Flex } from '@chakra-ui/core';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import CurrentMark from '../components/current-mark';
import GameInput from '../components/game-input';
import { GameContainer } from '../containers/game';
import GameSummaryModal from '../components/game-summary-modal';
import MainStack from '../components/main-stack';

function GamePage() {

  const game = GameContainer.useContainer();
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    game.start();
  }, [])


  if (game.questions[game.currentQuestion] === undefined) {
    return <span>Loading...</span>;
  }

  game.onError.current = () => {
    setShowAnswer(true);
  };

  const displayQuestion = () => {
    if (showAnswer) {
      const currQuestion = game.finished ? game.currentQuestion : game.currentQuestion - 1;
      const lastQ = game.questions[currQuestion];
      return <>

        <Flex justifyContent="center" textAlign="center">
          <Stack color="gray.100">
            <Text fontSize="2rem" fontWeight="bold">Incorrect</Text>
            <Text fontSize="5rem">{lastQ.char}</Text>
            <Text fontSize="1.25rem" fontWeight="bold" color="red">romaji: {lastQ.romaji}</Text>
            <Text fontSize="1.25rem" fontWeight="bold" color="red">{lastQ.shape}: {lastQ.char}</Text>
          </Stack>
        </Flex>
        <Button _focus={{boxShadow: undefined}} ref={(b) => { b?.focus() }} onClick={() => setShowAnswer(false)}>Next</Button>
      </>
    }

    return <>
      <Flex justifyContent="center" textAlign="center">
        <Text width={[]} borderRadius={10} color="gray.100" fontSize="5rem">{game.questions[game.currentQuestion].char}</Text>
      </Flex>
      <GameInput />
    </>
  }

  return (
    <MainStack noTitle justifyContent="space-between">
      <GameSummaryModal game={game} isOpen={game.finished && !showAnswer} />
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
          <Button variantColor="green">Leave</Button>
        </RouterLink>
      </Flex>
      {displayQuestion()}
    </MainStack>
  )
}

export default GamePage
