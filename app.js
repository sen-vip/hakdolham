const tools = [
  {
    id: "life-calendar",
    name: "우리학교 생활달력",
    category: "일정·루틴",
    description: "학사일정, 급식, 시간표를 한곳에서 확인하는 학교 생활 캘린더입니다.",
    tags: ["학사일정", "급식", "시간표"],
    status: "운영중",
    icon: "🏫",
    url: "https://sen-vip.github.io/school-life-calendar/",
    updated: "2026.06"
  },
  {
    id: "school-calendar",
    name: "전국 학사일정 캘린더",
    category: "일정·루틴",
    description: "전국 학교 학사일정을 검색하고 월별로 확인하는 캘린더입니다.",
    tags: ["학사일정", "학교검색", "캘린더"],
    status: "운영중",
    icon: "🗓️",
    url: "https://sen-vip.github.io/school-calendar/",
    updated: "2026.06"
  },
  {
    id: "monthly-tasks",
    name: "학돌 월별 필수업무",
    category: "일정·루틴",
    description: "월별 행정실 필수업무를 한눈에 확인하고 완료 체크할 수 있는 도구입니다.",
    tags: ["월별업무", "루틴", "신규직원"],
    status: "운영중",
    icon: "📅",
    url: "https://sen-vip.github.io/hakdol-monthly-tasks/",
    updated: "2026.07"
  },
  {
    id: "routine",
    name: "학돌 루틴",
    category: "일정·루틴",
    description: "행정실 반복 업무를 주기별로 정리하고 검색·필터링하는 루틴 보드입니다.",
    tags: ["루틴", "반복업무", "체크"],
    status: "개선중",
    icon: "🧭",
    url: "https://sen-vip.github.io/hakdol-routine/",
    updated: "2026.07"
  },
  {
    id: "gongmun-fit",
    name: "공문핏",
    category: "문서 자동화",
    description: "공문 관련·본문·붙임 번호 정리를 빠르게 도와주는 문서 정리 도구입니다.",
    tags: ["공문", "붙임", "문서"],
    status: "운영중",
    icon: "📝",
    url: "https://sen-vip.github.io/gongmun-fit/",
    updated: "2026.07"
  },
  {
    id: "pumshot",
    name: "품샷",
    category: "문서 자동화",
    description: "견적서 기반 품의 본문과 에듀파인 업로드용 엑셀 작성을 돕는 도구입니다.",
    tags: ["품의", "견적서", "엑셀"],
    status: "비공개",
    icon: "📦",
    url: "",
    updated: "링크 제외"
  },
  {
    id: "school-card-map",
    name: "학교카드 사용처 지도",
    category: "계약·지출·카드",
    description: "학교카드 사용처를 지도에서 확인하고 업무추진비 사용 흐름을 보기 쉽게 정리합니다.",
    tags: ["학교카드", "지도", "업무추진비"],
    status: "개선중",
    icon: "🗺️",
    url: "https://school-card-map.vercel.app/",
    updated: "2026.07"
  },
  {
    id: "annual-contract",
    name: "연간계약보드",
    category: "계약·지출·카드",
    description: "연간 계약, 만료일, 금액, 업체 정보를 한눈에 관리하는 계약 보드입니다.",
    tags: ["계약", "만료일", "자동이체"],
    status: "운영중",
    icon: "📋",
    url: "https://sen-vip.github.io/annual-contract-board/",
    updated: "2026.06"
  },
  {
    id: "contract-kockgum",
    name: "계약 콕검",
    category: "점검·확인",
    description: "계약 구비서류를 기준 순서대로 빠르게 확인하는 계약 서류 점검 도구입니다.",
    tags: ["계약", "구비서류", "점검"],
    status: "운영중",
    icon: "📑",
    url: "https://sen-vip.github.io/contract-kockgum/",
    updated: "2026.07"
  },
  {
    id: "insur-kockgum",
    name: "보험 콕검",
    category: "점검·확인",
    description: "화재, 배상, 여행자보험 등 주요 보험 서류 확인을 돕는 체크 도구입니다.",
    tags: ["보험", "체크리스트", "점검"],
    status: "운영중",
    icon: "🛡️",
    url: "https://sen-vip.github.io/kockgum-insur/",
    updated: "2026.06"
  },
  {
    id: "bus-kockgum",
    name: "버스 콕검",
    category: "점검·확인",
    description: "현장체험학습·수련활동 버스 서류 확인을 단계별로 돕는 체크 도구입니다.",
    tags: ["버스", "수련활동", "서류점검"],
    status: "운영중",
    icon: "🚌",
    url: "https://sen-vip.github.io/bus-kockgum/",
    updated: "2026.06"
  },
  {
    id: "keybox",
    name: "우리학교 키박스",
    category: "점검·확인",
    description: "학교 공용 사이트, 계정, 계좌, 결제수단 정보를 로컬에서 정리하는 도구입니다.",
    tags: ["계정", "계좌", "로컬저장"],
    status: "운영중",
    icon: "🔑",
    url: "https://sen-vip.github.io/hakdol-keybox/",
    updated: "2026.06"
  },
  {
    id: "overtime",
    name: "초근누구",
    category: "초과근무·근태",
    description: "초과근무 자료와 카드 사용 자료를 비교해 확인 후보를 정리하는 도구입니다.",
    tags: ["초과근무", "카드", "확인"],
    status: "개선중",
    icon: "🌙",
    url: "https://sen-vip.github.io/chogeun-nugu/",
    updated: "2026.07"
  },
  {
    id: "secom",
    name: "세콤매니저 변환기",
    category: "초과근무·근태",
    description: "세콤매니저 자료를 초과근무 확인에 쓰기 좋게 변환하는 전용 도구입니다.",
    tags: ["세콤", "근태", "변환"],
    status: "블로그 예정",
    icon: "⏱️",
    url: "",
    updated: "링크 준비중"
  },
  {
    id: "ansa",
    name: "안 샀다",
    category: "실험실",
    description: "가짜 쇼핑과 배송 시뮬레이션으로 소비 충동을 잠깐 식히는 실험 도구입니다.",
    tags: ["실험", "소비", "시뮬레이션"],
    status: "실험중",
    icon: "🛍️",
    url: "https://sen-vip.github.io/ansa/",
    updated: "2026.07"
  }
];

