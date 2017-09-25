//console.log(process.pid)  //process id

/*
process.on('exit',function(){
  console.log("i am killed")
})
  */



//进程与信号
/*
process.stdin.resume()  //防止脚本初始化从stdin的读取时就退出
process.on('SIGINT',function(){  //信号侦听器 ctrl c 退出  kill process_id  kill -s SIGINT process_id 均可结束进程
  console.log("got a sight.exiting")
  process.exit(0)
})
*/





