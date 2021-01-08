const mongoose = require("mongoose");

let citySchema = mongoose.Schema({
    name: String,
    details: String
});

module.exports = mongoose.model("City", citySchema);