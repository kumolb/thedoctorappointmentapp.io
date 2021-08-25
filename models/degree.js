const mongoose = require("mongoose");

let degreeSchema = mongoose.Schema({
    name: String,
    details: String,
    institute: String,
    country: String,
    topic: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
});

module.exports = mongoose.model("Degree", degreeSchema);