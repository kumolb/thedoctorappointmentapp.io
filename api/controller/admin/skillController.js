const Department = require("../../../models/department");
const Skill = require("../../../models/skill");
const Position = require("../../../models/designation");

module.exports.getAllSkill = async(req,res,next)=>{
    try{
        const skill = await Skill.find();
        res.status(200).json({body: skill});
    }catch(err){
        console.log(err);
        res.status(400).json({body: err});
    }
}

module.exports.addNewSkill = async(req,res,next) => {
    try{
        const skill = new Skill({
            title: req.body.title,
            details: req.body.details
        });
        let result = await skill.save();
        res.status(200).json({body: result});
    }catch(err){
        console.log(err);
        res.status(500).json({body:err})
    }
}

module.exports.getAllDepartment = async(req,res,next)=> {
    try{
        const department = await Department.find();
        res.status(200).json({body: department});
    }catch(err){
        console.log(err);
        res.status(400).json({body: err});
    }
}


module.exports.addNewDepartment = async(req,res,next) => {
    try{
        const department = new Department({
            title: req.body.title,
            details: req.body.details
        });
        let result = await department.save();
        res.status(200).json({body: result});
    }catch(err){
        console.log(err);
        res.status(500).json({body:err})
    }
}

module.exports.getAllPosition = async(req,res,next)=>{
    try{
        const position = await Position.find();
        res.status(200).json({body: position});
    }catch(err){
        console.log(err);
        res.status(400).json({body: err});
    }
}

module.exports.addNewPosition = async(req,res,next) => {
    try{
        const position = new Position({
            title: req.body.title
        });
        let result = await position.save();
        res.status(200).json({body: result});
    }catch(err){
        console.log(err);
        res.status(500).json({body:err})
    }
}