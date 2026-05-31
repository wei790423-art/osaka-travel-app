const TRIP_KEY = "global-trip-planner-v2";
const TRIP_COLLECTION_KEY = "global-trip-library-v1";
const ACTIVE_TRIP_ID_KEY = "global-trip-active-id-v1";
const HISTORY_KEY = "global-trip-history-v1";
const THEME_KEY = "global-trip-theme-v1";
const CLOUD_TRIP_MAP_KEY = "global-trip-cloud-map-v1";
const CLOUD_CLIENT_ID_KEY = "global-trip-cloud-client-id-v1";
const CLOUD_AUTO_SYNC_DELAY = 1500;
const SHARE_PARAM = "share";
const SHARE_LENGTH_WARNING = 6500;
const DEFAULT_TWD_RATES = {
  TWD: 1,
  JPY: 0.22,
  CNY: 4.63,
  USD: 31.1,
  KRW: 0.023,
  HKD: 3.99,
  AUD: 20.5,
  EUR: 35.3,
  GBP: 41.7,
  THB: 0.95,
  SGD: 24.2,
  VND: 0.0012,
  IDR: 0.0019,
  MYR: 7.35,
  PHP: 0.56,
  CAD: 22.8,
  CHF: 37.8
};

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
      notes: "抵達後先確認交通卡、網路與飯店入住時間。",
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
let trips = loadTripLibrary();
let activeTripId = localStorage.getItem(ACTIVE_TRIP_ID_KEY) || "";
const libraryState = ensureTripLibrary(trip, trips, activeTripId);
trip = libraryState.trip;
trips = libraryState.trips;
activeTripId = libraryState.activeTripId;
let history = loadHistory();
let editingDayIndex = null;
let plannerView = "home";
let theme = localStorage.getItem(THEME_KEY) || "light";
let supabaseClient = null;
let supabaseSession = null;
let cloudTripMap = loadCloudTripMap();
let cloudTrips = [];
let cloudRealtimeChannel = null;
let cloudAutoSyncTimer = null;
let cloudSyncInFlight = false;
let cloudSyncQueued = false;
let cloudApplyingRemote = false;
let mobileTripSearchTerm = "";
const cloudClientId = getCloudClientId();

const fields = {
  tripSelector: document.querySelector("#tripSelector"),
  newTripName: document.querySelector("#newTripName"),
  authEmail: document.querySelector("#authEmail"),
  authPassword: document.querySelector("#authPassword"),
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
  dayHasFlight: document.querySelector("#dayHasFlight"),
  dayFlightNo: document.querySelector("#dayFlightNo"),
  dayFlightDeparture: document.querySelector("#dayFlightDeparture"),
  dayFlightArrival: document.querySelector("#dayFlightArrival"),
  dayNotes: document.querySelector("#dayNotes"),
  dayItems: document.querySelector("#dayItems"),
  dayBackupLandmarks: document.querySelector("#dayBackupLandmarks"),
  placePoolText: document.querySelector("#placePoolText"),
  placePoolDays: document.querySelector("#placePoolDays"),
  importText: document.querySelector("#importText"),
  ticketType: document.querySelector("#ticketType"),
  ticketName: document.querySelector("#ticketName"),
  ticketDate: document.querySelector("#ticketDate"),
  ticketCode: document.querySelector("#ticketCode"),
  ticketUrl: document.querySelector("#ticketUrl"),
  ticketNote: document.querySelector("#ticketNote")
};

