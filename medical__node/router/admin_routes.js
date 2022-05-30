const express = require("express");
const { findAllAdmin, ajouterAdmin, findAdminById } = require("../controller/admin_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    findAllAdmin().then(result=>res.send(result)).catch((err)=>res.send(err));
})

router.post("/",(req,res)=>{
    ajouterAdmin(req.body).then(result=>res.send(result)).catch(err=>res.send(err));
})

router.get("/:id",(req,res)=>{
    findAdminById(req.params.id).then(result=>res.send(result)).catch((err)=>res.send(err));
})

module.exports = router;