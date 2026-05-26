const TRIP_KEY = "global-trip-planner-v2";
const HISTORY_KEY = "global-trip-history-v1";

const osakaTrip = {
  name: "大阪 8 天 7 夜",
  country: "日本",
  baseCity: "大阪",
  currency: "JPY",
  rate: 0.22,
  pace: "balanced",
  days: [
    {
      title: "抵達關西機場，難波暖身",
      place: "大阪難波",
      route: "關西機場 -> 南海電鐵 -> 難波",
      budget: 7600,
      items: ["14:00 抵達關西機場，領交通卡與網路", "16:00 南海電鐵進難波，飯店寄放行李", "18:00 道頓堀、心齋橋、法善寺橫丁散步", "20:00 章魚燒、御好燒或拉麵晚餐"]
    },
    {
      title: "大阪城、梅田與夜景",
      place: "大阪市區",
      route: "谷町四丁目 -> 大阪城 -> 梅田",
      budget: 9200,
      items: ["09:00 大阪城公園與天守閣周邊拍照", "12:00 天滿橋或京橋午餐", "15:00 梅田商圈、阪急百貨與地下街", "18:30 藍天大廈空中庭園看夜景"]
    },
    {
      title: "日本環球影城整天",
      place: "環球影城",
      route: "難波 -> 西九條 -> 環球城",
      budget: 22800,
      items: ["07:30 提早出門，開園前抵達排隊", "09:00 任天堂世界、哈利波特區優先安排", "13:00 園區午餐與表演時間預留", "19:30 回難波簡單晚餐，早點休息"]
    },
    {
      title: "京都伏見稻荷與清水寺",
      place: "京都",
      route: "大阪 -> 京都 -> 伏見稻荷 -> 清水五條",
      budget: 11800,
      items: ["08:00 JR 或京阪前往京都", "09:30 伏見稻荷大社，避開正午人潮", "13:00 祇園、二年坂、三年坂午餐與散步", "16:00 清水寺周邊，傍晚回大阪"]
    },
    {
      title: "奈良公園與通天閣夜晚",
      place: "奈良",
      route: "大阪難波 -> 近鐵奈良 -> 新世界",
      budget: 9800,
      items: ["09:00 近鐵前往奈良，先到奈良公園", "10:30 東大寺、春日大社與老街點心", "15:30 回大阪休息或補逛藥妝", "18:30 新世界、通天閣、串炸晚餐"]
    },
    {
      title: "神戶港、北野異人館與牛排",
      place: "神戶",
      route: "大阪梅田 -> 三宮 -> 神戶港",
      budget: 15200,
      items: ["09:30 阪急或 JR 前往三宮", "10:30 北野異人館街與咖啡店", "13:30 神戶牛午餐或平價牛排備案", "16:00 美利堅公園、港塔周邊，夜景後回大阪"]
    },
    {
      title: "黑門市場、天王寺與最後採買",
      place: "大阪市區",
      route: "日本橋 -> 天王寺 -> 阿倍野",
      budget: 12800,
      items: ["09:30 黑門市場早餐與海鮮小吃", "12:30 天王寺公園、四天王寺或動物園前散步", "15:00 阿倍野 Harukas、百貨與伴手禮", "19:00 心齋橋最後採買，整理行李"]
    },
    {
      title: "退房，機場伴手禮",
      place: "大阪 / 關西機場",
      route: "飯店 -> 關西機場",
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

const fields = {
  tripName: document.querySelector("#tripName"),
  country: document.querySelector("#country"),
  baseCity: document.querySelector("#baseCity"),
  currency: document.querySelector("#currency"),
  rate: document.querySelector("#rate"),
  pace: document.querySelector("#pace"),
  dayTitle: document.querySelector("#dayTitle"),
  dayPlace: document.querySelector("#dayPlace"),
  dayRoute: document.querySelector("#dayRoute"),
  dayBudget: document.querySelector("#dayBudget"),
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
  previewImport: document.querySelector("#previewImport"),
  applyImport: document.querySelector("#applyImport"),
  importPreview: document.querySelector("#importPreview"),
  historyList: document.querySelector("#historyList")
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadTrip() {
  try {
    const saved = JSON.parse(localStorage.getItem(TRIP_KEY));
    return saved?.days ? saved : clone(osakaTrip);
  } catch {
    return clone(osakaTrip);
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
  fields.currency.value = normalizeCurrency(trip.currency);
  fields.rate.value = trip.rate;
  fields.pace.value = trip.pace;
}

function updateTripFromFields() {
  trip.name = fields.tripName.value.trim() || "我的旅行計畫";
  trip.country = fields.country.value.trim() || "自選國家";
  trip.baseCity = fields.baseCity.value.trim() || "自選城市";
  trip.currency = normalizeCurrency(fields.currency.value);
  trip.rate = Number(fields.rate.value) || 1;
  trip.pace = fields.pace.value;
  saveTrip();
  render();
}

function render() {
  const total = totalBudget();
  const stops = uniqueStops();
  nodes.heroTitle.textContent = trip.name;
  nodes.heroCopy.textContent = `${trip.country}・${trip.baseCity}，目前規劃 ${trip.days.length} 天，隨時可新增、匯入或載入歷史行程。`;
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

  document.querySelectorAll("[data-delete-day]").forEach((button) => {
    button.addEventListener("click", () => {
      trip.days.splice(Number(button.dataset.deleteDay), 1);
      saveTrip();
      render();
    });
  });
}

function renderDay(day, index) {
  const items = day.items?.length ? day.items : ["尚未填入細節"];
  return `
    <article class="day-card">
      <div class="day-number"><span>Day</span>${index + 1}</div>
      <div>
        <div class="card-title-row">
          <h3>${escapeHtml(day.title)}</h3>
          <button class="icon-button" type="button" data-delete-day="${index}" aria-label="刪除第 ${index + 1} 天">刪除</button>
        </div>
        <div class="day-meta">
          <span class="tag">${escapeHtml(day.place)}</span>
          <span class="tag">${normalizeCurrency(trip.currency)}</span>
        </div>
        <ul class="timeline">
          ${items.map((item) => `<li><time>•</time><span>${escapeHtml(item)}</span></li>`).join("")}
        </ul>
        <div class="cost-row">
          <span>${escapeHtml(day.route || "尚未填交通動線")}</span>
          <strong>${formatLocal(Number(day.budget || 0))}</strong>
        </div>
      </div>
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
                <p>${escapeHtml(entry.trip.country)}・${escapeHtml(entry.trip.baseCity)}｜${entry.trip.days.length} 天｜${formatHistoryBudget(entry.trip)}</p>
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
      trip = clone(history[Number(button.dataset.loadHistory)].trip);
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

function addDay(event) {
  event.preventDefault();
  const items = fields.dayItems.value.split("\n").map((item) => item.trim()).filter(Boolean);
  trip.days.push({
    title: fields.dayTitle.value.trim(),
    place: fields.dayPlace.value.trim(),
    route: fields.dayRoute.value.trim(),
    budget: Number(fields.dayBudget.value) || 0,
    items
  });
  nodes.dayForm.reset();
  saveTrip();
  render();
}

function addSampleDay() {
  trip.days.push({
    title: "自由探索日",
    place: trip.baseCity || "自選城市",
    route: "飯店 -> 喜歡的街區 -> 晚餐",
    budget: 2500,
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
  trip = clone(osakaTrip);
  saveTrip();
  syncFields();
  render();
}

function saveCurrentToHistory() {
  const entry = { id: crypto.randomUUID(), savedAt: new Date().toISOString(), trip: clone(trip) };
  history = [entry, ...history].slice(0, 20);
  saveHistoryStore();
  renderHistory();
  switchTab("history");
}

function parseImportedTrip(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const days = [];
  let current = null;

  const startDay = (title) => {
    current = { title: title || `第 ${days.length + 1} 天`, place: trip.baseCity || "", route: "", budget: 0, items: [] };
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

    if (/^(交通|路線|動線|route)\s*[:：]/i.test(line)) {
      current.route = line.replace(/^(交通|路線|動線|route)\s*[:：]\s*/i, "");
      return;
    }

    if (/^(預算|花費|budget|cost)\s*[:：]/i.test(line)) {
      current.budget = Number(line.replace(/[^\d.]/g, "")) || 0;
      return;
    }

    current.items.push(line.replace(/^[-•*]\s*/, ""));
  });

  return days.filter((day) => day.title || day.items.length);
}

function previewImport() {
  const days = parseImportedTrip(fields.importText.value);
  nodes.importPreview.innerHTML = days.length
    ? `<h3>解析結果：${days.length} 天</h3>${days.map((day, index) => `<div class="preview-day"><strong>Day ${index + 1}：${escapeHtml(day.title)}</strong><span>${escapeHtml(day.place || "未填地點")}｜${escapeHtml(day.route || "未填交通")}｜預算 ${day.budget || 0}</span></div>`).join("")}`
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

[fields.tripName, fields.country, fields.baseCity, fields.currency, fields.rate, fields.pace].forEach((field) => {
  field.addEventListener("input", updateTripFromFields);
});

nodes.dayForm.addEventListener("submit", addDay);
nodes.addSample.addEventListener("click", addSampleDay);
nodes.clearTrip.addEventListener("click", clearTrip);
nodes.loadOsaka.addEventListener("click", loadOsakaTrip);
nodes.saveHistory.addEventListener("click", saveCurrentToHistory);
nodes.saveHistoryTop.addEventListener("click", saveCurrentToHistory);
nodes.previewImport.addEventListener("click", previewImport);
nodes.applyImport.addEventListener("click", applyImport);

syncFields();
renderChecklist();
render();
