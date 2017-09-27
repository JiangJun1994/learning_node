var fs = require('fs')
var readstream = fs.ReadStream('name.txt')
var writestream = fs.WriteStream('out.txt')


readstream.setEncoding('utf8')
readstream.on('data',function(chunk){
  writestream.write(chunk)
})
readstream.on('close',function(){
  writestream.end()
})