const state = {
  query: "",
  category: "전체",
  favoriteOnly: false,
  quickTab: "frequent",
  favorites: new Set(JSON.parse(localStorage.getItem("hakdolham:favorites") || "[]")),
  recentUses: JSON.parse(localStorage.getItem("hakdolham:recentUses") || "[]")
};

const grid = document.querySelector("#toolGrid");
const quickGrid = document.querySelector("#quickGrid");
const quickEmpty = document.querySelector("#quickEmpty");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const favoriteOnlyBtn = document.querySelector("#favoriteOnlyBtn");
const totalCount = document.querySelector("#totalCount");
const favoriteCount = document.querySelector("#favoriteCount");

function statusClass(status) {
  if (status === "운영중") return "status-running";
  if (status === "개선중") return "status-improving";
  if (status === "실험중") return "status-lab";
  if (status === "블로그 예정") return "status-blog";
  if (status === "비공개") return "status-hidden";
  return "status-linkless";
}

function disabledLabel(tool) {
  if (tool.status === "비공개") return "비공개";
  if (tool.status === "블로그 예정") return "블로그 예정";
  return "준비중";
}

function saveFavorites() {
  localStorage.setItem("hakdolham:favorites", JSON.stringify([...state.favorites]));
}

function saveRecentUses() {
  localStorage.setItem("hakdolham:recentUses", JSON.stringify(state.recentUses));
}

function normalize(text) {
  return String(text).toLowerCase().replace(/\s+/g, "");
}

