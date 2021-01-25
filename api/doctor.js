var express = require("express");
const Doctor = require("../models/doctor");
var router = express.Router();

router.get("/all",(req,res)=>{
    Doctor.find({}).then((result)=>{
        res.status(200).json({result});
    }).catch((err)=>{
        res.status(500).json({error:err});
    })
});

router.post("/save",(req,res,next)=>{
    console.log(req.body);
    let doctor = new Doctor({...req.body});
    Doctor.create(doctor).then((result)=>{
        res.status(200).json({result});
    }).catch(err=>{
        res.status(500).json({error:err});
    })
});

router.delete("/delete/:id",(req,res,next)=>{
    Doctor.remove({_id:req.params.id}).then((result)=>{
        res.status(200).json({result});
    }).catch((err)=>{
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;