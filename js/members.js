// サマスイコレクション！ メンバーデータ
// https://summersweet.jp/member/ より（画像はimages/にローカル保存済み）

const MEMBERS = [
  // === 1期生 (16名) ===
  { id: "1-ing", name: "ing", generation: "1期生", photoUrl: "images/1-ing.png" },
  { id: "1-kurimu", name: "くりむ", generation: "1期生", photoUrl: "images/1-kurimu.png" },
  { id: "1-mekanyanko", name: "めかにゃんこ", generation: "1期生", photoUrl: "images/1-mekanyanko.png" },
  { id: "1-kitamuu", name: "きたむぅ", generation: "1期生", photoUrl: "images/1-kitamuu.png" },
  { id: "1-mct", name: "MCT_", generation: "1期生", photoUrl: "images/1-mct.png" },
  { id: "1-najiko", name: "Najiko", generation: "1期生", photoUrl: "images/1-najiko.png" },
  { id: "1-tenkabutsu", name: "添加物", generation: "1期生", photoUrl: "images/1-tenkabutsu.png" },
  { id: "1-atoran", name: "あとらん", generation: "1期生", photoUrl: "images/1-atoran.png" },
  { id: "1-amaminoka", name: "甘味のか", generation: "1期生", photoUrl: "images/1-amaminoka.png" },
  { id: "1-shikiuta", name: "しきうた", generation: "1期生", photoUrl: "images/1-shikiuta.png" },
  { id: "1-limemint", name: "ライムミント", generation: "1期生", photoUrl: "images/1-limemint.png" },
  { id: "1-mero", name: "めろ", generation: "1期生", photoUrl: "images/1-mero.png" },
  { id: "1-nekotan", name: "ねこたん", generation: "1期生", photoUrl: "images/1-nekotan.png" },
  { id: "1-yusaki", name: "結咲", generation: "1期生", photoUrl: "images/1-yusaki.png" },
  { id: "1-coffeemakers", name: "CoffeeMakers", generation: "1期生", photoUrl: "images/1-coffeemakers.png" },
  { id: "1-rakeshia", name: "ラケシア", generation: "1期生", photoUrl: "images/1-rakeshia.png" },

  // === 1.5期生 (4名) ===
  { id: "1h-satsuki", name: "さつき", generation: "1.5期生", photoUrl: "images/1h-satsuki.png" },
  { id: "1h-yomogi", name: "狩月よもぎ", generation: "1.5期生", photoUrl: "images/1h-yomogi.png" },
  { id: "1h-mikichi", name: "みきちー", generation: "1.5期生", photoUrl: "images/1h-mikichi.png" },
  { id: "1h-shirokurge", name: "しろクラゲ", generation: "1.5期生", photoUrl: "images/1h-shirokurge.png" },

  // === 2期生 (10名) ===
  { id: "2-teru34", name: "teru-34", generation: "2期生", photoUrl: "images/2-teru34.png" },
  { id: "2-nekokon", name: "猫狐(にゃんこ)", generation: "2期生", photoUrl: "images/2-nekokon.png" },
  { id: "2-ruuton", name: "るーとん", generation: "2期生", photoUrl: "images/2-ruuton.png" },
  { id: "2-charlotte", name: "Charlotte", generation: "2期生", photoUrl: "images/2-charlotte.png" },
  { id: "2-kuruhamu", name: "くるはむ", generation: "2期生", photoUrl: "images/2-kuruhamu.png" },
  { id: "2-konoha", name: "秋風木乃葉", generation: "2期生", photoUrl: "images/2-konoha.png" },
  { id: "2-suu", name: "すー", generation: "2期生", photoUrl: "images/2-suu.png" },
  { id: "2-hina", name: "ひな", generation: "2期生", photoUrl: "images/2-hina.png" },
  { id: "2-kemari", name: "けまり", generation: "2期生", photoUrl: "images/2-kemari.png" },
  { id: "2-marumoko", name: "まるもこ", generation: "2期生", photoUrl: "images/2-marumoko.png" },

  // === 3期生 (13名) ===
  { id: "3-akki", name: "あっきーしゅきかん", generation: "3期生", photoUrl: "images/3-akki.png" },
  { id: "3-gefa", name: "げふぁ", generation: "3期生", photoUrl: "images/3-gefa.png" },
  { id: "3-air", name: "エアー", generation: "3期生", photoUrl: "images/3-air.png" },
  { id: "3-cheerio", name: "チェリオ", generation: "3期生", photoUrl: "images/3-cheerio.png" },
  { id: "3-hikaru", name: "羽入ひかる", generation: "3期生", photoUrl: "images/3-hikaru.png" },
  { id: "3-flair", name: "フレア", generation: "3期生", photoUrl: "images/3-flair.png" },
  { id: "3-asagi", name: "アサギ", generation: "3期生", photoUrl: "images/3-asagi.png" },
  { id: "3-ayu", name: "あゆ AYU", generation: "3期生", photoUrl: "images/3-ayu.png" },
  { id: "3-sunao", name: "SUNAO", generation: "3期生", photoUrl: "images/3-sunao.png" },
  { id: "3-nerune", name: "ねるねr", generation: "3期生", photoUrl: "images/3-nerune.png" },
  { id: "3-eji", name: "えじ", generation: "3期生", photoUrl: "images/3-eji.png" },
  { id: "3-appletea", name: "あっぷるてぃー", generation: "3期生", photoUrl: "images/3-appletea.png" },
  { id: "3-chokomi", name: "ちょこみ。", generation: "3期生", photoUrl: "images/3-chokomi.png" },

  // === 4期生 (11名) ===
  { id: "4-riisa", name: "桜庭りいさ", generation: "4期生", photoUrl: "images/4-riisa.png" },
  { id: "4-yuu777", name: "yuu_777", generation: "4期生", photoUrl: "images/4-yuu777.png" },
  { id: "4-raitonya", name: "らいとにゃ", generation: "4期生", photoUrl: "images/4-raitonya.png" },
  { id: "4-nanase", name: "ななせ", generation: "4期生", photoUrl: "images/4-nanase.png" },
  { id: "4-yamabikonkon", name: "やまびこんこん", generation: "4期生", photoUrl: "images/4-yamabikonkon.png" },
  { id: "4-hakka", name: "はっか", generation: "4期生", photoUrl: "images/4-hakka.png" },
  { id: "4-hazuki", name: "ハヅキ", generation: "4期生", photoUrl: "images/4-hazuki.png" },
  { id: "4-kt205", name: "KT205", generation: "4期生", photoUrl: "images/4-kt205.png" },
  { id: "4-muku", name: "ムク", generation: "4期生", photoUrl: "images/4-muku.png" },
  { id: "4-rika", name: "理科(rika)", generation: "4期生", photoUrl: "images/4-rika.png" },
  { id: "4-hengyu", name: "HengYu", generation: "4期生", photoUrl: "images/4-hengyu.png" },
];

