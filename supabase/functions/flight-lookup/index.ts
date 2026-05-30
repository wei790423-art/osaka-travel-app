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

function normalizedFlightNo(value: string | null) {
  return String(value || "").replace(/\s+/g, "").toUpperCase();
}

function airportSummary(value: Record<string, unknown> | null | undefined) {
  return {
    code: value?.code_iata || value?.code || value?.code_icao || "",
    name: value?.name || "",
    timezone: value?.timezone || "",
  };
}

function flightTimestamp(flight: Record<string, unknown>, keys: string[]) {
  return keys.map((key) => flight[key]).find(Boolean) || "";
}

function scheduledDateDistance(value: unknown, requestedDate: string) {
  if (!value || !requestedDate) return 0;
  const time = new Date(String(value)).getTime();
  const requested = new Date(`${requestedDate}T12:00:00Z`).getTime();
  return Number.isFinite(time) ? Math.abs(time - requested) : Number.MAX_SAFE_INTEGER;
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "GET") return json({ error: "Method not allowed" }, 405);

  const url = new URL(request.url);
  const flightNo = normalizedFlightNo(url.searchParams.get("flightNo"));
  const date = url.searchParams.get("date") || "";
  if (!/^[A-Z0-9]{2,4}\d{1,5}[A-Z]?$/.test(flightNo)) {
    return json({ error: "請輸入有效的航班號，例如 BR132 或 JL816。" }, 400);
  }

  const apiKey = Deno.env.get("FLIGHTAWARE_AEROAPI_KEY");
  if (!apiKey) {
    return json({
      code: "flight_provider_not_configured",
      error: "FlightAware AeroAPI 尚未設定。",
    }, 503);
  }

  const providerUrl = new URL(`https://aeroapi.flightaware.com/aeroapi/flights/${encodeURIComponent(flightNo)}`);
  providerUrl.searchParams.set("max_pages", "1");
  const providerResponse = await fetch(providerUrl, { headers: { "x-apikey": apiKey } });
  const providerData = await providerResponse.json().catch(() => ({}));
  if (!providerResponse.ok) {
    return json({ error: "航班資料服務暫時無法查詢，請稍後再試。" }, 502);
  }

  const flights = Array.isArray(providerData.flights) ? providerData.flights : [];
  const candidates = flights
    .filter((flight: Record<string, unknown>) => flightTimestamp(flight, ["scheduled_out", "scheduled_off"]))
    .sort((a: Record<string, unknown>, b: Record<string, unknown>) =>
      scheduledDateDistance(flightTimestamp(a, ["scheduled_out", "scheduled_off"]), date)
      - scheduledDateDistance(flightTimestamp(b, ["scheduled_out", "scheduled_off"]), date)
    );
  const flight = candidates[0];
  if (!flight) return json({ error: "查不到此航班，請確認航班號與出發日期。" }, 404);

  return json({
    flightNo: flight.ident_iata || flight.ident || flightNo,
    departure: {
      scheduled: flightTimestamp(flight, ["scheduled_out", "scheduled_off"]),
      airport: airportSummary(flight.origin),
    },
    arrival: {
      scheduled: flightTimestamp(flight, ["scheduled_in", "scheduled_on"]),
      airport: airportSummary(flight.destination),
    },
  });
});
