const mongoose = require("mongoose");

let degreeSchema = mongoose.Schema({
    name: String,
    details: String
});

module.exports = mongoose.model("Degree", degreeSchema);