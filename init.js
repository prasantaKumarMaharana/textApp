const mongoose = require('mongoose');
const Chat=require("./models/chat.js");
main()
.then(()=>{
    console.log("connetion successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/text');

  
}
let allChats=[
    {
    from:"abkit",
    to:"bhumi",
    msg:"I LOVE MY country",
    created_at:new Date() 
  
  },
  {
  from:"adi",
  to:"ankita",
  msg:"I LOVE Germany Country",
  created_at:new Date() 

},

{
    from:"ashu",
    to:"ipsita",
    msg:"I LOVE Berhmpur",
    created_at:new Date() 
  
  },
  {
    from:"dhanjay",
    to:"pretisha",
    msg:"I LOVE BBSR",
    created_at:new Date() 
  
  },





];

Chat.insertMany(allChats);