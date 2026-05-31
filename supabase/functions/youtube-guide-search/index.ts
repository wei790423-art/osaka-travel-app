const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json; charset=utf-8" },
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);

  const query = new URL(request.url).searchParams.get("q")?.trim() || "";
  if (!query || query.length > 120) {
    return json({ error: "請輸入有效的景點或目的地。" }, 400);
  }

  const apiKey = Deno.env.get("YOUTUBE_DATA_API_KEY");
  if (!apiKey) {
    return json({
      code: "youtube_provider_not_configured",
      error: "YouTube Data API 尚未設定。",
    }, 503);
  }

  const providerUrl = new URL("https://www.googleapis.com/youtube/v3/search");
  providerUrl.searchParams.set("part", "snippet");
  providerUrl.searchParams.set("type", "video");
  providerUrl.searchParams.set("maxResults", "2");
  providerUrl.searchParams.set("order", "date");
  providerUrl.searchParams.set("videoEmbeddable", "true");
  providerUrl.searchParams.set("safeSearch", "moderate");
  providerUrl.searchParams.set("relevanceLanguage", "zh");
  providerUrl.searchParams.set("q", query);
  providerUrl.searchParams.set("key", apiKey);

  let providerResponse: Response;
  try {
    providerResponse = await fetch(providerUrl);
  } catch {
    return json({ error: "YouTube 影片服務目前無法連線，請直接前往 YouTube 搜尋。" }, 502);
  }
  const providerData = await providerResponse.json().catch(() => ({}));
  if (!providerResponse.ok) {
    return json({ error: "YouTube 影片服務暫時無法查詢，請稍後再試。" }, 502);
  }

  const items = Array.isArray(providerData.items) ? providerData.items : [];
  const videos = items
    .filter((item: Record<string, unknown>) => {
      const id = item.id as Record<string, unknown> | undefined;
      return Boolean(id?.videoId);
    })
    .map((item: Record<string, unknown>) => {
      const id = item.id as Record<string, unknown>;
      const snippet = (item.snippet || {}) as Record<string, unknown>;
      const thumbnails = (snippet.thumbnails || {}) as Record<string, Record<string, unknown>>;
      const videoId = String(id.videoId);
      return {
        id: videoId,
        title: String(snippet.title || "YouTube 行程影片"),
        channel: String(snippet.channelTitle || ""),
        publishedAt: String(snippet.publishedAt || ""),
        thumbnail: String(thumbnails.medium?.url || thumbnails.default?.url || ""),
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
      };
    });

  return json({ query, videos });
});
