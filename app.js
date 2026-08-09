const tools = [
  {
    id: "monthly-tasks",
    name: "학돌 월별업무판",
    category: "일정·루틴",
    description: "이번 달에 해야 할 행정업무와 학사일정을 한 화면에서 확인하고 처리상태까지 관리합니다.",
    tags: ["월별업무", "업무판", "달력", "학사일정", "행정실"],
    status: "운영중",
    icon: "📅",
    url: "https://sen-vip.github.io/hakdol-monthly-tasks/",
    updated: "2026.08",
    featured: true
  },
  {
    id: "routine",
    name: "학돌 루틴집",
    category: "일정·루틴",
    description: "시기별·상황별 반복업무를 찾아보고 우리 학교 주기까지 메모해두는 업무 탐색 도구입니다.",
    tags: ["루틴", "반복업무", "주기", "업무탐색", "체크"],
    status: "운영중",
    icon: "🧭",
    url: "https://sen-vip.github.io/hakdol-routine/",
    updated: "2026.08",
    featured: true
  },
  {
    id: "gongmun-fit",
    name: "공문핏",
    category: "문서 자동화",
    description: "공문의 관련·본문·가나다 순번·붙임 번호를 빠르게 정리하는 공문 작성 보조 도구입니다.",
    tags: ["공문", "가나다", "순번", "붙임", "문서"],
    status: "운영중",
    icon: "📝",
    url: "https://sen-vip.github.io/gongmun-fit/",
    updated: "2026.08",
    featured: true
  },
  {
    id: "career-certificate",
    name: "경력증명 자동화",
    category: "문서 자동화",
    description: "경력대장 엑셀을 불러와 자료를 점검하고 경력증명서를 자동 작성·출력합니다.",
    tags: ["경력증명", "경력대장", "발령대장", "증명서", "엑셀"],
    status: "NEW",
    icon: "📄",
    url: "https://sen-vip.github.io/career-certificate/",
    updated: "2026.08",
    featured: true,
    isNew: true
  },
  {
    id: "contract-kockgum",
    name: "계약 콕검",
    category: "계약·지출",
    description: "계약 구비서류를 기준 순서대로 빠르게 확인하는 계약 서류 점검 도구입니다.",
    tags: ["계약", "구비서류", "서류", "점검"],
    status: "운영중",
    icon: "📑",
    url: "https://sen-vip.github.io/contract-kockgum/",
    updated: "2026.08",
    featured: true
  },
  {
    id: "school-card-map",
    name: "학교카드맵",
    category: "계약·지출",
    description: "학교카드 사용처를 지도에서 확인하고 업무추진비 사용 흐름을 보기 쉽게 살펴봅니다.",
    tags: ["학교카드", "법카", "지도", "업무추진비"],
    status: "운영중",
    icon: "🗺️",
    url: "https://school-card-map.vercel.app/",
    updated: "2026.08",
    featured: true
  },
  {
    id: "pumshot",
    name: "품샷",
    category: "문서 자동화",
    description: "견적서 PDF를 바탕으로 품의 본문과 에듀파인 업로드 자료를 빠르게 만드는 문서 자동화 도구입니다.",
    tags: ["품의", "견적서", "PDF", "엑셀", "에듀파인"],
    status: "비공개",
    icon: "📦",
    url: "",
    updated: "비공개"
  },
  {
    id: "jechul-moa",
    name: "제출모아",
    category: "문서 자동화",
    description: "제출 파일을 모으고 미제출·보완대상을 확인하며 파일 정리를 돕는 도구입니다.",
    tags: ["제출", "파일정리", "미제출", "수합"],
    status: "운영중",
    icon: "📥",
    url: "https://sen-vip.github.io/jechul-moa/",
    updated: "2026.07"
  },
  {
    id: "edu-card-map",
    name: "교육청 법카맵",
    category: "계약·지출",
    description: "서울교육 업무추진비 공개자료를 지도와 표로 확인하는 도구입니다.",
    tags: ["교육청", "법카", "업무추진비", "지도"],
    status: "운영중",
    icon: "🏛️",
    url: "https://sen-vip.github.io/edu-card-map/",
    updated: "2026.08"
  },
  {
    id: "annual-contract",
    name: "연간계약보드",
    category: "계약·지출",
    description: "연간 계약, 만료일, 금액, 업체 정보를 한눈에 관리하는 계약 보드입니다.",
    tags: ["계약", "만료일", "자동이체", "연간계약"],
    status: "운영중",
    icon: "📋",
    url: "https://sen-vip.github.io/annual-contract-board/",
    updated: "2026.06"
  },
  {
    id: "inside-travel-kockgum",
    name: "관내여비 콕검",
    category: "계약·지출",
    description: "출장지와 학교 사이 거리를 바탕으로 관내여비 확인 포인트를 빠르게 점검합니다.",
    tags: ["관내여비", "출장", "거리", "2km", "여비"],
    status: "운영중",
    icon: "📍",
    url: "https://inside-travel-kockgum.vercel.app/",
    updated: "2026.08"
  },
  {
    id: "overtime",
    name: "초근누구",
    category: "계약·지출",
    description: "초과근무 자료와 특근매식비 사용내역을 비교해 확인할 대상을 빠르게 찾습니다.",
    tags: ["초과근무", "초근", "특근매식비", "지출", "확인"],
    status: "운영중",
    icon: "🌙",
    url: "https://sen-vip.github.io/chogeun-nugu/",
    updated: "2026.08"
  },
  {
    id: "insur-kockgum",
    name: "보험 콕검",
    category: "점검·확인",
    description: "화재·배상·여행자보험 등 주요 보험 서류 확인을 돕는 체크 도구입니다.",
    tags: ["보험", "체크리스트", "서류", "점검"],
    status: "운영중",
    icon: "🛡️",
    url: "https://sen-vip.github.io/boheom-kockgum/",
    updated: "2026.06"
  },
  {
    id: "bus-kockgum",
    name: "버스 콕검",
    category: "점검·확인",
    description: "현장체험학습·수련활동 버스 임차 제출서류를 단계별로 확인합니다.",
    tags: ["버스", "수련활동", "현장체험학습", "서류점검"],
    status: "운영중",
    icon: "🚌",
    url: "https://sen-vip.github.io/bus-kockgum/",
    updated: "2026.06"
  },
  {
    id: "secom",
    name: "세콤매니저용 초과근무 변환기",
    category: "점검·확인",
    description: "에스원 세콤매니저에서 추출한 출입기록을 NEIS 업로드용 CSV로 변환합니다.",
    tags: ["세콤", "에스원", "출입기록", "초과근무", "NEIS", "CSV", "변환"],
    status: "블로그 업로드 준비중",
    icon: "⏱️",
    url: "",
    updated: "블로그 업로드 준비중"
  },
  {
    id: "today-school",
    name: "오늘학교",
    category: "학교생활",
    description: "오늘의 학사일정·급식·시간표를 한 화면에서 확인하는 학교생활 캘린더입니다.",
    tags: ["오늘학교", "학사일정", "급식", "시간표", "학교생활"],
    status: "운영중",
    icon: "🏫",
    url: "https://sen-vip.github.io/school-life-calendar/",
    updated: "2026.08"
  },
  {
    id: "school-calendar",
    name: "전국 학사일정",
    category: "학교생활",
    description: "지역과 학교를 선택해 학교별 학사일정을 월별로 빠르게 조회합니다.",
    tags: ["학사일정", "학교", "달력", "나이스", "NEIS"],
    status: "운영중",
    icon: "🗓️",
    url: "https://sen-vip.github.io/school-calendar/",
    updated: "2026.07"
  },
  {
    id: "ansa",
    name: "안 샀다",
    category: "실험실",
    description: "가짜 쇼핑과 배송 시뮬레이션으로 소비 충동을 잠깐 식히는 개인 실험 도구입니다.",
    tags: ["실험", "소비", "시뮬레이션"],
    status: "실험중",
    icon: "🛍️",
    url: "https://sen-vip.github.io/ansa/",
    updated: "2026.07"
  }
];

