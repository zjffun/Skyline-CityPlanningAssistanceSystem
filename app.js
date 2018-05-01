var express = require('express');
var http = require('http');
var WebSocket = require('ws');
var fs = require('fs');

var app = express();
var server = http.createServer(app);
var wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws) {// 创建连接
  console.log('链接成功！');
  ws.on('message', function incoming(data) {// 接收消息
    wss.clients.forEach(function each(client) {
      /*
        给全部客户端（创建连接的客户端）中
        除了发送者客户端（本次发送给服务器消息的客户端）的其他客户端发送消息
      */
      if (client != ws) {client.send(data)}
    });
  });
});

// 启动WebSocket
server.listen(18848, function listening() {
  console.log('服务器启动成功！');
});

// 启动express
app.get('/get_path',function(req, res, next){
  res.send(__dirname);
})

// 全部为静态
app.use(express.static(__dirname));

app.listen(8848);


/*废弃：
  var express = require('express');
  var fs = require('fs');
  var mkdirp = require('mkdirp');

  var app = express();

  app.use('/', express.static(__dirname + '/'));
  // app.use('/css', express.static(__dirname + '/css'));
  // app.use('/jquery-easyui', express.static(__dirname + '/jquery-easyui'));

  // app.get('/',function(req, res, next){
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.end(fs.readFileSync(__dirname + '/index.html'));
  // })

  app.get('/set_sync_info',function(req, res, next){
    // console.log('set_sync_info');
    fs.writeFile('temp/sync_info.json', req.query.data,  function(error) {
      if (error) {
        console.log('写入文件失败');
        res.send('写入文件失败');
        return;
      }
    });
  })

  app.get('/get_sync_info',function(req, res, next){
    // console.log('get_sync_info');
    fs.readFile('temp/sync_info.json', 'utf8', function(error, data) {
      if (error) {
        console.log('读取文件失败');
        res.send('读取文件失败');
        return;
      }
      res.send({'data': data});
    });
  })

  app.listen(8848);
*/






