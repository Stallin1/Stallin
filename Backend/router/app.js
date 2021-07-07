const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
router.post("/register", async (req,res)=>{
    const {email, phone, name, password, cpassword} = req.body;
    console.log("the email is " +email);
    try{
        const checkEmail=await User.findOne({email:email});
          if(checkEmail){
            return res.status(422).json({result : 0});
          }else{
              if(password===cpassword){
                const user = new User ({email, phone, name, password, cpassword});
                const saveUser = await user.save();
               return res.status(201).json({result : 1});
              }else{
               return res.status(201).json({result : 2});
              }
          }
      
    }catch(err){
     console.log(`the error is ${err}`);
    }
});

module.exports=router;