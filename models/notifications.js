const mongoose = require("mongoose");

let notificationSchema = mongoose.Schema({
    type: String,
    sendTo: Number,
    content: String
});

module.exports = mongoose.model("Notification", notificationSchema);