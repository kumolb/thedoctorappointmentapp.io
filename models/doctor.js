const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
    name: { type: String },
    bname: { type: String },
    doctorId: { type: String },
    address: { type: String },
    college: { type: String },
    email: { type: String },
    contactNumber: { type: String },
    degrees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Degree" }],
    chamber: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chamber" }],
    image: { type: String },
    details: { type: String },
    experience:[{ type: mongoose.Schema.Types.ObjectId, ref: "Experience" }],
    skill: [ { type: mongoose.Schema.Types.ObjectId, ref: "Skill" }]
});

module.exports = mongoose.model("Doctor", doctorSchema);