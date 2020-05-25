export interface Game {
    startedOn?: Date;
    finishedOn?: Date;
    questions: string[];
    currentQuestion: number;
    correct: number;
}

export const GAME_STARTED = 'GAME_STARTED';
export const GAME_FINISHED = 'GAME_FINISHED';
export const GAME_NOT_STARTED = 'GAME_NOT_STARTED';

export type GameState = "GAME_STARTED" | "GAME_FINISHED" | "GAME_NOT_STARTED"
