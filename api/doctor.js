var express = require("express");
const Doctor = require("../models/doctor");
const doctorsHelper = require("./controller/doctorController");
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

router.get("/organization/:id",doctorsHelper.getDoctorByOrganizationId);

module.exports = router;