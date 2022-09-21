const mongoose = require('mongoose');

const ComplaintSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        
    }
})


const ComplaintDairy=mongoose.Schema('ComplaintDairy',ComplaintSchema);
module.exports=ComplaintDairy;

