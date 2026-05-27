# Global Trip Planner App

一個靜態單頁旅遊 App，可規劃任何國家與城市的自由行。

## 功能

- 自訂旅行名稱、國家、城市、幣別與匯率
- 一鍵載入大阪 8 天 7 夜範例
- 新增、編輯與刪除每日行程
- 每天可記錄吃飯、移動方式、移動路線與照片網址
- 貼上文字行程並直接匯入
- 儲存、載入與刪除歷史行程
- 分頁選單切換行程、匯入、歷史與工具
- 自動統計天數、城市/區域數與總預算
- 當地幣別與台幣換算
- 旅行步調、打包清單與規劃提醒

## 本機預覽

```powershell
node server.cjs
```

打開：

```text
http://127.0.0.1:4177
```

## GitHub Pages

這是純 HTML/CSS/JavaScript 專案，已包含 GitHub Pages Actions workflow。

建議設定：

- Source: GitHub Actions
- Workflow: `Deploy to GitHub Pages`