const CATEGORY_ORDER = [
  "일정·루틴",
  "문서 자동화",
  "계약·지출",
  "점검·확인",
  "학교생활",
  "실험실"
];

const CATEGORY_DESCRIPTIONS = {
  "일정·루틴": "이번 달과 반복 업무",
  "문서 자동화": "공문·증명서·파일 처리",
  "계약·지출": "계약·카드·여비·지출",
  "점검·확인": "서류와 근태 확인",
  "학교생활": "학사일정·급식·시간표",
  "실험실": "가볍게 시험 중인 도구"
};

const FEATURED_IDS = [
  "monthly-tasks",
  "routine",
  "gongmun-fit",
  "career-certificate",
  "contract-kockgum",
  "school-card-map"
];

const state = {
  query: "",
  favoriteOnly: false,
  favorites: new Set(JSON.parse(localStorage.getItem("hakdolham:favorites") || "[]").filter(id => tools.some(tool => tool.id === id)))
};

const featuredGrid = document.querySelector("#featuredGrid");
const grid = document.querySelector("#toolGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const searchResults = document.querySelector("#searchResults");
const searchResultList = document.querySelector("#searchResultList");
const searchResultCount = document.querySelector("#searchResultCount");
const searchNoResult = document.querySelector("#searchNoResult");
const favoriteOnlyBtn = document.querySelector("#favoriteOnlyBtn");
const totalCount = document.querySelector("#totalCount");
const favoriteCount = document.querySelector("#favoriteCount");

function disabledLabel(tool) {
  if (tool.status === "비공개") return "비공개";
  if (tool.status === "블로그 예정") return "블로그 예정";
  if (tool.status === "블로그 업로드 준비중") return "블로그 업로드 준비중";
  return "준비중";
}

function saveFavorites() {
  localStorage.setItem("hakdolham:favorites", JSON.stringify([...state.favorites]));
}

function normalize(text) {
  return String(text).toLowerCase().replace(/\s+/g, "");
}

function matchesQuery(tool, query = state.query) {
  if (!query) return true;
  const haystack = normalize([
    tool.name,
    tool.category,
    tool.description,
    tool.status,
    ...tool.tags
  ].join(" "));
  return haystack.includes(normalize(query));
}

function highlightText(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!escaped) return text;
  return String(text).replace(new RegExp(`(${escaped})`, "ig"), "<mark>$1</mark>");
}