const nodes = {
  heroTitle: document.querySelector("#heroTitle"),
  heroCopy: document.querySelector("#heroCopy"),
  plannerHome: document.querySelector("#plannerHome"),
  plannerDetail: document.querySelector("#plannerDetail"),
  tripHomeGrid: document.querySelector("#tripHomeGrid"),
  homeTripCount: document.querySelector("#homeTripCount"),
  homeDayCount: document.querySelector("#homeDayCount"),
  homeNextTrip: document.querySelector("#homeNextTrip"),
  mobileTripSearch: document.querySelector("#mobileTripSearch"),
  mobileThemeToggle: document.querySelector("#mobileThemeToggle"),
  mobileCloudButton: document.querySelector("#mobileCloudButton"),
  homeThemeToggle: document.querySelector("#homeThemeToggle"),
  homeCloudButton: document.querySelector("#homeCloudButton"),
  dashboardTripCover: document.querySelector("#dashboardTripCover"),
  dashboardTripTitle: document.querySelector("#dashboardTripTitle"),
  dashboardTripMeta: document.querySelector("#dashboardTripMeta"),
  dashboardCountdownLabel: document.querySelector("#dashboardCountdownLabel"),
  dashboardCountdownValue: document.querySelector("#dashboardCountdownValue"),
  dashboardCountdownUnit: document.querySelector("#dashboardCountdownUnit"),
  dashboardProgressText: document.querySelector("#dashboardProgressText"),
  dashboardProgressFill: document.querySelector("#dashboardProgressFill"),
  dashboardJourneyDates: document.querySelector("#dashboardJourneyDates"),
  dashboardJourneyStops: document.querySelector("#dashboardJourneyStops"),
  dashboardOpenTrip: document.querySelector("#dashboardOpenTrip"),
  dashboardNewTrip: document.querySelector("#dashboardNewTrip"),
  dashboardTripCount: document.querySelector("#dashboardTripCount"),
  dashboardDayCount: document.querySelector("#dashboardDayCount"),
  dashboardNextTrip: document.querySelector("#dashboardNextTrip"),
  dashboardCloudStatus: document.querySelector("#dashboardCloudStatus"),
  createTripFromHome: document.querySelector("#createTripFromHome"),
  openCurrentTrip: document.querySelector("#openCurrentTrip"),
  backToPlannerHome: document.querySelector("#backToPlannerHome"),
  homeNavButton: document.querySelector("#homeNavButton"),
  flightLookup: document.querySelector("#flightLookup"),
  flightLookupStatus: document.querySelector("#flightLookupStatus"),
  dayFlightFields: document.querySelector("#dayFlightFields"),
  createTrip: document.querySelector("#createTrip"),
  renameTrip: document.querySelector("#renameTrip"),
  deleteTrip: document.querySelector("#deleteTrip"),
  cloudDialog: document.querySelector("#cloudDialog"),
  openCloudPanel: document.querySelector("#openCloudPanel"),
  closeCloudPanel: document.querySelector("#closeCloudPanel"),
  cloudNavLabel: document.querySelector("#cloudNavLabel"),
  cloudStatus: document.querySelector("#cloudStatus"),
  cloudUserBadge: document.querySelector("#cloudUserBadge"),
  signIn: document.querySelector("#signIn"),
  signUp: document.querySelector("#signUp"),
  signOut: document.querySelector("#signOut"),
  syncTripToCloud: document.querySelector("#syncTripToCloud"),
  refreshCloudTrips: document.querySelector("#refreshCloudTrips"),
  cloudTripList: document.querySelector("#cloudTripList"),
  tripLibraryStatus: document.querySelector("#tripLibraryStatus"),
  statDays: document.querySelector("#statDays"),
  statStops: document.querySelector("#statStops"),
  statBudget: document.querySelector("#statBudget"),
  statCurrency: document.querySelector("#statCurrency"),
  visibleDays: document.querySelector("#visibleDays"),
  totalLocal: document.querySelector("#totalLocal"),
  totalTwd: document.querySelector("#totalTwd"),
  paceHint: document.querySelector("#paceHint"),
  agencyBookTitle: document.querySelector("#agencyBookTitle"),
  agencyBookSubtitle: document.querySelector("#agencyBookSubtitle"),
  agencyBookDays: document.querySelector("#agencyBookDays"),
  expertRouteSummary: document.querySelector("#expertRouteSummary"),
  expertThemeList: document.querySelector("#expertThemeList"),
  expertMonthList: document.querySelector("#expertMonthList"),
  expertRegionList: document.querySelector("#expertRegionList"),
  expertHighlightList: document.querySelector("#expertHighlightList"),
  agencyDailyTable: document.querySelector("#agencyDailyTable"),
  agencyHotelList: document.querySelector("#agencyHotelList"),
  agencyFlightList: document.querySelector("#agencyFlightList"),
  dayList: document.querySelector("#dayList"),
  checklist: document.querySelector("#checklist"),
  dayForm: document.querySelector("#dayForm"),
  addSample: document.querySelector("#addSample"),
  clearTrip: document.querySelector("#clearTrip"),
  loadOsaka: document.querySelector("#loadOsaka"),
  saveHistory: document.querySelector("#saveHistory"),
  saveHistoryTop: document.querySelector("#saveHistoryTop"),
  printItinerary: document.querySelector("#printItinerary"),
  optimizePlaces: document.querySelector("#optimizePlaces"),
  placePoolStatus: document.querySelector("#placePoolStatus"),
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
  guidePreview: document.querySelector("#guidePreview"),
  guideRecommendations: document.querySelector("#guideRecommendations"),
  guideGrid: document.querySelector("#guideGrid"),
  tripMap: document.querySelector("#tripMap"),
  foodForm: document.querySelector("#foodForm"),
  foodDestination: document.querySelector("#foodDestination"),
  foodCategory: document.querySelector("#foodCategory"),
  foodQuickLinks: document.querySelector("#foodQuickLinks"),
  foodGrid: document.querySelector("#foodGrid"),
  countdownDays: document.querySelector("#countdownDays"),
  countdownLabel: document.querySelector("#countdownLabel"),
  calcLocal: document.querySelector("#calcLocal"),
  calcTwd: document.querySelector("#calcTwd"),
  calcLocalLabel: document.querySelector("#calcLocalLabel"),
  calcRateDisplay: document.querySelector("#calcRateDisplay"),
  calcPresets: document.querySelector("#calcPresets"),
  ticketForm: document.querySelector("#ticketForm"),
  ticketList: document.querySelector("#ticketList")
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
    name: "Trip.com",
    type: "機票 / 住宿 / 攻略",
    note: "查機票、住宿、景點排行與目的地旅遊指南。",
    buildUrl: (q) => `https://tw.trip.com/search/${encodeURIComponent(q)}`
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
    source: "youtube",
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

function loadCloudTripMap() {
  try {
    return JSON.parse(localStorage.getItem(CLOUD_TRIP_MAP_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCloudTripMap() {
  localStorage.setItem(CLOUD_TRIP_MAP_KEY, JSON.stringify(cloudTripMap));
}

function getCloudClientId() {
  let clientId = localStorage.getItem(CLOUD_CLIENT_ID_KEY);
  if (!clientId) {
    clientId = makeTripId();
    localStorage.setItem(CLOUD_CLIENT_ID_KEY, clientId);
  }
  return clientId;
}

function makeTripId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `trip-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function loadTripLibrary() {
  try {
    const saved = JSON.parse(localStorage.getItem(TRIP_COLLECTION_KEY));
    return Array.isArray(saved)
      ? saved
          .filter((entry) => entry?.trip?.days)
          .map((entry) => ({
            id: entry.id || makeTripId(),
            updatedAt: entry.updatedAt || new Date().toISOString(),
            trip: normalizeTrip(entry.trip)
          }))
      : [];
  } catch {
    return [];
  }
}

function saveTripLibrary() {
  localStorage.setItem(TRIP_COLLECTION_KEY, JSON.stringify(trips));
}

function ensureTripLibrary(currentTrip, savedTrips, savedActiveId) {
  let nextTrips = savedTrips;
  let nextActiveId = savedActiveId;

  if (!nextTrips.length) {
    nextActiveId = makeTripId();
    nextTrips = [{
      id: nextActiveId,
      updatedAt: new Date().toISOString(),
      trip: normalizeTrip(currentTrip)
    }];
  }

  if (!nextTrips.some((entry) => entry.id === nextActiveId)) {
    nextActiveId = nextTrips[0].id;
  }

  const activeEntry = nextTrips.find((entry) => entry.id === nextActiveId) || nextTrips[0];
  localStorage.setItem(ACTIVE_TRIP_ID_KEY, activeEntry.id);
  localStorage.setItem(TRIP_COLLECTION_KEY, JSON.stringify(nextTrips));
  localStorage.setItem(TRIP_KEY, JSON.stringify(activeEntry.trip));

  return {
    trip: normalizeTrip(activeEntry.trip),
    trips: nextTrips,
    activeTripId: activeEntry.id
  };
}

function blankTrip(name = "新的旅行") {
  return normalizeTrip({
    name,
    country: "自選國家",
    baseCity: "自選城市",
    startDate: todayDateValue(),
    flightNo: "",
    flightDeparture: "",
    flightArrival: "",
    currency: "TWD",
    rate: 1,
    pace: "balanced",
    tickets: [],
    days: []
  });
}

function syncActiveTripEntry() {
  const now = new Date().toISOString();
  const index = trips.findIndex((entry) => entry.id === activeTripId);
  const entry = {
    id: activeTripId || makeTripId(),
    updatedAt: now,
    trip: normalizeTrip(trip)
  };

  activeTripId = entry.id;
  if (index >= 0) {
    trips[index] = entry;
  } else {
    trips = [entry, ...trips];
  }

  saveTripLibrary();
  localStorage.setItem(ACTIVE_TRIP_ID_KEY, activeTripId);
}

function saveTrip(options = {}) {
  trip = normalizeTrip(trip);
  localStorage.setItem(TRIP_KEY, JSON.stringify(trip));
  syncActiveTripEntry();
  if (!options.skipCloudSync) queueCloudAutoSync();
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
    rate: Number(source.rate || defaultRateForCurrency(source.currency)),
    pace: source.pace || "balanced",
    tickets: Array.isArray(source.tickets) ? source.tickets.map(normalizeTicket) : [],
    days: (source.days || []).map(normalizeDay)
  };
}

function normalizeDay(day) {
  const mealPlan = normalizeMealPlan(day);
  return {
    title: day.title || "未命名行程",
    place: day.place || "",
    hotelName: day.hotelName || day.accommodation || "",
    flightNo: day.flightNo || "",
    flightDeparture: day.flightDeparture || "",
    flightArrival: day.flightArrival || "",
    route: day.route || "",
    transportMode: day.transportMode || "",
    mealPlan,
    meals: [mealPlan.breakfast, mealPlan.lunch, mealPlan.dinner].filter(Boolean),
    mapQuery: day.mapQuery || day.mapUrl || day.route || day.place || "",
    landmarks: normalizeLandmarks(day),
    backupLandmarks: Array.isArray(day.backupLandmarks) ? day.backupLandmarks.map(s => String(s).trim()).filter(Boolean) : splitLines(day.backupLandmarks || ""),
    notes: day.notes || day.note || "",
    photoUrl: day.photoUrl || "",
    budget: Number(day.budget || 0),
    items: Array.isArray(day.items) ? day.items : splitLines(day.items || "")
  };
}

function normalizeTicket(ticket) {
  return {
    id: ticket.id || crypto.randomUUID(),
    type: ticket.type || "其他",
    name: ticket.name || "未命名票券",
    date: ticket.date || "",
    code: ticket.code || "",
    url: ticket.url || "",
    note: ticket.note || ""
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
  const raw = String(value || "TWD").trim();
  const compact = raw.replace(/\s+/g, "").toLowerCase();
  const currencyAliases = {
    "台幣": "TWD",
    "臺幣": "TWD",
    "新台幣": "TWD",
    "新臺幣": "TWD",
    "台灣幣": "TWD",
    "nt": "TWD",
    "ntd": "TWD",
    "日幣": "JPY",
    "日圓": "JPY",
    "日元": "JPY",
    "日本圓": "JPY",
    "日本円": "JPY",
    "美金": "USD",
    "美元": "USD",
    "美幣": "USD",
    "韓幣": "KRW",
    "韓元": "KRW",
    "韓圜": "KRW",
    "港幣": "HKD",
    "港元": "HKD",
    "澳幣": "AUD",
    "澳元": "AUD",
    "歐元": "EUR",
    "歐幣": "EUR",
    "英鎊": "GBP",
    "人民幣": "CNY",
    "人民元": "CNY",
    "泰銖": "THB",
    "泰幣": "THB",
    "新加坡幣": "SGD",
    "新幣": "SGD",
    "越南盾": "VND",
    "越南幣": "VND",
    "印尼盾": "IDR",
    "印尼幣": "IDR",
    "馬幣": "MYR",
    "馬來西亞幣": "MYR",
    "菲律賓披索": "PHP",
    "披索": "PHP",
    "加拿大幣": "CAD",
    "加幣": "CAD",
    "瑞士法郎": "CHF"
  };
  if (currencyAliases[compact]) return currencyAliases[compact];
  return raw.slice(0, 3).toUpperCase() || "TWD";
}

function defaultRateForCurrency(currency) {
  return DEFAULT_TWD_RATES[normalizeCurrency(currency)] || 1;
}

function currencyForDestination(country = "", city = "") {
  const destination = `${country} ${city}`.toLowerCase();
  const matches = [
    { pattern: /中國|大陸|上海|北京|雲南|昆明|大理|麗江|香格里拉|哈爾濱|深圳|廣州|成都|重慶|china/, currency: "CNY" },
    { pattern: /日本|東京|大阪|京都|奈良|神戶|北海道|沖繩|japan/, currency: "JPY" },
    { pattern: /台灣|臺灣|taiwan/, currency: "TWD" },
    { pattern: /韓國|首爾|釜山|korea/, currency: "KRW" },
    { pattern: /香港|hong kong/, currency: "HKD" },
    { pattern: /泰國|曼谷|清邁|thailand/, currency: "THB" },
    { pattern: /新加坡|singapore/, currency: "SGD" },
    { pattern: /越南|河內|胡志明|峴港|vietnam/, currency: "VND" },
    { pattern: /馬來西亞|吉隆坡|malaysia/, currency: "MYR" },
    { pattern: /英國|倫敦|united kingdom|england|london/, currency: "GBP" },
    { pattern: /歐元區|法國|巴黎|德國|義大利|西班牙|荷蘭|奧地利|euro|france|germany|italy|spain/, currency: "EUR" },
    { pattern: /澳洲|澳大利亞|雪梨|墨爾本|australia/, currency: "AUD" },
    { pattern: /加拿大|canada/, currency: "CAD" },
    { pattern: /美國|紐約|洛杉磯|夏威夷|usa|united states/, currency: "USD" }
  ];
  return matches.find((entry) => entry.pattern.test(destination))?.currency || "";
}

function applyDestinationCurrency() {
  const currency = currencyForDestination(fields.country.value, fields.baseCity.value);
  if (!currency) return;
  fields.currency.value = currency;
  fields.rate.value = defaultRateForCurrency(currency);
}

function flightLookupUrl(flightNo = "") {
  const normalized = String(flightNo).replace(/\s+/g, "").toUpperCase();
  return normalized
    ? `https://www.flightaware.com/live/flight/${encodeURIComponent(normalized)}`
    : "https://www.flightaware.com/live/";
}

let flightLookupTimer = null;
let lastFlightLookupKey = "";

function setFlightLookupStatus(message, state = "") {
  if (!nodes.flightLookupStatus) return;
  nodes.flightLookupStatus.textContent = message;
  nodes.flightLookupStatus.dataset.state = state;
}

function flightLookupEndpoint() {
  const url = String(globalThis.SUPABASE_CONFIG?.url || "").replace(/\/$/, "");
  return url ? `${url}/functions/v1/flight-lookup` : "";
}

function formatFlightScheduleTime(value, airport = {}, fallback = "") {
  if (!value) return fallback;
  try {
    const formatted = new Intl.DateTimeFormat("zh-TW", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: airport.timezone || undefined
    }).format(new Date(value));
    return `${formatted} ${airport.code || ""}`.trim();
  } catch {
    return `${value} ${airport.code || ""}`.trim();
  }
}

async function lookupPrimaryFlightSchedule() {
  const flightNo = fields.flightNo.value.trim();
  const date = fields.startDate.value || trip.startDate || "";
  const endpoint = flightLookupEndpoint();
  if (!flightNo || !endpoint) return;
  const lookupKey = `${flightNo}|${date}`;
  if (lookupKey === lastFlightLookupKey) return;
  lastFlightLookupKey = lookupKey;
  setFlightLookupStatus("正在查詢航班時刻...", "loading");
  const config = globalThis.SUPABASE_CONFIG || {};
  const params = new URLSearchParams({ flightNo });
  if (date) params.set("date", date);
  try {
    const response = await fetch(`${endpoint}?${params}`, {
      headers: {
        apikey: config.publishableKey || "",
        Authorization: `Bearer ${config.publishableKey || ""}`
      }
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (data.code === "flight_provider_not_configured") {
        setFlightLookupStatus("尚未設定航班資料 API，暫時請點上方連結查詢。", "warning");
      } else {
        setFlightLookupStatus(data.error || "查不到此航班，請確認航班號與出發日期。", "warning");
      }
      lastFlightLookupKey = "";
      return;
    }
    fields.flightDeparture.value = formatFlightScheduleTime(data.departure?.scheduled, data.departure?.airport);
    fields.flightArrival.value = formatFlightScheduleTime(data.arrival?.scheduled, data.arrival?.airport);
    updateTripFromFields();
    setFlightLookupStatus(`已自動帶入 ${data.flightNo || flightNo} 的預定時刻。`, "success");
  } catch {
    lastFlightLookupKey = "";
    setFlightLookupStatus("目前無法連線至航班查詢服務，仍可手動輸入時間。", "warning");
  }
}

function queuePrimaryFlightLookup() {
  clearTimeout(flightLookupTimer);
  flightLookupTimer = setTimeout(lookupPrimaryFlightSchedule, 550);
}

function formatLocal(value, currencyOverride = trip.currency) {
  const currency = normalizeCurrency(currencyOverride);
  try {
    return new Intl.NumberFormat("zh-TW", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
  } catch {
    return `${currency} ${Math.round(value).toLocaleString("zh-TW")}`;
  }
}

function formatTwd(value) {
  return new Intl.NumberFormat("zh-TW", { style: "currency", currency: "TWD", maximumFractionDigits: 0 }).format(value);
}

function currencyDecimals(currency) {
  return ["JPY", "KRW", "VND", "IDR", "TWD"].includes(normalizeCurrency(currency)) ? 0 : 2;
}

function formatAmount(value, currency) {
  const decimals = currencyDecimals(currency);
  return new Intl.NumberFormat("zh-TW", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function formatInputAmount(value, currency) {
  const decimals = currencyDecimals(currency);
  return Number(value).toFixed(decimals);
}

function formatRate(value) {
  return new Intl.NumberFormat("zh-TW", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4
  }).format(Number(value || 1));
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

function formatDateWithWeekday(value) {
  const date = parseDateValue(value);
  if (!date) return "未設定日期";
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
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
  return uniqueList([landmark, day.place, trip.baseCity, trip.country]).join(", ");
}

function travelModeParam(mode = "") {
  if (mode.includes("步行")) return "walking";
  if (mode.includes("車") || mode.includes("計程車") || mode.includes("包車")) return "driving";
  if (mode.includes("巴士") || mode.includes("地鐵") || mode.includes("電車") || mode.includes("新幹線")) return "transit";
  return "";
}

function landmarkDirectionsUrl(landmark, day) {
  const destination = landmarkQuery(landmark, day);
  const mode = travelModeParam(day.transportMode);
  const params = new URLSearchParams({
    api: "1",
    destination
  });
  if (mode) params.set("travelmode", mode);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function dayLandmarks(day) {
  return day.landmarks?.length ? day.landmarks : [day.place].filter(Boolean);
}

function routePlaceLines(value) {
  return uniqueList(
    String(value || "")
      .split(/\r?\n|、|，|,/)
      .map((item) => item.replace(/^\d+[.)、\s-]*/, "").trim()),
    80
  );
}

function distanceKm(a, b) {
  const toRad = (deg) => deg * Math.PI / 180;
  const earth = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * earth * Math.asin(Math.sqrt(h));
}

function nearestRoute(points) {
  if (points.length <= 2) return points;
  const remaining = [...points];
  const route = [remaining.shift()];
  while (remaining.length) {
    const last = route[route.length - 1];
    let bestIndex = 0;
    let bestDistance = Infinity;
    remaining.forEach((point, index) => {
      const distance = distanceKm(last.geo, point.geo);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    route.push(remaining.splice(bestIndex, 1)[0]);
  }
  return route;
}

function chunkPlaces(places, dayCount) {
  const chunks = Array.from({ length: dayCount }, () => []);
  places.forEach((place, index) => {
    const bucket = Math.min(Math.floor(index * dayCount / places.length), dayCount - 1);
    chunks[bucket].push(place);
  });
  return chunks;
}

function setPlacePoolStatus(message) {
  if (nodes.placePoolStatus) nodes.placePoolStatus.textContent = message;
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

function updatePlacePoolDefaults() {
  if (fields.placePoolDays) fields.placePoolDays.value = Math.max(trip.days.length || 3, 1);
}

function syncFields() {
  if (fields.newTripName) fields.newTripName.value = trip.name;
  fields.tripName.value = trip.name;
  fields.country.value = trip.country;
  fields.baseCity.value = trip.baseCity;
  fields.startDate.value = trip.startDate || todayDateValue();
  fields.flightNo.value = trip.flightNo || "";
  fields.flightDeparture.value = trip.flightDeparture || "";
  fields.flightArrival.value = trip.flightArrival || "";
  if (nodes.flightLookup) nodes.flightLookup.href = flightLookupUrl(trip.flightNo);
  fields.currency.value = normalizeCurrency(trip.currency);
  fields.rate.value = trip.rate;
  fields.pace.value = trip.pace;
  updatePlacePoolDefaults();
}

function tripOptionLabel(entry) {
  const savedTrip = normalizeTrip(entry.trip);
  const dateText = savedTrip.startDate || "未設定日期";
  const daysText = savedTrip.days.length ? `${savedTrip.days.length} 天` : "未排天數";
  return `${savedTrip.name}｜${savedTrip.country}・${savedTrip.baseCity}｜${dateText}｜${daysText}`;
}

function renderTripLibrary() {
  if (!fields.tripSelector) return;
  fields.tripSelector.innerHTML = trips
    .map((entry) => `<option value="${escapeHtml(entry.id)}">${escapeHtml(tripOptionLabel(entry))}</option>`)
    .join("");
  fields.tripSelector.value = activeTripId;
  if (fields.newTripName) fields.newTripName.value = trip.name;
  if (nodes.tripLibraryStatus) {
    const activeEntry = trips.find((entry) => entry.id === activeTripId);
    const updated = activeEntry?.updatedAt ? new Date(activeEntry.updatedAt).toLocaleString("zh-TW") : "剛剛";
    nodes.tripLibraryStatus.textContent = `目前共有 ${trips.length} 個旅行行程，這份最後更新：${updated}`;
  }
  if (nodes.deleteTrip) nodes.deleteTrip.disabled = trips.length <= 1;
}

function aggregateTripStats() {
  const totalDays = trips.reduce((sum, entry) => sum + normalizeTrip(entry.trip).days.length, 0);
  const upcoming = trips
    .map((entry) => normalizeTrip(entry.trip))
    .filter((savedTrip) => savedTrip.startDate)
    .sort((a, b) => parseDateValue(a.startDate) - parseDateValue(b.startDate))[0];
  return {
    totalDays,
    upcomingLabel: upcoming ? `${upcoming.name}｜${formatDateWithWeekday(upcoming.startDate)}` : "尚未設定"
  };
}

function plannerHomeCard(entry) {
  const savedTrip = normalizeTrip(entry.trip);
  const total = totalBudget(savedTrip.days);
  const isActive = entry.id === activeTripId;
  const cover = savedTrip.days.find((day) => day.photoUrl)?.photoUrl || "assets/global-travel-hero.png";
  const flightText = savedTrip.flightNo || "未填航班";
  const updated = entry.updatedAt ? new Date(entry.updatedAt).toLocaleDateString("zh-TW") : "剛剛";

  return `
    <article class="trip-home-card${isActive ? " is-current" : ""}">
      <div class="trip-card-media">
        <img src="${escapeHtml(cover)}" alt="${escapeHtml(savedTrip.name)} 封面" loading="lazy" />
        <span>${isActive ? "目前編輯" : "旅行計畫"}</span>
      </div>
      <div class="trip-card-body">
        <div>
          <p class="trip-card-kicker">${escapeHtml(savedTrip.country)}・${escapeHtml(savedTrip.baseCity)}</p>
          <h3>${escapeHtml(savedTrip.name)}</h3>
          <p>${escapeHtml(historyDateRange(savedTrip))}｜${savedTrip.days.length || 0} 天｜${escapeHtml(flightText)}</p>
        </div>
        <div class="trip-card-meta">
          <span>${escapeHtml(formatLocal(total, savedTrip.currency))}</span>
          <span>更新 ${escapeHtml(updated)}</span>
        </div>
        <div class="trip-card-actions">
          <button type="button" data-open-trip="${escapeHtml(entry.id)}">編輯行程</button>
          <button type="button" data-delete-trip-card="${escapeHtml(entry.id)}" ${trips.length <= 1 ? "disabled" : ""}>刪除</button>
        </div>
      </div>
    </article>
  `;
}

function renderTripHome() {
  if (!nodes.tripHomeGrid) return;
  const stats = aggregateTripStats();
  const searchTerm = mobileTripSearchTerm.trim().toLowerCase();
  const visibleTrips = searchTerm
    ? trips.filter((entry) => {
        const savedTrip = normalizeTrip(entry.trip);
        return [savedTrip.name, savedTrip.country, savedTrip.baseCity]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm);
      })
    : trips;
  nodes.homeTripCount.textContent = trips.length;
  nodes.homeDayCount.textContent = stats.totalDays;
  nodes.homeNextTrip.textContent = stats.upcomingLabel;
  nodes.tripHomeGrid.innerHTML = visibleTrips.length
    ? visibleTrips.map(plannerHomeCard).join("")
    : `<div class="empty-state">找不到符合「${escapeHtml(mobileTripSearchTerm)}」的旅行。</div>`;

  document.querySelectorAll("[data-open-trip]").forEach((button) => {
    button.addEventListener("click", () => switchActiveTrip(button.dataset.openTrip, true));
  });

  document.querySelectorAll("[data-delete-trip-card]").forEach((button) => {
    button.addEventListener("click", () => deleteTripById(button.dataset.deleteTripCard));
  });
}

function renderAppHome() {
  const stats = aggregateTripStats();
  const cover = trip.days.find((day) => day.photoUrl)?.photoUrl || "assets/global-travel-hero.png";
  const start = parseDateValue(trip.startDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = start ? Math.ceil((start - today) / (1000 * 60 * 60 * 24)) : null;
  const plannedDays = trip.days.filter((day) => day.title || day.place || dayLandmarks(day).length).length;
  const progress = trip.days.length ? Math.round((plannedDays / trip.days.length) * 100) : 0;
  const allStops = [...new Set(trip.days.flatMap((day) => dayLandmarks(day)).filter(Boolean))];
  const stops = allStops.slice(0, 3);
  const tripMeta = [
    [trip.country, trip.baseCity].filter(Boolean).join("・") || "尚未設定目的地",
    `${trip.days.length || 0} 天`
  ].join("｜");
  if (nodes.dashboardTripCover) nodes.dashboardTripCover.src = cover;
  if (nodes.dashboardTripTitle) nodes.dashboardTripTitle.textContent = trip.name || "我的旅行";
  if (nodes.dashboardTripMeta) nodes.dashboardTripMeta.textContent = tripMeta;
  if (nodes.dashboardCountdownLabel) nodes.dashboardCountdownLabel.textContent = diff === null ? "等待設定" : diff > 0 ? "距離出發" : diff === 0 ? "今天出發" : "旅行紀錄";
  if (nodes.dashboardCountdownValue) nodes.dashboardCountdownValue.textContent = diff === null ? "--" : diff > 0 ? diff : diff === 0 ? "GO" : Math.abs(diff);
  if (nodes.dashboardCountdownUnit) nodes.dashboardCountdownUnit.textContent = diff === null || diff > 0 ? "天" : diff === 0 ? "出發" : "天前";
  if (nodes.dashboardProgressText) nodes.dashboardProgressText.textContent = `${progress}%`;
  if (nodes.dashboardProgressFill) nodes.dashboardProgressFill.style.width = `${progress}%`;
  if (nodes.dashboardJourneyDates) nodes.dashboardJourneyDates.textContent = historyDateRange(trip);
  if (nodes.dashboardJourneyStops) {
    nodes.dashboardJourneyStops.textContent = stops.length
      ? `${stops.join("・")}${allStops.length > stops.length ? ` 等 ${allStops.length} 個景點` : ""}`
      : "尚未加入景點";
  }
  if (nodes.dashboardTripCount) nodes.dashboardTripCount.textContent = trips.length;
  if (nodes.dashboardDayCount) nodes.dashboardDayCount.textContent = stats.totalDays;
  if (nodes.dashboardNextTrip) nodes.dashboardNextTrip.textContent = stats.upcomingLabel;
  if (nodes.dashboardCloudStatus) {
    nodes.dashboardCloudStatus.textContent = supabaseSession?.user
      ? `已登入 ${cloudUserEmail()}，目前行程會自動同步。`
      : "登入雲端後，手機與電腦會自動同步目前行程。";
  }
}

function showAppHome() {
  persistPlannerBeforeLeave();
  plannerView = "home";
  switchTab("home");
  nodes.plannerHome?.classList.add("is-active");
  nodes.plannerDetail?.classList.remove("is-active");
  updatePlannerNavState();
  renderAppHome();
}

function showPlannerHome() {
  persistPlannerBeforeLeave();
  plannerView = "home";
  switchTab("planner");
  nodes.plannerHome?.classList.add("is-active");
  nodes.plannerDetail?.classList.remove("is-active");
  updatePlannerNavState();
  renderHero();
}

function showPlannerDetail() {
  plannerView = "detail";
  switchTab("planner", { preservePlannerView: true });
  nodes.plannerHome?.classList.remove("is-active");
  nodes.plannerDetail?.classList.add("is-active");
  updatePlannerNavState();
  renderHero();
}

function updatePlannerNavState() {
  document.body.dataset.plannerView = plannerView;
}

function renderHero() {
  if (plannerView === "home") {
    const stats = aggregateTripStats();
    const totalBudgetAll = trips.reduce((sum, entry) => sum + totalBudget(normalizeTrip(entry.trip).days), 0);
    nodes.heroTitle.textContent = "旅行規劃工作台";
    nodes.heroCopy.textContent = `管理 ${trips.length} 份旅行、${stats.totalDays} 天行程。從首頁選擇旅程後，再進入每日飯店、航班、餐食、景點導航與票券細節。`;
    nodes.statDays.textContent = stats.totalDays;
    nodes.statStops.textContent = trips.length;
    nodes.statBudget.textContent = Math.round(totalBudgetAll).toLocaleString("zh-TW");
    nodes.statCurrency.textContent = "ALL";
    return;
  }

  const total = totalBudget();
  const stops = uniqueStops();
  const flightText = [trip.flightNo, trip.flightDeparture && `起飛 ${trip.flightDeparture}`, trip.flightArrival && `抵達 ${trip.flightArrival}`].filter(Boolean).join("｜") || "尚未填航班";
  nodes.heroTitle.textContent = trip.name;
  nodes.heroCopy.textContent = `${trip.country}・${trip.baseCity}，${tripDateRangeText()}，航班 ${flightText}，目前規劃 ${trip.days.length} 天。每日住宿可在行程卡中個別填寫。`;
  nodes.statDays.textContent = trip.days.length;
  nodes.statStops.textContent = stops;
  nodes.statBudget.textContent = Math.round(total).toLocaleString("zh-TW");
  nodes.statCurrency.textContent = normalizeCurrency(trip.currency);
}

function mealSummary(day) {
  const meals = normalizeMealPlan(day);
  return [
    `早：${meals.breakfast || "自理"}`,
    `午：${meals.lunch || "自理"}`,
    `晚：${meals.dinner || "自理"}`
  ].join(" / ");
}

function agencyItineraryText(day) {
  const items = day.items?.length ? day.items : [day.title || day.place || "自由活動"];
  return items.join("；");
}

function uniqueList(values, limit = 8) {
  return [...new Set(values.map((item) => String(item || "").trim()).filter(Boolean))].slice(0, limit);
}

function tripMonths() {
  const start = parseDateValue(trip.startDate);
  if (!start) return ["全年"];
  const months = new Set();
  for (let index = 0; index < Math.max(trip.days.length, 1); index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    months.add(`${date.getMonth() + 1}月`);
  }
  return [...months];
}

function tripRegions() {
  return uniqueList([trip.baseCity, ...trip.days.map((day) => day.place)], 10);
}

function tripHighlights() {
  const landmarks = trip.days.flatMap((day) => dayLandmarks(day));
  const titles = trip.days.map((day) => day.title);
  return uniqueList([...landmarks, ...titles], 10);
}

function tripThemes() {
  const text = `${trip.name} ${trip.country} ${trip.baseCity} ${trip.days.map((day) => `${day.title} ${day.place} ${day.items?.join(" ") || ""}`).join(" ")}`;
  const themes = ["自由行"];
  if (/寺|神社|城|古蹟|博物館|美術館|宮|塔|市場/.test(text)) themes.push("名勝古蹟", "觀光景點");
  if (/餐|拉麵|燒肉|市場|咖啡|甜點|美食|早餐|午餐|晚餐/.test(text)) themes.push("吃吃喝喝");
  if (/展望|夜景|美拍|公園|花|海|山|湖/.test(text)) themes.push("秘境美拍");
  if (/票|門票|樂園|水族館|展望台|船|觀光/.test(text)) themes.push("旅遊票券");
  return uniqueList(themes, 8);
}

function renderChipList(node, items) {
  if (!node) return;
  node.innerHTML = items.length
    ? items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")
    : `<span>未設定</span>`;
}

function renderExpertRoute() {
  if (!nodes.expertRouteSummary) return;
  const highlights = tripHighlights();
  const regions = tripRegions();
  const meals = trip.days.map(mealSummary).filter(Boolean).slice(0, 3);
  nodes.expertRouteSummary.textContent = [
    `景點類：${highlights.slice(0, 8).join("、") || "尚未新增景點"}`,
    `途經地區：${regions.join("、") || "尚未設定地區"}`,
    meals.length ? `餐食安排：${meals.join("；")}` : "",
    `行程建議：每日住宿、交通方式、景點導航與票券資訊可在下方行程本中編輯。`
  ].filter(Boolean).join("。");
  renderChipList(nodes.expertThemeList, tripThemes());
  renderChipList(nodes.expertMonthList, tripMonths());
  renderChipList(nodes.expertRegionList, regions);
  nodes.expertHighlightList.innerHTML = highlights.length
    ? highlights.map((item) => `<div>${escapeHtml(item)}</div>`).join("")
    : `<div>尚未新增亮點</div>`;
}

function renderAgencyBook() {
  if (!nodes.agencyDailyTable) return;
  nodes.agencyBookTitle.textContent = `${trip.name} 行程書`;
  nodes.agencyBookSubtitle.textContent = `${trip.country}・${trip.baseCity}｜${tripDateRangeText()}｜航班 ${trip.flightNo || "未填航班"}`;
  nodes.agencyBookDays.textContent = `${trip.days.length} 天`;
  renderExpertRoute();

  nodes.agencyDailyTable.innerHTML = trip.days.length
    ? trip.days.map((day, index) => `
        <tr>
          <td><strong>Day ${index + 1}</strong><span>${escapeHtml(formatTripDate(dateForDay(index)))}</span></td>
          <td>${escapeHtml(day.place || trip.baseCity || "未填地點")}</td>
          <td>${escapeHtml(agencyItineraryText(day))}</td>
          <td>${escapeHtml(day.transportMode || "未填")}<br><small>${escapeHtml(day.route || "未填路線")}</small></td>
          <td>${escapeHtml(mealSummary(day))}</td>
          <td>${escapeHtml(day.notes || day.hotelName || "無")}</td>
        </tr>
      `).join("")
    : `<tr><td colspan="6">尚未新增每日行程。</td></tr>`;

  nodes.agencyHotelList.innerHTML = trip.days.length
    ? trip.days.map((day, index) => `
        <div class="agency-list-row">
          <span>Day ${index + 1}</span>
          <strong>${escapeHtml(day.hotelName || "未填住宿飯店")}</strong>
          <p>${escapeHtml(formatTripDate(dateForDay(index)))}｜${escapeHtml(day.place || trip.baseCity || "未填地點")}</p>
        </div>
      `).join("")
    : `<div class="empty-state">尚未新增住宿資料。</div>`;

  const flightRows = [
    { label: "航班號", value: trip.flightNo || "未填" },
    { label: "起飛時間", value: trip.flightDeparture || "未填" },
    { label: "抵達時間", value: trip.flightArrival || "未填" },
    ...trip.days
      .map((day, index) => day.flightNo ? {
        label: `Day ${index + 1} 轉機`,
        value: [day.flightNo, day.flightDeparture && `起飛 ${day.flightDeparture}`, day.flightArrival && `抵達 ${day.flightArrival}`].filter(Boolean).join("｜")
      } : null)
      .filter(Boolean)
  ];
  nodes.agencyFlightList.innerHTML = flightRows.map((row) => `
    <div class="agency-list-row">
      <span>${escapeHtml(row.label)}</span>
      <strong>${escapeHtml(row.value)}</strong>
      <p>${escapeHtml(trip.country)}・${escapeHtml(trip.baseCity)}</p>
    </div>
  `).join("");
}

function updateTripFromFields() {
  const nextCurrency = normalizeCurrency(fields.currency.value);
  const currencyChanged = nextCurrency !== normalizeCurrency(trip.currency);
  trip.name = fields.tripName.value.trim() || "我的旅行計畫";
  trip.country = fields.country.value.trim() || "自選國家";
  trip.baseCity = fields.baseCity.value.trim() || "自選城市";
  trip.startDate = fields.startDate.value || todayDateValue();
  trip.flightNo = fields.flightNo.value.trim();
  trip.flightDeparture = fields.flightDeparture.value.trim();
  trip.flightArrival = fields.flightArrival.value.trim();
  trip.currency = nextCurrency;
  trip.rate = currencyChanged ? defaultRateForCurrency(nextCurrency) : (Number(fields.rate.value) || defaultRateForCurrency(nextCurrency));
  trip.pace = fields.pace.value;
  fields.currency.value = nextCurrency;
  fields.rate.value = trip.rate;
  if (nodes.flightLookup) nodes.flightLookup.href = flightLookupUrl(trip.flightNo);
  saveTrip();
  render();
}

function render() {
  const total = totalBudget();
  clearDayMaps();
  renderHero();
  nodes.visibleDays.textContent = trip.days.length;
  nodes.totalLocal.textContent = formatLocal(total);
  nodes.totalTwd.textContent = formatTwd(total * trip.rate);
  nodes.paceHint.textContent = paceText[trip.pace];
  nodes.dayList.innerHTML = trip.days.length ? trip.days.map(renderDay).join("") : `<div class="empty-state">目前沒有行程。你可以新增一天、貼上行程匯入，或載入大阪範例。</div>`;
  renderAgencyBook();
  renderAppHome();
  renderTripHome();
  renderTripLibrary();
  renderHistory();
  renderTickets();

  document.querySelectorAll("[data-edit-day]").forEach((button) => {
    button.addEventListener("click", () => {
      editingDayIndex = Number(button.dataset.editDay);
      render();
    });
  });

  document.querySelectorAll("[data-cancel-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = button.closest("[data-save-day]");
      if (form) saveEditedDayForm(form);
      editingDayIndex = null;
      render();
    });
  });

  document.querySelectorAll("[data-save-day]").forEach((form) => {
    form.addEventListener("submit", saveEditedDay);
    let autosaveTimer = null;
    const queueAutosave = () => {
      clearTimeout(autosaveTimer);
      autosaveTimer = setTimeout(() => saveEditedDayForm(form, { status: true }), 350);
    };
    form.querySelectorAll("input, textarea, select").forEach((field) => {
      field.addEventListener("input", queueAutosave);
      field.addEventListener("change", queueAutosave);
    });
  });

  document.querySelectorAll("[data-delete-day]").forEach((button) => {
    button.addEventListener("click", () => {
      trip.days.splice(Number(button.dataset.deleteDay), 1);
      editingDayIndex = null;
      saveTrip();
      render();
    });
  });

  document.querySelectorAll("[data-toggle-edit-flight]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const fieldsContainer = document.querySelector(`[data-edit-flight-fields="${checkbox.dataset.toggleEditFlight}"]`);
      fieldsContainer?.classList.toggle("is-hidden", !checkbox.checked);
    });
  });

  renderTripMap();
  renderOpenDayMaps();
  loadLandmarkPhotos();
  setupDragAndDrop();
  setupWithinDayOrdering();
  updateCountdown();
  updateCalcDisplay();
  fetchTripWeather();
}

function renderDay(day, index) {
  if (editingDayIndex === index) return renderDayEditor(day, index);
  const mealPlan = normalizeMealPlan(day);
  const landmarks = dayLandmarks(day);
  const dayDateText = formatTripDate(dateForDay(index));
  const dayDate = dateForDay(index);
  const dateKey = dayDate ? `${dayDate.getFullYear()}-${String(dayDate.getMonth() + 1).padStart(2, "0")}-${String(dayDate.getDate()).padStart(2, "0")}` : "";
  const weather = dateKey ? weatherData[dateKey] : null;
  const backups = day.backupLandmarks?.length ? day.backupLandmarks : [];
  return `
    <article class="day-card booklet-page" draggable="true" data-day-index="${index}">
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
        ${weather ? `<div class="day-weather"><span class="weather-cond">${escapeHtml(weatherText(weather.code))}</span><span>${Math.round(weather.low)}°C ~ ${Math.round(weather.high)}°C</span></div>` : `<div class="day-weather" data-weather-day="${index}"></div>`}
        <div class="meal-grid" aria-label="早中晚餐">
          <div><span>早餐</span><strong>${escapeHtml(mealPlan.breakfast || "尚未填店名")}</strong></div>
          <div><span>午餐</span><strong>${escapeHtml(mealPlan.lunch || "尚未填店名")}</strong></div>
          <div><span>晚餐</span><strong>${escapeHtml(mealPlan.dinner || "尚未填店名")}</strong></div>
        </div>
        <div class="day-food-link">
          <a href="https://www.google.com/maps/search/${encodeURIComponent(`${day.place || trip.baseCity} ${trip.country} restaurant`)}" target="_blank" rel="noreferrer">搜尋 ${escapeHtml(day.place || trip.baseCity)} 附近餐廳</a>
        </div>
        <dl class="detail-list">
          <div><dt>住宿飯店</dt><dd>${escapeHtml(day.hotelName || "尚未填住宿飯店")}</dd></div>
          <div><dt>移動方式</dt><dd>${escapeHtml(day.transportMode || "尚未選擇")}</dd></div>
          <div><dt>移動路線</dt><dd>${escapeHtml(day.route || "尚未填移動路線")}</dd></div>
        </dl>
        ${day.flightNo ? `<div class="note-box"><span>當日轉機 / 額外班機</span><p>${escapeHtml(day.flightNo)}${day.flightDeparture ? `｜起飛 ${escapeHtml(day.flightDeparture)}` : ""}${day.flightArrival ? `｜抵達 ${escapeHtml(day.flightArrival)}` : ""}｜<a href="${flightLookupUrl(day.flightNo)}" target="_blank" rel="noreferrer">查詢航班時刻</a></p></div>` : ""}
        ${day.notes ? `<div class="note-box"><span>每日備註</span><p>${escapeHtml(day.notes)}</p></div>` : ""}
        <div class="day-map-section">
          <div class="day-map-heading">景點地圖</div>
          <div id="dayMap-${index}" class="day-map-container" data-expanded="true"></div>
        </div>
        ${backups.length ? `<div class="backup-landmarks"><h4>備案景點</h4><div class="backup-tags">${backups.map(b => `<span class="backup-tag">${escapeHtml(b)}</span>`).join("")}</div></div>` : ""}
        <ul class="landmark-detail-list" aria-label="景點清單">
          ${landmarks.length
            ? landmarks.map((landmark, landmarkIndex) => `
                <li draggable="true" data-landmark-order="${index}" data-landmark-index="${landmarkIndex}">
                  <div class="landmark-photo-wrap">
                    <img data-landmark-photo="${escapeHtml(landmark)}" data-landmark-place="${escapeHtml(day.place || trip.baseCity)}" alt="${escapeHtml(landmark)} 景點照片" loading="lazy" />
                  </div>
                  <span class="landmark-step">${landmarkIndex + 1}</span>
                  <strong>景點</strong>
                  <span>${escapeHtml(landmark)}</span>
                  <a href="${landmarkDirectionsUrl(landmark, day)}" target="_blank" rel="noreferrer">導航</a>
                </li>
              `).join("")
            : `<li class="landmark-empty">尚未新增景點</li>`}
        </ul>
        <div class="cost-row">
          <span>${escapeHtml(day.transportMode || "尚未填移動方式")}</span>
          <strong>${formatLocal(Number(day.budget || 0))}</strong>
        </div>
      </div>
    </article>
  `;
}

const LANDMARK_PHOTO_CACHE_KEY = "trip-landmark-photo-cache-v1";
let landmarkPhotoCache;
try { landmarkPhotoCache = JSON.parse(localStorage.getItem(LANDMARK_PHOTO_CACHE_KEY)) || {}; } catch { landmarkPhotoCache = {}; }

function saveLandmarkPhotoCache() {
  try { localStorage.setItem(LANDMARK_PHOTO_CACHE_KEY, JSON.stringify(landmarkPhotoCache)); } catch {}
}

async function fetchLandmarkPhoto(landmark, place) {
  const key = `${landmark}|${place}`.toLowerCase();
  if (key in landmarkPhotoCache) return landmarkPhotoCache[key];
  const query = [landmark, place, trip.country].filter(Boolean).join(" ");
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrsearch: query,
    gsrlimit: "1",
    prop: "pageimages",
    piprop: "thumbnail",
    pithumbsize: "480"
  });
  try {
    const resp = await fetch(`https://zh.wikipedia.org/w/api.php?${params}`);
    if (!resp.ok) return null;
    const data = await resp.json();
    const page = Object.values(data.query?.pages || {})[0];
    const photo = page?.thumbnail?.source || null;
    landmarkPhotoCache[key] = photo;
    saveLandmarkPhotoCache();
    return photo;
  } catch {
    return null;
  }
}

function loadLandmarkPhotos() {
  document.querySelectorAll("[data-landmark-photo]").forEach(async (image) => {
    const photo = await fetchLandmarkPhoto(image.dataset.landmarkPhoto, image.dataset.landmarkPlace);
    if (!photo || !image.isConnected) return;
    image.src = photo;
    image.classList.add("is-loaded");
  });
}

function normalizeTimelineText(item) {
  const raw = cleanImportLine(item);
  if (!raw) return "";

  const withoutTime = stripTimePrefix(raw);
  const isMealOnly = mealKeyFromLine(withoutTime) && !LANDMARK_HINT_PATTERN.test(withoutTime);
  if (isMealOnly || HOTEL_PATTERN.test(withoutTime) || BUDGET_PATTERN.test(withoutTime) || NOTE_PATTERN.test(withoutTime)) {
    return "";
  }

  const timeMatch = raw.match(/^(\(?\d{1,2}[:：]\d{2}\)?\s*)/);
  const timeText = timeMatch ? timeMatch[1].trim().replace(/[()]/g, "") : "";
  const cleaned = withoutTime
    .replace(/^(早餐|早點|早午餐|午餐|中餐|午飯|晚餐|晚飯|用餐|餐食|餐廳)\s*[:：-]?\s*/i, "")
    .replace(/(早餐|午餐|中餐|午飯|晚餐|晚飯|用餐|餐食|餐廳)/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();

  if (!cleaned) return "";
  return timeText ? `${timeText} ${cleaned}` : cleaned;
}

function timelineItemLabel(text) {
  if (LANDMARK_HINT_PATTERN.test(text)) return "景點";
  if (looksLikeTransport(text)) return "交通";
  return "景點";
}

function displayTimelineItems(day) {
  const items = (day.items || [])
    .map((raw, sourceIndex) => ({ text: normalizeTimelineText(raw), sourceIndex }))
    .filter((item) => item.text)
    .map((item) => ({ label: timelineItemLabel(item.text), text: item.text, sourceIndex: item.sourceIndex }));

  if (items.length) return items;
  if (day.landmarks?.length) {
    return day.landmarks.map((landmark) => ({ label: "景點", text: landmark, sourceIndex: -1 }));
  }
  return [{ label: "景點", text: "尚未填入細節", sourceIndex: -1 }];
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
            <p class="autosave-status" data-autosave-status="${index}">輸入後會自動儲存</p>
          </div>
          <button class="icon-button" type="button" data-cancel-edit="${index}">完成</button>
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
        <label class="optional-flight-toggle">
          <input name="hasFlight" type="checkbox" data-toggle-edit-flight="${index}" ${day.flightNo ? "checked" : ""} />
          <span>當日有轉機或額外班機</span>
        </label>
        <div class="optional-flight-fields ${day.flightNo ? "" : "is-hidden"}" data-edit-flight-fields="${index}">
          <input name="flightNo" type="text" value="${escapeHtml(day.flightNo || "")}" placeholder="當日班機號，例如：MU581" />
          <input name="flightDeparture" type="text" value="${escapeHtml(day.flightDeparture || "")}" placeholder="起飛時間，例如：14:30 PVG" />
          <input name="flightArrival" type="text" value="${escapeHtml(day.flightArrival || "")}" placeholder="抵達時間，例如：17:10 KMG" />
        </div>
        <textarea name="backupLandmarks" rows="2" placeholder="備案景點（雨天或臨時替換），每行一個">${escapeHtml((day.backupLandmarks || []).join("\n"))}</textarea>
        <textarea name="notes" rows="4" placeholder="每日備註，例如：訂位時間、票券編號、集合地點、注意事項">${escapeHtml(day.notes || "")}</textarea>
        <textarea name="items" rows="5" placeholder="每行一個景點或活動">${escapeHtml((day.items || []).join("\n"))}</textarea>
        <button type="submit">完成編輯</button>
      </form>
    </article>
  `;
}

function renderChecklist() {
  nodes.checklist.innerHTML = checklist
    .map((item, index) => `<label class="check-item"><input type="checkbox" data-check="${index}" /><span>${item}</span></label>`)
    .join("");
}

function formatTicketDate(value) {
  const date = parseDateValue(value);
  if (!date) return "未填日期";
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  }).format(date);
}

function renderTickets() {
  nodes.ticketList.innerHTML = trip.tickets?.length
    ? trip.tickets
        .map((ticket, index) => `
          <article class="ticket-card">
            <div>
              <span>${escapeHtml(ticket.type)}</span>
              <h3>${escapeHtml(ticket.name)}</h3>
              <p>${escapeHtml(formatTicketDate(ticket.date))}${ticket.code ? `｜${escapeHtml(ticket.code)}` : ""}</p>
              ${ticket.note ? `<p>${escapeHtml(ticket.note)}</p>` : ""}
            </div>
            <div class="ticket-actions">
              ${ticket.url ? `<a href="${escapeHtml(ticket.url)}" target="_blank" rel="noreferrer">開啟憑證</a>` : ""}
              <button type="button" data-delete-ticket="${index}">刪除</button>
            </div>
          </article>
        `)
        .join("")
    : `<div class="empty-state">尚未加入票券。可以放機票、訂房、門票、交通票或保險資料。</div>`;

  document.querySelectorAll("[data-delete-ticket]").forEach((button) => {
    button.addEventListener("click", () => {
      trip.tickets.splice(Number(button.dataset.deleteTicket), 1);
      saveTrip();
      renderTickets();
    });
  });
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
      showPlannerDetail();
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
    flightNo: fields.dayHasFlight.checked ? fields.dayFlightNo.value.trim() : "",
    flightDeparture: fields.dayHasFlight.checked ? fields.dayFlightDeparture.value.trim() : "",
    flightArrival: fields.dayHasFlight.checked ? fields.dayFlightArrival.value.trim() : "",
    backupLandmarks: splitLines(fields.dayBackupLandmarks.value),
    notes: fields.dayNotes.value.trim(),
    items
  }));
  nodes.dayForm.reset();
  nodes.dayFlightFields?.classList.add("is-hidden");
  saveTrip();
  render();
}

function dayFromEditForm(form) {
  const index = Number(form.dataset.saveDay);
  const data = new FormData(form);
  return {
    index,
    day: normalizeDay({
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
    flightNo: data.get("hasFlight") ? data.get("flightNo") : "",
    flightDeparture: data.get("hasFlight") ? data.get("flightDeparture") : "",
    flightArrival: data.get("hasFlight") ? data.get("flightArrival") : "",
    backupLandmarks: splitLines(data.get("backupLandmarks") || ""),
    notes: data.get("notes"),
    items: splitLines(data.get("items"))
    })
  };
}

function saveEditedDayForm(form, options = {}) {
  const { index, day } = dayFromEditForm(form);
  if (!trip.days[index]) return;
  trip.days[index] = day;
  saveTrip();
  if (options.status) {
    const status = document.querySelector(`[data-autosave-status="${index}"]`);
    if (status) status.textContent = `已自動儲存 ${new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })}`;
  }
}

function saveEditedDay(event) {
  event.preventDefault();
  const form = event.currentTarget;
  saveEditedDayForm(form);
  editingDayIndex = null;
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
    notes: "可放訂位時間、票券編號、集合地點或臨時備案。",
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
  showPlannerDetail();
  render();
}

function saveCurrentToHistory() {
  persistPlannerBeforeLeave();
  addTripToHistory(trip, "完成規劃");
  renderHistory();
  switchTab("history");
}

function createSupabaseClient() {
  const config = globalThis.SUPABASE_CONFIG || {};
  if (!globalThis.supabase?.createClient || !config.url || !config.publishableKey) return null;
  return globalThis.supabase.createClient(config.url, config.publishableKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
}

function setCloudStatus(message) {
  if (nodes.cloudStatus) nodes.cloudStatus.textContent = message;
}

function cloudUserEmail() {
  return supabaseSession?.user?.email || "";
}

function renderCloudAuthState() {
  const signedIn = Boolean(supabaseSession?.user);
  if (nodes.cloudUserBadge) nodes.cloudUserBadge.textContent = signedIn ? cloudUserEmail() : "Local";
  if (nodes.cloudNavLabel) nodes.cloudNavLabel.textContent = signedIn ? "已開啟同步" : "雲端同步";
  if (nodes.openCloudPanel) {
    nodes.openCloudPanel.classList.toggle("is-synced", signedIn);
    nodes.openCloudPanel.setAttribute("aria-label", signedIn ? `雲端同步已開啟：${cloudUserEmail()}` : "登入並開啟雲端同步");
  }
  if (nodes.mobileCloudButton) {
    nodes.mobileCloudButton.classList.toggle("is-synced", signedIn);
    nodes.mobileCloudButton.setAttribute("aria-label", signedIn ? `雲端同步已開啟：${cloudUserEmail()}` : "登入雲端同步");
  }
  if (nodes.homeCloudButton) {
    nodes.homeCloudButton.classList.toggle("is-synced", signedIn);
    nodes.homeCloudButton.setAttribute("aria-label", signedIn ? `雲端同步已開啟：${cloudUserEmail()}` : "登入雲端同步");
  }
  renderAppHome();
  document.querySelectorAll(".auth-credential").forEach((field) => field.classList.toggle("is-hidden", signedIn));
  if (nodes.signIn) nodes.signIn.classList.toggle("is-hidden", signedIn);
  if (nodes.signUp) nodes.signUp.classList.toggle("is-hidden", signedIn);
  if (nodes.signOut) nodes.signOut.classList.toggle("is-hidden", !signedIn);
  if (nodes.syncTripToCloud) nodes.syncTripToCloud.disabled = !signedIn;
  if (nodes.refreshCloudTrips) nodes.refreshCloudTrips.disabled = !signedIn;
  if (!signedIn && nodes.cloudTripList) nodes.cloudTripList.innerHTML = "";
}

function openCloudPanel() {
  if (!nodes.cloudDialog) return;
  if (typeof nodes.cloudDialog.showModal === "function") nodes.cloudDialog.showModal();
  else nodes.cloudDialog.setAttribute("open", "");
  if (!supabaseSession?.user) fields.authEmail?.focus();
}

function closeCloudPanel() {
  if (!nodes.cloudDialog) return;
  if (typeof nodes.cloudDialog.close === "function") nodes.cloudDialog.close();
  else nodes.cloudDialog.removeAttribute("open");
}

function clearCloudAutoSync() {
  if (cloudAutoSyncTimer) {
    clearTimeout(cloudAutoSyncTimer);
    cloudAutoSyncTimer = null;
  }
}

function queueCloudAutoSync() {
  if (cloudApplyingRemote || !supabaseClient || !supabaseSession?.user) return;
  clearCloudAutoSync();
  setCloudStatus("已編輯，準備自動同步...");
  cloudAutoSyncTimer = setTimeout(() => {
    syncCurrentTripToCloud({ automatic: true });
  }, CLOUD_AUTO_SYNC_DELAY);
}

function queueInitialCloudSync() {
  if (cloudTripMap[activeTripId] || cloudTrips.length === 0) {
    queueCloudAutoSync();
  } else {
    applyCloudTrip(cloudTrips[0], {
      backup: true,
      status: `已自動載入最近的雲端行程「${cloudTrips[0].name || "未命名旅行"}」，之後編輯會自動同步。`
    });
  }
}

async function stopCloudRealtime() {
  clearCloudAutoSync();
  if (supabaseClient && cloudRealtimeChannel) {
    await supabaseClient.removeChannel(cloudRealtimeChannel);
  }
  cloudRealtimeChannel = null;
}

function setupCloudRealtime() {
  if (!supabaseClient || !supabaseSession?.user) return;
  if (cloudRealtimeChannel) supabaseClient.removeChannel(cloudRealtimeChannel);
  cloudRealtimeChannel = supabaseClient
    .channel(`trip-sync-${supabaseSession.user.id}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "trips",
        filter: `user_id=eq.${supabaseSession.user.id}`
      },
      handleTripRealtimeChange
    )
    .subscribe((status) => {
      if (status === "SUBSCRIBED") setCloudStatus("已登入，雲端即時同步已啟用。");
    });
}

