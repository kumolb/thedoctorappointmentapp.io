const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{type:String},
    number:{type:String},
    accountType:{type:Number},
    appointmentWith:{type:mongoose.Schema.Types.ObjectId,ref="Doctor"},
});

module.exports = mongoose.model("User",userSchema);