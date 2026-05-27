const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 4177;
const host = "127.0.0.1";
const root = process.cwd();
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const relativePath = urlPath === "/" ? "index.html" : urlPath.replace(/^\//, "");
    const filePath = path.join(root, relativePath);

    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
      });
      res.end(data);
    });
  })
  .listen(port, host, () => {
    console.log(`Travel app running at http://${host}:${port}`);
  });
