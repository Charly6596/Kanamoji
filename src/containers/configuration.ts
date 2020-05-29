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

  const enableKanas = (ids: number[]) => {
    setConfig(c => {
      ids.forEach(id => c.add(id));
      return new Set(c);
    })
  }

  const deleteKanas = (ids: number[]) => {
    ids.forEach(id => config.delete(id));
    setConfig(new Set(config));
  }

  const toggleAll = (ids: number[]) => {
    if (ids.every(i => isEnabled(i))) {
      deleteKanas(ids);
    }
    else {
      enableKanas(ids);
    }
  }

  const toggleKana = (id: number) => {
    if (config.delete(id)) {
    }
    else {
      config.add(id);
    }
    setConfig(new Set(config))
  }

  const isEnabled = (id: number) => config.has(id);
  const areEnabled = (ids: number[]) => ids.every(id => isEnabled(id));

  const get = () => config

  return { isEnabled, areEnabled, get, toggleKana, toggleAll, deleteKanas, enableKanas }
}

export const ConfigContainer = createContainer(useConfiguration);

