import { createContainer } from 'unstated-next'
import { useState } from 'react';
import { GOJUON_MONO } from '../lib/kana-dict';
import ConfigurationContainer from './configuration';
import { isHiragana, isRomaji, toHiragana } from 'wanakana';

interface Question {
    answer: string;
}

interface Game {
    startedOn: Date;
    finishedOn?: Date;
    questions: string[];
    currentQuestion: number;
    correct: number;
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

function useGame() {
    const config = ConfigurationContainer.useContainer();
    const [game, setGame] = useState<Game>(() => getInitialState())

    const start = () => startGame();
    const sendAnswer = (input: string) => answer(input);
    const finish = () => finishGame();
    const question = () => game.questions[game.currentQuestion]

    function answer(input: string)
    {
        const hiragana = isHiragana(input) ? input : toHiragana(input);
        const correct = hiragana === question()
        console.log(hiragana, game.correct);
        nextQuestion(correct);
    }

    function nextQuestion(correct: boolean) {
        if(game.currentQuestion + 1 < game.questions.length) {
            setGame({
                ...game,
                correct: correct ? game.correct + 1 : game.correct,
                currentQuestion: game.currentQuestion + 1
            });
        }
        else {
            finish();
        }
    }

    function finishGame() {
        setGame({
            ...game,
            finishedOn: new Date()
        })
        console.log(game);
    }

    function startGame() {
        let options = Object
        .values(GOJUON_MONO)
        .filter((h, i) => config.isEnabled(i))
        .map(h => Object.values(h))
        .flat();

        options = shuffle(options);

        

        setGame({
            startedOn: new Date(),
            questions: options,
            currentQuestion: 0,
            correct: 0
        })
    }

    function getInitialState(): Game {
        return {
            finishedOn: new Date(),
            startedOn: new Date(),
            questions: [],
            currentQuestion: 0,
            correct: 0
        }
    }
    return { start, sendAnswer, question }
}
export default createContainer(useGame);