function handleTripRealtimeChange(payload) {
  if (!payload?.new?.id) return;
  const remoteEntry = payload.new;
  const remoteTrip = remoteEntry.trip_data || {};
  if (remoteTrip.syncedBy === cloudClientId) return;

  const mappedCloudId = cloudTripMap[activeTripId];
  const isActiveCloudTrip = mappedCloudId && mappedCloudId === remoteEntry.id;
  const isKnownLocalTrip = remoteTrip.localTripId && remoteTrip.localTripId === activeTripId;

  cloudTrips = [remoteEntry, ...cloudTrips.filter((entry) => entry.id !== remoteEntry.id)];
  renderCloudTrips();

  if (!isActiveCloudTrip && !isKnownLocalTrip) {
    setCloudStatus(`雲端行程「${remoteEntry.name || "未命名旅行"}」已更新。`);
    return;
  }

  const localUpdatedAt = new Date(trip.syncedAt || 0).getTime();
  const remoteUpdatedAt = new Date(remoteTrip.syncedAt || remoteEntry.updated_at || 0).getTime();
  if (localUpdatedAt && remoteUpdatedAt && remoteUpdatedAt < localUpdatedAt) return;

  applyCloudTrip(remoteEntry, { backup: false, status: `已即時同步「${remoteEntry.name || trip.name}」。` });
}