function renderFeaturedTools() {
  if (!featuredGrid) return;
  featuredGrid.innerHTML = FEATURED_IDS
    .map(id => tools.find(tool => tool.id === id))
    .filter(Boolean)
    .map(tool => `
      <a class="featured-card" href="${tool.url}" target="_blank" rel="noopener noreferrer" data-open-tool="${tool.id}">
        <span class="featured-icon" aria-hidden="true">${tool.icon}</span>
        <span class="featured-copy">
          <span class="featured-title-row">
            <strong>${tool.name}</strong>
            ${tool.isNew ? '<em class="new-badge">NEW</em>' : ''}
          </span>
          <small>${tool.description}</small>
        </span>
        <span class="featured-arrow" aria-hidden="true">→</span>
      </a>
    `).join("");
}

function renderToolCard(tool) {
  const isFavorite = state.favorites.has(tool.id);
  const action = tool.url
    ? `<a class="tool-card-link" href="${tool.url}" target="_blank" rel="noopener noreferrer" data-open-tool="${tool.id}">
        <span class="compact-tool-icon" aria-hidden="true">${tool.icon}</span>
        <span class="compact-tool-copy">
          <strong>${tool.name}${tool.isNew ? ' <em class="inline-new-badge">NEW</em>' : ''}</strong>
          <small>${tool.description}</small>
        </span>
        <span class="compact-tool-arrow" aria-hidden="true">→</span>
      </a>`
    : `<div class="tool-card-link is-disabled" title="${tool.name}은 현재 바로 열기 링크가 없습니다.">
        <span class="compact-tool-icon" aria-hidden="true">${tool.icon}</span>
        <span class="compact-tool-copy">
          <strong>${tool.name}</strong>
          <small>${tool.description}</small>
          <span class="compact-tool-status">${disabledLabel(tool)}</span>
        </span>
      </div>`;

  return `
    <article class="compact-tool-card ${tool.url ? "" : "is-unavailable"}" data-id="${tool.id}">
      ${action}
      <button class="favorite-btn compact-favorite ${isFavorite ? "active" : ""}" type="button" aria-label="${tool.name} 즐겨찾기" data-favorite="${tool.id}">
        ${isFavorite ? "★" : "☆"}
      </button>
    </article>
  `;
}

