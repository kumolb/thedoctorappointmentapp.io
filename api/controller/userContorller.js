const User = require("../../models/user")

module.exports.addAppointmentToUser = async(userId,appointId) => {
    return await User.updateOne({_id:userId},{ $set:{appointment:appointId}});
}