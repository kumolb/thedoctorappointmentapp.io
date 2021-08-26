const mongoose = require("mongoose");
const District = require("../../../models/district");
const Division = require("../../../models/division");

module.exports.getDistrict = async(req,res,next)=>{
    try{
        const district = await District.find().populate("division");
        res.status(200).json({body: district});
    }catch(err){
        console.log(err);
        res.status(400).json({body: err});
    }
}

module.exports.addNewDistrict = async(req,res,next) => {
    try{
        const district = new District({
            name: req.body.name,
            division: req.body.divisionId
        });
        let result = await district.save();
        res.status(200).json({body: result});
    }catch(err){
        console.log(err);
        res.status(500).json({body:err})
    }
}

module.exports.updateDistrict = async(req,res)=>{
    try{
        const {updateObj,id} = req.body;
        let result = await District.updateOne({_id:id},updateObj);
        res.status(200).json({body: result});
    }catch(err){
        console.log(err);
        res.status(500).json({body:err});
    }
}

module.exports.getAllDivision = async(req,res,next)=>{
    try{
        const division = await Division.find();
        res.status(200).json({body: division});
    }catch(err){
        console.log(err);
        res.status(400).json({body: err});
    }
}

module.exports.addNewDivision = async(req,res,next) => {
    try{
        const division = new Division({
            name: req.body.name
        });
        let result = await division.save();
        res.status(200).json({body: result});
    }catch(err){
        console.log(err);
        res.status(500).json({body:err})
    }
}