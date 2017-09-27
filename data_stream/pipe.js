var fs = require('fs')
var readstream = fs.ReadStream('name.txt')
var writestream = fs.WriteStream('out2.txt')

readstream.pipe(writestream)