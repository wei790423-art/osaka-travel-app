# Global Trip Planner App

## Itinerary Generation Spec

請另一個旅行生成 Agent 產生可匯入行程時，請使用這份規格：

- [旅行行程生成規格書](docs/itinerary-generation-spec.md)

一個靜態單頁旅遊 App，可規劃任何國家與城市的自由行。

## 功能

- 自訂旅行名稱、國家、城市、幣別與匯率
- 輸入出發日期後，自動代入每日日期與星期
- 每天可個別記錄住宿飯店
- 可記錄航班號、起飛時間與抵達時間，並開啟 FlightAware 查詢航班時刻
- 每日可選填轉機或額外班機，不需要時保持隱藏
- 支援深色模式，偏好會保存在瀏覽器
- 一鍵載入大阪 8 天 7 夜範例
- 新增、編輯與刪除每日行程
- 每天可記錄吃飯、移動方式、移動路線與照片網址
- 每天可記錄訂位、票券編號、集合地點等每日備註
- 每天可分別填早餐、午餐、晚餐店名
- 移動方式用選單選擇，並可產生地圖查詢入口
- 每天可設定多個景點地標，常駐顯示定位地圖，並用下拉選單從目前位置直接開啟 Google Maps 導航
- 可產生網址分享連結，打開後直接載入成可編輯行程
- 載入分享連結前會自動把原本行程備份到歷史行程
- 支援 PWA，可安裝到手機主畫面並離線查看已快取的行程頁
- 每日行程卡改成旅行社行程本風格
- 貼上文字行程並直接匯入
- 儲存、載入與刪除歷史行程
- 分頁選單切換行程、匯入、歷史與工具
- 攻略平台分頁可輸入目的地，產生地圖、影片、票券、餐廳、住宿與官方旅遊資訊連結
- 自動整理有效攻略清單，依官方資訊、動線、影片、票券、評價與住宿區域排序
- 自動統計天數、城市/區域數與總預算
- 當地幣別與台幣換算
- 票券錢包可保存機票、住宿、門票、交通票、QR/憑證連結與備註
- 可列印行程本，並用瀏覽器另存成 PDF
- 旅行步調、打包清單與規劃提醒

## 本機預覽

```powershell
npm run dev
```

打開：

```text
http://127.0.0.1:4177
```

## Supabase CLI

本專案已安裝 Supabase CLI 作為 npm dev dependency，並已執行 `supabase init`。

資料庫 schema 說明：

- [Supabase 資料庫規格](docs/supabase-schema.md)

常用指令：

```powershell
npm run supabase -- --version
npm run supabase:start
npm run supabase:status
npm run supabase:stop
```

注意：`supabase start` 需要先安裝並啟動 Docker Desktop。

## Supabase 登入與同步

目前 App 已接上 Supabase Email/Password Auth、`trips` 雲端同步與 Realtime 即時更新。前端只使用 publishable key，資料保護依靠 Supabase Auth JWT 與資料表 RLS。

本機開發與 GitHub Pages 預設都連到正式 Supabase Cloud，方便直接測試登入與跨裝置同步。需要測試 Docker 裡的本機 Supabase 時，在網址加上 `?supabase=local`，例如 `http://127.0.0.1:4177/?supabase=local`：

```js
window.SUPABASE_CONFIG = {
  url: "http://127.0.0.1:54321",
  publishableKey: "sb_publishable_..."
};
```

GitHub Pages 目前會連到正式 Supabase Cloud 專案 `pxbqalvbgbyybhlnqvvy`，使用 `supabase-config.js` 內的 publishable key。不要把 secret key 或 service_role key 放進前端檔案。

## GitHub Pages

這是純 HTML/CSS/JavaScript 專案，已包含 GitHub Pages Actions workflow。

建議設定：

- Source: GitHub Actions
- Workflow: `Deploy to GitHub Pages`
