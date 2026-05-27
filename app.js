const TRIP_KEY = "global-trip-planner-v2";
const HISTORY_KEY = "global-trip-history-v1";
const THEME_KEY = "global-trip-theme-v1";
const SHARE_PARAM = "share";
const SHARE_LENGTH_WARNING = 6500;

const osakaTrip = {
  name: "大阪 8 天 7 夜",
  country: "日本",
  baseCity: "大阪",
  startDate: "2026-05-27",
  flightNo: "BR132",
  flightDeparture: "08:30 TPE",
  flightArrival: "12:10 KIX",
  currency: "JPY",
  rate: 0.22,
  pace: "balanced",
  days: [
    {
      title: "抵達關西機場，難波暖身",
      place: "大阪難波",
      hotelName: "大阪難波周邊飯店",
      route: "關西機場 -> 南海電鐵 -> 難波",
      transportMode: "地鐵 / 電車",
      mealPlan: { breakfast: "機上或機場簡餐", lunch: "關西機場美食街", dinner: "道頓堀御好燒" },
      mapQuery: "關西機場 到 大阪難波 道頓堀",
      landmarks: ["關西機場", "難波站", "道頓堀", "心齋橋", "法善寺橫丁"],
      budget: 7600,
      items: ["14:00 抵達關西機場，領交通卡與網路", "16:00 南海電鐵進難波，飯店寄放行李", "18:00 道頓堀、心齋橋、法善寺橫丁散步", "20:00 章魚燒、御好燒或拉麵晚餐"]
    },
    {
      title: "大阪城、梅田與夜景",
      place: "大阪市區",
      hotelName: "大阪難波周邊飯店",
      route: "谷町四丁目 -> 大阪城 -> 梅田",
      transportMode: "地鐵 / 電車",
      mealPlan: { breakfast: "飯店早餐", lunch: "京橋商店街", dinner: "梅田地下街餐廳" },
      mapQuery: "大阪城 梅田 空中庭園",
      landmarks: ["大阪城公園", "大阪城天守閣", "梅田阪急百貨", "梅田藍天大廈空中庭園"],
      budget: 9200,
      items: ["09:00 大阪城公園與天守閣周邊拍照", "12:00 天滿橋或京橋午餐", "15:00 梅田商圈、阪急百貨與地下街", "18:30 藍天大廈空中庭園看夜景"]
    },
    {
      title: "日本環球影城整天",
      place: "環球影城",
      hotelName: "大阪難波周邊飯店",
      route: "難波 -> 西九條 -> 環球城",
      transportMode: "地鐵 / 電車",
      mealPlan: { breakfast: "便利商店早餐", lunch: "USJ 園區餐廳", dinner: "環球城市食堂" },
      mapQuery: "大阪難波 到 日本環球影城",
      landmarks: ["日本環球影城", "超級任天堂世界", "哈利波特魔法世界", "Universal CityWalk Osaka"],
      budget: 22800,
      items: ["07:30 提早出門，開園前抵達排隊", "09:00 任天堂世界、哈利波特區優先安排", "13:00 園區午餐與表演時間預留", "19:30 回難波簡單晚餐，早點休息"]
    },
    {
      title: "京都伏見稻荷與清水寺",
      place: "京都",
      hotelName: "大阪難波周邊飯店",
      route: "大阪 -> 京都 -> 伏見稻荷 -> 清水五條",
      transportMode: "地鐵 / 電車",
      mealPlan: { breakfast: "飯店早餐", lunch: "祇園周邊餐廳", dinner: "大阪車站便餐" },
      mapQuery: "伏見稻荷大社 清水寺 京都",
      landmarks: ["伏見稻荷大社", "祇園", "二年坂", "三年坂", "清水寺"],
      budget: 11800,
      items: ["08:00 JR 或京阪前往京都", "09:30 伏見稻荷大社，避開正午人潮", "13:00 祇園、二年坂、三年坂午餐與散步", "16:00 清水寺周邊，傍晚回大阪"]
    },
    {
      title: "奈良公園與通天閣夜晚",
      place: "奈良",
      hotelName: "大阪難波周邊飯店",
      route: "大阪難波 -> 近鐵奈良 -> 新世界",
      transportMode: "地鐵 / 電車",
      mealPlan: { breakfast: "飯店早餐", lunch: "奈良町町家餐廳", dinner: "新世界串炸" },
      mapQuery: "近鐵奈良 奈良公園 東大寺 新世界大阪",
      landmarks: ["近鐵奈良站", "奈良公園", "東大寺", "春日大社", "通天閣"],
      budget: 9800,
      items: ["09:00 近鐵前往奈良，先到奈良公園", "10:30 東大寺、春日大社與老街點心", "15:30 回大阪休息或補逛藥妝", "18:30 新世界、通天閣、串炸晚餐"]
    },
    {
      title: "神戶港、北野異人館與牛排",
      place: "神戶",
      hotelName: "大阪梅田周邊飯店",
      route: "大阪梅田 -> 三宮 -> 神戶港",
      transportMode: "地鐵 / 電車",
      mealPlan: { breakfast: "飯店早餐", lunch: "神戶牛排餐廳", dinner: "神戶港咖啡或輕食" },
      mapQuery: "神戶三宮 北野異人館 美利堅公園",
      landmarks: ["三宮站", "北野異人館街", "神戶牛排餐廳", "美利堅公園", "神戶港塔"],
      budget: 15200,
      items: ["09:30 阪急或 JR 前往三宮", "10:30 北野異人館街與咖啡店", "13:30 神戶牛午餐或平價牛排備案", "16:00 美利堅公園、港塔周邊，夜景後回大阪"]
    },
    {
      title: "黑門市場、天王寺與最後採買",
      place: "大阪市區",
      hotelName: "大阪難波周邊飯店",
      route: "日本橋 -> 天王寺 -> 阿倍野",
      transportMode: "地鐵 / 電車",
      mealPlan: { breakfast: "黑門市場海鮮小吃", lunch: "天王寺百貨餐廳", dinner: "心齋橋燒肉" },
      mapQuery: "黑門市場 天王寺 阿倍野 Harukas",
      landmarks: ["黑門市場", "天王寺公園", "四天王寺", "阿倍野 Harukas", "心齋橋"],
      budget: 12800,
      items: ["09:30 黑門市場早餐與海鮮小吃", "12:30 天王寺公園、四天王寺或動物園前散步", "15:00 阿倍野 Harukas、百貨與伴手禮", "19:00 心齋橋最後採買，整理行李"]
    },
    {
      title: "退房，機場伴手禮",
      place: "大阪 / 關西機場",
      hotelName: "退房日",
      route: "飯店 -> 關西機場",
      transportMode: "地鐵 / 電車",
      mealPlan: { breakfast: "飯店早餐", lunch: "難波咖啡店", dinner: "機場餐廳或機上餐" },
      mapQuery: "大阪難波 到 關西機場",
      landmarks: ["難波站", "關西機場", "關西機場伴手禮區"],
      budget: 6900,
      items: ["09:00 飯店退房，行李確認", "10:30 難波周邊咖啡或最後補買", "12:30 搭車前往關西機場", "14:30 機場伴手禮、報到與出境"]
    }
  ]
};

