const STORAGE_KEY = "global-trip-planner-v1";

const defaultTrip = {
  name: "我的旅行計畫",
  country: "任何國家",
  baseCity: "自選城市",
  currency: "TWD",
  rate: 1,
  pace: "balanced",
  days: [
    {
      title: "抵達與熟悉城市",
      place: "主要城市",
      route: "機場 / 車站 -> 飯店 -> 市中心",
      budget: 3000,
      items: ["抵達後辦理入住", "附近散步與換錢", "找一間想吃的餐廳當第一餐"]
    },
    {
      title: "經典景點與在地美食",
      place: "市中心",
      route: "飯店 -> 主要景點 -> 市集 / 商圈",
      budget: 4500,
      items: ["上午安排最想去的景點", "下午逛街或咖啡店", "晚上吃在地料理"]
    }
  ]
};

const checklist = [
  "護照 / 身分證件",
  "機票、車票或訂位截圖",
  "住宿確認信",
  "信用卡與少量現金",
  "網路 SIM / eSIM",
  "轉接頭與行動電源",
  "常備藥與個人用品",
  "雨具、外套與好走的鞋"
];

const paceText = {
  relaxed: "慢慢玩模式：每天留更多休息、拍照、咖啡與自由探索時間。",
  balanced: "剛剛好模式：把重要景點排進去，也保留移動、吃飯和臨時發現。",
  packed: "排滿一點模式：適合想多踩點的人，記得每天安排一段彈性時間。"
};

let trip = loadTrip();

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
  dayItems: document.querySelector("#dayItems")
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
  clearTrip: document.querySelector("#clearTrip")
};

function loadTrip() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultTrip, ...saved } : structuredClone(defaultTrip);
  } catch {
    return structuredClone(defaultTrip);
  }
}

function saveTrip() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trip));
}

function formatLocal(value) {
  const currency = normalizeCurrency(trip.currency);
  try {
    return new Intl.NumberFormat("zh-TW", {
      style: "currency",
      currency,
      maximumFractionDigits: 0
    }).format(value);
  } catch {
    return `${currency} ${Math.round(value).toLocaleString("zh-TW")}`;
  }
}

function formatTwd(value) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0
  }).format(value);
}

function normalizeCurrency(value) {
  return (value || "TWD").trim().slice(0, 3).toUpperCase() || "TWD";
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

function totalBudget() {
  return trip.days.reduce((sum, day) => sum + Number(day.budget || 0), 0);
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
  trip.country = fields.country.value.trim() || "任何國家";
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
  nodes.heroCopy.textContent = `${trip.country}・${trip.baseCity}，自由規劃 ${trip.days.length} 天行程、預算與移動動線。`;
  nodes.statDays.textContent = trip.days.length;
  nodes.statStops.textContent = stops;
  nodes.statBudget.textContent = Math.round(total).toLocaleString("zh-TW");
  nodes.statCurrency.textContent = normalizeCurrency(trip.currency);
  nodes.visibleDays.textContent = trip.days.length;
  nodes.totalLocal.textContent = formatLocal(total);
  nodes.totalTwd.textContent = formatTwd(total * trip.rate);
  nodes.paceHint.textContent = paceText[trip.pace];

  nodes.dayList.innerHTML = trip.days.length
    ? trip.days.map(renderDay).join("")
    : `<div class="empty-state">目前還沒有行程。先在右上方新增一天，或按「加入範例」快速開始。</div>`;

  document.querySelectorAll("[data-delete-day]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.deleteDay);
      trip.days.splice(index, 1);
      saveTrip();
      render();
    });
  });
}

function renderDay(day, index) {
  const items = day.items.length ? day.items : ["尚未填入細節"];
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

function addDay(event) {
  event.preventDefault();
  const items = fields.dayItems.value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

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

Object.values(fields)
  .filter((field) => !["dayTitle", "dayPlace", "dayRoute", "dayBudget", "dayItems"].includes(field.id))
  .forEach((field) => field.addEventListener("input", updateTripFromFields));

nodes.dayForm.addEventListener("submit", addDay);
nodes.addSample.addEventListener("click", addSampleDay);
nodes.clearTrip.addEventListener("click", clearTrip);

syncFields();
renderChecklist();
render();
