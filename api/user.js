var express = require("express");
const User = require("../models/user");
var router = express.Router();

router.get("/all",(req,res)=>{
    res.send("Hello");
});

router.post("/save",(req,res)=>{
    User.create({...req.body}).then((result,err)=>{
        if(!err){
            res.status(200).json({result});
        }
    }).catch(err=>{
        res.status(500).json({message:error});
    })
});

router.get("/login/:id",(req,res)=>{
    User.findOne({_id:req.params.id}).then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json(err);
    })
});

module.exports = router;