// サマスイコレクション！ メンバーデータ
// https://summersweet.jp/member/ より

const MEMBERS = [
  // === 1期生 (16名) ===
  { id: "1-ing", name: "ing", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/05/ing.png" },
  { id: "1-kurimu", name: "くりむ", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/くりむ.png" },
  { id: "1-mekanyanko", name: "めかにゃんこ", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/05/めかにゃんこ-1.png" },
  { id: "1-kitamuu", name: "きたむぅ", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/06/きたむぅ.png" },
  { id: "1-mct", name: "MCT_", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/06/MCT_.png" },
  { id: "1-najiko", name: "Najiko", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/Najiko.png" },
  { id: "1-tenkabutsu", name: "添加物", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/添加物.png" },
  { id: "1-atoran", name: "あとらん", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/あとらん.png" },
  { id: "1-amaminoka", name: "甘味のか", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/05/甘味のか.png" },
  { id: "1-shikiuta", name: "しきうた", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/しきうた.png" },
  { id: "1-limemint", name: "ライムミント", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/ライムミント.png" },
  { id: "1-mero", name: "めろ", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/めろ.png" },
  { id: "1-nekotan", name: "ねこたん", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/ねこたん.png" },
  { id: "1-yusaki", name: "結咲", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/10/結咲.png" },
  { id: "1-coffeemakers", name: "CoffeeMakers", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/CoffeeMakers.png" },
  { id: "1-rakeshia", name: "ラケシア", generation: "1期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/ラケシア.png" },

  // === 1.5期生 (4名) ===
  { id: "1h-satsuki", name: "さつき", generation: "1.5期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/05/さつき.png" },
  { id: "1h-yomogi", name: "狩月よもぎ", generation: "1.5期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/10/狩月よもぎ.png" },
  { id: "1h-mikichi", name: "みきちー", generation: "1.5期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/06/みきちー.png" },
  { id: "1h-shirokurge", name: "しろクラゲ", generation: "1.5期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/しろクラゲ.png" },

  // === 2期生 (10名) ===
  { id: "2-teru34", name: "teru-34", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/06/teru-34.png" },
  { id: "2-nekokon", name: "猫狐(にゃんこ)", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/猫狐にゃんこ.png" },
  { id: "2-ruuton", name: "るーとん", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/るーとん.png" },
  { id: "2-charlotte", name: "Charlotte", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/10/Charlotte.png" },
  { id: "2-kuruhamu", name: "くるはむ", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/くるはむ.png" },
  { id: "2-konoha", name: "秋風木乃葉", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/10/木乃葉.png" },
  { id: "2-suu", name: "すー", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/10/すー.png" },
  { id: "2-hina", name: "ひな", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/10/ひな.png" },
  { id: "2-kemari", name: "けまり", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/09/けまり.png" },
  { id: "2-marumoko", name: "まるもこ", generation: "2期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/10/まるもこ.png" },

  // === 3期生 (13名) ===
  { id: "3-akki", name: "あっきーしゅきかん", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/12/あっきーしゅきかん.png" },
  { id: "3-gefa", name: "げふぁ", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/12/げふぁ.png" },
  { id: "3-air", name: "エアー", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/12/エアー.png" },
  { id: "3-cheerio", name: "チェリオ", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/12/チェリオ.png" },
  { id: "3-hikaru", name: "羽入ひかる", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/12/羽入ひかる.png" },
  { id: "3-flair", name: "フレア", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/12/フレア.png" },
  { id: "3-asagi", name: "アサギ", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/12/アサギ.png" },
  { id: "3-ayu", name: "あゆ AYU", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2022/12/あゆ-AYU.png" },
  { id: "3-sunao", name: "SUNAO", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2023/07/SUNAO.png" },
  { id: "3-nerune", name: "ねるねr", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2023/07/ねるねr.png" },
  { id: "3-eji", name: "えじ", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2023/07/えじ.png" },
  { id: "3-appletea", name: "あっぷるてぃー", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2023/07/あっぷるてぃー.png" },
  { id: "3-chokomi", name: "ちょこみ。", generation: "3期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2023/09/ちょこみ.png" },

  // === 4期生 (11名) ===
  { id: "4-riisa", name: "桜庭りいさ", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/桜庭りいさ.png" },
  { id: "4-yuu777", name: "yuu_777", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/yuu_777.png" },
  { id: "4-raitonya", name: "らいとにゃ", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/らいとにゃ.png" },
  { id: "4-nanase", name: "ななせ", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/七瀬.png" },
  { id: "4-yamabikonkon", name: "やまびこんこん", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/やまびこんこん.png" },
  { id: "4-hakka", name: "はっか", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/はっか.png" },
  { id: "4-hazuki", name: "ハヅキ", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/ハヅキ.png" },
  { id: "4-kt205", name: "KT205", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/KT205.png" },
  { id: "4-muku", name: "ムク", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/ムク.png" },
  { id: "4-rika", name: "理科(rika)", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/理科.png" },
  { id: "4-hengyu", name: "HengYu", generation: "4期生", photoUrl: "https://summersweet.jp/wp-content/uploads/2025/12/HengYu.png" },
];

// 理事長（SSSR シークレット）
const RIJICHO = {
  id: "special-rijicho",
  name: "理事長",
  generation: "秘密",
  photoUrl: "rijicho_card.png",
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
