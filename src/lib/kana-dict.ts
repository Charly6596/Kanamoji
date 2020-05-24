
// https://en.wikipedia.org/wiki/Hiragana#Table_of_hiragana
const GOJUON_MONO = {
  a: { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お', },
  k: { a: 'か', i: 'き', u: 'く', e: 'け', o: 'こ', },
  s: { a: 'さ', i: 'し', u: 'す', e: 'せ', o: 'そ', },
  t: { a: 'た', i: 'ち', u: 'つ', e: 'て', o: 'と', },
  n: { a: 'な', i: 'に', u: 'ぬ', e: 'ね', o: 'の', },
  h: { a: 'は', i: 'ひ', u: 'ふ', e: 'へ', o: 'ほ', },
  m: { a: 'ま', i: 'み', u: 'む', e: 'め', o: 'も', },
  y: { a: 'や', u: 'ゆ', o: 'よ' },
  r: { a: 'ら', i: 'り', u: 'る', e: 'れ', o: 'ろ', },
  extra: { a: 'わ', o: 'を', n: 'ん', },
};

const GOJUON_DIACRITICS = {
  g: { a: 'が', i: 'ぎ', u: 'ぐ', e: 'げ', o: 'ご', },
  z: { a: 'ざ', i: 'じ', u: 'ず', e: 'ぜ', o: 'ぞ', },
  d: { a: 'だ', i: 'ぢ', u: 'づ', e: 'で', o: 'ど', },
  b: { a: 'ば', i: 'び', u: 'ぶ', e: 'べ', o: 'ぼ', },
  p: { a: 'ぱ', i: 'ぴ', u: 'ぷ', e: 'ぺ', o: 'ぽ', },
}

export { GOJUON_MONO, GOJUON_DIACRITICS }
