import { useState, useRef, useEffect } from "react";
import { Game } from "../model/Game";
import { ConfigContainer } from "./configuration";
import { StatsContainer } from "./stats";
import { isHiragana, toHiragana, toKatakana, isKana } from "wanakana";
import { useKana, Kana } from "../lib/kana-dict";
import { createContainer } from "unstated-next";

const initialState: Game = {
  startedOn: new Date(),
  questions: [],
  currentQuestion: 0,
  correct: 0,
  finished: false
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
    if(!input || input.length === 0) { return; }
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
    const g = finishGame(game);
    stats.add(g);
    setGame(g);
  };

  useEffect(() => {
    if(game.finished && game.currentQuestion === game.questions.length && !game.finishedOn) {
      finish()
    }
  }, [finish, game])


  return { start, answer, onError, ...game }
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
    const finished = game.currentQuestion === game.questions.length - 1;
    return {
      ...game,
      currentQuestion: finished ? game.currentQuestion : game.currentQuestion + 1,
      correct: correct ? game.correct + 1 : game.correct,
      finished: finished
    };
  }

  return {
    ...game,
    correct: correct ? game.correct + 1 : game.correct,
  }
}

function isCorrect(input: string, game: Game) {
  const q = game.questions[game.currentQuestion];
  let answerKana;
  if(isKana(input))
  {
    answerKana = input;
  }
  else {
    answerKana = q.shape === "hiragana" ? toHiragana(input) : toKatakana(input);
  }

  return answerKana === game.questions[game.currentQuestion].char;
}

function finishGame(game: Game): Game {
  return {
    ...game,
    currentQuestion: game.currentQuestion + 1,
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
    correct: 0,
    finished: false
  };
}
