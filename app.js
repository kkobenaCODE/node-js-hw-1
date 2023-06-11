const http = require('http');
const handler = require('./routes');

const server = http.createServer(handler.reqHandler);

server.listen(3030);