const checklist = ["護照 / 身分證件", "機票、車票或訂位截圖", "住宿確認信", "信用卡與少量現金", "網路 SIM / eSIM", "轉接頭與行動電源", "常備藥與個人用品", "雨具、外套與好走的鞋"];

const paceText = {
  relaxed: "慢慢玩模式：每天留更多休息、拍照、咖啡與自由探索時間。",
  balanced: "剛剛好模式：把重要景點排進去，也保留移動、吃飯和臨時發現。",
  packed: "排滿一點模式：適合想多踩點的人，記得每天安排一段彈性時間。"
};

let trip = loadTrip();
let history = loadHistory();
let editingDayIndex = null;
let theme = localStorage.getItem(THEME_KEY) || "light";

const fields = {
  tripName: document.querySelector("#tripName"),
  country: document.querySelector("#country"),
  baseCity: document.querySelector("#baseCity"),
  startDate: document.querySelector("#startDate"),
  flightNo: document.querySelector("#flightNo"),
  flightDeparture: document.querySelector("#flightDeparture"),
  flightArrival: document.querySelector("#flightArrival"),
  currency: document.querySelector("#currency"),
  rate: document.querySelector("#rate"),
  pace: document.querySelector("#pace"),
  dayTitle: document.querySelector("#dayTitle"),
  dayPlace: document.querySelector("#dayPlace"),
  dayHotelName: document.querySelector("#dayHotelName"),
  dayTransportMode: document.querySelector("#dayTransportMode"),
  dayRoute: document.querySelector("#dayRoute"),
  dayBudget: document.querySelector("#dayBudget"),
  dayBreakfast: document.querySelector("#dayBreakfast"),
  dayLunch: document.querySelector("#dayLunch"),
  dayDinner: document.querySelector("#dayDinner"),
  dayMapQuery: document.querySelector("#dayMapQuery"),
  dayPhotoUrl: document.querySelector("#dayPhotoUrl"),
  dayLandmarks: document.querySelector("#dayLandmarks"),
  dayItems: document.querySelector("#dayItems"),
  importText: document.querySelector("#importText")
};

const nodes = {
  heroTitle: document.querySelector("#heroTitle"),
  heroCopy: document.querySelector("#heroCopy"),
  statDays: document.querySelector("#statDays"),
  statStops: document.querySelector("#statStops"),
  statBudget: document.querySelector("#statBudget"),
  statCurrency: document.querySelector("#statCurrency"),
  visibleDays: document.querySelector("#visibleDays"),
  totalLocal: document.querySelector("#totalLocal"),
  totalTwd: document.querySelector("#totalTwd"),
  paceHint: document.querySelector("#paceHint"),
  dayList: document.querySelector("#dayList"),
  checklist: document.querySelector("#checklist"),
  dayForm: document.querySelector("#dayForm"),
  addSample: document.querySelector("#addSample"),
  clearTrip: document.querySelector("#clearTrip"),
  loadOsaka: document.querySelector("#loadOsaka"),
  saveHistory: document.querySelector("#saveHistory"),
  saveHistoryTop: document.querySelector("#saveHistoryTop"),
  createShareLink: document.querySelector("#createShareLink"),
  shareResult: document.querySelector("#shareResult"),
  offlineStatus: document.querySelector("#offlineStatus"),
  previewImport: document.querySelector("#previewImport"),
  applyImport: document.querySelector("#applyImport"),
  importPreview: document.querySelector("#importPreview"),
  historyList: document.querySelector("#historyList"),
  themeToggle: document.querySelector("#themeToggle"),
  guideForm: document.querySelector("#guideForm"),
  guideDestination: document.querySelector("#guideDestination"),
  guideIntent: document.querySelector("#guideIntent"),
  guideRecommendations: document.querySelector("#guideRecommendations"),
  guideGrid: document.querySelector("#guideGrid")
};

