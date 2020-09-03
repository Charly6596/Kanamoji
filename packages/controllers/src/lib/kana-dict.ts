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

const Kana: readonly Kana[] = [
  {"id":0,"column":0,"char":"あ","dakuten":false,"romaji":"a","shape":"hiragana","monograph":true},{"id":1,"column":0,"char":"い","dakuten":false,"romaji":"i","shape":"hiragana","monograph":true},{"id":2,"column":0,"char":"う","dakuten":false,"romaji":"u","shape":"hiragana","monograph":true},{"id":3,"column":0,"char":"え","dakuten":false,"romaji":"e","shape":"hiragana","monograph":true},{"id":4,"column":0,"char":"お","dakuten":false,"romaji":"o","shape":"hiragana","monograph":true},{"id":5,"column":1,"char":"か","dakuten":false,"romaji":"ka","shape":"hiragana","monograph":true},{"id":6,"column":1,"char":"き","dakuten":false,"romaji":"ki","shape":"hiragana","monograph":true},{"id":7,"column":1,"char":"く","dakuten":false,"romaji":"ku","shape":"hiragana","monograph":true},{"id":8,"column":1,"char":"け","dakuten":false,"romaji":"ke","shape":"hiragana","monograph":true},{"id":9,"column":1,"char":"こ","dakuten":false,"romaji":"ko","shape":"hiragana","monograph":true},{"id":10,"column":2,"char":"さ","dakuten":false,"romaji":"sa","shape":"hiragana","monograph":true},{"id":11,"column":2,"char":"し","dakuten":false,"romaji":"shi","shape":"hiragana","monograph":true},{"id":12,"column":2,"char":"す","dakuten":false,"romaji":"su","shape":"hiragana","monograph":true},{"id":13,"column":2,"char":"せ","dakuten":false,"romaji":"se","shape":"hiragana","monograph":true},{"id":14,"column":2,"char":"そ","dakuten":false,"romaji":"so","shape":"hiragana","monograph":true},{"id":15,"column":3,"char":"た","dakuten":false,"romaji":"ta","shape":"hiragana","monograph":true},{"id":16,"column":3,"char":"ち","dakuten":false,"romaji":"chi","shape":"hiragana","monograph":true},{"id":17,"column":3,"char":"つ","dakuten":false,"romaji":"tsu","shape":"hiragana","monograph":true},{"id":18,"column":3,"char":"て","dakuten":false,"romaji":"te","shape":"hiragana","monograph":true},{"id":19,"column":3,"char":"と","dakuten":false,"romaji":"to","shape":"hiragana","monograph":true},{"id":20,"column":4,"char":"な","dakuten":false,"romaji":"na","shape":"hiragana","monograph":true},{"id":21,"column":4,"char":"に","dakuten":false,"romaji":"ni","shape":"hiragana","monograph":true},{"id":22,"column":4,"char":"ぬ","dakuten":false,"romaji":"nu","shape":"hiragana","monograph":true},{"id":23,"column":4,"char":"ね","dakuten":false,"romaji":"ne","shape":"hiragana","monograph":true},{"id":24,"column":4,"char":"の","dakuten":false,"romaji":"no","shape":"hiragana","monograph":true},{"id":25,"column":5,"char":"は","dakuten":false,"romaji":"ha","shape":"hiragana","monograph":true},{"id":26,"column":5,"char":"ひ","dakuten":false,"romaji":"hi","shape":"hiragana","monograph":true},{"id":27,"column":5,"char":"ふ","dakuten":false,"romaji":"fu","shape":"hiragana","monograph":true},{"id":28,"column":5,"char":"へ","dakuten":false,"romaji":"he","shape":"hiragana","monograph":true},{"id":29,"column":5,"char":"ほ","dakuten":false,"romaji":"ho","shape":"hiragana","monograph":true},{"id":30,"column":6,"char":"ま","dakuten":false,"romaji":"ma","shape":"hiragana","monograph":true},{"id":31,"column":6,"char":"み","dakuten":false,"romaji":"mi","shape":"hiragana","monograph":true},{"id":32,"column":6,"char":"む","dakuten":false,"romaji":"mu","shape":"hiragana","monograph":true},{"id":33,"column":6,"char":"め","dakuten":false,"romaji":"me","shape":"hiragana","monograph":true},{"id":34,"column":6,"char":"も","dakuten":false,"romaji":"mo","shape":"hiragana","monograph":true},{"id":35,"column":7,"char":"や","dakuten":false,"romaji":"ya","shape":"hiragana","monograph":true},{"id":36,"column":7,"char":"ゆ","dakuten":false,"romaji":"yu","shape":"hiragana","monograph":true},{"id":37,"column":7,"char":"よ","dakuten":false,"romaji":"yo","shape":"hiragana","monograph":true},{"id":38,"column":8,"char":"ら","dakuten":false,"romaji":"ra","shape":"hiragana","monograph":true},{"id":39,"column":8,"char":"り","dakuten":false,"romaji":"ri","shape":"hiragana","monograph":true},{"id":40,"column":8,"char":"る","dakuten":false,"romaji":"ru","shape":"hiragana","monograph":true},{"id":41,"column":8,"char":"れ","dakuten":false,"romaji":"re","shape":"hiragana","monograph":true},{"id":42,"column":8,"char":"ろ","dakuten":false,"romaji":"ro","shape":"hiragana","monograph":true},{"id":43,"column":9,"char":"わ","dakuten":false,"romaji":"wa","shape":"hiragana","monograph":true},{"id":44,"column":9,"char":"を","dakuten":false,"romaji":"wo","shape":"hiragana","monograph":true},{"id":45,"column":10,"char":"ん","dakuten":false,"romaji":"n","shape":"hiragana","monograph":true},
  {"id":46,"column":11,"char":"が","dakuten":true,"romaji":"ga","shape":"hiragana","monograph":true},{"id":47,"column":11,"char":"ぎ","dakuten":true,"romaji":"gi","shape":"hiragana","monograph":true},{"id":48,"column":11,"char":"ぐ","dakuten":true,"romaji":"gu","shape":"hiragana","monograph":true},{"id":49,"column":11,"char":"げ","dakuten":true,"romaji":"ge","shape":"hiragana","monograph":true},{"id":50,"column":11,"char":"ご","dakuten":true,"romaji":"go","shape":"hiragana","monograph":true},{"id":51,"column":12,"char":"ざ","dakuten":true,"romaji":"za","shape":"hiragana","monograph":true},{"id":52,"column":12,"char":"じ","dakuten":true,"romaji":"ji","shape":"hiragana","monograph":true},{"id":53,"column":12,"char":"ず","dakuten":true,"romaji":"zu","shape":"hiragana","monograph":true},{"id":54,"column":12,"char":"ぜ","dakuten":true,"romaji":"ze","shape":"hiragana","monograph":true},{"id":55,"column":12,"char":"ぞ","dakuten":true,"romaji":"zo","shape":"hiragana","monograph":true},{"id":56,"column":13,"char":"だ","dakuten":true,"romaji":"da","shape":"hiragana","monograph":true},{"id":57,"column":13,"char":"ぢ","dakuten":true,"romaji":"ji","shape":"hiragana","monograph":true},{"id":58,"column":13,"char":"づ","dakuten":true,"romaji":"zu","shape":"hiragana","monograph":true},{"id":59,"column":13,"char":"で","dakuten":true,"romaji":"de","shape":"hiragana","monograph":true},{"id":60,"column":13,"char":"ど","dakuten":true,"romaji":"do","shape":"hiragana","monograph":true},{"id":61,"column":14,"char":"ば","dakuten":true,"romaji":"ba","shape":"hiragana","monograph":true},{"id":62,"column":14,"char":"び","dakuten":true,"romaji":"bi","shape":"hiragana","monograph":true},{"id":63,"column":14,"char":"ぶ","dakuten":true,"romaji":"bu","shape":"hiragana","monograph":true},{"id":64,"column":14,"char":"べ","dakuten":true,"romaji":"be","shape":"hiragana","monograph":true},{"id":65,"column":14,"char":"ぼ","dakuten":true,"romaji":"bo","shape":"hiragana","monograph":true},{"id":66,"column":15,"char":"ぱ","dakuten":true,"romaji":"pa","shape":"hiragana","monograph":true},{"id":67,"column":15,"char":"ぴ","dakuten":true,"romaji":"pi","shape":"hiragana","monograph":true},{"id":68,"column":15,"char":"ぷ","dakuten":true,"romaji":"pu","shape":"hiragana","monograph":true},{"id":69,"column":15,"char":"ぺ","dakuten":true,"romaji":"pe","shape":"hiragana","monograph":true},{"id":70,"column":15,"char":"ぽ","dakuten":true,"romaji":"po","shape":"hiragana","monograph":true},
  {"id":71,"column":16,"char":"ア","dakuten":false,"romaji":"a","shape":"katakana","monograph":true},{"id":72,"column":16,"char":"イ","dakuten":false,"romaji":"i","shape":"katakana","monograph":true},{"id":73,"column":16,"char":"ウ","dakuten":false,"romaji":"u","shape":"katakana","monograph":true},{"id":74,"column":16,"char":"エ","dakuten":false,"romaji":"e","shape":"katakana","monograph":true},{"id":75,"column":16,"char":"オ","dakuten":false,"romaji":"o","shape":"katakana","monograph":true},{"id":76,"column":17,"char":"カ","dakuten":false,"romaji":"ka","shape":"katakana","monograph":true},{"id":77,"column":17,"char":"キ","dakuten":false,"romaji":"ki","shape":"katakana","monograph":true},{"id":78,"column":17,"char":"ク","dakuten":false,"romaji":"ku","shape":"katakana","monograph":true},{"id":79,"column":17,"char":"ケ","dakuten":false,"romaji":"ke","shape":"katakana","monograph":true},{"id":80,"column":17,"char":"コ","dakuten":false,"romaji":"ko","shape":"katakana","monograph":true},{"id":81,"column":18,"char":"サ","dakuten":false,"romaji":"sa","shape":"katakana","monograph":true},{"id":82,"column":18,"char":"シ","dakuten":false,"romaji":"shi","shape":"katakana","monograph":true},{"id":83,"column":18,"char":"ス","dakuten":false,"romaji":"su","shape":"katakana","monograph":true},{"id":84,"column":18,"char":"セ","dakuten":false,"romaji":"se","shape":"katakana","monograph":true},{"id":85,"column":18,"char":"ソ","dakuten":false,"romaji":"so","shape":"katakana","monograph":true},{"id":86,"column":19,"char":"タ","dakuten":false,"romaji":"ta","shape":"katakana","monograph":true},{"id":87,"column":19,"char":"チ","dakuten":false,"romaji":"chi","shape":"katakana","monograph":true},{"id":88,"column":19,"char":"ツ","dakuten":false,"romaji":"tsu","shape":"katakana","monograph":true},{"id":89,"column":19,"char":"テ","dakuten":false,"romaji":"te","shape":"katakana","monograph":true},{"id":90,"column":19,"char":"ト","dakuten":false,"romaji":"to","shape":"katakana","monograph":true},{"id":91,"column":20,"char":"ナ","dakuten":false,"romaji":"na","shape":"katakana","monograph":true},{"id":92,"column":20,"char":"ニ","dakuten":false,"romaji":"ni","shape":"katakana","monograph":true},{"id":93,"column":20,"char":"ヌ","dakuten":false,"romaji":"nu","shape":"katakana","monograph":true},{"id":94,"column":20,"char":"ネ","dakuten":false,"romaji":"ne","shape":"katakana","monograph":true},{"id":95,"column":20,"char":"ノ","dakuten":false,"romaji":"no","shape":"katakana","monograph":true},{"id":96,"column":21,"char":"ハ","dakuten":false,"romaji":"ha","shape":"katakana","monograph":true},{"id":97,"column":21,"char":"ヒ","dakuten":false,"romaji":"hi","shape":"katakana","monograph":true},{"id":98,"column":21,"char":"フ","dakuten":false,"romaji":"fu","shape":"katakana","monograph":true},{"id":99,"column":21,"char":"ヘ","dakuten":false,"romaji":"he","shape":"katakana","monograph":true},{"id":100,"column":21,"char":"ホ","dakuten":false,"romaji":"ho","shape":"katakana","monograph":true},{"id":101,"column":22,"char":"マ","dakuten":false,"romaji":"ma","shape":"katakana","monograph":true},{"id":102,"column":22,"char":"ミ","dakuten":false,"romaji":"mi","shape":"katakana","monograph":true},{"id":103,"column":22,"char":"ム","dakuten":false,"romaji":"mu","shape":"katakana","monograph":true},{"id":104,"column":22,"char":"メ","dakuten":false,"romaji":"me","shape":"katakana","monograph":true},{"id":105,"column":22,"char":"モ","dakuten":false,"romaji":"mo","shape":"katakana","monograph":true},{"id":106,"column":23,"char":"ヤ","dakuten":false,"romaji":"ya","shape":"katakana","monograph":true},{"id":107,"column":23,"char":"ユ","dakuten":false,"romaji":"yu","shape":"katakana","monograph":true},{"id":108,"column":23,"char":"ヨ","dakuten":false,"romaji":"yo","shape":"katakana","monograph":true},{"id":109,"column":24,"char":"ラ","dakuten":false,"romaji":"ra","shape":"katakana","monograph":true},{"id":110,"column":24,"char":"リ","dakuten":false,"romaji":"ri","shape":"katakana","monograph":true},{"id":111,"column":24,"char":"ル","dakuten":false,"romaji":"ru","shape":"katakana","monograph":true},{"id":112,"column":24,"char":"レ","dakuten":false,"romaji":"re","shape":"katakana","monograph":true},{"id":113,"column":24,"char":"ロ","dakuten":false,"romaji":"ro","shape":"katakana","monograph":true},{"id":114,"column":25,"char":"ワ","dakuten":false,"romaji":"wa","shape":"katakana","monograph":true},{"id":115,"column":25,"char":"ヲ","dakuten":false,"romaji":"wo","shape":"katakana","monograph":true},{"id":116,"column":26,"char":"ン","dakuten":false,"romaji":"n","shape":"katakana","monograph":true},
  {"id":117,"column":27,"char":"ガ","dakuten":true,"romaji":"ga","shape":"katakana","monograph":true},{"id":118,"column":27,"char":"ギ","dakuten":true,"romaji":"gi","shape":"katakana","monograph":true},{"id":119,"column":27,"char":"グ","dakuten":true,"romaji":"gu","shape":"katakana","monograph":true},{"id":120,"column":27,"char":"ゲ","dakuten":true,"romaji":"ge","shape":"katakana","monograph":true},{"id":121,"column":27,"char":"ゴ","dakuten":true,"romaji":"go","shape":"katakana","monograph":true},{"id":122,"column":28,"char":"ザ","dakuten":true,"romaji":"za","shape":"katakana","monograph":true},{"id":123,"column":28,"char":"ジ","dakuten":true,"romaji":"ji","shape":"katakana","monograph":true},{"id":124,"column":28,"char":"ズ","dakuten":true,"romaji":"zu","shape":"katakana","monograph":true},{"id":125,"column":28,"char":"ゼ","dakuten":true,"romaji":"ze","shape":"katakana","monograph":true},{"id":126,"column":28,"char":"ゾ","dakuten":true,"romaji":"zo","shape":"katakana","monograph":true},{"id":127,"column":29,"char":"ダ","dakuten":true,"romaji":"da","shape":"katakana","monograph":true},{"id":128,"column":29,"char":"ヂ","dakuten":true,"romaji":"ji","shape":"katakana","monograph":true},{"id":129,"column":29,"char":"ヅ","dakuten":true,"romaji":"zu","shape":"katakana","monograph":true},{"id":130,"column":29,"char":"デ","dakuten":true,"romaji":"de","shape":"katakana","monograph":true},{"id":131,"column":29,"char":"ド","dakuten":true,"romaji":"do","shape":"katakana","monograph":true},{"id":132,"column":30,"char":"バ","dakuten":true,"romaji":"ba","shape":"katakana","monograph":true},{"id":133,"column":30,"char":"ビ","dakuten":true,"romaji":"bi","shape":"katakana","monograph":true},{"id":134,"column":30,"char":"ブ","dakuten":true,"romaji":"bu","shape":"katakana","monograph":true},{"id":135,"column":30,"char":"ベ","dakuten":true,"romaji":"be","shape":"katakana","monograph":true},{"id":136,"column":30,"char":"ボ","dakuten":true,"romaji":"bo","shape":"katakana","monograph":true},{"id":137,"column":31,"char":"パ","dakuten":true,"romaji":"pa","shape":"katakana","monograph":true},{"id":138,"column":31,"char":"ピ","dakuten":true,"romaji":"pi","shape":"katakana","monograph":true},{"id":139,"column":31,"char":"プ","dakuten":true,"romaji":"pu","shape":"katakana","monograph":true},{"id":140,"column":31,"char":"ペ","dakuten":true,"romaji":"pe","shape":"katakana","monograph":true},{"id":141,"column":31,"char":"ポ","dakuten":true,"romaji":"po","shape":"katakana","monograph":true}
];

export function useKana() {
  const getHiragana = (dakuten: boolean = false) =>
    Kana.filter(k => k.shape === "hiragana" && k.dakuten === dakuten);

  const getKatakana = (dakuten: boolean = false) =>
    Kana.filter(k => k.shape === "katakana" && k.dakuten === dakuten);

  const getById = (id: number) => Kana.find(k => k.id === id);
  const getByCol = (id: number) => Kana.find(k => k.column === id);

  return { getHiragana, getKatakana, getById, getByCol, Kana }
}