function renderCategoryRow(category, categoryTools) {
  return `
    <section class="tool-category-row" aria-labelledby="category-${category}">
      <div class="tool-category-label">
        <h3 id="category-${category}">${category}</h3>
        <p>${CATEGORY_DESCRIPTIONS[category] || ""}</p>
        <span>${categoryTools.length}개</span>
      </div>
      <div class="category-tool-grid">
        ${categoryTools.map(renderToolCard).join("")}
      </div>
    </section>
  `;
}

function renderToolBoard() {
  const visibleTools = tools
    .filter(tool => !state.favoriteOnly || state.favorites.has(tool.id));

  const rows = CATEGORY_ORDER.map(category => {
    const categoryTools = visibleTools.filter(tool => tool.category === category);
    return categoryTools.length ? renderCategoryRow(category, categoryTools) : "";
  }).join("");

  grid.innerHTML = rows;
  emptyState.hidden = visibleTools.length !== 0;
  favoriteOnlyBtn.classList.toggle("active", state.favoriteOnly);
  favoriteOnlyBtn.setAttribute("aria-pressed", String(state.favoriteOnly));
  favoriteOnlyBtn.textContent = state.favoriteOnly ? "전체 도구 보기" : "즐겨찾기만";
}

function renderSearchResults() {
  const query = state.query.trim();
  searchResults.hidden = !query;
  clearSearchBtn.classList.toggle("is-visible", Boolean(query));
  if (!query) {
    searchResultList.innerHTML = "";
    searchNoResult.hidden = true;
    return;
  }

  const normalizedQuery = normalize(query);
  const searchScore = tool => {
    const name = normalize(tool.name);
    const tags = tool.tags.map(normalize);
    const description = normalize(tool.description);
    const category = normalize(tool.category);
    let score = 0;
    if (name === normalizedQuery) score += 160;
    else if (name.startsWith(normalizedQuery)) score += 130;
    else if (name.includes(normalizedQuery)) score += 100;
    if (tags.some(tag => tag === normalizedQuery)) score += 80;
    else if (tags.some(tag => tag.includes(normalizedQuery))) score += 55;
    if (description.includes(normalizedQuery)) score += 25;
    if (category.includes(normalizedQuery)) score += 10;
    return score;
  };
  const matched = tools
    .filter(tool => matchesQuery(tool, query))
    .map((tool, index) => ({ tool, index, score: searchScore(tool) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 6)
    .map(item => item.tool);
  searchResultCount.textContent = matched.length;
  searchNoResult.hidden = matched.length !== 0;
  searchResultList.innerHTML = matched.map((tool, index) => {
    const title = highlightText(tool.name, query);
    const description = highlightText(tool.description, query);
    if (!tool.url) {
      return `
        <div class="search-result-item is-disabled" data-search-index="${index}">
          <span class="search-result-icon">${tool.icon}</span>
          <span class="search-result-copy"><strong>${title}</strong><small>${description}</small></span>
          <span class="search-result-meta">${disabledLabel(tool)}</span>
        </div>`;
    }
    return `
      <a class="search-result-item" href="${tool.url}" target="_blank" rel="noopener noreferrer" data-open-tool="${tool.id}" data-search-index="${index}">
        <span class="search-result-icon">${tool.icon}</span>
        <span class="search-result-copy"><strong>${title}</strong><small>${description}</small></span>
        <span class="search-result-meta">${tool.category}<b aria-hidden="true">→</b></span>
      </a>`;
  }).join("");
}

function render() {
  renderFeaturedTools();
  renderToolBoard();
  renderSearchResults();
  totalCount.textContent = tools.length;
  favoriteCount.textContent = state.favorites.size;
}

document.addEventListener("click", event => {
  const button = event.target.closest("[data-favorite]");
  if (button) {
    const id = button.dataset.favorite;
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    saveFavorites();
    render();
    return;
  }
});

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  renderSearchResults();
});

