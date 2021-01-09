const mongoose = require("mongoose");
const appointmentSchema = mongoose.Schema({
    date: date,
    time: date,
    organization: { type:mongoose.Schema.Types.ObjectId,ref :"Organization" },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Appointment", appointmentSchema);