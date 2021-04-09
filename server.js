process.on('unhandledRejection', err => client.logger.error(err));

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('BOT_NAME is now online!');
});
server.listen(3000);
