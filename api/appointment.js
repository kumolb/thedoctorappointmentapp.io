var express = require("express");
const Appointment = require("../models/appointment");
const Doctor = require("../models/doctor");
const { getAllAppointment, createNewAppointment} = require("./controller/appointment");
var router = express.Router();

router.get("/all",getAllAppointment);

router.post("/save",createNewAppointment);

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