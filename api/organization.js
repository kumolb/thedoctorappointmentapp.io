const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const Organization = require("../models/organization");
router.get("/",(req,res)=>{
    res.send("Hello organization");
});
router.post("/save",(req,res,next)=>{
    let organization = new Organization({...req.body});
    Organization.create(organization).then((result)=>{
        res.send({message:result})
    }).catch((err)=>{
        res.status(500).send({error:err});
    });
});
module.exports = router;
