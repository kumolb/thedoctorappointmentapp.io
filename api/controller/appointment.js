const { populate } = require("../../models/appointment");
const Appointment = require("../../models/appointment")
const {addAppointmentToDoctor, getDoctorById} = require("./doctorController");
const { addAppointmentToUser } = require("./userContorller");
module.exports.getAllAppointment = async (req,res)=>{
    let appointment = await Appointment.find({});
    console.log(appointment);
    res.status(200).json(appointment);
}

module.exports.createNewAppointment = async (req,res,next)=>{
    let query={}
    query.doctor = req.body.doctor;
    let appointment = await Appointment.find(query);
        console.log(appointment.length);
    if(appointment.length>40){
        res.status(200).json({message:"His limit already exists"});
    }else{
        console.log("creating appointment")
        let newAppointment = await Appointment.create({...req.body});
        let appoint = await Appointment.findOne({_id:newAppointment._id}).populate('doctor').populate('organization').populate("user");
        addAppointmentToDoctor(req.body.doctor,appoint._id);
        addAppointmentToUser(req.body.user,appoint._id);
        res.status(200).json({message:"success to create appoint",appointment:appoint});
    }
}