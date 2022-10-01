const mongoose = require('mongoose');

const complaintSchema=new mongoose.Schema({
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
    status:{
        type:String,
        default:"open"
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        
    }
})
//cleaniness,maintainence,network issue,food,electricithy

const ComplaintDairy=mongoose.model('ComplaintDairy',complaintSchema);
module.exports=ComplaintDairy;

