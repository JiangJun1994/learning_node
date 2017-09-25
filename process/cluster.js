/**
 * Created by jiangjun on 2017/9/25.
 */
var cluster= require('cluster')
var http = require('http')
var cpus = 2

if(cluster.ismaster){
  console.log('pid',process.pid)
  for(var i =0;i<cpus.length;i++){
    cluster.fork()
  }
  cluster.on('death',function(worker){
    console.log(worker.pid+'died')
    cluster.fork()
  })



}else{
  console.log('worker process started with pid',process.pid)
  http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':"text/plain"})
    res.end('hello world')
  }).listen(3000)
}