const express = require("express");
const router = express.Router();
const ComplaintDairy=require('../models/Complaintdb');
const {body,validationResult} =require('express-validator');
const fetchuser = require("../middleware/fetchuser");

router.get('/fetchrecord',fetchuser,async(req,res)=>{
    try {
        const notes=await ComplaintDairy.find({user:req.user.id});
        res.json(notes);
    } catch (error) {
        console.log(error)
        res.status(500).send("Some Internal error occured")
    }
})
router.post('/addrecord',fetchuser,
[
    body('title','The title should be more than 3 characters').isLength({min:3}),
    body('description','The description should have more than 10 character').isLength({min:5})
]
,async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {title,description,status,tag}=req.body;
        const complaint= new ComplaintDairy({
            title,
            description,
            tag,
            status,
            user:req.user.id
        })
        const saveComplaint=await complaint.save();
        res.json(saveComplaint)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some internal error");
    }
})

module.exports = router
