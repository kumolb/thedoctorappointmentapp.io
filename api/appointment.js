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

router.post("/save",async (req,res,next)=>{
    console.log(req.body);
    let dr = await Doctor.find({_id:req.body.doctor});
    let query={}
    query.doctor = req.body.doctor;
    let appointment = await Appointment.find(query);
    console.log(dr);
    console.log(appointment);
    console.log(req.body);
    if(appointment>40){

    }else{
        let appoint = await Appointment.create({...req.body});
        console.log(appoint);
    }
    // Appointment.find({_doctor:req.body.doctor,date:req.body.date,time:req.body.time}).then((result)=>{
    //     if(result.length<limit){
    //         Appointment.create(new Appointment({...req.body})).then((result)=>{
    //             res.status(200).json({result});
    //         }).catch(err=>{
    //             res.status(500).json({error:err});
    //         })
    //     }
    // })
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