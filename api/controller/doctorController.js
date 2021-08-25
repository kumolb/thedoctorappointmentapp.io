const { response } = require("express");
const Doctor = require("./../../models/doctor");
const Appointment = require("../../models/appointment");
module.exports.addAppointmentToDoctor = async(doctorId,appointId) => {
    return await Doctor.updateOne({_id:doctorId},{ $push:{appointment:appointId}});
}

module.exports.getDoctorById = async(req,res,next) => {
    try{
        const doctor = await Doctor.findOne({_id:req.params.id});
        const query = doctor.appointment;
        const appointment = await Appointment.find({_id:{$in:query}}).populate("user","name").populate("organization","name");
        res.status(200).json({message:"success",doctor:doctor,appointment:appointment});
    }catch(error){
        res.status(500).json({message:"error"});
    }
}

module.exports.getDoctorByOrganizationId = async(req,res) => {
    try{
        const doctors = await Doctor.find({chembers: {$in:[req.body.id]}});
        console.log(doctors)
        res.status(200).json({message:"success",doctors:doctors}); 
    }catch(error){
        console.log(error);
        res.status(500).json({message:"error"});
    }
}

//sudo apt-get install openjdk-8-jdk
