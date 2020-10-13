const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
    name: { type: String },
    doctorId: { type: String },
    address: { type: String },
    college: { type: String },
    email: { type: String },
    contact: { type: String },
    degrees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Degree" }],
    skill: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    position: { type: String },
    chembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Organization" }],
    image: { type: String },
    appointmentWith: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Doctor", doctorSchema);