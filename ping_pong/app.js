/**
 * Created by jiangjun on 2017/9/11.
 */
var http = require ('http')
var fs = require('fs')
var server = http.createServer(function(req,res){

  fs.readFile('./index.html',function(error,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data,'UTF-8')
  })
}).listen(3000,'127.0.0.1')

var io = require('socket.io').listen(server)
io.sockets.on('connection',function(socket){
  socket.on('ping',function(data){
    socket.emit('pong',{text:"pong"})
  })
  socket.on('pong',function(data){
    console.log('receive'+data)
  })
  setInterval(function(){
    socket.emit('ping',{text:"ping"})
  },10000)
});