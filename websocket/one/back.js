var http = require ('http')
var fs = require ('fs')


var server = http.createServer(function(req,res){
  fs.readFile('./index.html',function(error,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data,'UTF-8')
  })
}).listen(3000,'127.0.0.1');
console.log('server running at http://127.0.0.1:3000/');

var io = require('socket.io').listen(server)
var count =0
// io.sockets.on('connection',function(socket){
//   count ++
//   socket.emit('message',{text:"you have connected!"})  //socket.emit:发送消息给客户端
//   socket.emit('users',{number:count})
//   socket.broadcast.emit('users',{number:count})
//   socket.on('disconnect',function(){
//     count --
//     socket.broadcast.emit('users',{number:count})
//     console.log('user disconnect')
//   })
// });
io.sockets.on('connection',function(socket){
  socket.on('message',function(data){  //socket.on :接收来自客户端的消息
    socket.broadcast.emit('push message',data)  //socket.broadcast.emit: 将消息发送给其他客户端
  })
})
