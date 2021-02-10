const Doctor = require("./../../models/doctor");
module.exports.addAppointmentToDoctor = async(doctorId,appointId) => {
    return await Doctor.updateOne({_id:doctorId},{ $push:{appointment:appointId}});
}

module.exports.getDoctorById = async(id) => {
    return await Doctor.find({_id:id});
}