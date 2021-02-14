const Organization = require("../../models/organization")

module.exports.getOrganizationById = async (req,res,next) =>{
    try{
        console.log(req.body.id);
        const org = await Organization.findOne({_id:req.params.id});
        console.log(org);
        res.status(200).json({message:"success",organization:org});
    }catch(error){
        res.status(500).json({message:"internal server error"});
    }
}