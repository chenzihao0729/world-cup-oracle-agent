const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 8796);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function chinaDateKeyFromDate(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const get = (type) => parts.find((part) => part.type === type)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function fetchBaiduServerDate() {
  return new Promise((resolve, reject) => {
    const request = https.request(
      "https://www.baidu.com/",
      { method: "HEAD", timeout: 5000, headers: { "User-Agent": "WorldCupOracle/1.0" } },
      (response) => {
        const dateHeader = response.headers.date;
        response.resume();
        if (!dateHeader) {
          reject(new Error("Baidu Date header missing"));
          return;
        }
        resolve(new Date(dateHeader));
      }
    );
    request.on("timeout", () => request.destroy(new Error("Baidu request timeout")));
    request.on("error", reject);
    request.end();
  });
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function sendStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requested = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.resolve(root, `.${requested}`);
  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(data);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.url.startsWith("/api/baidu-time")) {
    try {
      const baiduDate = await fetchBaiduServerDate();
      sendJson(response, 200, {
        dateKey: chinaDateKeyFromDate(baiduDate),
        source: "百度服务器 Date 响应头",
        fetchedAt: new Date().toISOString()
      });
    } catch (error) {
      sendJson(response, 502, { error: error.message });
    }
    return;
  }

  sendStatic(request, response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`World Cup Oracle running at http://127.0.0.1:${port}/`);
});
