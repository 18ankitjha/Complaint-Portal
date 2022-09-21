const express = require("express");
const router = express.Router();
const User=require('../models/Userdb')
const {body,validationResult} =require('express-validator')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "AnkitIsaDeveloper"


router.post('/signup',[
    body('name','Enter a valid name').isLength({min:3}),
    body('rollno','Enter a valid name').isLength(8),
    body('email','Enter valid email').isEmail(),
    body('address','Enter the address ').isLength({min:8}),
    body('phone','Enter a valid number').isMobilePhone(),
    body('password','Enter a valid Password').isLength({min:5})
],async (req,res)=>{

    
    let success=false;
    const errors=validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
    }

    try {
        console.log(req.body.email);
        let user=await User.findOne({email:req.body.email});
        // console.log(user)
        // console.log(user.email)
        console.log(req.body.email)
        if (user) {
            return res.status(400).json({success, error: "Sorry a user with this email already exist" });
            
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
        user= await User.create({
            name:req.body.name,
            rollno:req.body.rollno,
            email:req.body.email,
            address:req.body.address,
            phone:req.body.phone,
            hostel:req.body.hostel,
            roomno:req.body.roomno,
            password:secPass,
        })
        const data={
            id:user.id
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        success=true;
        console.log(authtoken);
        res.json({user,success,authtoken})



    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured",error.message)
    }

})
router.post('/login',[
    body('name','Enter a valid name').isLength({min:3}),
    body('pasword','Password cannot be blank').isLength({min:1})
],async(req,res)=>{
    const errors=validationResult(req);
    let success=false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
    }
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured",error.message)
    }
})
module.exports = router