function isMatched(tool) {
  const haystack = normalize([
    tool.name,
    tool.category,
    tool.description,
    tool.status,
    tool.updated,
    ...tool.tags
  ].join(" "));
  const queryOk = !state.query || haystack.includes(normalize(state.query));
  const categoryOk = state.category === "전체" || tool.category === state.category;
  const favoriteOk = !state.favoriteOnly || state.favorites.has(tool.id);
  return queryOk && categoryOk && favoriteOk;
}

function getToolWithUse(item) {
  const tool = tools.find(target => target.id === item.id && target.url);
  return tool ? { ...tool, count: item.count, lastOpenedAt: item.lastOpenedAt } : null;
}

function recordToolOpen(id) {
  const now = Date.now();
  const existing = state.recentUses.find(item => item.id === id);

  if (existing) {
    existing.count += 1;
    existing.lastOpenedAt = now;
  } else {
    state.recentUses.unshift({ id, count: 1, lastOpenedAt: now });
  }

  state.recentUses.sort((a, b) => b.lastOpenedAt - a.lastOpenedAt);
  state.recentUses = state.recentUses.slice(0, 20);
  saveRecentUses();
  renderQuickLaunch();
}

function renderCard(tool) {
  const isFavorite = state.favorites.has(tool.id);
  const tags = tool.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  const link = tool.url
    ? `<a class="open-link" href="${tool.url}" target="_blank" rel="noopener noreferrer" data-open-tool="${tool.id}">열기</a>`
    : `<span class="disabled-link" title="${tool.name}은 현재 바로 열기 링크가 없습니다.">${disabledLabel(tool)}</span>`;

  return `
    <article class="tool-card" data-id="${tool.id}">
      <div class="card-top">
        <div class="tool-icon" aria-hidden="true">${tool.icon}</div>
        <button class="favorite-btn ${isFavorite ? "active" : ""}" type="button" aria-label="${tool.name} 즐겨찾기" data-favorite="${tool.id}">
          ${isFavorite ? "★" : "☆"}
        </button>
      </div>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <div class="tags">${tags}</div>
      <div class="card-bottom">
        <span class="status ${statusClass(tool.status)}">${tool.status} · ${tool.updated}</span>
        ${link}
      </div>
    </article>
  `;
}

function renderMiniTool(tool, mode = "default") {
  const countText = tool.count ? `${tool.count}번 꺼냄 · ` : "";
  return `
    <a class="mini-card ${mode}" href="${tool.url}" target="_blank" rel="noopener noreferrer" data-open-tool="${tool.id}">
      <span class="mini-icon">${tool.icon}</span>
      <span>
        <strong>${tool.name}</strong>
        <small>${countText}${tool.category}</small>
      </span>
    </a>
  `;
}

function getQuickTools() {
  if (state.quickTab === "favorite") {
    return tools
      .filter(tool => state.favorites.has(tool.id) && tool.url)
      .map(tool => ({ ...tool }));
  }

  if (state.quickTab === "recent") {
    return state.recentUses
      .map(getToolWithUse)
      .filter(Boolean)
      .sort((a, b) => b.lastOpenedAt - a.lastOpenedAt)
      .slice(0, 5);
  }

  return state.recentUses
    .map(getToolWithUse)
    .filter(Boolean)
    .filter(tool => tool.count >= 2)
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return b.lastOpenedAt - a.lastOpenedAt;
    })
    .slice(0, 5);
}

function renderQuickLaunch() {
  if (!quickGrid || !quickEmpty) return;

  document.querySelectorAll(".quick-tab").forEach(button => {
    button.classList.toggle("active", button.dataset.quickTab === state.quickTab);
  });

  const emptyMessages = {
    frequent: "🐥 같은 도구를 2번 이상 열면 여기에 모여요.",
    recent: "🐥 도구를 열면 최근 사용 도구가 여기에 보여요.",
    favorite: "🐥 카드의 별표를 누르면 여기에 고정돼요."
  };

  const quickTools = getQuickTools();
  quickGrid.innerHTML = quickTools.map(tool => renderMiniTool(tool, `${state.quickTab}-mini-card`)).join("");
  quickEmpty.textContent = emptyMessages[state.quickTab] || "🐥 표시할 도구가 없어요.";
  quickEmpty.hidden = quickTools.length !== 0;
}

