const itinerary = [
  {
    day: 1,
    area: "osaka",
    title: "抵達關西機場，難波暖身",
    route: "關西機場 -> 南海電鐵 -> 難波",
    cost: 7600,
    tags: ["大阪市區", "抵達日", "美食"],
    items: [
      ["14:00", "抵達關西機場，領交通卡與網路"],
      ["16:00", "南海電鐵進難波，飯店寄放行李"],
      ["18:00", "道頓堀、心齋橋、法善寺橫丁散步"],
      ["20:00", "章魚燒、御好燒或拉麵晚餐"]
    ]
  },
  {
    day: 2,
    area: "osaka",
    title: "大阪城、梅田與夜景",
    route: "谷町四丁目 -> 大阪城 -> 梅田",
    cost: 9200,
    tags: ["大阪市區", "歷史", "夜景"],
    items: [
      ["09:00", "大阪城公園與天守閣周邊拍照"],
      ["12:00", "天滿橋或京橋午餐"],
      ["15:00", "梅田商圈、阪急百貨與地下街"],
      ["18:30", "藍天大廈空中庭園看夜景"]
    ]
  },
  {
    day: 3,
    area: "usj",
    title: "日本環球影城整天",
    route: "難波 -> 西九條 -> 環球城",
    cost: 22800,
    tags: ["環球影城", "主題樂園", "高花費"],
    items: [
      ["07:30", "提早出門，開園前抵達排隊"],
      ["09:00", "任天堂世界、哈利波特區優先安排"],
      ["13:00", "園區午餐與表演時間預留"],
      ["19:30", "回難波簡單晚餐，早點休息"]
    ]
  },
  {
    day: 4,
    area: "kyoto",
    title: "京都伏見稻荷與清水寺",
    route: "大阪 -> 京都 -> 伏見稻荷 -> 清水五條",
    cost: 11800,
    tags: ["京都", "一日遊", "神社"],
    items: [
      ["08:00", "JR 或京阪前往京都"],
      ["09:30", "伏見稻荷大社，避開正午人潮"],
      ["13:00", "祇園、二年坂、三年坂午餐與散步"],
      ["16:00", "清水寺周邊，傍晚回大阪"]
    ]
  },
  {
    day: 5,
    area: "nara",
    title: "奈良公園與通天閣夜晚",
    route: "大阪難波 -> 近鐵奈良 -> 新世界",
    cost: 9800,
    tags: ["奈良", "一日遊", "動線輕鬆"],
    items: [
      ["09:00", "近鐵前往奈良，先到奈良公園"],
      ["10:30", "東大寺、春日大社與老街點心"],
      ["15:30", "回大阪休息或補逛藥妝"],
      ["18:30", "新世界、通天閣、串炸晚餐"]
    ]
  },
  {
    day: 6,
    area: "kobe",
    title: "神戶港、北野異人館與牛排",
    route: "大阪梅田 -> 三宮 -> 神戶港",
    cost: 15200,
    tags: ["神戶", "一日遊", "港景"],
    items: [
      ["09:30", "阪急或 JR 前往三宮"],
      ["10:30", "北野異人館街與咖啡店"],
      ["13:30", "神戶牛午餐或平價牛排備案"],
      ["16:00", "美利堅公園、港塔周邊，夜景後回大阪"]
    ]
  },
  {
    day: 7,
    area: "osaka",
    title: "黑門市場、天王寺與最後採買",
    route: "日本橋 -> 天王寺 -> 阿倍野",
    cost: 12800,
    tags: ["大阪市區", "購物", "市場"],
    items: [
      ["09:30", "黑門市場早餐與海鮮小吃"],
      ["12:30", "天王寺公園、四天王寺或動物園前散步"],
      ["15:00", "阿倍野 Harukas、百貨與伴手禮"],
      ["19:00", "心齋橋最後採買，整理行李"]
    ]
  },
  {
    day: 8,
    area: "osaka",
    title: "退房，機場伴手禮",
    route: "飯店 -> 關西機場",
    cost: 6900,
    tags: ["大阪市區", "返程日", "機場"],
    items: [
      ["09:00", "飯店退房，行李確認"],
      ["10:30", "難波周邊咖啡或最後補買"],
      ["12:30", "搭車前往關西機場"],
      ["14:30", "機場伴手禮、報到與出境"]
    ]
  }
];

