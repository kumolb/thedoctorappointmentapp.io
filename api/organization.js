const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const organizationHelper = require("./controller/organizationController");
const Organization = require("../models/organization");
router.get("/",(req,res)=>{
    Organization.find().then((result,err)=>{
        if(!err){
            res.status(200).json({result});
        }
    })
});
router.post("/save",(req,res,next)=>{
    console.log(req.body);
    let organization = new Organization({...req.body});
    Organization.create(organization).then((result)=>{
        res.send({message:result})
    }).catch((err)=>{
        res.status(500).send({error:err});
    });
});

router.get("/:id",organizationHelper.getOrganizationById);
module.exports = router;