// 理事長（SSSR シークレット）
const RIJICHO = {
  id: "special-rijicho",
  name: "理事長",
  generation: "秘密",
  photoUrl: "images/rijicho_card.png",
  isSpecial: true
};

// レアリティ定義
const RARITIES = {
  N:    { label: "N",    weight: 60,   color: "#8a8a8a", order: 0 },
  R:    { label: "R",    weight: 25,   color: "#3b82f6", order: 1 },
  SR:   { label: "SR",   weight: 10,   color: "#a855f7", order: 2 },
  SSR:  { label: "SSR",  weight: 4.5,  color: "#eab308", order: 3 },
  SSSR: { label: "SSSR", weight: 0.5,  color: "#ff0080", order: 4 },
};

// カードID生成ヘルパー
function cardId(memberId, rarity) {
  return `${memberId}:${rarity}`;
}

// SSR/SSSRカード用キラキラHTML生成
function generateSparklesHTML(rarity) {
  if (rarity !== "SSR" && rarity !== "SSSR") return "";
  const count = rarity === "SSSR" ? 10 : 7;
  const symbols = ["✦", "✧", "⭐", "✦", "✧"];
  let html = '<div class="card__sparkles">';
  for (let i = 0; i < count; i++) {
    const top = Math.floor(Math.random() * 80 + 5);
    const left = Math.floor(Math.random() * 80 + 5);
    const delay = (Math.random() * 3).toFixed(1);
    const sym = symbols[i % symbols.length];
    html += `<span class="card__sparkle" style="top:${top}%;left:${left}%;animation-delay:${delay}s">${sym}</span>`;
  }
  html += "</div>";
  return html;
}
