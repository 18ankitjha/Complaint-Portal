const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    hostel:{
        type:String,
        required:true
    },roomno:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    }
})


const User=mongoose.model('User',userSchema);
module.exports=User;

