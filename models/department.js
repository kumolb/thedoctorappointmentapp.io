const mongoose = require("mongoose");

module.exports = mongoose.model("Department",mongoose.Schema({
    name:String
}));