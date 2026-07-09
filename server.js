const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  if (req.url === '/main') {
    res.end('<h1>Main page</h1>');
  } else if (req.url === '/about') {
    res.end('<h1>About page</h1>');
  } else {
    res.end('<h1>Not found</h1>');
  }

  console.log('Test!');
});

server.listen(8000);
console.log("Server started on port 8000");