searchInput.addEventListener("keydown", event => {
  if (event.key !== "Enter" || !state.query.trim()) return;
  const firstLink = searchResultList.querySelector("a.search-result-item");
  if (!firstLink) return;
  event.preventDefault();
  firstLink.click();
});

clearSearchBtn.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  searchInput.focus();
  renderSearchResults();
});

favoriteOnlyBtn.addEventListener("click", () => {
  state.favoriteOnly = !state.favoriteOnly;
  renderToolBoard();
});

const amountInput = document.querySelector("#amountInput");
const amountOutput = document.querySelector("#amountOutput");
const copyAmountBtn = document.querySelector("#copyAmountBtn");

function formatNumberWithComma(value) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberToKoreanMoney(input) {
  const cleaned = String(input).replace(/[^\d]/g, "");
  if (!cleaned) return "";

  const normalized = cleaned.replace(/^0+/, "") || "0";
  if (normalized === "0") return "금영원";

  const digitUnits = ["", "십", "백", "천"];
  const groupUnits = ["", "만", "억", "조", "경"];
  const nums = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];

  const groups = [];
  let rest = normalized;

  while (rest.length > 0) {
    groups.unshift(rest.slice(-4));
    rest = rest.slice(0, -4);
  }

  let result = "";

  groups.forEach((group, index) => {
    const groupNum = Number(group);
    if (!groupNum) return;

    const padded = group.padStart(4, "0");
    let groupText = "";

    for (let i = 0; i < 4; i++) {
      const digit = Number(padded[i]);
      if (!digit) continue;

      const pos = 3 - i;
      groupText += nums[digit] + digitUnits[pos];
    }

    const unitIndex = groups.length - index - 1;
    result += groupText + groupUnits[unitIndex];
  });

  return "금" + result + "원";
}

function updateAmountConverter() {
  if (!amountInput || !amountOutput) return;

  const rawDigits = amountInput.value.replace(/[^\d]/g, "");
  if (!rawDigits) {
    amountOutput.textContent = "금액을 입력해보세요.";
    amountOutput.classList.remove("is-filled");
    return;
  }

  amountInput.value = formatNumberWithComma(rawDigits);
  amountOutput.textContent = numberToKoreanMoney(rawDigits);
  amountOutput.classList.add("is-filled");
}

if (amountInput) {
  amountInput.addEventListener("input", updateAmountConverter);
  amountInput.addEventListener("focus", event => event.target.select());
}

if (copyAmountBtn) {
  copyAmountBtn.addEventListener("click", async () => {
    if (!amountOutput || !amountOutput.classList.contains("is-filled")) return;

    const text = amountOutput.textContent;
    try {
      await navigator.clipboard.writeText(text);
      copyAmountBtn.textContent = "복사됨";
      setTimeout(() => {
        copyAmountBtn.textContent = "복사";
      }, 1200);
    } catch {
      copyAmountBtn.textContent = "복사 실패";
      setTimeout(() => {
        copyAmountBtn.textContent = "복사";
      }, 1200);
    }
  });
}


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


