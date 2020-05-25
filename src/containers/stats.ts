import { createContainer } from 'unstated-next'
import { useState, useEffect } from 'react';
import { Game } from '../model/Game';

const key = 'stats';

interface Stats {
  correct: number;
  total: number;
  startOn?: Date;
  finishedOn?: Date;
}

function useStats() {
  const [stats, setStats] = useState<Stats[]>(() => {
    const json = localStorage.getItem(key);
    if (json) {
      const res = JSON.parse(json);
      return res;
    }
    return [];
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(stats));
    return () => {

    }
  }, [stats])

  const add = (game: Game) => {
    const stat: Stats = {
      correct: game.correct,
      total: game.questions.length,
      startOn: game.startedOn,
      finishedOn: game.finishedOn
    }
    setStats([...stats, stat]);
  }

  const get = () => stats;

  return { add, get };
}
export default createContainer(useStats);
