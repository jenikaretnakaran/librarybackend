var express = require("express");
var router = express();
var User = require("../src/model/userdata");

router.post("/adduser", (req,res) => {

  let userData = req.body;
  let user=new User(userData);
  console.log(userData)
  user.save((err,data)=>{
    if(err){
      return res.status(401).json({
        error:"Error saving to DB"
      })
    }
    else{
      res.json({
        sucess:"Data saved"
      })
    }
  })
});

router.post("/checkuser", (req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  const emailId=req.body.emailId;
  const password= req.body.password;
  console.log(emailId)
  User.findOne({emailId,password},(err,user)=>{
    if(err||!user){
      return res.status(400).json({
        error:"User not found"
      })
  
    }

    res.status(200).json({emailId:user.emailId});

  })

 
  
})
module.exports=router