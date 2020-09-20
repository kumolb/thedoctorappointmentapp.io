const mongoose = require("mongoose");

let organizationSchema = mongoose.Schema({
    name:{type:String},
    organization_Id:{type:Number},
    details:{type:String},
    accountType:{type:Number},
    contactNumber:{type:String},
    address:{type:String},
    location:{type:String},
    logo:{type:String},
    doctor:[{ref: "Doctor", type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model("Organization",organizationSchema);