async function initSupabaseAuth() {
  supabaseClient = createSupabaseClient();
  if (!supabaseClient) {
    setCloudStatus("尚未設定 Supabase，雲端登入暫不可用。");
    renderCloudAuthState();
    return;
  }

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    setCloudStatus(`讀取登入狀態失敗：${error.message}`);
  } else {
    supabaseSession = data.session;
    setCloudStatus(supabaseSession ? `已自動恢復登入：${cloudUserEmail()}，雲端同步已開啟。` : "尚未登入，第一次登入後這台裝置會自動保持雲端同步。");
  }
  renderCloudAuthState();
  if (supabaseSession) {
    await refreshCloudTrips();
    setupCloudRealtime();
    queueInitialCloudSync();
  }

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    supabaseSession = session;
    setCloudStatus(session ? `已登入：${session.user.email}` : "已登出，資料會保留在這台瀏覽器。");
    renderCloudAuthState();
    if (session) {
      await refreshCloudTrips();
      setupCloudRealtime();
      queueInitialCloudSync();
    } else {
      await stopCloudRealtime();
    }
  });
}

function authCredentials() {
  return {
    email: fields.authEmail?.value.trim() || "",
    password: fields.authPassword?.value || ""
  };
}

async function signInWithEmail() {
  if (!supabaseClient) return setCloudStatus("Supabase 尚未設定。");
  const { email, password } = authCredentials();
  if (!email || password.length < 6) return setCloudStatus("請輸入 Email 與至少 6 碼密碼。");
  setCloudStatus("登入中...");
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) setCloudStatus(`登入失敗：${error.message}`);
}

async function signUpWithEmail() {
  if (!supabaseClient) return setCloudStatus("Supabase 尚未設定。");
  const { email, password } = authCredentials();
  if (!email || password.length < 6) return setCloudStatus("請輸入 Email 與至少 6 碼密碼。");
  setCloudStatus("建立帳號中...");
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) {
    setCloudStatus(`註冊失敗：${error.message}`);
    return;
  }
  if (data.session) {
    supabaseSession = data.session;
    renderCloudAuthState();
    setCloudStatus(`已註冊並登入：${email}`);
    await syncCurrentTripToCloud();
  } else {
    setCloudStatus("註冊完成，請到 Mailpit 或信箱完成驗證後再登入。");
  }
}

async function signOutCloud() {
  if (!supabaseClient) return;
  await stopCloudRealtime();
  const { error } = await supabaseClient.auth.signOut();
  if (error) setCloudStatus(`登出失敗：${error.message}`);
}

function tripCloudPayload(sourceTrip = trip) {
  const normalized = normalizeTrip(sourceTrip);
  return {
    name: normalized.name,
    country: normalized.country,
    base_city: normalized.baseCity,
    start_date: normalized.startDate || null,
    trip_data: {
      ...normalized,
      localTripId: activeTripId,
      syncedBy: cloudClientId,
      syncedAt: new Date().toISOString()
    }
  };
}

async function syncCurrentTripToCloud(options = {}) {
  if (!supabaseClient || !supabaseSession?.user) return setCloudStatus("請先登入再同步。");
  clearCloudAutoSync();
  if (cloudSyncInFlight) {
    cloudSyncQueued = true;
    return;
  }
  cloudSyncInFlight = true;
  saveTrip({ skipCloudSync: true });
  setCloudStatus(options.automatic ? "自動同步中..." : "正在同步目前行程...");
  const payload = {
    ...tripCloudPayload(trip),
    user_id: supabaseSession.user.id
  };
  const cloudId = cloudTripMap[activeTripId];
  const query = cloudId
    ? supabaseClient.from("trips").update(payload).eq("id", cloudId).select("id").single()
    : supabaseClient.from("trips").insert(payload).select("id").single();
  const { data, error } = await query;
  if (error) {
    setCloudStatus(`同步失敗：${error.message}`);
    cloudSyncInFlight = false;
    return;
  }
  cloudTripMap[activeTripId] = data.id;
  saveCloudTripMap();
  const normalizedTrip = normalizeTrip(data.trip_data || trip);
  trip.syncedAt = normalizedTrip.syncedAt || data.updated_at;
  setCloudStatus(options.automatic ? `已自動同步「${trip.name}」。` : `已同步「${trip.name}」到雲端。`);
  await refreshCloudTrips();
  cloudSyncInFlight = false;
  if (cloudSyncQueued) {
    cloudSyncQueued = false;
    queueCloudAutoSync();
  }
}

