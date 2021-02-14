const { response } = require("express");
const Doctor = require("./../../models/doctor");
module.exports.addAppointmentToDoctor = async(doctorId,appointId) => {
    return await Doctor.updateOne({_id:doctorId},{ $push:{appointment:appointId}});
}

module.exports.getDoctorById = async(id) => {
    return await Doctor.find({_id:id});
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