// サマスイコレクション！ ガチャロジック＆演出

let gachaAnimState = {
  phase: "idle", // idle, animating, showing-sssr, showing-results
  isSpecial: false,
  results: [],
  animTimer: null
};

// --- 抽選ロジック ---

function rollRarity() {
  const roll = Math.random() * 100;
  let cumulative = 0;
  for (const [key, rarity] of Object.entries(RARITIES)) {
    cumulative += rarity.weight;
    if (roll < cumulative) return key;
  }
  return "N";
}

function rollCard() {
  const rarity = rollRarity();
  if (rarity === "SSSR") {
    return { member: RIJICHO, rarity: "SSSR" };
  }
  const member = MEMBERS[Math.floor(Math.random() * MEMBERS.length)];
  return { member, rarity };
}

function performTenPull() {
  if (gachaAnimState.phase !== "idle") return;

  const results = [];
  for (let i = 0; i < 10; i++) {
    results.push(rollCard());
  }

  // レアリティ昇順ソート
  results.sort((a, b) => RARITIES[a.rarity].order - RARITIES[b.rarity].order);

  // ストレージに記録
  const ids = results.map(r => cardId(r.member.id, r.rarity));
  const stateBefore = loadState();
  const stateAfter = recordPulls(ids);

  // NEW判定
  results.forEach(r => {
    const cid = cardId(r.member.id, r.rarity);
    r.isNew = !stateBefore.collection[cid];
  });

  gachaAnimState.results = results;

  const hasSSSR = results.some(r => r.rarity === "SSSR");
  const highestRarity = results[results.length - 1].rarity;

  if (hasSSSR) {
    startSSSRAnimation(results, stateAfter);
  } else {
    startNormalAnimation(highestRarity, results, stateAfter);
  }
}

// --- 通常10連演出 ---

function startNormalAnimation(highestRarity, results, state) {
  gachaAnimState.phase = "animating";
  gachaAnimState.isSpecial = false;

  const overlay = document.getElementById("gacha-overlay");
  const canvas = document.getElementById("particle-canvas");
  const container = document.getElementById("gacha-card-container");
  const skipHint = document.getElementById("skip-hint");

  overlay.classList.remove("hidden");
  skipHint.classList.remove("hidden");
  skipHint.textContent = "クリックでスキップ";
  container.innerHTML = "";

  resizeCanvas(canvas);
  const ctx = canvas.getContext("2d");

  const rarityColor = RARITIES[highestRarity].color;
  startParticles(ctx, canvas, rarityColor);

  gachaAnimState.animTimer = setTimeout(() => {
    showResults(results, state);
  }, 2000);
}

function showResults(results, state) {
  gachaAnimState.phase = "showing-results";
  stopParticles();

  const container = document.getElementById("gacha-card-container");
  const skipHint = document.getElementById("skip-hint");
  skipHint.textContent = "クリックで閉じる";

  container.innerHTML = `<div class="results-grid">
    ${results.map(r => renderGachaCard(r)).join("")}
  </div>`;
  container.classList.add("results-visible");

  updateStats(state);
}

function renderGachaCard(result) {
  const { member, rarity, isNew } = result;
  return `
    <div class="gacha-card card--${rarity.toLowerCase()}">
      <div class="card__frame">
        <div class="card__image">
          <img src="${member.photoUrl}" alt="${member.name}" loading="eager"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22><rect fill=%22%23f0f0f0%22 width=%221%22 height=%221%22/></svg>'">
        </div>
        <div class="card__rarity card__rarity--${rarity.toLowerCase()}">${rarity}</div>
        <div class="card__info">
          <div class="card__name">${member.name}</div>
          <div class="card__gen">${member.generation}</div>
        </div>
        ${isNew ? '<div class="card__new">NEW!</div>' : ""}
        ${generateSparklesHTML(rarity)}
      </div>
    </div>
  `;
}

// --- SSSR特別演出 ---

function startSSSRAnimation(results, state) {
  gachaAnimState.phase = "showing-sssr";
  gachaAnimState.isSpecial = true;

  const overlay = document.getElementById("gacha-overlay");
  const canvas = document.getElementById("particle-canvas");
  const container = document.getElementById("gacha-card-container");
  const skipHint = document.getElementById("skip-hint");

  overlay.classList.remove("hidden");
  skipHint.classList.add("hidden");
  container.innerHTML = "";

  resizeCanvas(canvas);
  const ctx = canvas.getContext("2d");

  overlay.classList.add("sssr-active");

  // Phase 1: グリッチ (0-1s)
  overlay.classList.add("glitch-effect");
  startRainbowParticles(ctx, canvas);

  setTimeout(() => {
    overlay.classList.remove("glitch-effect");
    // Phase 2: 渦 (1-3s)
    startVortexParticles(ctx, canvas);
  }, 1000);

  setTimeout(() => {
    // Phase 3: シェイク+フラッシュ (3-4s)
    overlay.classList.add("screen-shake");
    setTimeout(() => {
      overlay.classList.add("white-flash");
      setTimeout(() => {
        overlay.classList.remove("white-flash");
        overlay.classList.remove("screen-shake");
      }, 500);
    }, 500);
  }, 3000);

  setTimeout(() => {
    // Phase 4: 理事長カード公開 (4-6s)
    stopParticles();
    startRainbowBurst(ctx, canvas);
    const sssrResult = results.find(r => r.rarity === "SSSR");
    container.innerHTML = `
      <div class="sssr-reveal">
        ${renderGachaCard(sssrResult)}
      </div>
    `;
    container.classList.add("sssr-card-reveal");
  }, 4000);

  setTimeout(() => {
    // Phase 5: ショーケース (6-8s)
    container.innerHTML += `<div class="sssr-banner">SECRET CARD UNLOCKED!</div>`;
  }, 6000);

  setTimeout(() => {
    // 演出完了 - クリックで閉じられるようにする
    gachaAnimState.phase = "sssr-done";
    skipHint.classList.remove("hidden");
    skipHint.textContent = "クリックで結果を見る";
    gachaAnimState.isSpecial = false;
    gachaAnimState._pendingResults = results;
    gachaAnimState._pendingState = state;
  }, 8000);
}

