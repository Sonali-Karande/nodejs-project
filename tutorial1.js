console.log("Hello, World!");
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
res.end(`<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: blue;
  font-size: 20px;
}
</style>
</head>
<body>

<h1>Inherited Properties</h1>

<p>This is a paragraph with some <strong>important</strong> text.</p>

</body>
</html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
