import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";
import { storage } from "../lib/storage";

const key = 'hiragana'

const defaultConfig = new Set<number>();

function useConfiguration() {
  const [config, setConfig] = useState<Set<number>>(defaultConfig);

  useEffect(() => {
    async function loadData() {
      storage.load({key: key})
      .then((res) => {
        setConfig(new Set<number>(JSON.parse(res)));
      });
    }

    loadData();
  }, []);

  useEffect(() => {
    async function saveData() {
      storage.save({
        key: key, 
        data: JSON.stringify(Array.from(config.values()))
      });
    }

    saveData();

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

