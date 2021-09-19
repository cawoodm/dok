const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log("Hit", req.url)
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from DOK!!! v1.0');
});

server.listen(port, hostname, () => {
  console.log(`DOK Server running at http://${hostname}:${port}/`);
});