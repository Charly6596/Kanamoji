import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";

const key = 'hiragana'

const defaultConfig = new Set<number>();

function useConfiguration() {
  const [config, setConfig] = useState<Set<number>>(() => {
    const json = localStorage.getItem(key);
    if (json) {
      const res = JSON.parse(json);
      return new Set<number>(res);
    }
    return defaultConfig;
  })

  useEffect(() => {
    localStorage.setItem('hiragana', JSON.stringify(Array.from(config.values())));
    return () => {
    }
  }, [config])


  const add = (col: number) => {
    config.add(col);
    setConfig(new Set(config));
  }

  const remove = (col: number) => {
    if (config.delete(col)) {
      setConfig(new Set(config));
    }
  }

  const isEnabled = (col: number) => {
    return config.has(col);
  }

  return { add, remove, isEnabled }
}

export default createContainer(useConfiguration);
