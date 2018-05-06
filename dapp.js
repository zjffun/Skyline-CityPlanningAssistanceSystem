var express = require('express');
var http = require('http');
var WebSocket = require('ws');
var fs = require('fs');
// 聊天服务器
var app = express();
var server = http.createServer(app);
var wss = new WebSocket.Server({server});
wss.on('connection', function connection(ws) {// 创建连接
  console.log('链接成功！');
  ws.on('message', function incoming(data) {// 接收消息
    wss.clients.forEach(function each(client) {
      if (client != ws) {client.send(data)}
    });
  });
});
// 启动WebSocket
server.listen(28848, function listening() {
  console.log('Chat服务器启动成功！');
});