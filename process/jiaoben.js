#! /usr/bin/env node
console.log("my first jiaoben")
var http = require('http')
if(!process.argv[2]){
  console.log('a search term is required')
  process.exit(1)
}
var options = {
  host:'search.twitter.com',
  path:"/search.json?q="+process.argv[2]
}

http.get(options,function(res){
  var data=''
  var json
  res.on('data',function(chunk){
    data+=chunk
  })
  res.on('end',function(){
    json = JSON.parse(data)
    for(var i = 0;i<json.length;i++){
      console.log(json.results[i].text)
    }
    process.exit(0)
  })
}).on("error",function(e){
  process.exit(1)
})
