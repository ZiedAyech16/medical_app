const express = require("express");
const { findAllCalender, insertCalender } = require("../controller/calender_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    findAllCalender().then((response)=>res.send(response)).catch((err)=>res.send(err));
})

router.post("/",(req,res)=>{
    insertCalender(req.body).then((response)=>res.send(response)).catch((err)=>res.send(err));
})

module.exports= router;