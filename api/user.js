const { response } = require("express");
var express = require("express");
const User = require("../models/user");
var router = express.Router();

router.get("/all",(req,res)=>{
    User.find().then((response)=>{
        if(response){
            res.status(200).json(response);
        }
    }).catch(err=>{
        res.status(404).json(err);
    })
});

router.post("/save",async(req,res)=>{
    let user = await User.find({number:req.body.number});
    if (user.length>0){
        res.status(200).json({user:user});
    }else{
        let setUser = await User.create({...req.body});
        if(setUser){
            res.status(200).json({message:"Succcess to save user",user:setUser});
        }
    }
    // User.find({number:req.body.number}).then((result)=>{
    //     console.log(result);
    //     if(result.length>0){
    //         res.status(200).json({message:"User already exists"});
    //     }else{
    //         console.log("creating");
    //         User.create({...req.body}).then((result)=>{
    //             if(result){
    //                 console.log("sending response");
    //                 res.status(200).json({message:"Succcess to save user"});
    //             }
    //         }).catch(err=>{
    //             res.status(500).json({error:err});
    //         })
    //     }
    // }).catch(err=>{
    //     res.status(500).json({error:err});
    // })
});

router.post("/login",(req,res)=>{
    User.findOne({number:req.body.number}).then(result=>{
        res.status(200).json(result);
    }).catch(err=>{
        res.status(500).json(err);
    })
});

module.exports = router;