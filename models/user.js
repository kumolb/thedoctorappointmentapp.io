const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{type:String},
    number:{type:String},
    accountType:{type:Number}
});

module.exports = mongoose.model("User",userSchema);