async function refreshCloudTrips() {
  if (!supabaseClient || !supabaseSession?.user) return;
  const { data, error } = await supabaseClient
    .from("trips")
    .select("id,name,country,base_city,start_date,trip_data,updated_at")
    .order("updated_at", { ascending: false });
  if (error) {
    setCloudStatus(`讀取雲端行程失敗：${error.message}`);
    return;
  }
  cloudTrips = data || [];
  renderCloudTrips();
}

function renderCloudTrips() {
  if (!nodes.cloudTripList) return;
  nodes.cloudTripList.innerHTML = cloudTrips.length
    ? cloudTrips.map((entry) => `
        <article class="cloud-trip-card">
          <div>
            <strong>${escapeHtml(entry.name || "未命名旅行")}</strong>
            <span>${escapeHtml(entry.country || "未填國家")}・${escapeHtml(entry.base_city || "未填城市")}｜${new Date(entry.updated_at).toLocaleString("zh-TW")}</span>
          </div>
          <button type="button" data-load-cloud-trip="${escapeHtml(entry.id)}">載入</button>
        </article>
      `).join("")
    : `<div class="empty-state">尚未同步任何雲端行程。</div>`;
  nodes.cloudTripList.querySelectorAll("[data-load-cloud-trip]").forEach((button) => {
    button.addEventListener("click", () => loadCloudTrip(button.dataset.loadCloudTrip));
  });
}

function loadCloudTrip(cloudId) {
  const entry = cloudTrips.find((item) => item.id === cloudId);
  if (!entry?.trip_data) return;
  applyCloudTrip(entry, { backup: true, status: `已載入雲端行程「${entry.name || "未命名旅行"}」，之後會即時同步。` });
}

function applyCloudTrip(entry, options = {}) {
  if (!entry?.trip_data) return;
  cloudApplyingRemote = true;
  if (options.backup) addTripToHistory(trip, "載入雲端行程前備份");
  trip = normalizeTrip(entry.trip_data);
  const localId = entry.trip_data.localTripId || makeTripId();
  activeTripId = localId;
  cloudTripMap[activeTripId] = entry.id;
  saveCloudTripMap();
  localStorage.setItem(ACTIVE_TRIP_ID_KEY, activeTripId);
  localStorage.setItem(TRIP_KEY, JSON.stringify(trip));
  saveTrip({ skipCloudSync: true });
  syncFields();
  showPlannerDetail();
  render();
  cloudApplyingRemote = false;
  setCloudStatus(options.status || `已載入雲端行程「${trip.name}」。`);
}

function switchActiveTrip(tripId, openDetail = false) {
  if (!tripId) return;
  if (tripId === activeTripId) {
    if (openDetail) showPlannerDetail();
    return;
  }
  saveTrip();
  const entry = trips.find((item) => item.id === tripId);
  if (!entry) return;
  activeTripId = entry.id;
  trip = normalizeTrip(clone(entry.trip));
  editingDayIndex = null;
  localStorage.setItem(ACTIVE_TRIP_ID_KEY, activeTripId);
  localStorage.setItem(TRIP_KEY, JSON.stringify(trip));
  syncFields();
  if (openDetail) showPlannerDetail();
  render();
}

function createNewTrip(openDetail = true) {
  saveTrip();
  const typedName = fields.newTripName?.value.trim() || "";
  const name = typedName && typedName !== trip.name ? typedName : `新的旅行 ${trips.length + 1}`;
  const newEntry = {
    id: makeTripId(),
    updatedAt: new Date().toISOString(),
    trip: blankTrip(name)
  };
  trips = [newEntry, ...trips];
  activeTripId = newEntry.id;
  trip = normalizeTrip(clone(newEntry.trip));
  saveTripLibrary();
  localStorage.setItem(ACTIVE_TRIP_ID_KEY, activeTripId);
  localStorage.setItem(TRIP_KEY, JSON.stringify(trip));
  editingDayIndex = null;
  syncFields();
  if (openDetail) showPlannerDetail();
  render();
}

function renameActiveTrip() {
  const name = fields.newTripName?.value.trim() || fields.tripName.value.trim();
  if (!name) return;
  trip.name = name;
  fields.tripName.value = name;
  saveTrip();
  render();
}

function deleteActiveTrip() {
  if (trips.length <= 1) {
    if (nodes.tripLibraryStatus) nodes.tripLibraryStatus.textContent = "至少要保留一個旅行行程。";
    return;
  }

  if (!confirm(`確定要刪除「${trip.name}」嗎？刪除後不會影響歷史行程。`)) return;
  trips = trips.filter((entry) => entry.id !== activeTripId);
  const nextEntry = trips[0];
  activeTripId = nextEntry.id;
  trip = normalizeTrip(clone(nextEntry.trip));
  saveTripLibrary();
  localStorage.setItem(ACTIVE_TRIP_ID_KEY, activeTripId);
  localStorage.setItem(TRIP_KEY, JSON.stringify(trip));
  editingDayIndex = null;
  syncFields();
  render();
}

function deleteTripById(tripId) {
  const entry = trips.find((item) => item.id === tripId);
  if (!entry) return;
  if (tripId === activeTripId) {
    deleteActiveTrip();
    return;
  }
  if (!confirm(`確定要刪除「${entry.trip.name}」嗎？`)) return;
  trips = trips.filter((item) => item.id !== tripId);
  saveTripLibrary();
  render();
}

function printItineraryBook() {
  document.body.classList.add("print-mode");
  window.print();
}

window.addEventListener("afterprint", () => {
  document.body.classList.remove("print-mode");
});

function addTicket(event) {
  event.preventDefault();
  trip.tickets.push(normalizeTicket({
    type: fields.ticketType.value,
    name: fields.ticketName.value.trim(),
    date: fields.ticketDate.value,
    code: fields.ticketCode.value.trim(),
    url: fields.ticketUrl.value.trim(),
    note: fields.ticketNote.value.trim()
  }));
  nodes.ticketForm.reset();
  saveTrip();
  renderTickets();
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
    showPlannerDetail();
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
      const reloadKey = "global-trip-sw-reload-v53";
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (sessionStorage.getItem(reloadKey)) return;
        sessionStorage.setItem(reloadKey, "1");
        window.location.reload();
      });
      const registration = await navigator.serviceWorker.register("service-worker.js?v=53", {
        updateViaCache: "none"
      });
      await registration.update();
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
      registration.addEventListener("updatefound", () => {
        const installingWorker = registration.installing;
        if (!installingWorker) return;
        installingWorker.addEventListener("statechange", () => {
          if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
            installingWorker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
      updateOfflineStatus(registration.active ? "離線功能已啟用，可安裝到手機主畫面。" : "離線功能正在準備中，重新開啟後即可使用。");
    } catch {
      updateOfflineStatus("離線功能暫時無法啟用，線上使用不受影響。");
    }
  });
}

const MEAL_PATTERNS = [
  { key: "breakfast", pattern: /早餐|早點|早午餐|breakfast|brunch/i },
  { key: "lunch", pattern: /午餐|中餐|午飯|lunch/i },
  { key: "dinner", pattern: /晚餐|晚飯|dinner/i }
];

const TRANSPORT_PATTERN = /交通|移動|路線|搭乘|搭車|地鐵|捷運|電車|火車|高鐵|新幹線|JR|巴士|公車|計程車|包車|步行|散步|渡輪|船|機場快線|transfer|transport|subway|metro|train|bus|taxi|walk/i;
const HOTEL_PATTERN = /住宿|飯店|酒店|旅館|民宿|hotel|check-?in|入住/i;
const FLIGHT_PATTERN = /航班|班機|起飛|抵達|機場|flight|airport|departure|arrival/i;
const BUDGET_PATTERN = /預算|花費|費用|門票|票券|budget|cost/i;
const NOTE_PATTERN = /備註|提醒|注意|小提醒|note|tips?/i;
const LANDMARK_HINT_PATTERN = /外灘|明珠|新天地|田子坊|迪士尼|武康路|徐匯|IFC|城|古城|古鎮|寺|教堂|神社|大社|宮|塔|橋|坂|公園|園|莊園|林園|廣場|中心|大街|江|島|海|谷|村|草原|纜車|雪山|風景區|雪博會|冰雪大世界|雪雕|滑雪|度假區|紀念館|陳列館|市場|老街|街|商圈|百貨|博物館|美術館|水族館|樂園|影城|車站|港|湖|山|溫泉|海灘|觀景|夜景|大廈|庭園|地標|景點|attraction|museum|park|temple|shrine|castle|tower|market|street|station/i;
const NON_DAY_SECTION_PATTERN = /^(哈爾濱)?必吃美食|冬季穿搭|穿搭建議|行程亮點|預估花費|費用估算|最推薦節奏|注意事項|預算建議|參考資料|資料來源|延伸閱讀/i;

function cleanImportLine(line) {
  const raw = String(line).trim();
  if (/^[-*_]{3,}$/.test(raw)) return "";
  return raw
    .replace(/^#{1,6}\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/^[-•*]\s*/, "")
    .replace(/^\d+[.)、]\s*/, "")
    .replace(/^\p{Extended_Pictographic}\ufe0f?\s*/u, "")
    .trim();
}

function imageUrlFromMarkdown(line) {
  return String(line).match(/!\[[^\]]*]\((https?:\/\/[^)\s]+)[^)]*\)/i)?.[1] || "";
}

function isPeriodHeading(line) {
  return /^(上午|早上|中午|下午|傍晚|晚上|夜間)(\s*[:：-].*)?$/i.test(line);
}

function isLandmarkHeading(line) {
  return /^(推薦景點|必訪|景點|地標|地點|打卡點|導航景點)\s*[:：]?$/i.test(line);
}

function isItineraryHeading(line) {
  return /^(行程|每日行程|行程內容|時間軸|安排|itinerary|schedule)\s*[:：]?$/i.test(line);
}

function isNonDaySection(line) {
  return NON_DAY_SECTION_PATTERN.test(line);
}

function dayHeadingMatch(line) {
  return line.match(/(?:^|[\s｜|])(?:第\s*(\d+)\s*(?:天|日)|day\s*(\d+))/i)
    || line.match(/^(\d+)\s*(?:天|日)(?!\s*\d|夜)/i);
}

function isDayRangeHeading(line) {
  return /(?:第\s*)?\d+\s*(?:天|日)\s*[~～\-—–到至]\s*(?:第\s*)?\d+\s*(?:天|日)/i.test(line)
    || /day\s*\d+\s*[~～\-—–到至]\s*day\s*\d+/i.test(line);
}

function stripDayHeading(line) {
  return line
    .replace(/^.*?(?=(?:第\s*\d+\s*(?:天|日)|day\s*\d+))/i, "")
    .replace(/^第\s*\d+\s*(?:天|日)\s*[:：\-、]?\s*/i, "")
    .replace(/^[/｜|]?\s*day\s*\d+\s*[:：\-、]?\s*/i, "")
    .replace(/^\d+\s*(?:天|日)\s*[:：\-、]?\s*/i, "")
    .replace(/^[｜|/]\s*/, "")
    .trim();
}

