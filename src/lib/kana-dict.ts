export interface Kana {
  id: number;
  char: string;
  column: number;
  shape: string; // Hiragana / katakana
  romaji: string;
  monograph: boolean; // 1 = goju-on 2 = yo-on
  dakuten: boolean; // has diacritics
}
// https://en.wikipedia.org/wiki/Hiragana#Table_of_hiragana

const Kana: readonly Kana[] = require('./kana.json');

export function useKana() {
  const getHiragana = (dakuten: boolean = false) =>
    Kana.filter(k => k.shape === "hiragana" && k.dakuten === dakuten);

  const getKatakana = (dakuten: boolean = false) =>
    Kana.filter(k => k.shape === "katakana" && k.dakuten === dakuten);

  const getById = (id: number) => Kana.find(k => k.id === id);
  const getByCol = (id: number) => Kana.find(k => k.column === id);

  return { getHiragana, getKatakana, getById, getByCol, Kana }
}
