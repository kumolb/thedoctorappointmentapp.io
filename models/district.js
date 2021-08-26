const mongoose = require("mongoose");

let districtSchema = mongoose.Schema({
    name: String,
    division: {type: mongoose.Schema.Types.ObjectId, ref:"Division"}
});

module.exports = mongoose.model("District", districtSchema);