const guidePlatforms = [
  {
    name: "Google Maps",
    type: "地圖 / 動線",
    note: "查景點位置、餐廳評分、交通動線與收藏清單。",
    buildUrl: (q, intent) => `https://www.google.com/maps/search/${encodeURIComponent(`${q} ${intentKeyword(intent)}`)}`
  },
  {
    name: "YouTube",
    type: "影片攻略",
    note: "看實際街景、交通教學、住宿開箱與完整行程影片。",
    buildUrl: (q, intent) => `https://www.youtube.com/results?search_query=${encodeURIComponent(`${q} 旅遊攻略 ${intentKeyword(intent)}`)}`
  },
  {
    name: "Google 搜尋",
    type: "文章懶人包",
    note: "找部落格、官方資訊、近期交通票券與行程整理。",
    buildUrl: (q, intent) => `https://www.google.com/search?q=${encodeURIComponent(`${q} 自由行 攻略 ${intentKeyword(intent)}`)}`
  },
  {
    name: "Klook",
    type: "票券 / 活動",
    note: "查熱門票券、交通 pass、體驗活動與一日遊。",
    buildUrl: (q) => `https://www.klook.com/search/result/?query=${encodeURIComponent(q)}`
  },
  {
    name: "KKday",
    type: "票券 / 一日遊",
    note: "查在地體驗、交通、門票、包車與行程商品。",
    buildUrl: (q) => `https://www.kkday.com/zh-tw/search?keyword=${encodeURIComponent(q)}`
  },
  {
    name: "Tripadvisor",
    type: "評價 / 排名",
    note: "參考景點、餐廳、住宿評價與旅人排行。",
    buildUrl: (q) => `https://www.tripadvisor.com/Search?q=${encodeURIComponent(q)}`
  },
  {
    name: "Booking.com",
    type: "住宿",
    note: "比較住宿區域、價格、評分與交通便利性。",
    buildUrl: (q) => `https://www.booking.com/searchresults.zh-tw.html?ss=${encodeURIComponent(q)}`
  },
  {
    name: "官方旅遊網站",
    type: "官方資訊",
    note: "查簽證、交通、節慶、天氣與觀光局建議。",
    buildUrl: (q) => `https://www.google.com/search?q=${encodeURIComponent(`${q} 官方 旅遊 網站 tourism official`)}`
  }
];

