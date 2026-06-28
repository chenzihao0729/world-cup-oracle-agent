const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, OPTIONS",
  "access-control-allow-headers": "content-type"
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/football-data/matches") {
      return json({ error: "Not found" }, 404);
    }

    const dateFrom = url.searchParams.get("dateFrom");
    const dateTo = url.searchParams.get("dateTo");
    if (!dateFrom || !dateTo) {
      return json({ error: "Missing dateFrom/dateTo" }, 400);
    }

    if (!env.FOOTBALL_DATA_API_KEY) {
      return json({ error: "Missing FOOTBALL_DATA_API_KEY secret" }, 500);
    }

    const upstreamUrl = new URL("https://api.football-data.org/v4/matches");
    upstreamUrl.searchParams.set("dateFrom", dateFrom);
    upstreamUrl.searchParams.set("dateTo", dateTo);

    const upstream = await fetch(upstreamUrl, {
      headers: {
        "X-Auth-Token": env.FOOTBALL_DATA_API_KEY,
        Accept: "application/json"
      }
    });
    const body = await upstream.text();

    return new Response(body, {
      status: upstream.status,
      headers: {
        ...CORS_HEADERS,
        "content-type": upstream.headers.get("content-type") || "application/json; charset=utf-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "content-type": "application/json; charset=utf-8"
    }
  });
}
