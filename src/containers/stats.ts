import { createContainer } from 'unstated-next'
import { useState, useEffect } from 'react';
import { Game } from '../model/Game';


interface GameStat {
  correct: number;
  total: number;
  startOn?: Date;
  finishedOn?: Date;
}

interface HiraganaStat {
  correct: number;
  total: number;
  character: string;
}

function getByKey(key: string) {
  console.log(key);
  const json = localStorage.getItem(key);
  if (json) {
    const res = JSON.parse(json);
    return res;
  }
  return [];
}

function getDefaultHiragana(char: string, correct: boolean): HiraganaStat {
  return {
    correct: correct ? 1 : 0,
    total: 1,
    character: char
  }
} 

const gameKey = 'game_stats';
const hiraganaKey = 'hiragana_stats';

function useStats() {
  const [gameStats, setGameStats] = useState<GameStat[]>(() => getByKey(gameKey))

  const [hiraganaStats, setHiraganaStats] = useState<HiraganaStat[]>(() => getByKey(hiraganaKey));

  useEffect(() => {
    console.log('save');
    localStorage.setItem(hiraganaKey, JSON.stringify(hiraganaStats));
  }, [hiraganaStats])

  useEffect(() => {
    localStorage.setItem(gameKey, JSON.stringify(gameStats));
  }, [gameStats])

  const add = (game: Game) => {
    const stat: GameStat = {
      correct: game.correct,
      total: game.questions.length,
      startOn: game.startedOn,
      finishedOn: game.finishedOn
    }
    setGameStats(games => [...games, stat]);
  }

  const addHiragana = (hiragana: string, correct: boolean) => {
    const index = hiraganaStats.findIndex(h => h.character === hiragana);
    if(index === -1) {
      const stat = getDefaultHiragana(hiragana, correct);
      setHiraganaStats(s => { 
        s.push(stat);
        return Array.from(s);
      });
    }
    else {
      const stat = hiraganaStats[index];
      setHiraganaStats(s => {
        console.log(s);
        s[index] = {
          ...stat,
          total: stat.total + 1,
          correct: correct ? stat.correct + 1 : stat.correct
        }
        return Array.from(s);
      });
    }
  }

  const getHiraganaStats = () => hiraganaStats;

  const get = () => gameStats;

  return { add, get, addHiragana, getHiraganaStats };
}
export default createContainer(useStats);
