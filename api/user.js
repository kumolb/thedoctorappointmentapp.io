var express = require("express");
const User = require("../models/user");
var router = express.Router();

router.get("/all",(req,res)=>{
    res.send("Hello");
});

router.post("/save",(req,res)=>{
    User.find({number:req.body.number}).then((result)=>{
        if(result){
            
        }else{
            User.create({...req.body}).then((result)=>{
                if(result){
                    res.status(200).json({message:"Succcess to save user"});
                }
            }).catch(err=>{
                res.status(500).json({error:err});
            })
        }
    }).catch(err=>{
        res.status(500).json({error:err});
    })
});

router.post("/login",(req,res)=>{
    User.findOne({number:req.body.number}).then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json(err);
    })
});

module.exports = router;