const guideRecommendationTemplates = [
  {
    title: "先看官方旅遊資訊",
    category: "安全有效",
    reason: "官方網站通常最適合確認簽證、交通、活動日期、季節限制和最新公告。",
    action: "把交通規則、營業時間和季節活動抄到每日行程備註。",
    query: (q) => `${q} 官方 旅遊 景點 交通`
  },
  {
    title: "建立 Google Maps 收藏清單",
    category: "動線規劃",
    reason: "地圖能快速看出景點彼此距離，避免同一天排到不同方向。",
    action: "把想去景點存成清單，再依區域分配到不同天。",
    query: (q) => `${q} 必去景點 美食 地圖`
  },
  {
    title: "看 1 到 2 支近期 YouTube 行程影片",
    category: "現場感",
    reason: "影片能看到實際街景、人潮、交通轉乘難度與餐廳排隊狀況。",
    action: "把影片中出現的景點、餐廳和交通方式填進每日卡片。",
    query: (q) => `${q} 自由行 行程 交通 美食`
  },
  {
    title: "比對 Klook / KKday 票券與交通 Pass",
    category: "省錢與預約",
    reason: "票券平台適合確認熱門門票、一日遊、交通 pass、包車與體驗活動。",
    action: "只把需要預約或可能省錢的票券加入預算，不要看到全部都買。",
    query: (q) => `${q} 票券 一日遊 交通 pass`
  },
  {
    title: "用 Tripadvisor 交叉檢查餐廳與景點評價",
    category: "避雷",
    reason: "旅人評價能補足部落格或影片沒有提到的缺點，例如排隊、服務、價格和交通。",
    action: "把評價穩定的餐廳填到早餐、午餐、晚餐欄位。",
    query: (q) => `${q} restaurants attractions reviews`
  },
  {
    title: "查住宿區域攻略",
    category: "住宿決策",
    reason: "住宿地點會影響每天移動成本，尤其多城市或親子旅行差很多。",
    action: "把每天飯店分別填入每日行程，換飯店日安排輕鬆一點。",
    query: (q) => `${q} 住宿 區域 推薦 交通方便`
  }
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function todayDateValue() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadTrip() {
  try {
    const saved = JSON.parse(localStorage.getItem(TRIP_KEY));
    return normalizeTrip(saved?.days ? saved : clone(osakaTrip));
  } catch {
    return normalizeTrip(clone(osakaTrip));
  }
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function saveTrip() {
  localStorage.setItem(TRIP_KEY, JSON.stringify(trip));
}

function saveHistoryStore() {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function addTripToHistory(sourceTrip, reason = "手動儲存") {
  const entry = {
    id: crypto.randomUUID(),
    savedAt: new Date().toISOString(),
    reason,
    trip: clone(sourceTrip)
  };
  history = [entry, ...history].slice(0, 20);
  saveHistoryStore();
  return entry;
}

function normalizeTrip(source) {
  return {
    ...source,
    name: source.name || "我的旅行計畫",
    country: source.country || "自選國家",
    baseCity: source.baseCity || "自選城市",
    startDate: source.startDate || todayDateValue(),
    flightNo: source.flightNo || "",
    flightDeparture: source.flightDeparture || "",
    flightArrival: source.flightArrival || "",
    currency: source.currency || "TWD",
    rate: Number(source.rate || 1),
    pace: source.pace || "balanced",
    days: (source.days || []).map(normalizeDay)
  };
}

function normalizeDay(day) {
  const mealPlan = normalizeMealPlan(day);
  return {
    title: day.title || "未命名行程",
    place: day.place || "",
    hotelName: day.hotelName || day.accommodation || "",
    route: day.route || "",
    transportMode: day.transportMode || "",
    mealPlan,
    meals: [mealPlan.breakfast, mealPlan.lunch, mealPlan.dinner].filter(Boolean),
    mapQuery: day.mapQuery || day.mapUrl || day.route || day.place || "",
    landmarks: normalizeLandmarks(day),
    photoUrl: day.photoUrl || "",
    budget: Number(day.budget || 0),
    items: Array.isArray(day.items) ? day.items : splitLines(day.items || "")
  };
}

function normalizeMealPlan(day) {
  if (day.mealPlan) {
    return {
      breakfast: day.mealPlan.breakfast || "",
      lunch: day.mealPlan.lunch || "",
      dinner: day.mealPlan.dinner || ""
    };
  }

  const meals = Array.isArray(day.meals) ? day.meals : splitList(day.meals || "");
  return {
    breakfast: day.breakfast || meals[0] || "",
    lunch: day.lunch || meals[1] || "",
    dinner: day.dinner || meals[2] || meals[0] || ""
  };
}

function splitLines(value) {
  return String(value).split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
}

function splitList(value) {
  return String(value).split(/[、,，\n]/).map((item) => item.trim()).filter(Boolean);
}

function normalizeLandmarks(day) {
  if (Array.isArray(day.landmarks)) {
    return day.landmarks.map((item) => String(item).trim()).filter(Boolean);
  }
  return splitLines(day.landmarks || day.landmarkText || "");
}

function normalizeCurrency(value) {
  return (value || "TWD").trim().slice(0, 3).toUpperCase() || "TWD";
}

function formatLocal(value) {
  const currency = normalizeCurrency(trip.currency);
  try {
    return new Intl.NumberFormat("zh-TW", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
  } catch {
    return `${currency} ${Math.round(value).toLocaleString("zh-TW")}`;
  }
}

function formatTwd(value) {
  return new Intl.NumberFormat("zh-TW", { style: "currency", currency: "TWD", maximumFractionDigits: 0 }).format(value);
}

function parseDateValue(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function dateForDay(index) {
  const start = parseDateValue(trip.startDate);
  if (!start) return null;
  const date = new Date(start);
  date.setDate(start.getDate() + index);
  return date;
}

function formatTripDate(date) {
  if (!date) return "未設定日期";
  return new Intl.DateTimeFormat("zh-TW", {
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  }).format(date);
}

function tripDateRangeText() {
  const start = dateForDay(0);
  if (!start) return "尚未設定出發日期";
  const end = dateForDay(Math.max(trip.days.length - 1, 0));
  const formatter = new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  });
  return trip.days.length > 1 ? `${formatter.format(start)} - ${formatter.format(end)}` : formatter.format(start);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function encodeSharePayload(value) {
  const json = JSON.stringify(normalizeTrip(value));
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function decodeSharePayload(payload) {
  const normalized = payload.replaceAll("-", "+").replaceAll("_", "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return normalizeTrip(JSON.parse(new TextDecoder().decode(bytes)));
}

function shareUrlForCurrentTrip() {
  const url = new URL(window.location.href);
  url.searchParams.set(SHARE_PARAM, encodeSharePayload(trip));
  url.hash = "";
  return url.toString();
}

function clearShareParamFromUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete(SHARE_PARAM);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function setShareMessage(html) {
  if (nodes.shareResult) nodes.shareResult.innerHTML = html;
}

function landmarkQuery(landmark, day) {
  return [landmark, day.place, trip.baseCity, trip.country].filter(Boolean).join(" ");
}

function travelModeParam(mode = "") {
  if (mode.includes("步行")) return "walking";
  if (mode.includes("車") || mode.includes("計程車") || mode.includes("包車")) return "driving";
  if (mode.includes("巴士") || mode.includes("地鐵") || mode.includes("電車") || mode.includes("新幹線")) return "transit";
  return "";
}

function landmarkDirectionsUrl(landmark, day) {
  const destination = landmarkQuery(landmark, day);
  const origin = day.hotelName || day.place || trip.baseCity || "";
  const mode = travelModeParam(day.transportMode);
  const params = new URLSearchParams({
    api: "1",
    destination
  });
  if (origin) params.set("origin", origin);
  if (mode) params.set("travelmode", mode);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function dayLandmarks(day) {
  return day.landmarks?.length ? day.landmarks : [day.place].filter(Boolean);
}

function primaryLandmark(day) {
  return dayLandmarks(day)[0] || "";
}

function renderTransportOptions(selected = "") {
  const options = ["", "步行", "步行 / 大眾運輸", "地鐵 / 電車", "巴士", "計程車", "租車自駕", "包車", "高鐵 / 新幹線", "飛機", "渡輪"];
  return options
    .map((option) => `<option value="${escapeHtml(option)}"${option === selected ? " selected" : ""}>${option || "選擇移動方式"}</option>`)
    .join("");
}

function intentKeyword(intent) {
  const keywords = {
    full: "行程 規劃",
    attractions: "景點 必去",
    food: "美食 餐廳",
    transport: "交通 路線",
    tickets: "票券 活動",
    hotel: "住宿 飯店"
  };
  return keywords[intent] || "行程 規劃";
}

function uniqueStops() {
  return new Set(trip.days.map((day) => day.place.trim()).filter(Boolean)).size;
}

function totalBudget(days = trip.days) {
  return days.reduce((sum, day) => sum + Number(day.budget || 0), 0);
}

function syncFields() {
  fields.tripName.value = trip.name;
  fields.country.value = trip.country;
  fields.baseCity.value = trip.baseCity;
  fields.startDate.value = trip.startDate || todayDateValue();
  fields.flightNo.value = trip.flightNo || "";
  fields.flightDeparture.value = trip.flightDeparture || "";
  fields.flightArrival.value = trip.flightArrival || "";
  fields.currency.value = normalizeCurrency(trip.currency);
  fields.rate.value = trip.rate;
  fields.pace.value = trip.pace;
}

function updateTripFromFields() {
  trip.name = fields.tripName.value.trim() || "我的旅行計畫";
  trip.country = fields.country.value.trim() || "自選國家";
  trip.baseCity = fields.baseCity.value.trim() || "自選城市";
  trip.startDate = fields.startDate.value || todayDateValue();
  trip.flightNo = fields.flightNo.value.trim();
  trip.flightDeparture = fields.flightDeparture.value.trim();
  trip.flightArrival = fields.flightArrival.value.trim();
  trip.currency = normalizeCurrency(fields.currency.value);
  trip.rate = Number(fields.rate.value) || 1;
  trip.pace = fields.pace.value;
  saveTrip();
  render();
}

function render() {
  const total = totalBudget();
  const stops = uniqueStops();
  const flightText = [trip.flightNo, trip.flightDeparture && `起飛 ${trip.flightDeparture}`, trip.flightArrival && `抵達 ${trip.flightArrival}`].filter(Boolean).join("｜") || "尚未填航班";
  nodes.heroTitle.textContent = trip.name;
  nodes.heroCopy.textContent = `${trip.country}・${trip.baseCity}，${tripDateRangeText()}，航班 ${flightText}，目前規劃 ${trip.days.length} 天。每日住宿可在行程卡中個別填寫。`;
  nodes.statDays.textContent = trip.days.length;
  nodes.statStops.textContent = stops;
  nodes.statBudget.textContent = Math.round(total).toLocaleString("zh-TW");
  nodes.statCurrency.textContent = normalizeCurrency(trip.currency);
  nodes.visibleDays.textContent = trip.days.length;
  nodes.totalLocal.textContent = formatLocal(total);
  nodes.totalTwd.textContent = formatTwd(total * trip.rate);
  nodes.paceHint.textContent = paceText[trip.pace];
  nodes.dayList.innerHTML = trip.days.length ? trip.days.map(renderDay).join("") : `<div class="empty-state">目前沒有行程。你可以新增一天、貼上行程匯入，或載入大阪範例。</div>`;
  renderHistory();

  document.querySelectorAll("[data-edit-day]").forEach((button) => {
    button.addEventListener("click", () => {
      editingDayIndex = Number(button.dataset.editDay);
      render();
    });
  });

  document.querySelectorAll("[data-cancel-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      editingDayIndex = null;
      render();
    });
  });

  document.querySelectorAll("[data-save-day]").forEach((form) => {
    form.addEventListener("submit", saveEditedDay);
  });

  document.querySelectorAll("[data-delete-day]").forEach((button) => {
    button.addEventListener("click", () => {
      trip.days.splice(Number(button.dataset.deleteDay), 1);
      editingDayIndex = null;
      saveTrip();
      render();
    });
  });

  document.querySelectorAll("[data-landmark-select]").forEach((select) => {
    select.addEventListener("change", () => updateLandmarkMap(select));
  });
}

function renderDay(day, index) {
  if (editingDayIndex === index) return renderDayEditor(day, index);
  const items = day.items?.length ? day.items : ["尚未填入細節"];
  const mealPlan = normalizeMealPlan(day);
  const landmarks = dayLandmarks(day);
  const selectedLandmark = primaryLandmark(day);
  const dayDateText = formatTripDate(dateForDay(index));
  return `
    <article class="day-card booklet-page">
      <div class="day-number"><span>Day</span>${index + 1}</div>
      <div>
        <div class="card-title-row">
          <div>
            <p class="booklet-kicker">${escapeHtml(trip.country)} ${escapeHtml(trip.baseCity)} 行程本</p>
            <p class="day-date">${escapeHtml(dayDateText)}</p>
            <h3>${escapeHtml(day.title)}</h3>
          </div>
          <div class="card-actions">
            <button class="icon-button" type="button" data-edit-day="${index}" aria-label="編輯第 ${index + 1} 天">編輯</button>
            <button class="icon-button" type="button" data-delete-day="${index}" aria-label="刪除第 ${index + 1} 天">刪除</button>
          </div>
        </div>
        ${day.photoUrl ? `<img class="day-photo" src="${escapeHtml(day.photoUrl)}" alt="${escapeHtml(day.title)} 照片" loading="lazy" />` : ""}
        <div class="day-meta">
          <span class="tag">${escapeHtml(dayDateText)}</span>
          <span class="tag">${escapeHtml(day.place)}</span>
          ${day.hotelName ? `<span class="tag">${escapeHtml(day.hotelName)}</span>` : ""}
          ${day.transportMode ? `<span class="tag">${escapeHtml(day.transportMode)}</span>` : ""}
          <span class="tag">${normalizeCurrency(trip.currency)}</span>
        </div>
        <div class="meal-grid" aria-label="早中晚餐">
          <div><span>早餐</span><strong>${escapeHtml(mealPlan.breakfast || "尚未填店名")}</strong></div>
          <div><span>午餐</span><strong>${escapeHtml(mealPlan.lunch || "尚未填店名")}</strong></div>
          <div><span>晚餐</span><strong>${escapeHtml(mealPlan.dinner || "尚未填店名")}</strong></div>
        </div>
        <dl class="detail-list">
          <div><dt>住宿飯店</dt><dd>${escapeHtml(day.hotelName || "尚未填住宿飯店")}</dd></div>
          <div><dt>移動方式</dt><dd>${escapeHtml(day.transportMode || "尚未選擇")}</dd></div>
          <div><dt>移動路線</dt><dd>${escapeHtml(day.route || "尚未填移動路線")}</dd></div>
        </dl>
        <div class="map-card">
          <div class="map-toolbar" aria-label="景點導航選單">
            <label>
              <span>確定景點快速導航</span>
              <select data-landmark-select="${index}">
                ${landmarks.map((landmark) => `<option value="${escapeHtml(landmark)}">${escapeHtml(landmark)}</option>`).join("")}
              </select>
            </label>
            <div class="map-actions">
              <a data-landmark-directions="${index}" href="${selectedLandmark ? landmarkDirectionsUrl(selectedLandmark, day) : "#"}" target="_blank" rel="noreferrer">開始導航</a>
            </div>
          </div>
        </div>
        <ul class="timeline">
          ${items.map((item) => `<li><time>•</time><span>${escapeHtml(item)}</span></li>`).join("")}
        </ul>
        <div class="cost-row">
          <span>${escapeHtml(day.transportMode || "尚未填移動方式")}</span>
          <strong>${formatLocal(Number(day.budget || 0))}</strong>
        </div>
      </div>
    </article>
  `;
}

function updateLandmarkMap(select) {
  const dayIndex = Number(select.dataset.landmarkSelect);
  const day = trip.days[dayIndex];
  if (!day) return;
  const landmark = select.value;
  const directionsLink = document.querySelector(`[data-landmark-directions="${dayIndex}"]`);
  if (directionsLink) directionsLink.href = landmarkDirectionsUrl(landmark, day);
}

function renderDayEditor(day, index) {
  const dayDateText = formatTripDate(dateForDay(index));
  return `
    <article class="day-card day-card--editing">
      <div class="day-number"><span>Day</span>${index + 1}</div>
      <form class="edit-day-form" data-save-day="${index}">
        <div class="card-title-row">
          <div>
            <p class="day-date">${escapeHtml(dayDateText)}</p>
            <h3>編輯第 ${index + 1} 天</h3>
          </div>
          <button class="icon-button" type="button" data-cancel-edit="${index}">取消</button>
        </div>
        <input name="title" type="text" value="${escapeHtml(day.title)}" placeholder="標題" required />
        <input name="place" type="text" value="${escapeHtml(day.place)}" placeholder="城市/區域" required />
        <input name="hotelName" type="text" value="${escapeHtml(day.hotelName || "")}" placeholder="當晚住宿飯店" />
        <select name="transportMode">${renderTransportOptions(day.transportMode || "")}</select>
        <input name="route" type="text" value="${escapeHtml(day.route || "")}" placeholder="移動路線，例如：飯店 -> 景點 -> 晚餐" />
        <input name="budget" type="number" min="0" step="1" value="${Number(day.budget || 0)}" placeholder="預算" />
        <input name="breakfast" type="text" value="${escapeHtml(day.mealPlan?.breakfast || "")}" placeholder="早餐店名" />
        <input name="lunch" type="text" value="${escapeHtml(day.mealPlan?.lunch || "")}" placeholder="午餐店名" />
        <input name="dinner" type="text" value="${escapeHtml(day.mealPlan?.dinner || "")}" placeholder="晚餐店名" />
        <input name="mapQuery" type="text" value="${escapeHtml(day.mapQuery || "")}" placeholder="地圖搜尋，例如：大阪城 或 飯店到大阪城" />
        <input name="photoUrl" type="url" value="${escapeHtml(day.photoUrl || "")}" placeholder="照片網址，例如：https://..." />
        <textarea name="landmarks" rows="4" placeholder="景點地標，每行一個">${escapeHtml((day.landmarks || []).join("\n"))}</textarea>
        <textarea name="items" rows="5" placeholder="每行一個行程">${escapeHtml((day.items || []).join("\n"))}</textarea>
        <button type="submit">儲存這一天</button>
      </form>
    </article>
  `;
}

function renderChecklist() {
  nodes.checklist.innerHTML = checklist
    .map((item, index) => `<label class="check-item"><input type="checkbox" data-check="${index}" /><span>${item}</span></label>`)
    .join("");
}

function renderHistory() {
  nodes.historyList.innerHTML = history.length
    ? history
        .map(
          (entry, index) => `
            <article class="history-card">
              <div>
                <h3>${escapeHtml(entry.trip.name)}</h3>
                <p>${escapeHtml(entry.trip.country)}・${escapeHtml(entry.trip.baseCity)}｜${escapeHtml(historyDateRange(entry.trip))}｜${entry.trip.days.length} 天｜${escapeHtml(entry.trip.flightNo || "未填航班")}｜${escapeHtml(entry.trip.flightDeparture || "未填起飛")} -> ${escapeHtml(entry.trip.flightArrival || "未填抵達")}｜${formatHistoryBudget(entry.trip)}</p>
                <span>${new Date(entry.savedAt).toLocaleString("zh-TW")}</span>
              </div>
              <div class="history-actions">
                <button type="button" data-load-history="${index}">載入</button>
                <button type="button" data-delete-history="${index}">刪除</button>
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state">尚未保存歷史行程。按「儲存目前行程」就會出現在這裡。</div>`;

  document.querySelectorAll("[data-load-history]").forEach((button) => {
    button.addEventListener("click", () => {
      trip = normalizeTrip(clone(history[Number(button.dataset.loadHistory)].trip));
      saveTrip();
      syncFields();
      switchTab("planner");
      render();
    });
  });

  document.querySelectorAll("[data-delete-history]").forEach((button) => {
    button.addEventListener("click", () => {
      history.splice(Number(button.dataset.deleteHistory), 1);
      saveHistoryStore();
      renderHistory();
    });
  });
}

function formatHistoryBudget(savedTrip) {
  const total = totalBudget(savedTrip.days);
  const currency = normalizeCurrency(savedTrip.currency);
  return `${currency} ${Math.round(total).toLocaleString("zh-TW")}`;
}

function historyDateRange(savedTrip) {
  const start = parseDateValue(savedTrip.startDate);
  if (!start) return "未填出發日期";
  const end = new Date(start);
  end.setDate(start.getDate() + Math.max((savedTrip.days || []).length - 1, 0));
  const formatter = new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  });
  return (savedTrip.days || []).length > 1 ? `${formatter.format(start)} - ${formatter.format(end)}` : formatter.format(start);
}

function addDay(event) {
  event.preventDefault();
  const items = splitLines(fields.dayItems.value);
  trip.days.push(normalizeDay({
    title: fields.dayTitle.value.trim(),
    place: fields.dayPlace.value.trim(),
    hotelName: fields.dayHotelName.value.trim(),
    transportMode: fields.dayTransportMode.value.trim(),
    route: fields.dayRoute.value.trim(),
    budget: Number(fields.dayBudget.value) || 0,
    mealPlan: {
      breakfast: fields.dayBreakfast.value.trim(),
      lunch: fields.dayLunch.value.trim(),
      dinner: fields.dayDinner.value.trim()
    },
    mapQuery: fields.dayMapQuery.value.trim(),
    photoUrl: fields.dayPhotoUrl.value.trim(),
    landmarks: splitLines(fields.dayLandmarks.value),
    items
  }));
  nodes.dayForm.reset();
  saveTrip();
  render();
}

function saveEditedDay(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const index = Number(form.dataset.saveDay);
  const data = new FormData(form);
  trip.days[index] = normalizeDay({
    title: data.get("title"),
    place: data.get("place"),
    hotelName: data.get("hotelName"),
    transportMode: data.get("transportMode"),
    route: data.get("route"),
    budget: data.get("budget"),
    mealPlan: {
      breakfast: data.get("breakfast"),
      lunch: data.get("lunch"),
      dinner: data.get("dinner")
    },
    mapQuery: data.get("mapQuery"),
    photoUrl: data.get("photoUrl"),
    landmarks: splitLines(data.get("landmarks")),
    items: splitLines(data.get("items"))
  });
  editingDayIndex = null;
  saveTrip();
  render();
}

function addSampleDay() {
  trip.days.push({
    title: "自由探索日",
    place: trip.baseCity || "自選城市",
    hotelName: "請填當晚住宿飯店",
    route: "飯店 -> 喜歡的街區 -> 晚餐",
    transportMode: "步行 / 大眾運輸",
    budget: 2500,
    mealPlan: { breakfast: "在地早餐店", lunch: "街區小餐館", dinner: "夜景餐廳" },
    mapQuery: `${trip.baseCity || "自選城市"} 自由行景點`,
    landmarks: [trip.baseCity || "自選城市"],
    photoUrl: "",
    items: ["上午慢慢出門", "下午安排一個主要景點", "晚上留給美食或夜景"]
  });
  saveTrip();
  render();
}

function clearTrip() {
  if (!confirm("確定要清空所有每日行程嗎？旅行設定會保留。")) return;
  trip.days = [];
  saveTrip();
  render();
}

function loadOsakaTrip() {
  if (!confirm("要載入大阪 8 天 7 夜範例並取代目前行程嗎？")) return;
  trip = normalizeTrip(clone(osakaTrip));
  saveTrip();
  syncFields();
  render();
}

function saveCurrentToHistory() {
  addTripToHistory(trip, "手動儲存");
  renderHistory();
  switchTab("history");
}

async function createShareLink() {
  const shareUrl = shareUrlForCurrentTrip();
  const isLong = shareUrl.length > SHARE_LENGTH_WARNING;
  let copied = false;

  try {
    await navigator.clipboard.writeText(shareUrl);
    copied = true;
  } catch {
    copied = false;
  }

  setShareMessage(`
    <label for="shareLink">分享網址</label>
    <textarea id="shareLink" rows="4" readonly>${escapeHtml(shareUrl)}</textarea>
    <p>${copied ? "已複製到剪貼簿。" : "瀏覽器沒有允許自動複製，可以手動複製上方網址。"}${isLong ? " 這趟行程內容很多，網址會比較長；若通訊軟體截斷連結，可改用匯入文字備援。" : ""}</p>
  `);
}

function applySharedTripFromUrl() {
  const url = new URL(window.location.href);
  const payload = url.searchParams.get(SHARE_PARAM);
  if (!payload) return false;

  try {
    const sharedTrip = decodeSharePayload(payload);
    addTripToHistory(trip, "分享連結載入前自動備份");
    trip = sharedTrip;
    saveTrip();
    clearShareParamFromUrl();
    syncFields();
    switchTab("planner");
    setShareMessage(`<p>已載入分享行程，原本行程已自動存到歷史行程。</p>`);
    return true;
  } catch {
    clearShareParamFromUrl();
    setShareMessage(`<p>分享連結無法讀取，沒有覆蓋目前行程。請確認網址是否完整。</p>`);
    return false;
  }
}

function updateOfflineStatus(message) {
  if (nodes.offlineStatus) nodes.offlineStatus.textContent = message;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    updateOfflineStatus("這個瀏覽器不支援離線安裝功能。");
    return;
  }

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("service-worker.js");
      await registration.update();
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
      updateOfflineStatus(registration.active ? "離線功能已啟用，可安裝到手機主畫面。" : "離線功能正在準備中，重新開啟後即可使用。");
    } catch {
      updateOfflineStatus("離線功能暫時無法啟用，線上使用不受影響。");
    }
  });
}

