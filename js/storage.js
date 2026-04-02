// サマスイコレクション！ ストレージ管理
const STORAGE_KEY = "summersweet-gacha";

function getDefaultState() {
  return {
    version: 1,
    totalPulls: 0,
    collection: {},
    rijichoDiscovered: false
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const state = JSON.parse(raw);
    if (!state.version) return getDefaultState();
    return state;
  } catch {
    return getDefaultState();
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function recordPulls(cardIds) {
  const state = loadState();
  state.totalPulls += cardIds.length;
  for (const id of cardIds) {
    state.collection[id] = (state.collection[id] || 0) + 1;
    if (id === cardId(RIJICHO.id, "SSSR")) {
      state.rijichoDiscovered = true;
    }
  }
  saveState(state);
  return state;
}

function getCollectionCount(state) {
  return Object.keys(state.collection).length;
}

function getTotalCardCount(state) {
  const regularCards = MEMBERS.length * 4;
  return state.rijichoDiscovered ? regularCards + 1 : regularCards;
}

function resetData() {
  localStorage.removeItem(STORAGE_KEY);
}
