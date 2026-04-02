// サマスイコレクション！ アプリケーション制御
document.addEventListener("DOMContentLoaded", () => {
  const state = loadState();
  updateStats(state);

  // 画面遷移
  document.getElementById("btn-gacha").addEventListener("click", () => switchScreen("gacha"));
  document.getElementById("btn-collection").addEventListener("click", () => switchScreen("collection"));

  // ガチャボタン
  document.getElementById("btn-pull").addEventListener("click", performTenPull);

  // オーバーレイクリック
  document.getElementById("gacha-overlay").addEventListener("click", handleOverlayClick);
});

function switchScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(`screen-${name}`).classList.add("active");
  document.getElementById(`btn-${name}`).classList.add("active");

  if (name === "collection") {
    renderCollection();
  }
}

function updateStats(state) {
  if (!state) state = loadState();
  document.getElementById("total-pulls").textContent = state.totalPulls;
  const collected = getCollectionCount(state);
  const total = getTotalCardCount(state);
  document.getElementById("collection-count").textContent = `${collected}/${total}`;
}
