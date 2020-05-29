import { useState, useRef } from "react";
import { Game } from "../model/Game";
import { ConfigContainer } from "./configuration";
import { StatsContainer } from "./stats";
import { isHiragana, toHiragana } from "wanakana";
import { useKana, Kana } from "../lib/kana-dict";
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
  const onError = useRef<() => void>(() => null);
  const kanaDict = useKana();

  const start = () => {
    setGame(startGame(config.get(), kanaDict.Kana))
  };

  const answer = (input: string) => {
    setGame(g => {
      const correct = isCorrect(input, g);
      if (!correct) {
        onError.current();
      }
      stats.addKana(g.questions[g.currentQuestion], correct);
      return answerQuestion(correct, g);
    })
  };

  const finish = () => {
    setGame(g => finishGame(g))
  };

  return { start, answer, finish, onError, ...game }
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

function isCorrect(input: string, game: Game) {
  const hiragana = isHiragana(input) ? input : toHiragana(input);
  return hiragana === game.questions[game.currentQuestion].char;
}

function finishGame(game: Game): Game {
  return {
    ...game,
    finishedOn: new Date()
  };
}

function startGame(ids: Set<number>, kana: readonly Kana[]): Game {
  let options = kana.filter(k => ids.has(k.id))

  options = shuffle(options);

  return {
    startedOn: new Date(),
    questions: options,
    currentQuestion: 0,
    correct: 0
  };
}