function uniqueList(items) {
  const seen = new Set();
  return items
    .map((item) => String(item).trim())
    .filter(Boolean)
    .filter((item) => {
      const key = item.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function parseBudgetAmount(line) {
  const normalized = String(line)
    .replace(/[,，]/g, "")
    .replace(/[～~—–-]/g, "-");
  const numbers = normalized.match(/\d+(?:\.\d+)?/g)?.map(Number).filter((num) => Number.isFinite(num)) || [];
  if (!numbers.length) return 0;
  if (numbers.length >= 2 && /[-至到]/.test(normalized)) return Math.round((numbers[0] + numbers[1]) / 2);
  return numbers[0];
}

function removeImportLabel(line, labels) {
  const labelPattern = labels.join("|");
  return line.replace(new RegExp(`^(${labelPattern})\\s*[:：-]?\\s*`, "i"), "").trim();
}

function stripTimePrefix(line) {
  return line
    .replace(/^\(?\d{1,2}[:：]\d{2}\)?\s*[-–—~～至到]?\s*/, "")
    .replace(/^(上午|早上|中午|下午|晚上|傍晚|夜間)\s*/, "")
    .trim();
}

function mealKeyFromLine(line) {
  return MEAL_PATTERNS.find((meal) => meal.pattern.test(line))?.key || "";
}

function sanitizeMealText(line) {
  return stripTimePrefix(line)
    .replace(/^(早餐|早點|早午餐|午餐|中餐|午飯|晚餐|晚飯|breakfast|brunch|lunch|dinner)\s*[:：-]?\s*/i, "")
    .replace(/^(用餐|餐食|餐廳)\s*[:：-]?\s*/i, "")
    .trim();
}

function looksLikeTransport(line) {
  return TRANSPORT_PATTERN.test(line) && !mealKeyFromLine(line);
}

function shouldSkipAsLandmark(line) {
  return mealKeyFromLine(line) || HOTEL_PATTERN.test(line) || BUDGET_PATTERN.test(line) || NOTE_PATTERN.test(line) || /^自由活動|休息|整理行李|退房|入住|集合|返回|回飯店/i.test(line);
}

function landmarkFromItineraryLine(line) {
  const text = stripTimePrefix(cleanImportLine(line))
    .replace(/^(景點|地標|參觀|遊覽|前往|抵達|到達|造訪|逛|遊玩)\s*[:：-]?\s*/i, "")
    .replace(/\(.+?\)|（.+?）/g, "")
    .trim();

  if (!text || shouldSkipAsLandmark(text)) return "";
  if (looksLikeTransport(text) && !LANDMARK_HINT_PATTERN.test(text)) return "";

  const stopWords = /(自由活動|購物時間|拍照|散策|散步|午休|晚餐|午餐|早餐|用餐|交通|搭乘|返回|回飯店|入住|退房)/i;
  const compact = text
    .split(/[，,。；;、]/)[0]
    .replace(stopWords, "")
    .trim();

  if (!compact || compact.length < 2) return "";
  if (!LANDMARK_HINT_PATTERN.test(compact) && !/[A-Za-z]{3,}/.test(compact)) return "";
  return compact;
}

function landmarksFromItineraryLine(line) {
  const text = stripTimePrefix(cleanImportLine(line))
    .replace(/^(景點|地標|參觀|遊覽|前往|抵達|到達|造訪|逛|遊玩)\s*[:：-]?\s*/i, "")
    .replace(/\(.+?\)|（.+?）/g, "")
    .trim();

  if (!text || shouldSkipAsLandmark(text)) return [];
  if (looksLikeTransport(text) && !LANDMARK_HINT_PATTERN.test(text)) return [];

  return uniqueList(
    text
      .split(/[，,。；;、>→]/)
      .map((part) => landmarkFromItineraryLine(part))
      .filter(Boolean)
  );
}

function normalizeImportedDay(day) {
  const landmarkSource = day.hasExplicitLandmarks
    ? day.landmarks
    : [...(day.landmarks || []), ...(day.inferredLandmarks || [])];
  const normalized = normalizeDay({ ...day, landmarks: landmarkSource });
  normalized.landmarks = uniqueList(normalized.landmarks);
  normalized.backupLandmarks = uniqueList(normalized.backupLandmarks);
  normalized.items = uniqueList(normalized.items);
  if (!day.mapQuery && normalized.landmarks.length) {
    normalized.mapQuery = normalized.landmarks[0];
  } else if (!normalized.mapQuery) {
    normalized.mapQuery = normalized.landmarks[0] || normalized.place || trip.baseCity || "";
  }
  if (!normalized.route && normalized.landmarks.length) {
    normalized.route = normalized.landmarks.join(" -> ");
  }
  return normalized;
}

function inferImportedTripMeta(text, days = []) {
  const badTitlePattern = /以下|依照|規格書|格式|文件整理|可直接匯入|旅行 App|請問|建議|說明|Markdown|JSON/i;
  const titleLine = text
    .split(/\r?\n/)
    .map(cleanImportLine)
    .find((line) => line && !badTitlePattern.test(line) && !imageUrlFromMarkdown(line) && !dayHeadingMatch(line) && /天|夜|自由行|旅行|旅遊|行程/i.test(line));
  const source = titleLine || days[0]?.title || "";
  const comboMatch = source.match(/(上海\s*\d+\s*天\s*[+＋]\s*雲南\s*\d+\s*天(?:（共\s*\d+\s*天）)?)/);
  const cityMatch = source.match(/([\u4e00-\u9fa5]{2,6})(?:\s*)?(?:\d+\s*天|\d+\s*日|自由行|旅行|旅遊|行程)/);
  const hasChinaPlace = /哈爾濱|中國|大陸|北京|上海|雲南|昆明|大理|麗江|香格里拉|廣州|深圳|成都|重慶/.test(source);
  const baseCity = /上海|雲南/.test(source) ? "上海＋雲南" : (/哈爾濱/.test(source) ? "哈爾濱" : (cityMatch?.[1] || ""));
  const country = hasChinaPlace ? "中國" : "";
  return {
    name: (comboMatch?.[1]?.replace(/\s+/g, " ") || titleLine || (baseCity ? `${baseCity} ${days.length || ""} 天行程`.trim() : "")).replace(/^旅行名稱\s*[:：]\s*/i, ""),
    country,
    baseCity
  };
}

function applyImportedTripMetaToDays(days, meta) {
  const fallbackPlace = meta.baseCity || trip.baseCity || "";
  return days.map((day) => {
    const place = day.place && !/^自選城市$|^大阪$/.test(day.place) ? day.place : inferDayPlace(day, fallbackPlace);
    return {
      ...day,
      place,
      mapQuery: day.mapQuery && !/^自選城市$|^大阪$/.test(day.mapQuery) ? day.mapQuery : (day.landmarks?.[0] || place)
    };
  });
}

function inferDayPlace(day, fallbackPlace) {
  const text = `${day.title || ""} ${(day.items || []).join(" ")} ${(day.landmarks || []).join(" ")}`;
  if (/香格里拉|獨克宗|龜山|松贊林|納帕海/.test(text)) return "香格里拉";
  if (/麗江|玉龍雪山|藍月谷|束河|白沙|玉湖/.test(text)) return "麗江";
  if (/大理|洱海|喜洲|雙廊|崇聖寺|蒼山/.test(text)) return "大理";
  if (/昆明|石林|翠湖/.test(text)) return "昆明";
  if (/上海|外灘|南京東路|豫園|陸家嘴|迪士尼|武康路|徐匯/.test(text)) return "上海";
  if (/哈爾濱|中央大街|冰雪大世界|伏爾加|松花江|亞布力/.test(text)) return "哈爾濱";
  return fallbackPlace;
}

function parseImportedTrip(text) {
  const rawLines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const days = [];
  let current = null;
  let sectionMode = "items";
  let stoppedDailyParsing = false;

  const startDay = (title) => {
    current = { title: title || `第 ${days.length + 1} 天`, place: trip.baseCity || "", hotelName: "", route: "", transportMode: "", budget: 0, mealPlan: { breakfast: "", lunch: "", dinner: "" }, mapQuery: "", landmarks: [], inferredLandmarks: [], hasExplicitLandmarks: false, backupLandmarks: [], notes: "", photoUrl: "", items: [] };
    days.push(current);
    sectionMode = "items";
    stoppedDailyParsing = false;
  };

  rawLines.forEach((rawLine) => {
    const imageUrl = imageUrlFromMarkdown(rawLine);
    const line = cleanImportLine(rawLine);
    if (/^📍\s*$/.test(rawLine.trim())) {
      if (current) sectionMode = "landmarks";
      return;
    }
    if (!line && !imageUrl) return;

    if (isDayRangeHeading(line)) {
      current = null;
      sectionMode = "items";
      return;
    }

    const dayMatch = dayHeadingMatch(line);
    if (dayMatch) {
      startDay(stripDayHeading(line));
      return;
    }

    if (isNonDaySection(line)) {
      stoppedDailyParsing = days.length > 0;
      current = null;
      return;
    }

    if (imageUrl) {
      if (current && !current.photoUrl) current.photoUrl = imageUrl;
      return;
    }

    if (stoppedDailyParsing) return;
    if (!current && days.length > 0) return;
    if (!current) return;

    if (isLandmarkHeading(line)) {
      sectionMode = "landmarks";
      return;
    }

    if (isItineraryHeading(line)) {
      sectionMode = "items";
      return;
    }

    if (isPeriodHeading(line)) {
      sectionMode = "items";
      return;
    }

    if (/^\d{1,2}[:：]\d{2}\s*入園最佳$|^入園最佳$/i.test(line)) {
      sectionMode = "items";
      return;
    }

    const mealKey = mealKeyFromLine(line);
    const lineWithoutTime = stripTimePrefix(line);
    const labelMatch = lineWithoutTime.match(/^([^:：]{1,18})\s*[:：]\s*(.+)$/);
    const label = labelMatch?.[1]?.trim() || "";
    const value = labelMatch?.[2]?.trim() || "";

    if (label && /^(上午|下午|晚上|早上|中午)$/.test(label) && value) {
      if (!mealKeyFromLine(value)) current.items.push(line);
      current.inferredLandmarks.push(...landmarksFromItineraryLine(value));
      return;
    }

    if (sectionMode === "landmarks") {
      const landmarks = landmarksFromItineraryLine(line);
      if (landmarks.length) {
        current.hasExplicitLandmarks = true;
        current.landmarks.push(...landmarks);
      }
      return;
    }

    if (/^(地點|城市|區域|place)\s*[:：]/i.test(line)) {
      current.place = line.replace(/^(地點|城市|區域|place)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(住宿|住宿飯店|飯店|酒店|hotel|accommodation)\s*[:：]/i.test(line)) {
      current.hotelName = line.replace(/^(住宿|住宿飯店|飯店|酒店|hotel|accommodation)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(航班號|班機號|flight)\s*[:：]/i.test(line)) {
      current.flightNo = line.replace(/^(航班號|班機號|flight)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(起飛時間|departure)\s*[:：]/i.test(line)) {
      current.flightDeparture = line.replace(/^(起飛時間|departure)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(抵達時間|arrival)\s*[:：]/i.test(line)) {
      current.flightArrival = line.replace(/^(抵達時間|arrival)\s*[:：]\s*/i, "");
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

    if (/^(吃飯|餐廳|餐飲|餐食|三餐|meals?)\s*[:：]/i.test(line)) {
      const meals = splitList(line.replace(/^(吃飯|餐廳|餐飲|餐食|三餐|meals?)\s*[:：]\s*/i, ""));
      current.mealPlan = { breakfast: meals[0] || "", lunch: meals[1] || "", dinner: meals[2] || meals[0] || "" };
      return;
    }

    if (/^(早餐|早點|早午餐|breakfast|brunch)\s*[:：]/i.test(line)) {
      current.mealPlan.breakfast = line.replace(/^(早餐|早點|早午餐|breakfast|brunch)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(午餐|中餐|午飯|lunch)\s*[:：]/i.test(line)) {
      current.mealPlan.lunch = line.replace(/^(午餐|中餐|午飯|lunch)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(晚餐|晚飯|dinner)\s*[:：]/i.test(line)) {
      current.mealPlan.dinner = line.replace(/^(晚餐|晚飯|dinner)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(地圖|map)\s*[:：]/i.test(line)) {
      current.mapQuery = line.replace(/^(地圖|map)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(景點|地標|景點地標|landmarks?|spots?)\s*[:：]/i.test(line)) {
      const landmarkValue = line.replace(/^(景點|地標|景點地標|landmarks?|spots?)\s*[:：]\s*/i, "");
      if (landmarkValue.trim()) {
        current.hasExplicitLandmarks = true;
        current.landmarks = splitList(landmarkValue);
      }
      else sectionMode = "landmarks";
      return;
    }

    if (/^(備案|備案景點|backup|alternatives?)\s*[:：]/i.test(line)) {
      current.backupLandmarks = splitList(line.replace(/^(備案|備案景點|backup|alternatives?)\s*[:：]\s*/i, ""));
      return;
    }

    if (/^(備註|注意事項|提醒|note|notes?)\s*[:：]/i.test(line)) {
      current.notes = line.replace(/^(備註|注意事項|提醒|note|notes?)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(照片|圖片|photo|image)\s*[:：]/i.test(line)) {
      current.photoUrl = line.replace(/^(照片|圖片|photo|image)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(預算|花費|budget|cost)\s*[:：]/i.test(line)) {
      current.budget = parseBudgetAmount(line);
      return;
    }

    if (mealKey) {
      current.mealPlan[mealKey] = sanitizeMealText(line);
      return;
    }

    if (looksLikeTransport(line) && !LANDMARK_HINT_PATTERN.test(line)) {
      const routeText = removeImportLabel(lineWithoutTime, ["交通", "移動", "路線", "動線", "交通方式", "移動方式"]);
      current.route = current.route ? `${current.route} -> ${routeText}` : routeText;
      current.transportMode = current.transportMode || (/(步行|散步|walk)/i.test(line) ? "步行" : /(巴士|公車|bus)/i.test(line) ? "巴士" : /(計程車|taxi)/i.test(line) ? "計程車" : /(包車)/i.test(line) ? "包車" : "大眾運輸");
      current.items.push(line);
      return;
    }

    if (/^(住宿|住宿飯店|hotel|accommodation)\s*[:：]/i.test(line) && !current.hotelName) {
      current.hotelName = removeImportLabel(lineWithoutTime, ["住宿", "住宿飯店", "飯店", "酒店", "旅館", "民宿", "hotel", "check-in", "入住"]);
      return;
    }

    current.items.push(line);
    current.inferredLandmarks.push(...landmarksFromItineraryLine(line));
  });

  return days.filter((day) => day.title || day.items.length).map(normalizeImportedDay);
}

function previewImport() {
  const days = parseImportedTrip(fields.importText.value);
  nodes.importPreview.innerHTML = days.length
    ? `<h3>解析結果：${days.length} 天</h3>${days.map((day, index) => {
        const mealPlan = normalizeMealPlan(day);
        const mealText = [mealPlan.breakfast, mealPlan.lunch, mealPlan.dinner].filter(Boolean).map(escapeHtml).join("、") || "未填";
        const landmarkText = day.landmarks.length ? day.landmarks.map(escapeHtml).join("、") : "未偵測到確定景點";
        return `<div class="preview-day"><strong>Day ${index + 1}：${escapeHtml(day.title)}</strong><span>${escapeHtml(day.place || "未填地點")}｜${escapeHtml(day.transportMode || "未填移動方式")}｜餐食 ${mealText}｜導航景點 ${landmarkText}｜預算 ${day.budget || 0}</span></div>`;
      }).join("")}`
    : `<div class="empty-state">還沒有解析到行程。請貼上至少一段文字。</div>`;
}

function applyImport() {
  const days = parseImportedTrip(fields.importText.value);
  if (!days.length) {
    previewImport();
    return;
  }
  const meta = inferImportedTripMeta(fields.importText.value, days);
  if (meta.name) trip.name = meta.name;
  if (meta.country) trip.country = meta.country;
  if (meta.baseCity) trip.baseCity = meta.baseCity;
  const importedCurrency = currencyForDestination(trip.country, trip.baseCity);
  if (importedCurrency) {
    trip.currency = importedCurrency;
    trip.rate = defaultRateForCurrency(importedCurrency);
  }
  trip.days = applyImportedTripMetaToDays(days, meta);
  saveTrip();
  syncFields();
  previewImport();
  switchTab("planner");
  showPlannerDetail();
  render();
}

function switchTab(targetId, options = {}) {
  if (plannerView === "detail" && (targetId !== "planner" || !options.preservePlannerView)) {
    persistPlannerBeforeLeave();
  }
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tabTarget === targetId);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === targetId);
  });
  if (targetId === "planner" && !options.preservePlannerView && plannerView !== "home") {
    nodes.plannerHome?.classList.add("is-active");
    nodes.plannerDetail?.classList.remove("is-active");
    plannerView = "home";
    renderHero();
  }
  if (targetId === "planner") updatePlannerNavState();
}

function persistPlannerBeforeLeave() {
  if (plannerView !== "detail") return;
  const editingForm = document.querySelector("[data-save-day]");
  if (editingForm) {
    saveEditedDayForm(editingForm);
  } else {
    saveTrip();
  }
}

document.querySelectorAll("[data-tab-target]").forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tabTarget));
});

[fields.tripName, fields.startDate, fields.flightNo, fields.flightDeparture, fields.flightArrival, fields.rate, fields.pace].forEach((field) => {
  field.addEventListener("input", updateTripFromFields);
});
fields.flightNo.addEventListener("input", queuePrimaryFlightLookup);
fields.flightNo.addEventListener("blur", lookupPrimaryFlightSchedule);
fields.startDate.addEventListener("change", () => {
  lastFlightLookupKey = "";
  queuePrimaryFlightLookup();
});
[fields.country, fields.baseCity].forEach((field) => {
  field.addEventListener("input", () => {
    applyDestinationCurrency();
    updateTripFromFields();
  });
});
fields.currency.addEventListener("change", updateTripFromFields);
fields.currency.addEventListener("blur", updateTripFromFields);
fields.dayHasFlight.addEventListener("change", () => {
  nodes.dayFlightFields?.classList.toggle("is-hidden", !fields.dayHasFlight.checked);
});

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  nodes.themeToggle.textContent = isDark ? "淺色模式" : "深色模式";
  nodes.themeToggle.setAttribute("aria-pressed", String(isDark));
  if (nodes.mobileThemeToggle) {
    nodes.mobileThemeToggle.setAttribute("aria-label", isDark ? "切換淺色模式" : "切換深色模式");
    nodes.mobileThemeToggle.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
  }
  if (nodes.homeThemeToggle) {
    nodes.homeThemeToggle.setAttribute("aria-label", isDark ? "切換淺色模式" : "切換深色模式");
    nodes.homeThemeToggle.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
  }
  refreshIcons();
}

function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, theme);
  applyTheme();
}

function guideIntentLabel(intent) {
  return {
    full: "完整自由行",
    attractions: "景點安排",
    food: "在地美食",
    transport: "交通移動",
    tickets: "票券活動",
    hotel: "住宿選擇"
  }[intent] || "旅行攻略";
}

function guidePreviewTopics(destination, intent) {
  const common = [`${destination} 必去景點`, `${destination} 行程路線`, `${destination} 交通方式`];
  const focused = {
    full: [`${destination} 自由行懶人包`, `${destination} 建議天數`, `${destination} 順遊路線`],
    attractions: [`${destination} 景點排行`, `${destination} 雨天備案`, `${destination} 親子景點`],
    food: [`${destination} 必吃美食`, `${destination} 在地餐廳`, `${destination} 早餐與宵夜`],
    transport: [`${destination} 大眾運輸`, `${destination} 機場交通`, `${destination} 交通票券`],
    tickets: [`${destination} 熱門門票`, `${destination} 預約活動`, `${destination} 城市通票`],
    hotel: [`${destination} 住宿區域`, `${destination} 飯店推薦`, `${destination} 車站附近住宿`]
  };
  return [...new Set([...(focused[intent] || []), ...common])].slice(0, 5);
}

let guidePreviewMapInstance = null;

function youtubeVideoId(value) {
  const match = String(value || "").trim().match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match?.[1] || "";
}

function youtubeGuideSearchQuery(destination, intent) {
  return `${destination} ${intentKeyword(intent)} 自由行 景點 行程`;
}

function youtubeGuideSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function youtubeGuideSearchEndpoint() {
  const url = String(globalThis.SUPABASE_CONFIG?.url || "").replace(/\/$/, "");
  return url ? `${url}/functions/v1/youtube-guide-search` : "";
}

async function fetchYoutubeGuideVideos(destination, intent) {
  const endpoint = youtubeGuideSearchEndpoint();
  const query = youtubeGuideSearchQuery(destination, intent);
  if (!endpoint) return { query, videos: [], error: "尚未設定雲端影片搜尋。" };
  try {
    const response = await fetch(`${endpoint}?q=${encodeURIComponent(query)}`, {
      headers: {
        apikey: globalThis.SUPABASE_CONFIG?.publishableKey || "",
        Authorization: `Bearer ${globalThis.SUPABASE_CONFIG?.publishableKey || ""}`
      }
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) return { query, videos: [], error: data.error || "暫時無法取得 YouTube 影片。" };
    return { query, videos: Array.isArray(data.videos) ? data.videos.slice(0, 2) : [] };
  } catch {
    return { query, videos: [], error: "網路連線異常，請直接前往 YouTube 搜尋。" };
  }
}

async function renderGuideVisualPreview(platform, destination, intent) {
  const viewport = document.querySelector("#guideEmbedViewport");
  if (!viewport) return;
  viewport.className = "guide-preview__viewport";
  if (guidePreviewMapInstance) {
    guidePreviewMapInstance.remove();
    guidePreviewMapInstance = null;
  }

  if (platform.name === "Google Maps" && typeof L !== "undefined") {
    viewport.innerHTML = '<div class="guide-preview__map" id="guidePreviewMap"></div>';
    const geo = await geocode(`${destination} ${intentKeyword(intent)}`);
    const mapNode = document.querySelector("#guidePreviewMap");
    if (!mapNode) return;
    if (!geo) {
      mapNode.innerHTML = '<div class="guide-preview__empty">暫時無法定位，請按「開啟來源」查看地圖。</div>';
      return;
    }
    guidePreviewMapInstance = L.map(mapNode, { scrollWheelZoom: false, tap: true }).setView([geo.lat, geo.lng], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap"
    }).addTo(guidePreviewMapInstance);
    L.marker([geo.lat, geo.lng]).addTo(guidePreviewMapInstance).bindPopup(destination).openPopup();
    return;
  }

  if (platform.name === "YouTube") {
    const requestKey = `${platform.name}|${destination}|${intent}|${Date.now()}`;
    viewport.dataset.previewRequest = requestKey;
    viewport.innerHTML = `
      <div class="guide-preview__empty">
        <i data-lucide="youtube"></i>
        <strong>正在搜尋近期 YouTube 行程影片</strong>
        <span>整理 ${escapeHtml(destination)} 的景點與路線影片中...</span>
      </div>
    `;
    refreshIcons();
    const result = await fetchYoutubeGuideVideos(destination, intent);
    if (!viewport.isConnected || viewport.dataset.previewRequest !== requestKey) return;
    const directUrl = youtubeGuideSearchUrl(result.query);
    if (!result.videos.length) {
      viewport.classList.add("has-video-form");
      viewport.innerHTML = `
        <div class="guide-preview__video-form">
          <i data-lucide="youtube"></i>
          <h4>貼上 YouTube 影片網址立即預覽</h4>
          <p>${escapeHtml(result.error || "目前沒有找到可嵌入的影片。")} 也可以直接貼上想看的 YouTube 影片網址。</p>
          <input id="youtubePreviewUrl" type="url" placeholder="https://www.youtube.com/watch?v=..." />
          <button id="loadYoutubePreview" type="button">載入影片預覽</button>
          <a class="guide-preview__youtube-link" href="${directUrl}" target="_blank" rel="noreferrer">前往 YouTube 搜尋近期影片</a>
        </div>
      `;
      refreshIcons();
      document.querySelector("#loadYoutubePreview")?.addEventListener("click", () => {
        const videoId = youtubeVideoId(document.querySelector("#youtubePreviewUrl")?.value);
        viewport.innerHTML = videoId
          ? `<iframe class="guide-preview__iframe" src="https://www.youtube-nocookie.com/embed/${videoId}" title="YouTube 攻略影片預覽" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          : '<div class="guide-preview__empty">請貼上有效的 YouTube 影片網址。</div>';
      });
      return;
    }
    viewport.classList.add("has-videos");
    viewport.innerHTML = `
      <div class="guide-preview__videos">
        ${result.videos.map((video) => `
          <article class="guide-preview__video">
            <iframe src="${escapeHtml(video.embedUrl)}" title="${escapeHtml(video.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>
              <h4>${escapeHtml(video.title)}</h4>
              <p>${escapeHtml(video.channel)}${video.publishedAt ? ` · ${escapeHtml(new Date(video.publishedAt).toLocaleDateString("zh-TW"))}` : ""}</p>
              <a href="${escapeHtml(video.watchUrl)}" target="_blank" rel="noreferrer">在 YouTube 開啟</a>
            </div>
          </article>
        `).join("")}
      </div>
    `;
    return;
  }

  viewport.innerHTML = `
    <div class="guide-preview__empty">
      <i data-lucide="external-link"></i>
      <strong>${escapeHtml(platform.name)} 不開放站內嵌入</strong>
      <span>已保留整理過的摘要。需要最新內容時，請按下方「開啟來源」。</span>
    </div>
  `;
  refreshIcons();
}

function renderGuidePreview(platform, destination, intent) {
  if (!nodes.guidePreview || !platform) return;
  const sourceUrl = platform.buildUrl(destination, intent);
  const topics = guidePreviewTopics(destination, intent);
  nodes.guidePreview.innerHTML = `
    <div class="guide-preview__cover">
      <p class="eyebrow">Guide Preview</p>
      <span>${escapeHtml(platform.type)}</span>
      <h3>${escapeHtml(destination)} · ${escapeHtml(guideIntentLabel(intent))}</h3>
      <p>先在 App 內快速確認規劃方向，再開啟 ${escapeHtml(platform.name)} 查看最新內容。</p>
    </div>
    <div class="guide-preview__body">
      <div class="guide-preview__window">
        <div class="guide-preview__window-bar">
          <i></i><i></i><i></i>
          <span>${escapeHtml(platform.name)} 預覽</span>
        </div>
        <div class="guide-preview__viewport" id="guideEmbedViewport"></div>
      </div>
      <div class="guide-preview__source">
        <div>
          <span>目前預覽來源</span>
          <h4>${escapeHtml(platform.name)}</h4>
          <p>${escapeHtml(platform.note)}</p>
        </div>
        <a href="${sourceUrl}" target="_blank" rel="noreferrer">開啟來源</a>
      </div>
      <div class="guide-preview__topics">
        <h4>建議先查看</h4>
        <div>
          ${topics.map((topic) => `<a href="https://www.google.com/search?q=${encodeURIComponent(topic)}" target="_blank" rel="noreferrer">${escapeHtml(topic)}</a>`).join("")}
        </div>
      </div>
      <p class="guide-preview__note">預覽內容為規劃摘要。營業時間、票價與交通異動請以來源網站最新資訊為準。</p>
    </div>
  `;
  renderGuideVisualPreview(platform, destination, intent);
}

function renderGuideLinks(event) {
  if (event) event.preventDefault();
  const destination = nodes.guideDestination.value.trim() || trip.baseCity || trip.country || "大阪";
  const intent = nodes.guideIntent.value;
  const defaultGuidePlatform = guidePlatforms.find((platform) => platform.name === "YouTube") || guidePlatforms[0];
  nodes.guideDestination.value = destination;
  nodes.guideRecommendations.innerHTML = `
    <div class="guide-heading">
      <h3>${escapeHtml(destination)} 推薦攻略清單</h3>
      <p>依照「先確認資訊、再排動線、最後訂票券」的順序整理，適合直接拿來規劃行程。</p>
    </div>
    <div class="recommendation-list">
      ${guideRecommendationTemplates
        .map((item, index) => {
          const query = item.query(destination);
          const url = item.source === "youtube"
            ? youtubeGuideSearchUrl(query)
            : `https://www.google.com/search?q=${encodeURIComponent(query)}`;
          return `
            <article class="recommendation-card">
              <div class="recommendation-rank">${index + 1}</div>
              <div>
                <span>${item.category}</span>
                <h4>${item.title}</h4>
                <p>${item.reason}</p>
                <strong>${item.action}</strong>
              </div>
              <a href="${url}" target="_blank" rel="noreferrer">${item.source === "youtube" ? "看影片" : "查攻略"}</a>
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
        <article class="guide-card${platform === defaultGuidePlatform ? " is-previewing" : ""}" data-guide-platform="${escapeHtml(platform.name)}">
          <div>
            <span>${platform.type}</span>
            <h3>${platform.name}</h3>
            <p>${platform.note}</p>
          </div>
          <div class="guide-card__actions">
            <button type="button" data-preview-guide="${escapeHtml(platform.name)}">預覽</button>
            <a href="${url}" target="_blank" rel="noreferrer">開啟</a>
          </div>
        </article>
      `;
    })
    .join("");
  renderGuidePreview(defaultGuidePlatform, destination, intent);
  nodes.guideGrid.querySelectorAll("[data-preview-guide]").forEach((button) => {
    button.addEventListener("click", () => {
      const platform = guidePlatforms.find((item) => item.name === button.dataset.previewGuide);
      nodes.guideGrid.querySelectorAll(".guide-card").forEach((card) => {
        card.classList.toggle("is-previewing", card.dataset.guidePlatform === button.dataset.previewGuide);
      });
      renderGuidePreview(platform, destination, intent);
      nodes.guidePreview.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ========== Geocoding ==========
const GEO_CACHE_KEY = "trip-geocache-v1";
let geoCache;
try { geoCache = JSON.parse(localStorage.getItem(GEO_CACHE_KEY)) || {}; } catch { geoCache = {}; }

function saveGeoCache() {
  try { localStorage.setItem(GEO_CACHE_KEY, JSON.stringify(geoCache)); } catch {}
}

let lastGeoTime = 0;
let geoQueue = Promise.resolve();
const geoInFlight = new Map();

async function fetchGeocode(query, key, attempt = 0) {
  const wait = Math.max(0, 1500 - (Date.now() - lastGeoTime));
  if (wait > 0) await new Promise(r => setTimeout(r, wait));
  lastGeoTime = Date.now();

  try {
    const resp = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&accept-language=zh-TW`);
    if (resp.status === 429 && attempt < 2) {
      await new Promise(r => setTimeout(r, 3500));
      return fetchGeocode(query, key, attempt + 1);
    }
    if (!resp.ok) return null;
    const data = await resp.json();
    if (data.length) {
      const result = { lat: +data[0].lat, lng: +data[0].lon, display: data[0].display_name };
      geoCache[key] = result;
      saveGeoCache();
      return result;
    }
  } catch {}
  return null;
}

function refreshIcons() {
  globalThis.lucide?.createIcons?.();
}

function geocode(query) {
  if (!query?.trim()) return null;
  const key = query.trim().toLowerCase();
  if (geoCache[key]) return Promise.resolve(geoCache[key]);
  if (geoInFlight.has(key)) return geoInFlight.get(key);

  const request = geoQueue
    .catch(() => null)
    .then(() => fetchGeocode(query, key))
    .finally(() => geoInFlight.delete(key));
  geoQueue = request;
  geoInFlight.set(key, request);
  return request;
}

async function optimizePlacePool() {
  const places = routePlaceLines(fields.placePoolText?.value || "");
  if (!places.length) {
    setPlacePoolStatus("請先輸入至少一個景點。");
    return;
  }

  const dayCount = Math.max(1, Math.min(Number(fields.placePoolDays?.value) || trip.days.length || 1, 30));
  nodes.optimizePlaces.disabled = true;
  setPlacePoolStatus(`正在定位 ${places.length} 個景點並計算順路順序...`);

  const located = [];
  const missing = [];
  for (const place of places) {
    const geo = await geocode([place, trip.baseCity, trip.country].filter(Boolean).join(", "));
    if (geo) {
      located.push({ name: place, geo });
    } else {
      missing.push(place);
    }
  }

  if (!located.length) {
    nodes.optimizePlaces.disabled = false;
    setPlacePoolStatus("目前找不到可排序的景點，請確認地點名稱或加上城市/國家。");
    return;
  }

  const sorted = nearestRoute(located);
  const chunks = chunkPlaces(sorted, dayCount);
  const existingHotels = trip.days.map((day) => day.hotelName).filter(Boolean);
  const existingMeals = trip.days.map((day) => normalizeMealPlan(day));

  trip.days = chunks.map((group, index) => {
    const names = group.map((item) => item.name);
    const first = names[0] || trip.baseCity || "自選城市";
    const last = names[names.length - 1] || first;
    return normalizeDay({
      title: names.length > 1 ? `${first} - ${last}` : first,
      place: first,
      hotelName: existingHotels[index] || existingHotels[index - 1] || "",
      transportMode: "地圖順路規劃",
      route: names.join(" -> "),
      budget: trip.days[index]?.budget || 0,
      mealPlan: existingMeals[index] || { breakfast: "", lunch: "", dinner: "" },
      mapQuery: names.join(" "),
      landmarks: names,
      backupLandmarks: [],
      notes: "由景點池自動排序產生，可再拖拉微調。",
      photoUrl: "",
      items: names.map((name, itemIndex) => `${String(itemIndex + 1).padStart(2, "0")}. ${name}`)
    });
  });

  editingDayIndex = null;
  saveTrip();
  syncFields();
  showPlannerDetail();
  render();
  nodes.optimizePlaces.disabled = false;
  setPlacePoolStatus(`已排入 ${located.length} 個景點，共 ${dayCount} 天。${missing.length ? `未定位：${missing.join("、")}` : "全部景點已定位。"}`);
}

// ========== Trip Overview Map ==========
let tripMapInstance = null;
let tripMapRenderedKey = "";

function tripMapKey() {
  return trip.days.map(d => `${d.place}|${dayLandmarks(d).join("|")}|${trip.country}`).join(";;");
}

function createNumberedIcon(num, color) {
  if (typeof L === "undefined") return null;
  return L.divIcon({
    className: "numbered-marker",
    html: `<div style="background:${color};color:#fff;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);">${num}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -18]
  });
}

const mapColors = ["#c7352a", "#006b6f", "#d1972a", "#6b4fa0", "#2a7dc7", "#c73e6b", "#3ba55c", "#e67e22"];

async function renderTripMap() {
  const container = document.getElementById("tripMap");
  if (!container || typeof L === "undefined") return;

  const key = tripMapKey();
  if (key === tripMapRenderedKey && tripMapInstance) return;

  if (tripMapInstance) {
    tripMapInstance.remove();
    tripMapInstance = null;
  }

  if (!trip.days.length) {
    container.innerHTML = '<div class="map-empty">新增行程後，地圖會自動顯示所有地點。</div>';
    tripMapRenderedKey = key;
    return;
  }

  container.innerHTML = '<div class="map-loading">正在定位行程地點...</div>';

  const points = [];
  for (let i = 0; i < trip.days.length; i++) {
    const day = trip.days[i];
    const firstLandmark = dayLandmarks(day)[0];
    const geo = firstLandmark
      ? await geocodeLandmark(firstLandmark, day)
      : await geocode([day.place, trip.baseCity, trip.country].filter(Boolean).join(", "));
    if (geo) points.push({ ...geo, index: i });
  }

  if (!points.length) {
    container.innerHTML = '<div class="map-empty">無法取得地點座標，請確認地名是否正確。</div>';
    tripMapRenderedKey = key;
    return;
  }

  container.innerHTML = "";

  const bounds = L.latLngBounds(points.map(p => [p.lat, p.lng]));
  tripMapInstance = L.map(container, { scrollWheelZoom: true, tap: true });

  if (points.length === 1) {
    tripMapInstance.setView([points[0].lat, points[0].lng], 12);
  } else {
    tripMapInstance.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
  }

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(tripMapInstance);

  points.forEach(p => {
    const day = trip.days[p.index];
    const color = mapColors[p.index % mapColors.length];
    const marker = L.marker([p.lat, p.lng], { icon: createNumberedIcon(p.index + 1, color) }).addTo(tripMapInstance);
    const dateText = formatTripDate(dateForDay(p.index));
    marker.bindPopup(`<div style="min-width:160px"><strong>Day ${p.index + 1}</strong><br><span style="color:#666">${escapeHtml(dateText)}</span><br>${escapeHtml(day.title)}<br>${escapeHtml(day.place)}</div>`);
  });

  if (points.length > 1) {
    L.polyline(points.map(p => [p.lat, p.lng]), {
      color: "#c7352a",
      weight: 2.5,
      opacity: 0.6,
      dashArray: "8 6"
    }).addTo(tripMapInstance);
  }

  tripMapRenderedKey = key;
}

// ========== Day Detail Maps ==========
const dayMapInstances = {};
let dayMapRenderGeneration = 0;
let dayMapObserver = null;

function clearDayMaps() {
  dayMapRenderGeneration += 1;
  dayMapObserver?.disconnect();
  dayMapObserver = null;
  Object.keys(dayMapInstances).forEach((index) => {
    dayMapInstances[index].remove();
    delete dayMapInstances[index];
  });
}

function renderOpenDayMaps() {
  const containers = [...document.querySelectorAll(".day-map-container")];
  if (!("IntersectionObserver" in window)) {
    containers.forEach((container) => renderDayMap(Number(container.id.replace("dayMap-", ""))));
    return;
  }
  dayMapObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      dayMapObserver?.unobserve(entry.target);
      renderDayMap(Number(entry.target.id.replace("dayMap-", "")));
    });
  }, { rootMargin: "360px 0px" });
  containers.forEach((container) => {
    container.innerHTML = '<div class="map-loading">正在準備景點地圖...</div>';
    dayMapObserver.observe(container);
  });
}

async function geocodeLandmark(landmark, day) {
  const queries = uniqueList([
    landmarkQuery(landmark, day),
    [landmark, day.place, trip.country].filter(Boolean).join(", "),
    [landmark, trip.country].filter(Boolean).join(", "),
    landmark
  ]);
  for (const query of queries) {
    const geo = await geocode(query);
    if (geo) return geo;
  }
  return null;
}

async function renderDayMap(index) {
  const container = document.getElementById(`dayMap-${index}`);
  if (!container || typeof L === "undefined") return;
  const generation = dayMapRenderGeneration;
  container.dataset.expanded = "true";
  container.innerHTML = '<div class="map-loading">正在載入景點地圖...</div>';

  const day = trip.days[index];
  if (!day) return;

  const landmarks = dayLandmarks(day);
  const points = [];

  for (const lm of landmarks) {
    const geo = await geocodeLandmark(lm, day);
    if (generation !== dayMapRenderGeneration || !container.isConnected) return;
    if (geo) points.push({ ...geo, name: lm });
  }

  if (!points.length) {
    const fallbackQuery = [day.place, trip.baseCity, trip.country].filter(Boolean).join(", ");
    const fallback = await geocode(fallbackQuery);
    if (generation !== dayMapRenderGeneration || !container.isConnected) return;
    if (fallback) points.push({ ...fallback, name: day.place });
  }

  if (!points.length) {
    container.innerHTML = '<div class="map-empty">無法定位此天的景點。</div>';
    return;
  }

  container.innerHTML = "";

  const map = L.map(container, { scrollWheelZoom: false, tap: true });
  dayMapInstances[index] = map;

  if (points.length === 1) {
    map.setView([points[0].lat, points[0].lng], 14);
  } else {
    map.fitBounds(L.latLngBounds(points.map(p => [p.lat, p.lng])), { padding: [30, 30], maxZoom: 15 });
  }

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);

  const color = mapColors[index % mapColors.length];
  points.forEach((p, i) => {
    const marker = L.marker([p.lat, p.lng], { icon: createNumberedIcon(i + 1, color) }).addTo(map);
    marker.bindPopup(`<strong>${escapeHtml(p.name)}</strong>`);
  });

  if (points.length > 1) {
    L.polyline(points.map(p => [p.lat, p.lng]), {
      color: "#006b6f",
      weight: 2,
      opacity: 0.7,
      dashArray: "6 4"
    }).addTo(map);
  }
}

// ========== Food Explorer ==========
function foodCategoryKeyword(cat) {
  const keywords = {
    all: "",
    local: "local cuisine traditional",
    street: "street food night market",
    fine: "fine dining",
    cafe: "cafe dessert bakery coffee",
    vegetarian: "vegetarian vegan",
    breakfast: "breakfast brunch",
    bar: "bar pub",
    market: "market food hall"
  };
  return keywords[cat] || "";
}

const foodSearchPlatforms = [
  {
    name: "Google Maps 餐廳",
    type: "地圖搜尋",
    note: "查看附近餐廳位置、評分、照片與營業時間。",
    buildUrl: (q, cat) => `https://www.google.com/maps/search/${encodeURIComponent(`${q} ${foodCategoryKeyword(cat)} restaurant`.trim())}`
  },
  {
    name: "Tripadvisor 美食",
    type: "旅人評價",
    note: "全球旅人推薦的餐廳排行與真實評價。",
    buildUrl: (q, cat) => `https://www.tripadvisor.com/Search?q=${encodeURIComponent(`${q} ${foodCategoryKeyword(cat)} restaurant`.trim())}`
  },
  {
    name: "Yelp",
    type: "在地推薦",
    note: "在地人愛去的餐廳、小吃店與隱藏版美食。",
    buildUrl: (q, cat) => `https://www.yelp.com/search?find_desc=${encodeURIComponent(`${foodCategoryKeyword(cat)} restaurant`.trim())}&find_loc=${encodeURIComponent(q)}`
  },
  {
    name: "Google 美食攻略",
    type: "文章推薦",
    note: "搜尋部落客的美食懶人包與在地人推薦清單。",
    buildUrl: (q, cat) => `https://www.google.com/search?q=${encodeURIComponent(`${q} 美食 推薦 必吃 ${foodCategoryKeyword(cat)}`.trim())}`
  },
  {
    name: "YouTube 美食影片",
    type: "影片推薦",
    note: "看實際用餐環境、菜色與排隊狀況。",
    buildUrl: (q, cat) => `https://www.youtube.com/results?search_query=${encodeURIComponent(`${q} 美食 必吃 ${foodCategoryKeyword(cat)}`.trim())}`
  },
  {
    name: "Instagram 美食",
    type: "社群打卡",
    note: "找熱門打卡餐廳與最新美食趨勢。",
    buildUrl: (q) => `https://www.google.com/search?q=${encodeURIComponent(`site:instagram.com ${q} food restaurant`)}`
  }
];

function renderFoodSearch(event) {
  if (event) event.preventDefault();
  const destination = nodes.foodDestination.value.trim() || trip.baseCity || trip.country || "美食";
  const category = nodes.foodCategory.value;
  nodes.foodDestination.value = destination;

  const quickLinksHtml = trip.days.length ? `
    <div class="food-day-chips">
      <h3>快速搜尋每日行程地點的美食</h3>
      <div class="chip-grid">
        ${trip.days.map((day, i) => {
          const place = day.place || trip.baseCity;
          const url = `https://www.google.com/maps/search/${encodeURIComponent(`${place} ${trip.country} restaurant`)}`;
          return `<a href="${url}" target="_blank" rel="noreferrer" class="food-chip">Day ${i + 1}：${escapeHtml(place)}</a>`;
        }).join("")}
      </div>
    </div>
  ` : "";

  nodes.foodQuickLinks.innerHTML = quickLinksHtml;

  nodes.foodGrid.innerHTML = foodSearchPlatforms.map(platform => {
    const url = platform.buildUrl(destination, category);
    return `
      <article class="food-card">
        <div>
          <span>${escapeHtml(platform.type)}</span>
          <h3>${escapeHtml(platform.name)}</h3>
          <p>${escapeHtml(platform.note)}</p>
        </div>
        <a href="${url}" target="_blank" rel="noreferrer">搜尋</a>
      </article>
    `;
  }).join("");
}

// ========== Countdown Timer ==========
function updateCountdown() {
  const start = parseDateValue(trip.startDate);
  if (!start || !nodes.countdownDays) return;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((start - today) / (1000 * 60 * 60 * 24));
  if (diff > 0) {
    nodes.countdownDays.textContent = diff;
    nodes.countdownLabel.textContent = "天後出發";
  } else if (diff === 0) {
    nodes.countdownDays.textContent = "Today";
    nodes.countdownLabel.textContent = "出發日!";
  } else {
    const endDate = dateForDay(Math.max(trip.days.length - 1, 0));
    if (endDate && today <= endDate) {
      const tripDay = Math.ceil((today - start) / (1000 * 60 * 60 * 24)) + 1;
      nodes.countdownDays.textContent = `Day ${tripDay}`;
      nodes.countdownLabel.textContent = "旅行中";
    } else {
      nodes.countdownDays.textContent = Math.abs(diff);
      nodes.countdownLabel.textContent = "天前出發";
    }
  }
}

// ========== Currency Calculator ==========
function updateCalcDisplay() {
  const cur = normalizeCurrency(trip.currency);
  if (nodes.calcLocalLabel) nodes.calcLocalLabel.textContent = cur;
  if (nodes.calcRateDisplay) nodes.calcRateDisplay.textContent = `匯率：1 ${cur} = ${formatRate(trip.rate)} TWD`;
  renderCalcPresets();
}

function calcLocalToTwd() {
  const val = parseFloat(nodes.calcLocal.value);
  if (!isNaN(val)) {
    nodes.calcTwd.value = formatInputAmount(val * trip.rate, "TWD");
  } else {
    nodes.calcTwd.value = "";
  }
}

function calcTwdToLocal() {
  const val = parseFloat(nodes.calcTwd.value);
  if (!isNaN(val) && trip.rate > 0) {
    nodes.calcLocal.value = formatInputAmount(val / trip.rate, trip.currency);
  } else {
    nodes.calcLocal.value = "";
  }
}

function renderCalcPresets() {
  if (!nodes.calcPresets) return;
  const presets = [100, 500, 1000, 5000, 10000];
  const cur = normalizeCurrency(trip.currency);
  nodes.calcPresets.innerHTML = presets.map(amount => {
    const twd = amount * trip.rate;
    return `<button type="button" class="preset-btn" data-preset="${amount}">${amount.toLocaleString()} ${cur} = NT$${formatAmount(twd, "TWD")}</button>`;
  }).join("");
  nodes.calcPresets.querySelectorAll("[data-preset]").forEach(btn => {
    btn.addEventListener("click", () => {
      nodes.calcLocal.value = btn.dataset.preset;
      calcLocalToTwd();
    });
  });
}

// ========== Drag and Drop ==========
let draggedDayIndex = null;
let draggedLandmark = null;
let draggedTimeline = null;

function setupDragAndDrop() {
  const cards = document.querySelectorAll(".day-card[data-day-index]");
  cards.forEach(card => {
    card.addEventListener("dragstart", e => {
      draggedDayIndex = Number(card.dataset.dayIndex);
      card.classList.add("is-dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", String(draggedDayIndex));
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
      document.querySelectorAll(".drag-over").forEach(el => el.classList.remove("drag-over"));
      draggedDayIndex = null;
    });
    card.addEventListener("dragover", e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      const target = card.closest("[data-day-index]");
      if (target) target.classList.add("drag-over");
    });
    card.addEventListener("dragleave", e => {
      if (!card.contains(e.relatedTarget)) card.classList.remove("drag-over");
    });
    card.addEventListener("drop", e => {
      e.preventDefault();
      card.classList.remove("drag-over");
      const targetIndex = Number(card.dataset.dayIndex);
      if (draggedDayIndex !== null && draggedDayIndex !== targetIndex) {
        const [moved] = trip.days.splice(draggedDayIndex, 1);
        trip.days.splice(targetIndex, 0, moved);
        editingDayIndex = null;
        saveTrip();
        render();
      }
    });
  });
}

function moveArrayItem(list, fromIndex, toIndex) {
  if (!Array.isArray(list) || fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return false;
  if (fromIndex >= list.length || toIndex >= list.length) return false;
  const [moved] = list.splice(fromIndex, 1);
  list.splice(toIndex, 0, moved);
  return true;
}

function setupWithinDayOrdering() {
  document.querySelectorAll("[data-landmark-order]").forEach((item) => {
    item.addEventListener("dragstart", (event) => {
      event.stopPropagation();
      draggedLandmark = {
        dayIndex: Number(item.dataset.landmarkOrder),
        index: Number(item.dataset.landmarkIndex)
      };
      item.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
    });
    item.addEventListener("dragend", () => {
      item.classList.remove("is-dragging");
      document.querySelectorAll(".order-drag-over").forEach((el) => el.classList.remove("order-drag-over"));
      draggedLandmark = null;
    });
    item.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
      item.classList.add("order-drag-over");
    });
    item.addEventListener("dragleave", () => item.classList.remove("order-drag-over"));
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      event.stopPropagation();
      item.classList.remove("order-drag-over");
      const target = {
        dayIndex: Number(item.dataset.landmarkOrder),
        index: Number(item.dataset.landmarkIndex)
      };
      if (!draggedLandmark || draggedLandmark.dayIndex !== target.dayIndex) return;
      const day = trip.days[target.dayIndex];
      if (moveArrayItem(day?.landmarks, draggedLandmark.index, target.index)) {
        day.route = day.landmarks.join(" -> ");
        day.mapQuery = day.landmarks.join(" ");
        saveTrip();
        render();
      }
    });
  });

  document.querySelectorAll("[data-timeline-order]").forEach((item) => {
    item.addEventListener("dragstart", (event) => {
      if (Number(item.dataset.timelineIndex) < 0) return;
      event.stopPropagation();
      draggedTimeline = {
        dayIndex: Number(item.dataset.timelineOrder),
        index: Number(item.dataset.timelineIndex)
      };
      item.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
    });
    item.addEventListener("dragend", () => {
      item.classList.remove("is-dragging");
      document.querySelectorAll(".order-drag-over").forEach((el) => el.classList.remove("order-drag-over"));
      draggedTimeline = null;
    });
    item.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
      item.classList.add("order-drag-over");
    });
    item.addEventListener("dragleave", () => item.classList.remove("order-drag-over"));
    item.addEventListener("drop", (event) => {
      event.preventDefault();
      event.stopPropagation();
      item.classList.remove("order-drag-over");
      const target = {
        dayIndex: Number(item.dataset.timelineOrder),
        index: Number(item.dataset.timelineIndex)
      };
      if (!draggedTimeline || draggedTimeline.dayIndex !== target.dayIndex) return;
      const day = trip.days[target.dayIndex];
      if (moveArrayItem(day?.items, draggedTimeline.index, target.index)) {
        saveTrip();
        render();
      }
    });
  });
}

// ========== Weather Forecast ==========
let weatherData = {};
let weatherFetchedKey = "";

function weatherText(code) {
  if (code === 0) return "晴天";
  if (code <= 3) return "多雲";
  if (code <= 48) return "霧";
  if (code <= 55) return "毛毛雨";
  if (code <= 65) return "雨天";
  if (code <= 75) return "下雪";
  if (code <= 82) return "陣雨";
  if (code >= 95) return "雷雨";
  return "";
}

async function fetchTripWeather() {
  if (!trip.days.length || !trip.startDate) return;

  const query = [trip.baseCity, trip.country].filter(Boolean).join(", ");
  const geo = await geocode(query);
  if (!geo) return;

  const endDate = dateForDay(trip.days.length - 1);
  if (!endDate) return;
  const endStr = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}`;

  const key = `${geo.lat},${geo.lng},${trip.startDate},${endStr}`;
  if (key === weatherFetchedKey) return;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${geo.lat}&longitude=${geo.lng}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&start_date=${trip.startDate}&end_date=${endStr}`;
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.daily?.time) {
      weatherData = {};
      data.daily.time.forEach((date, i) => {
        weatherData[date] = {
          high: data.daily.temperature_2m_max[i],
          low: data.daily.temperature_2m_min[i],
          code: data.daily.weather_code[i]
        };
      });
      weatherFetchedKey = key;
      updateWeatherDisplay();
    }
  } catch {}
}

function updateWeatherDisplay() {
  trip.days.forEach((day, index) => {
    const dayDate = dateForDay(index);
    if (!dayDate) return;
    const dateKey = `${dayDate.getFullYear()}-${String(dayDate.getMonth() + 1).padStart(2, "0")}-${String(dayDate.getDate()).padStart(2, "0")}`;
    const weather = weatherData[dateKey];
    const container = document.querySelector(`[data-weather-day="${index}"]`);
    if (container && weather) {
      container.innerHTML = `<span class="weather-cond">${escapeHtml(weatherText(weather.code))}</span><span>${Math.round(weather.low)}°C ~ ${Math.round(weather.high)}°C</span>`;
    }
  });
}

nodes.dayForm.addEventListener("submit", addDay);
fields.tripSelector.addEventListener("change", () => switchActiveTrip(fields.tripSelector.value));
nodes.createTripFromHome.addEventListener("click", () => createNewTrip(true));
nodes.openCurrentTrip.addEventListener("click", showPlannerDetail);
nodes.backToPlannerHome.addEventListener("click", showPlannerHome);
nodes.homeNavButton.addEventListener("click", showAppHome);
nodes.dashboardOpenTrip?.addEventListener("click", showPlannerDetail);
nodes.dashboardNewTrip?.addEventListener("click", () => createNewTrip(true));
nodes.createTrip.addEventListener("click", createNewTrip);
nodes.renameTrip.addEventListener("click", renameActiveTrip);
nodes.deleteTrip.addEventListener("click", deleteActiveTrip);
nodes.signIn.addEventListener("click", signInWithEmail);
nodes.signUp.addEventListener("click", signUpWithEmail);
nodes.signOut.addEventListener("click", signOutCloud);
if (nodes.syncTripToCloud) nodes.syncTripToCloud.addEventListener("click", syncCurrentTripToCloud);
if (nodes.refreshCloudTrips) nodes.refreshCloudTrips.addEventListener("click", refreshCloudTrips);
nodes.openCloudPanel.addEventListener("click", openCloudPanel);
nodes.closeCloudPanel.addEventListener("click", closeCloudPanel);
nodes.cloudDialog.addEventListener("click", (event) => {
  if (event.target === nodes.cloudDialog) closeCloudPanel();
});
nodes.addSample.addEventListener("click", addSampleDay);
nodes.clearTrip.addEventListener("click", clearTrip);
nodes.loadOsaka.addEventListener("click", loadOsakaTrip);
nodes.saveHistory.addEventListener("click", saveCurrentToHistory);
nodes.saveHistoryTop.addEventListener("click", saveCurrentToHistory);
nodes.printItinerary.addEventListener("click", printItineraryBook);
nodes.optimizePlaces.addEventListener("click", optimizePlacePool);
nodes.ticketForm.addEventListener("submit", addTicket);
nodes.createShareLink.addEventListener("click", createShareLink);
nodes.previewImport.addEventListener("click", previewImport);
nodes.applyImport.addEventListener("click", applyImport);
nodes.themeToggle.addEventListener("click", toggleTheme);
nodes.mobileThemeToggle?.addEventListener("click", toggleTheme);
nodes.mobileCloudButton?.addEventListener("click", openCloudPanel);
nodes.homeThemeToggle?.addEventListener("click", toggleTheme);
nodes.homeCloudButton?.addEventListener("click", openCloudPanel);
nodes.mobileTripSearch?.addEventListener("input", () => {
  mobileTripSearchTerm = nodes.mobileTripSearch.value;
  renderTripHome();
  refreshIcons();
});
document.querySelectorAll("[data-mobile-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.mobileAction;
    if (target === "planner") showPlannerDetail();
    else switchTab(target);
  });
});
document.querySelectorAll("[data-home-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.homeAction;
    if (target === "planner") showPlannerHome();
    else switchTab(target);
  });
});
nodes.guideForm.addEventListener("submit", renderGuideLinks);
nodes.foodForm.addEventListener("submit", renderFoodSearch);
if (nodes.calcLocal) nodes.calcLocal.addEventListener("input", calcLocalToTwd);
if (nodes.calcTwd) nodes.calcTwd.addEventListener("input", calcTwdToLocal);
window.addEventListener("pagehide", persistPlannerBeforeLeave);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") persistPlannerBeforeLeave();
});

applyTheme();
applySharedTripFromUrl();
syncFields();
renderChecklist();
renderGuideLinks();
renderFoodSearch();
updatePlannerNavState();
render();
refreshIcons();
registerServiceWorker();
initSupabaseAuth();
