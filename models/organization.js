const mongoose = require("mongoose");

let organizationSchema = mongoose.Schema({
    name: { type: String },
    organization_Id: { type: Number },
    details: { type: String },
    accountType: { type: Number },
    contactNumber: { type: String },
    email: { type: String },
    website: { type: String },
    address: { type: String },
    city: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
    division: { type: mongoose.Schema.Types.ObjectId, ref: "Division" },
    logo: { type: String },
    doctor: [{ ref: "Doctor", type: mongoose.Schema.Types.ObjectId }]
});

module.exports = mongoose.model("Organization", organizationSchema);