function parseImportedTrip(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const days = [];
  let current = null;

  const startDay = (title) => {
    current = { title: title || `第 ${days.length + 1} 天`, place: trip.baseCity || "", hotelName: "", route: "", transportMode: "", budget: 0, mealPlan: { breakfast: "", lunch: "", dinner: "" }, mapQuery: "", landmarks: [], photoUrl: "", items: [] };
    days.push(current);
  };

  lines.forEach((line) => {
    const dayMatch = line.match(/^(?:第\s*)?(\d+)\s*(?:天|日)|^day\s*(\d+)/i);
    if (dayMatch) {
      const cleaned = line
        .replace(/^(?:第\s*)?\d+\s*(?:天|日)\s*[:：\-、]?\s*/i, "")
        .replace(/^day\s*\d+\s*[:：\-、]?\s*/i, "");
      startDay(cleaned);
      return;
    }

    if (!current) startDay("");

    if (/^(地點|城市|區域|place)\s*[:：]/i.test(line)) {
      current.place = line.replace(/^(地點|城市|區域|place)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(住宿|住宿飯店|飯店|酒店|hotel|accommodation)\s*[:：]/i.test(line)) {
      current.hotelName = line.replace(/^(住宿|住宿飯店|飯店|酒店|hotel|accommodation)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(移動方式|交通方式|transport|交通工具)\s*[:：]/i.test(line)) {
      current.transportMode = line.replace(/^(移動方式|交通方式|transport|交通工具)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(交通|路線|動線|移動路線|route)\s*[:：]/i.test(line)) {
      current.route = line.replace(/^(交通|路線|動線|移動路線|route)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(吃飯|餐廳|餐飲|meals?)\s*[:：]/i.test(line)) {
      const meals = splitList(line.replace(/^(吃飯|餐廳|餐飲|meals?)\s*[:：]\s*/i, ""));
      current.mealPlan = { breakfast: meals[0] || "", lunch: meals[1] || "", dinner: meals[2] || meals[0] || "" };
      return;
    }

    if (/^(早餐|breakfast)\s*[:：]/i.test(line)) {
      current.mealPlan.breakfast = line.replace(/^(早餐|breakfast)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(午餐|lunch)\s*[:：]/i.test(line)) {
      current.mealPlan.lunch = line.replace(/^(午餐|lunch)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(晚餐|dinner)\s*[:：]/i.test(line)) {
      current.mealPlan.dinner = line.replace(/^(晚餐|dinner)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(地圖|map)\s*[:：]/i.test(line)) {
      current.mapQuery = line.replace(/^(地圖|map)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(景點|地標|景點地標|landmarks?|spots?)\s*[:：]/i.test(line)) {
      current.landmarks = splitList(line.replace(/^(景點|地標|景點地標|landmarks?|spots?)\s*[:：]\s*/i, ""));
      return;
    }

    if (/^(照片|圖片|photo|image)\s*[:：]/i.test(line)) {
      current.photoUrl = line.replace(/^(照片|圖片|photo|image)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(預算|花費|budget|cost)\s*[:：]/i.test(line)) {
      current.budget = Number(line.replace(/[^\d.]/g, "")) || 0;
      return;
    }

    current.items.push(line.replace(/^[-•*]\s*/, ""));
  });

  return days.filter((day) => day.title || day.items.length).map(normalizeDay);
}

function previewImport() {
  const days = parseImportedTrip(fields.importText.value);
  nodes.importPreview.innerHTML = days.length
    ? `<h3>解析結果：${days.length} 天</h3>${days.map((day, index) => {
        const mealPlan = normalizeMealPlan(day);
        const mealText = [mealPlan.breakfast, mealPlan.lunch, mealPlan.dinner].filter(Boolean).map(escapeHtml).join("、") || "未填";
        return `<div class="preview-day"><strong>Day ${index + 1}：${escapeHtml(day.title)}</strong><span>${escapeHtml(day.place || "未填地點")}｜${escapeHtml(day.transportMode || "未填移動方式")}｜${escapeHtml(day.route || "未填移動路線")}｜餐食 ${mealText}｜預算 ${day.budget || 0}</span></div>`;
      }).join("")}`
    : `<div class="empty-state">還沒有解析到行程。請貼上至少一段文字。</div>`;
}

function applyImport() {
  const days = parseImportedTrip(fields.importText.value);
  if (!days.length) {
    previewImport();
    return;
  }
  trip.days = days;
  saveTrip();
  syncFields();
  previewImport();
  switchTab("planner");
  render();
}

function switchTab(targetId) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tabTarget === targetId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === targetId);
  });
}

document.querySelectorAll("[data-tab-target]").forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tabTarget));
});

[fields.tripName, fields.country, fields.baseCity, fields.startDate, fields.flightNo, fields.flightDeparture, fields.flightArrival, fields.currency, fields.rate, fields.pace].forEach((field) => {
  field.addEventListener("input", updateTripFromFields);
});

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  nodes.themeToggle.textContent = isDark ? "淺色模式" : "深色模式";
  nodes.themeToggle.setAttribute("aria-pressed", String(isDark));
}

