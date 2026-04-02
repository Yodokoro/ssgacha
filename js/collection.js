// サマスイコレクション！ コレクション画面

let currentSort = "rarity";

function renderCollection() {
  const state = loadState();
  renderCollectionStats(state);
  renderCollectionGrid(state);
  setupSortButtons();
}

function generateAllCards(state) {
  const cards = [];
  const rarityKeys = ["N", "R", "SR", "SSR"];

  for (const member of MEMBERS) {
    for (const rarity of rarityKeys) {
      const cid = cardId(member.id, rarity);
      cards.push({
        id: cid,
        member,
        rarity,
        count: state.collection[cid] || 0
      });
    }
  }

  // 理事長は発見済みの場合のみ表示
  if (state.rijichoDiscovered) {
    const cid = cardId(RIJICHO.id, "SSSR");
    cards.push({
      id: cid,
      member: RIJICHO,
      rarity: "SSSR",
      count: state.collection[cid] || 0
    });
  }

  return cards;
}

function sortCards(cards, sortBy) {
  if (sortBy === "rarity") {
    cards.sort((a, b) => {
      const rd = RARITIES[a.rarity].order - RARITIES[b.rarity].order;
      if (rd !== 0) return rd;
      return a.member.name.localeCompare(b.member.name, "ja");
    });
  } else if (sortBy === "name") {
    cards.sort((a, b) => {
      const nd = a.member.name.localeCompare(b.member.name, "ja");
      if (nd !== 0) return nd;
      return RARITIES[a.rarity].order - RARITIES[b.rarity].order;
    });
  }
  return cards;
}

function renderCollectionGrid(state) {
  let cards = generateAllCards(state);
  cards = sortCards(cards, currentSort);

  const grid = document.getElementById("collection-grid");
  grid.innerHTML = cards.map(card => {
    const owned = card.count > 0;
    return `
      <div class="collection-card card--${card.rarity.toLowerCase()} ${owned ? "" : "card--unowned"}">
        <div class="card__frame">
          <div class="card__image">
            ${owned
              ? `<img src="${card.member.photoUrl}" alt="${card.member.name}" loading="lazy"
                   onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22><rect fill=%22%23f0f0f0%22 width=%221%22 height=%221%22/></svg>'">`
              : `<div class="card__silhouette">?</div>`
            }
          </div>
          <div class="card__rarity card__rarity--${card.rarity.toLowerCase()}">${card.rarity}</div>
          <div class="card__info">
            <div class="card__name">${card.member.name}</div>
            <div class="card__gen">${card.member.generation}</div>
          </div>
          ${card.count > 1 ? `<div class="card__count">×${card.count}</div>` : ""}
          ${owned ? generateSparklesHTML(card.rarity) : ""}
        </div>
      </div>
    `;
  }).join("");
}

function renderCollectionStats(state) {
  const panel = document.getElementById("stats-panel");
  const rarityKeys = ["N", "R", "SR", "SSR"];
  const memberCount = MEMBERS.length;

  let statsHTML = '<div class="stats-row">';

  for (const rarity of rarityKeys) {
    let count = 0;
    for (const member of MEMBERS) {
      if (state.collection[cardId(member.id, rarity)]) count++;
    }
    statsHTML += `
      <div class="stat-item stat-item--${rarity.toLowerCase()}">
        <span class="stat-label">${rarity}</span>
        <span class="stat-value">${count}/${memberCount}</span>
      </div>
    `;
  }

  // SSSR
  if (state.rijichoDiscovered) {
    statsHTML += `
      <div class="stat-item stat-item--sssr">
        <span class="stat-label">SSSR</span>
        <span class="stat-value">1/1</span>
      </div>
    `;
  }

  statsHTML += "</div>";

  // 全体統計
  const totalOwned = Object.keys(state.collection).length;
  const totalCards = getTotalCardCount(state);
  const pct = totalCards > 0 ? ((totalOwned / totalCards) * 100).toFixed(1) : 0;

  statsHTML += `
    <div class="stats-summary">
      <span>コレクション: <strong>${totalOwned}/${totalCards}</strong> (${pct}%)</span>
      <span>ガチャ回数: <strong>${state.totalPulls}</strong></span>
    </div>
  `;

  panel.innerHTML = statsHTML;
}

function setupSortButtons() {
  document.querySelectorAll(".sort-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.sort === currentSort);
    btn.onclick = () => {
      currentSort = btn.dataset.sort;
      document.querySelectorAll(".sort-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCollectionGrid(loadState());
    };
  });
}
