/**
 * Created by jiangjun on 2017/9/25.
 */
process.on('message',function(m){
  console.log("child process received message",m)
})
process.send({message:"hello parent"})