const passes = [
  ["ICOCA", "全程必備，便利商店和地鐵都好用"],
  ["大阪周遊卡", "第 2 或第 7 天景點多時再買"],
  ["USJ 門票", "第 3 天，熱門日可評估快速通關"],
  ["近鐵 / 京阪", "京都奈良日依實際路線購票"]
];

const checklist = [
  "護照與機票截圖",
  "飯店訂房確認",
  "ICOCA 或 Suica",
  "行動網路 / eSIM",
  "行動電源",
  "舒適好走的鞋",
  "藥妝與伴手禮清單",
  "USJ 門票與 App"
];

const paceText = {
  relaxed: "每天保留更多咖啡、拍照與回飯店休息時間，適合親子或想慢慢逛。",
  balanced: "景點密度適中，保留吃飯、移動和臨時逛街時間。",
  packed: "會把同區景點盡量排滿，適合早出晚歸、想多踩點的玩法。"
};

const dayList = document.querySelector("#dayList");
const areaFilter = document.querySelector("#areaFilter");
const pace = document.querySelector("#pace");
const yenRate = document.querySelector("#yenRate");
const visibleDays = document.querySelector("#visibleDays");
const totalYen = document.querySelector("#totalYen");
const totalTwd = document.querySelector("#totalTwd");
const paceHint = document.querySelector("#paceHint");
const passList = document.querySelector("#passList");
const checklistNode = document.querySelector("#checklist");

function money(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

function adjustedCost(cost) {
  const multiplier = {
    relaxed: 0.92,
    balanced: 1,
    packed: 1.14
  }[pace.value];
  return Math.round(cost * multiplier);
}

function renderItinerary() {
  const selectedArea = areaFilter.value;
  const days = itinerary.filter((day) => selectedArea === "all" || day.area === selectedArea);
  const total = days.reduce((sum, day) => sum + adjustedCost(day.cost), 0);
  const rate = Number(yenRate.value) || 0.22;

  dayList.innerHTML = days.length
    ? days.map(renderDay).join("")
    : `<div class="empty-state">這個區域目前沒有行程。切回全部區域，或把它當成自由活動日。</div>`;

  visibleDays.textContent = days.length;
  totalYen.textContent = money(total, "ja-JP", "JPY");
  totalTwd.textContent = money(total * rate, "zh-TW", "TWD");
  paceHint.textContent = paceText[pace.value];
}

function renderDay(day) {
  return `
    <article class="day-card">
      <div class="day-number"><span>Day</span>${day.day}</div>
      <div>
        <h3>${day.title}</h3>
        <div class="day-meta">
          ${day.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <ul class="timeline">
          ${day.items.map(([time, item]) => `<li><time>${time}</time><span>${item}</span></li>`).join("")}
        </ul>
        <div class="cost-row">
          <span>${day.route}</span>
          <strong>${money(adjustedCost(day.cost), "ja-JP", "JPY")}</strong>
        </div>
      </div>
    </article>
  `;
}

function renderPasses() {
  passList.innerHTML = passes
    .map(([name, note]) => `<div class="pass-item"><strong>${name}</strong><span>${note}</span></div>`)
    .join("");
}

function renderChecklist() {
  checklistNode.innerHTML = checklist
    .map(
      (item, index) => `
        <label class="check-item">
          <input type="checkbox" data-check="${index}" />
          <span>${item}</span>
        </label>
      `
    )
    .join("");
}

[areaFilter, pace, yenRate].forEach((input) => {
  input.addEventListener("input", renderItinerary);
});

renderPasses();
renderChecklist();
renderItinerary();