// --- オーバーレイ操作 ---

function handleOverlayClick() {
  const phase = gachaAnimState.phase;

  if (phase === "showing-sssr") {
    // SSSR演出中はスキップ不可
    return;
  }

  if (phase === "animating") {
    // 通常演出スキップ
    clearTimeout(gachaAnimState.animTimer);
    showResults(gachaAnimState.results, loadState());
    return;
  }

  if (phase === "sssr-done") {
    // SSSR演出後 → 10連結果表示
    stopParticles();
    const overlay = document.getElementById("gacha-overlay");
    overlay.classList.remove("sssr-active");
    const container = document.getElementById("gacha-card-container");
    container.classList.remove("sssr-card-reveal");
    showResults(gachaAnimState._pendingResults, gachaAnimState._pendingState);
    return;
  }

  if (phase === "showing-results") {
    // 結果表示中 → 閉じる
    closeOverlay();
    return;
  }
}

function closeOverlay() {
  const overlay = document.getElementById("gacha-overlay");
  const container = document.getElementById("gacha-card-container");
  const canvas = document.getElementById("particle-canvas");

  stopParticles();
  overlay.classList.add("hidden");
  overlay.classList.remove("sssr-active", "glitch-effect", "screen-shake", "white-flash");
  container.innerHTML = "";
  container.classList.remove("results-visible", "sssr-card-reveal");

  gachaAnimState = {
    phase: "idle",
    isSpecial: false,
    results: [],
    animTimer: null
  };
}

// --- パーティクルシステム ---

let particles = [];
let particleRAF = null;
let particleMode = "normal";

function resizeCanvas(canvas) {
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

function createParticle(x, y, color, vx, vy, life) {
  return {
    x, y, vx: vx || (Math.random() - 0.5) * 4,
    vy: vy || (Math.random() - 0.5) * 4,
    life: life || 1, decay: 0.005 + Math.random() * 0.01,
    size: 2 + Math.random() * 4, color
  };
}

function startParticles(ctx, canvas, color) {
  particles = [];
  particleMode = "normal";
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  function emit() {
    if (particles.length < 300) {
      for (let i = 0; i < 5; i++) {
        particles.push(createParticle(
          cx + (Math.random() - 0.5) * 200,
          cy + (Math.random() - 0.5) * 200,
          color
        ));
      }
    }
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    emit();
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    particleRAF = requestAnimationFrame(frame);
  }
  frame();
}

function startRainbowParticles(ctx, canvas) {
  particles = [];
  particleMode = "rainbow";
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  function emit() {
    if (particles.length < 400) {
      for (let i = 0; i < 8; i++) {
        const hue = Math.random() * 360;
        particles.push(createParticle(
          cx + (Math.random() - 0.5) * 400,
          cy + (Math.random() - 0.5) * 400,
          `hsl(${hue}, 100%, 60%)`,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ));
      }
    }
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    emit();
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    particleRAF = requestAnimationFrame(frame);
  }
  frame();
}

function startVortexParticles(ctx, canvas) {
  stopParticles();
  particles = [];
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  // 初期パーティクルを周囲に配置
  for (let i = 0; i < 200; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = 150 + Math.random() * 200;
    const hue = (i / 200) * 360;
    particles.push({
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist,
      angle, dist, speed: 0.02 + Math.random() * 0.03,
      shrink: 0.3 + Math.random() * 0.5,
      life: 1, decay: 0,
      size: 2 + Math.random() * 4,
      color: `hsl(${hue}, 100%, 60%)`
    });
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.angle += p.speed;
      p.dist = Math.max(5, p.dist - p.shrink);
      p.x = cx + Math.cos(p.angle) * p.dist;
      p.y = cy + Math.sin(p.angle) * p.dist;
      ctx.globalAlpha = Math.min(1, p.dist / 50);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    particleRAF = requestAnimationFrame(frame);
  }
  frame();
}

function startRainbowBurst(ctx, canvas) {
  stopParticles();
  particles = [];
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  // 大量のパーティクルを中心から放出
  for (let i = 0; i < 500; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 8;
    const hue = (i / 500) * 360;
    particles.push(createParticle(
      cx, cy,
      `hsl(${hue}, 100%, 60%)`,
      Math.cos(angle) * speed,
      Math.sin(angle) * speed,
      1
    ));
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.life -= p.decay;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (particles.length > 0) {
      particleRAF = requestAnimationFrame(frame);
    }
  }
  frame();
}

function stopParticles() {
  if (particleRAF) {
    cancelAnimationFrame(particleRAF);
    particleRAF = null;
  }
  particles = [];
}
