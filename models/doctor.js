const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
    name: { type: String },
    doctorId: { type: String },
    address: { type: String },
    college: { type: String },
    email: { type: String },
    contactNumber: { type: String },
    degrees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Degree" }],
    skill: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    position: { type: String },
    chembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Organization" }],
    image: { type: String },
    appointment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
    experience: [{ type: mongoose.Schema.Types.ObjectId, ref: "Experience" }],
});

module.exports = mongoose.model("Doctor", doctorSchema);