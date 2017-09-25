//子进程   当要使用系统命令时应该用spawn()，要确保node能访问这一命令
/*
var spawn = require('child_process').spawn
var ping = spawn('ping',['bbc.co.uk'])
ping.stdout.setEncoding('utf8')
ping.stdout.on('data',function(data){
  console.log(data)
})
ping.on('exit',function(code,signal){
  console.log('wrong')
})
ping.kill('SIGINT')
  */

//与子进程通信  fork()用于创建新的进程
var fork = require('child_process').fork
var child = fork(__dirname+'/child.js')
child.on('message',function(m){
  console.log('parent received message',m)
})
child.send({message:"hello world"})