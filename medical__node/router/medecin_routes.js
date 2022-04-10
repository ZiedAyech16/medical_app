const express = require("express");
const { findAllMedecin, findOneMedecin, insertMedecin, updateMedecin, removeMedecin } = require("../controller/medecin_DB");
const router = express.Router();


router.get("/",(req,res)=>{
    findAllMedecin().then((data)=>res.status(200).send(data)).catch((err)=>res.status(500).send(err));
})


router.get("/:id",(req,res)=>{
    findOneMedecin(req.params.id).then((data)=>res.status(200).send(data)).catch((err)=>res.status(500).send(err));
})

router.post("/",(req,res)=>{
    insertMedecin(req.body).then((data)=>req.status(201).send(data)).catch((err)=>res.status(500).send(err));
})

router.put("/:id",(req,res)=>{
    updateMedecin(req.body,req.params.id).then((data)=>res.status(200).send(data)).catch((err)=>res.status(500).send(err));
})


router.delete("/:id",(req,res)=>{
    removeMedecin(req.params.id).then((data)=>res.status(500).send(data)).catch((err)=>res.status(500).send(err));
})

module.exports = router;