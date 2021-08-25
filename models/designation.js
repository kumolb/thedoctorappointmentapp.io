const mongoose = require("mongoose");

module.exports = mongoose.model("Designation",mongoose.Schema({
    title:String
}));