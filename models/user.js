const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: { type: String },
    number: { type: String },
    accountType: { type:Number },
    appointment: { type:mongoose.Schema.Types.ObjectId, ref: "Appointment" },
});

module.exports = mongoose.model("User",userSchema);