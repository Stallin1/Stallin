const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    }
});

const User = mongoose.model('USER', userSchema);

module.exports=User;
