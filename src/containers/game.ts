import { createContainer } from 'unstated-next'
import { useState } from 'react';
import { GOJUON_MONO } from '../lib/kana-dict';
import ConfigurationContainer from './configuration';
import { isHiragana, toHiragana } from 'wanakana';

interface Question {
    answer: string;
}

interface Game {
    startedOn?: Date;
    finishedOn?: Date;
    questions: string[];
    currentQuestion: number;
    correct: number;
    state: GameState;
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

export interface Mark {
    correct: number;
    amount: number;
}

const GAME_STARTED = 'GAME_STARTED';
const GAME_FINISHED = 'GAME_FINISHED';
const GAME_NOT_STARTED = 'GAME_NOT_STARTED';

type GameState = "GAME_STARTED" | "GAME_FINISHED" | "GAME_NOT_STARTED"

function useGame() {
    const config = ConfigurationContainer.useContainer();
    const [game, setGame] = useState<Game>(() => getInitialState())
    const [status, setStatus] = useState(GAME_NOT_STARTED);

    const start = () => startGame();
    const sendAnswer = (input: string) => answer(input);
    const finish = () => finishGame();
    const question = () => game.questions[game.currentQuestion];
    const started = () => game.state === GAME_STARTED;
    const finished = () => game.state === GAME_FINISHED;
    const currentMark = (): Mark => {
        return {
            correct: game.correct,
            amount: game.questions.length
        }
    }

    const stop = () => {
        if (started()) {
            setGame(getInitialState());
        }
    }

    function answer(input: string) {
        const hiragana = isHiragana(input) ? input : toHiragana(input);
        const correct = hiragana === question()
        console.log(hiragana, game.correct);
        nextQuestion(correct);
    }

    function nextQuestion(correct: boolean) {
        if (game.currentQuestion + 1 < game.questions.length) {
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
            state: GAME_FINISHED,
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
            state: GAME_STARTED,
            questions: options,
            currentQuestion: 0,
            correct: 0
        })
    }

    function getInitialState(): Game {
        return {
            state: GAME_NOT_STARTED,
            questions: [],
            currentQuestion: 0,
            correct: 0
        }
    }
    return { start, sendAnswer, question, started, stop, finished, currentMark, game }
}
export default createContainer(useGame);
