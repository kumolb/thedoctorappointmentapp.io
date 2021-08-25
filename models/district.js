const mongoose = require("mongoose");

let districtSchema = mongoose.Schema({
    name: String,
    details: String
});

module.exports = mongoose.model("District", districtSchema);