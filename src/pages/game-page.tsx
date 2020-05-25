import React, { useCallback, useEffect, useReducer } from 'react'
import { Box, Text, Button, Stack } from '@chakra-ui/core';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import CurrentMark from '../components/current-mark';
import { Game } from '../model/Game';
import { GOJUON_MONO } from '../lib/kana-dict';
import { isHiragana, toHiragana } from 'wanakana';
import ConfigurationContainer from '../containers/configuration';
import StatsContainer from '../containers/stats'
import GameInput from '../components/game-input';

const initialState: Game = {
  startedOn: new Date(),
  questions: [],
  currentQuestion: 0,
  correct: 0
}

// https://bost.ocks.org/mike/shuffle/
function shuffle(array: any[]) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function answer(input: string, game: Game, stats: any): Game {
  const hiragana = isHiragana(input) ? input : toHiragana(input);
  const correct = hiragana === game.questions[game.currentQuestion];

  stats.addHiragana(game.questions[game.currentQuestion], correct);

  if (game.currentQuestion < game.questions.length) {
    return {
      ...game,
      currentQuestion: game.currentQuestion + 1,
      correct: correct ? game.correct + 1 : game.correct,
    };
  }

  return {
    ...game,
    correct: correct ? game.correct + 1 : game.correct,
  }
}

function finishGame(game: Game): Game {
  return {
    ...game,
    finishedOn: new Date()
  };
}

function startGame(cols: Set<number>): Game {
  let options = Object
    .values(GOJUON_MONO)
    .filter((h, i) => cols.has(i))
    .map(h => Object.values(h))
    .flat();

  options = shuffle(options);

  return {
    startedOn: new Date(),
    questions: options,
    currentQuestion: 0,
    correct: 0
  };
}

interface Action {
  type: GAME_ACTIONS;
  payload?: any;
  stats?: any;
}

type GAME_ACTIONS =
  "START_GAME" |
  "FINISH_GAME" |
  "SEND_ANSWER";

function reducer(state: Game, action: Action): Game {

  switch (action.type) {
    case "START_GAME":
      return startGame(action.payload);
    case "SEND_ANSWER":
      return answer(action.payload, state, action.stats);
    case "FINISH_GAME":
      const res = finishGame(state);
      action.stats.add(res);
      return res;
    default:
      return initialState;
  }
}

const START_GAME = (cols: Set<number>): Action => {
  return {
    type: "START_GAME",
    payload: cols
  }
}

const FINISH_GAME = (stats: any): Action => {
  return {
    type: "FINISH_GAME",
    stats: stats
  }
}

const SEND_ANSWER = (input: string, stats: any): Action => {
  return {
    type: "SEND_ANSWER",
    payload: input,
    stats: stats
  }
}

function GamePage() {
  const config = ConfigurationContainer.useContainer();
  const stats = StatsContainer.useContainer();
  const [game, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(START_GAME(config.get()));
  }, [])

  useEffect(() => {
    if (game.questions.length !== 0 && game.currentQuestion >= game.questions.length) {
      dispatch(FINISH_GAME(stats));
    }
  }, [game.currentQuestion, game.questions, dispatch, stats])

  const onAnswer = useCallback(
    (answer: string) => {
      dispatch(SEND_ANSWER(answer, stats));
    },
    [dispatch],
  );

  const printStartButton = useCallback(
    () => {
      if (game.finishedOn !== undefined) {
        return <Redirect to={ROUTES.STATS} />
      }
    },
    [game.finishedOn],
  );

return (
  <Stack spacing={4} justify="center">
    <CurrentMark correct={game.correct} amount={game.questions.length} />
    <Box textAlign="center">
      <Text fontSize="5rem">{game.questions[game.currentQuestion]}</Text>
    </Box>
    <Box>
      <GameInput onAnswer={onAnswer} />
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
