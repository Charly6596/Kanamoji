import { Kana } from "../lib/kana-dict";

export interface Game {
    startedOn: Date;
    finishedOn?: Date;
    questions: Kana[];
    currentQuestion: number;
    correct: number;
    finished: boolean
}