function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, theme);
  applyTheme();
}

function renderGuideLinks(event) {
  if (event) event.preventDefault();
  const destination = nodes.guideDestination.value.trim() || trip.baseCity || trip.country || "大阪";
  const intent = nodes.guideIntent.value;
  nodes.guideDestination.value = destination;
  nodes.guideRecommendations.innerHTML = `
    <div class="guide-heading">
      <h3>${escapeHtml(destination)} 推薦攻略清單</h3>
      <p>依照「先確認資訊、再排動線、最後訂票券」的順序整理，適合直接拿來規劃行程。</p>
    </div>
    <div class="recommendation-list">
      ${guideRecommendationTemplates
        .map((item, index) => {
          const url = `https://www.google.com/search?q=${encodeURIComponent(item.query(destination))}`;
          return `
            <article class="recommendation-card">
              <div class="recommendation-rank">${index + 1}</div>
              <div>
                <span>${item.category}</span>
                <h4>${item.title}</h4>
                <p>${item.reason}</p>
                <strong>${item.action}</strong>
              </div>
              <a href="${url}" target="_blank" rel="noreferrer">查攻略</a>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
  nodes.guideGrid.innerHTML = guidePlatforms
    .map((platform) => {
      const url = platform.buildUrl(destination, intent);
      return `
        <article class="guide-card">
          <div>
            <span>${platform.type}</span>
            <h3>${platform.name}</h3>
            <p>${platform.note}</p>
          </div>
          <a href="${url}" target="_blank" rel="noreferrer">開啟</a>
        </article>
      `;
    })
    .join("");
}

nodes.dayForm.addEventListener("submit", addDay);
nodes.addSample.addEventListener("click", addSampleDay);
nodes.clearTrip.addEventListener("click", clearTrip);
nodes.loadOsaka.addEventListener("click", loadOsakaTrip);
nodes.saveHistory.addEventListener("click", saveCurrentToHistory);
nodes.saveHistoryTop.addEventListener("click", saveCurrentToHistory);
nodes.createShareLink.addEventListener("click", createShareLink);
nodes.previewImport.addEventListener("click", previewImport);
nodes.applyImport.addEventListener("click", applyImport);
nodes.themeToggle.addEventListener("click", toggleTheme);
nodes.guideForm.addEventListener("submit", renderGuideLinks);

applyTheme();
applySharedTripFromUrl();
syncFields();
renderChecklist();
renderGuideLinks();
render();
registerServiceWorker();
