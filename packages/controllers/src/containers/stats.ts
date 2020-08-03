import { createContainer } from 'unstated-next'
import { useState, useEffect } from 'react';
import { Game } from '../model/Game';
import { Kana } from '../lib/kana-dict';
import { storage } from '../lib/storage';

interface GameStat {
  correct: number;
  total: number;
  startOn?: Date;
  finishedOn?: Date;
}

interface KanaStat {
  kanaId: number;
  timesCorrect: number;
  totalTimes: number;
  lastSeen: Date;
}

function getDefaultKana(id: number): KanaStat {
  return {
    timesCorrect: 0,
    totalTimes: 0,
    lastSeen: new Date(),
    kanaId: id,
  }
}

function getDefaultKanaStats(): KanaStat[] {
  const kanaStats = [];
  for (let i = 0; i <= KANA_AMOUNT; i++) {
    kanaStats[i] = getDefaultKana(i);
  }

  return kanaStats;
}

const gameKey = 'game_stats';
const kanaKey = 'kana_stats';
const KANA_AMOUNT = 142;

function useStats() {
  const [gameStats, setGameStats] = useState<GameStat[]>([]);

  const [kanaStats, setKanaStats] = useState<KanaStat[]>(getDefaultKanaStats());

  useEffect(() => {
    async function loadGameStats() {
      storage.load<GameStat[]>({key: gameKey}).then(res => {
        setGameStats(res);
      })
    }

    async function loadKanaStats() {
       storage.load<KanaStat[]>({key: kanaKey}).then(res => {
        setKanaStats(res);
      })
    }

    loadGameStats();
    loadKanaStats();
  }, []);

  useEffect(() => {
    async function saveKanaStats() {
      storage.save({
        key: kanaKey,
        data: kanaStats
      })
    }

    if (kanaStats.length < KANA_AMOUNT) {
      setKanaStats(getDefaultKanaStats());
    }
    else {
      saveKanaStats();
    }
  }, [kanaStats])

  useEffect(() => {
    async function saveGameStats() {
      storage.save({
        key: gameKey,
        data: gameStats
      })
    }
    saveGameStats();
  }, [gameStats])

  const add = (game: Game) => {
    const stat: GameStat = {
      correct: game.correct,
      total: game.questions.length,
      startOn: game.startedOn,
      finishedOn: game.finishedOn
    }
    setGameStats([...gameStats, stat]);
  }

  const addKana = (kana: Kana, correct: boolean) => {
    setKanaStats(ks => {
      const s = ks.find(s => s?.kanaId === kana.id) ?? getDefaultKana(kana.id);
      const arr = Array.from(ks);
      arr[kana.id] = {
        ...s,
        lastSeen: new Date(),
        timesCorrect: correct ? s.timesCorrect + 1 : s.timesCorrect,
        totalTimes: s.totalTimes + 1
      };
      return arr;
    });
  }

  const getWorstHiragana = () => {
    return kanaStats.reduce((p, v) => {
      if(v.totalTimes === 0 ) return p;
      return (p.timesCorrect / p.totalTimes < v.timesCorrect / v.totalTimes ? p : v);
    })
  }

  const getBestHiragana = () => {
    return kanaStats.reduce((p, v) => {
      if(v.totalTimes === 0 ) return p;
      return (p.timesCorrect / p.totalTimes > v.timesCorrect / v.totalTimes ? p : v);
    })
  }

  const getBestRow = () => {
  }

  const get = () => gameStats;

  return { add, get, addKana, kanaStats, getBestHiragana, getWorstHiragana, getBestRow };
}

export const StatsContainer = createContainer(useStats);
