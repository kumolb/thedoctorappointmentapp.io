var express = require("express");
const Appointment = require("../models/appointment");
const Doctor = require("../models/doctor");
var router = express.Router();

router.get("/all",(req,res)=>{
    Appointment.find({}).then((result)=>{
        res.status(200).json({result});
    }).catch((err)=>{
        res.status(500).json({error:err});
    })
});

router.post("/save",(req,res,next)=>{
    console.log(req.body);
    Doctor.find({_id:req.body.doctor})
    console.log(req.body);
    Appointment.find({_doctor:req.body.doctor,date:req.body.date,time:req.body.time}).then((result)=>{
        if(result.length<limit){
            Appointment.create(new Appointment({...req.body})).then((result)=>{
                res.status(200).json({result});
            }).catch(err=>{
                res.status(500).json({error:err});
            })
        }
    })
    
});

router.delete("/delete/:id",(req,res,next)=>{
    Appointment.remove({_id:req.params.id}).then((result)=>{
        res.status(200).json({result});
    }).catch((err)=>{
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;