function render() {
  const filtered = tools.filter(isMatched);
  grid.innerHTML = filtered.map(renderCard).join("");
  emptyState.hidden = filtered.length !== 0;

  totalCount.textContent = tools.length;
  favoriteCount.textContent = state.favorites.size;
  favoriteOnlyBtn.setAttribute("aria-pressed", String(state.favoriteOnly));

  renderQuickLaunch();
}

document.addEventListener("click", event => {
  const openTarget = event.target.closest("[data-open-tool]");
  if (!openTarget) return;
  recordToolOpen(openTarget.dataset.openTool);
});

document.querySelectorAll(".quick-tab").forEach(button => {
  button.addEventListener("click", () => {
    state.quickTab = button.dataset.quickTab;
    renderQuickLaunch();
  });
});

document.querySelectorAll(".category-chip").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category-chip").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    state.category = button.dataset.category;
    render();
  });
});

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  render();
});

clearSearchBtn.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  searchInput.focus();
  render();
});

favoriteOnlyBtn.addEventListener("click", () => {
  state.favoriteOnly = !state.favoriteOnly;
  render();
});

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-favorite]");
  if (!button) return;

  const id = button.dataset.favorite;
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }

  saveFavorites();
  render();
});

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const todoEmpty = document.querySelector("#todoEmpty");
const clearDoneBtn = document.querySelector("#clearDoneBtn");
const quickMemo = document.querySelector("#quickMemo");
const clearMemoBtn = document.querySelector("#clearMemoBtn");

let todos = JSON.parse(localStorage.getItem("hakdolham:todos") || "[]");

function saveTodos() {
  localStorage.setItem("hakdolham:todos", JSON.stringify(todos));
}

function makeId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return String(Date.now()) + String(Math.random()).slice(2);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTodos() {
  if (!todoList || !todoEmpty) return;

  todoList.innerHTML = todos.map(todo => `
    <li class="todo-item ${todo.done ? "done" : ""}" data-todo-id="${todo.id}">
      <label>
        <input type="checkbox" ${todo.done ? "checked" : ""} />
        <span>${escapeHtml(todo.text)}</span>
      </label>
      <button type="button" aria-label="할 일 삭제">×</button>
    </li>
  `).join("");

  todoEmpty.hidden = todos.length !== 0;
}

if (todoForm) {
  todoForm.addEventListener("submit", event => {
    event.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    todos.unshift({ id: makeId(), text, done: false });
    todoInput.value = "";
    saveTodos();
    renderTodos();
  });
}

if (todoList) {
  todoList.addEventListener("change", event => {
    const item = event.target.closest(".todo-item");
    if (!item) return;

    const target = todos.find(todo => todo.id === item.dataset.todoId);
    if (!target) return;

    target.done = event.target.checked;
    saveTodos();
    renderTodos();
  });

  todoList.addEventListener("click", event => {
    if (event.target.tagName !== "BUTTON") return;

    const item = event.target.closest(".todo-item");
    if (!item) return;

    todos = todos.filter(todo => todo.id !== item.dataset.todoId);
    saveTodos();
    renderTodos();
  });
}

if (clearDoneBtn) {
  clearDoneBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.done);
    saveTodos();
    renderTodos();
  });
}

if (quickMemo) {
  quickMemo.value = localStorage.getItem("hakdolham:memo") || "";
  quickMemo.addEventListener("input", event => {
    localStorage.setItem("hakdolham:memo", event.target.value);
  });
}

if (clearMemoBtn && quickMemo) {
  clearMemoBtn.addEventListener("click", event => {
    event.preventDefault();
    quickMemo.value = "";
    localStorage.removeItem("hakdolham:memo");
    quickMemo.focus();
  });
}

renderTodos();
render();
