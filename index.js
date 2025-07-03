const express=require("express");
const app=express();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
// const mongoose = require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js");
// const Chat=require("init.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");



main()
.then(()=>{
    console.log("connetion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/text');

  
}
let chat1=new Chat({
  from:"priya",
  to:"prasanta",
  msg:"I LOVE MY INDIA",
  created_at:new Date() 

});
chat1.save().then((res)=>{
  console.log(res);
});


app.listen(8080,()=>{
console.log("App is listening in the port 8080");
});

app.get("/",(req,res)=>{
  res.send("Root is working properly");
});
app.get("/chats",async(req,res)=>{
  let chats=await Chat.find();
  console.log(chats);


  res.send("working");
});