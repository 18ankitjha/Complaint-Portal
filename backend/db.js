const mongoose=require('mongoose');

require('dotenv').config();
const mongoURI='mongodb://localhost:27017/users'



const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected Successfully");
    })
}
module.exports=connectToMongo;
