import { useState } from "react";
import { Game } from "../model/Game";
import { ConfigContainer } from "./configuration";
import { StatsContainer } from "./stats";
import { isHiragana, toHiragana } from "wanakana";
import { GOJUON_MONO } from "../lib/kana-dict";
import { createContainer } from "unstated-next";

const initialState: Game = {
  startedOn: new Date(),
  questions: [],
  currentQuestion: 0,
  correct: 0
}

function useGame() {
  const [game, setGame] = useState(initialState);
  const config = ConfigContainer.useContainer();
  const stats = StatsContainer.useContainer();
  
  const start = () => {
    setGame(startGame(config.get()))
  };
  
  const answer = (input: string) => {
    setGame(g => {
      const correct = isCorrect(input, g);
      stats.addHiragana(g.questions[g.currentQuestion], correct);
      return answerQuestion(correct, g);
    })
  };
  
  const finish = () => {
    setGame(g => finishGame(g))
  };
  
  return { start, answer, finish, ...game }
}

export const GameContainer = createContainer(useGame);

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

function answerQuestion(correct: boolean, game: Game): Game {
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

function isCorrect(input: string, game: Game)
{
  const hiragana = isHiragana(input) ? input : toHiragana(input);
  return hiragana === game.questions[game.currentQuestion];
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
