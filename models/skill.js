const mongoose = require("mongoose");

let skillSchema = mongoose.Schema({
    title: String,
    details: String
});

module.exports = mongoose.model("Skill", skillSchema);