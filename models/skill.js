const mongoose = require("mongoose");

let skillSchema = mongoose.Schema({
    name: String,
    details: String
});

module.exports = mongoose.model("Skill", skillSchema);