// v0.1.18 — 나의 책상 뽀모도로 타이머
const pomodoroTime = document.querySelector("#pomodoroTime");
const pomodoroLabel = document.querySelector("#pomodoroLabel");
const pomodoroStatus = document.querySelector("#pomodoroStatus");
const pomodoroToggleBtn = document.querySelector("#pomodoroToggleBtn");
const pomodoroResetBtn = document.querySelector("#pomodoroResetBtn");
const pomodoroModeBtn = document.querySelector("#pomodoroModeBtn");
const pomodoroSoundBtn = document.querySelector("#pomodoroSoundBtn");
const pomodoroSessions = document.querySelector("#pomodoroSessions");
const pomodoroCard = document.querySelector("#pomodoroCard");

const POMODORO_DURATIONS = { focus: 25 * 60, rest: 5 * 60 };
const POMODORO_KEY = "hakdolham:pomodoro";

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createPomodoroState(soundOn = false) {
  return {
    mode: "focus",
    remaining: POMODORO_DURATIONS.focus,
    running: false,
    endAt: null,
    sessions: 0,
    soundOn,
    dateKey: getLocalDateKey()
  };
}

function loadPomodoro() {
  const fallback = createPomodoroState();
  try {
    const saved = JSON.parse(localStorage.getItem(POMODORO_KEY) || "null");
    if (!saved || !["focus", "rest"].includes(saved.mode)) return fallback;
    if (saved.dateKey !== getLocalDateKey()) {
      return createPomodoroState(Boolean(saved.soundOn));
    }
    return { ...fallback, ...saved };
  } catch {
    return fallback;
  }
}

let pomodoro = loadPomodoro();
let pomodoroTimer = null;
let pomodoroDailyResetTimer = null;

function savePomodoro() {
  localStorage.setItem(POMODORO_KEY, JSON.stringify(pomodoro));
}

function resetPomodoroForNewDay() {
  if (pomodoro.dateKey === getLocalDateKey()) return false;
  const soundOn = pomodoro.soundOn;
  pomodoro = createPomodoroState(soundOn);
  stopPomodoroTicker();
  savePomodoro();
  return true;
}

function schedulePomodoroDailyReset() {
  if (pomodoroDailyResetTimer) window.clearTimeout(pomodoroDailyResetTimer);
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0, 100
  );

  pomodoroDailyResetTimer = window.setTimeout(() => {
    resetPomodoroForNewDay();
    renderPomodoro("새 하루가 시작되어 타이머를 초기화했어요.");
    schedulePomodoroDailyReset();
  }, nextMidnight.getTime() - now.getTime());
}

function pomodoroRemaining() {
  if (!pomodoro.running || !pomodoro.endAt) return Math.max(0, pomodoro.remaining);
  return Math.max(0, Math.ceil((pomodoro.endAt - Date.now()) / 1000));
}

function formatPomodoro(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function playPomodoroSound() {
  if (!pomodoro.soundOn) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.frequency.value = 660;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.15, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.5);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.52);
  } catch {
    // Sound is optional; silently keep the timer working.
  }
}

function completePomodoro() {
  const completedMode = pomodoro.mode;
  if (completedMode === "focus") pomodoro.sessions += 1;
  pomodoro.mode = completedMode === "focus" ? "rest" : "focus";
  pomodoro.remaining = POMODORO_DURATIONS[pomodoro.mode];
  pomodoro.running = false;
  pomodoro.endAt = null;
  savePomodoro();
  playPomodoroSound();
  renderPomodoro(completedMode === "focus" ? "집중 1회 완료 · 5분 쉬어가요." : "휴식 완료 · 다시 집중할 준비가 됐어요.");
}

