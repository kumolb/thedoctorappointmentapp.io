const mongoose = require("mongoose");

module.exports = mongoose.model("Experience",mongoose.Schema({
    position: [{ type: mongoose.Schema.Types.ObjectId, ref: "Designation" }],
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    strartDate: Date,
    endDate: Date,
    running: Boolean,
    institue: { type: mongoose.Schema.Types.ObjectId, ref: "Organization"},
    location: String,
    workingPeriod: Number
}));