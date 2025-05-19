import http from "http";
import path from "path";
import fs from "fs";

const PORT = 8081;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
};

const app = http.createServer((req, res) => {
  let contentType = "application/json";
  const filePath = "." + req.url;
  const fileExtension = path.extname(filePath);
  switch (fileExtension) {
    case ".js":
      contentType = "text/javascript";
      break;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(200, { "Content-Type": "application/json", ...headers });
      res.end(JSON.stringify({ error }));
    } else {
      res.writeHead(200, { "Content-Type": contentType, ...headers });
      res.end(data, "utf-8");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