function renderPomodoro(statusMessage = "") {
  if (!pomodoroTime) return;
  const dayChanged = resetPomodoroForNewDay();
  if (dayChanged) statusMessage = "새 하루가 시작되어 타이머를 초기화했어요.";
  const remaining = pomodoroRemaining();
  if (pomodoro.running && remaining <= 0) {
    completePomodoro();
    return;
  }

  pomodoro.remaining = remaining;
  const isFocus = pomodoro.mode === "focus";
  pomodoroTime.textContent = formatPomodoro(remaining);
  pomodoroLabel.textContent = isFocus ? "집중 시간" : "휴식 시간";
  pomodoroToggleBtn.textContent = pomodoro.running ? "일시정지" : (isFocus ? "집중 시작" : "휴식 시작");
  pomodoroModeBtn.textContent = isFocus ? "휴식 5분" : "집중 25분";
  pomodoroSoundBtn.textContent = pomodoro.soundOn ? "🔔" : "🔕";
  pomodoroSoundBtn.setAttribute("aria-label", pomodoro.soundOn ? "알림음 끄기" : "알림음 켜기");
  pomodoroSessions.textContent = `오늘 ${pomodoro.sessions}회 집중`;
  pomodoroStatus.textContent = statusMessage || (pomodoro.running ? "집중할 업무 하나만 남겨두세요." : "시작하면 다른 탭에서도 시간이 정확히 흘러요.");
  pomodoroCard.classList.toggle("is-running", pomodoro.running);
  pomodoroCard.classList.toggle("is-rest", !isFocus);
  document.title = pomodoro.running
    ? `${formatPomodoro(remaining)} · ${isFocus ? "집중 중" : "휴식 중"} | 학돌함`
    : "학돌함 v0.2.1 | 학교를 돌리는 작은 도구들";
}

function stopPomodoroTicker() {
  if (pomodoroTimer) window.clearInterval(pomodoroTimer);
  pomodoroTimer = null;
}

function startPomodoroTicker() {
  stopPomodoroTicker();
  pomodoroTimer = window.setInterval(() => renderPomodoro(), 500);
}

if (pomodoroToggleBtn) {
  pomodoroToggleBtn.addEventListener("click", () => {
    if (pomodoro.running) {
      pomodoro.remaining = pomodoroRemaining();
      pomodoro.running = false;
      pomodoro.endAt = null;
      stopPomodoroTicker();
    } else {
      pomodoro.running = true;
      pomodoro.endAt = Date.now() + pomodoro.remaining * 1000;
      startPomodoroTicker();
    }
    savePomodoro();
    renderPomodoro();
  });
}

if (pomodoroResetBtn) {
  pomodoroResetBtn.addEventListener("click", () => {
    pomodoro.running = false;
    pomodoro.endAt = null;
    pomodoro.remaining = POMODORO_DURATIONS[pomodoro.mode];
    stopPomodoroTicker();
    savePomodoro();
    renderPomodoro("타이머를 처음 시간으로 돌렸어요.");
  });
}

if (pomodoroModeBtn) {
  pomodoroModeBtn.addEventListener("click", () => {
    pomodoro.mode = pomodoro.mode === "focus" ? "rest" : "focus";
    pomodoro.running = false;
    pomodoro.endAt = null;
    pomodoro.remaining = POMODORO_DURATIONS[pomodoro.mode];
    stopPomodoroTicker();
    savePomodoro();
    renderPomodoro();
  });
}

if (pomodoroSoundBtn) {
  pomodoroSoundBtn.addEventListener("click", () => {
    pomodoro.soundOn = !pomodoro.soundOn;
    savePomodoro();
    renderPomodoro(pomodoro.soundOn ? "완료 알림음을 켰어요." : "완료 알림음을 껐어요.");
  });
}

window.addEventListener("storage", event => {
  if (event.key !== POMODORO_KEY) return;
  pomodoro = loadPomodoro();
  if (pomodoro.running) startPomodoroTicker();
  renderPomodoro();
});

window.addEventListener("focus", () => {
  renderPomodoro();
  schedulePomodoroDailyReset();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  renderPomodoro();
  schedulePomodoroDailyReset();
});

if (pomodoro.running) startPomodoroTicker();
savePomodoro();
schedulePomodoroDailyReset();
renderPomodoro();

renderTodos();
render();
