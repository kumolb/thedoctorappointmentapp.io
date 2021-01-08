const mongoose = require("mongoose");

let divisionSchema = mongoose.Schema({
    name: String,
    details: String
});

module.exports = mongoose.model("Division", divisionSchema);