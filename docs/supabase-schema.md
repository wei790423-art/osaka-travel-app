# Supabase 資料庫規格

目前 Supabase 已完成本機 CLI 初始化與基礎資料表 migration。

## 本機服務

- Studio: http://127.0.0.1:54323
- API: http://127.0.0.1:54321
- Database: `postgresql://postgres:postgres@127.0.0.1:54322/postgres`

## 資料表

### `public.trips`

存放使用者目前的旅行行程。

- `id`: trip id
- `user_id`: Supabase Auth 使用者 id
- `name`: 旅行名稱
- `country`: 國家
- `base_city`: 主要城市
- `start_date`: 出發日期
- `trip_data`: 完整旅行 JSON
- `created_at`: 建立時間
- `updated_at`: 更新時間

### `public.trip_history`

存放使用者手動儲存或匯入前備份的歷史行程。

- `id`: history id
- `user_id`: Supabase Auth 使用者 id
- `trip_id`: 對應旅行，可為空
- `reason`: 儲存原因
- `trip_data`: 歷史快照 JSON
- `created_at`: 建立時間

### `public.trip_shares`

預留給未來雲端分享連結使用，目前尚未接到前端。

- `id`: share id
- `trip_id`: 對應旅行
- `user_id`: Supabase Auth 使用者 id
- `share_token`: 分享 token
- `snapshot_data`: 分享快照 JSON
- `expires_at`: 過期時間
- `created_at`: 建立時間
- `updated_at`: 更新時間

## 安全規則

所有 public schema 資料表都已啟用 Row Level Security。

- 使用者只能讀取自己的旅行
- 使用者只能新增自己的旅行
- 使用者只能更新自己的旅行
- 使用者只能刪除自己的旅行
- 未登入使用者沒有直接讀寫資料表的權限

## 驗證指令

```powershell
npm run supabase -- db lint
npm run supabase -- db advisors
npm run supabase -- migration list --local
```

## 下一步

下一階段可以開始做前端同步：

1. 加入 Supabase Auth 登入 UI
2. 新增 Supabase client 設定
3. 登入後把 `localStorage` 行程同步到 `public.trips`
4. 建立雲端載入 / 儲存 / 衝突處理流程
5. 把目前純網址分享升級成 `trip_shares` 雲端分享
