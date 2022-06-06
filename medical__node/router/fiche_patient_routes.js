const express = require("express");
const { findAllFichePatient, findOneFichePatient, insertFichePatient, updateFichePatient, removeFichePatient } = require("../controller/fichepatinet_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    findAllFichePatient().then((result)=>res.send(result)).catch(err=>res.send(err));
})

router.get("/:id",(req,res)=>{
    findOneFichePatient(req.params.id).then((result)=>res.send(result)).catch(err=>res.send(err));
})



router.post("/",(req,res)=>{
    insertFichePatient(req.body).then((ress)=>res.send(ress)).catch((err)=>res.send(err));
})

router.put("/:id",(req,res)=>{
    updateFichePatient(req.body,req.params.id).then((result)=>res.send(result)).catch((err)=>res.send(err));
});

router.delete("/:id",(req,res)=>{
    removeFichePatient(req.params.id).then((result)=>res.send(result)).catch((err)=>res.send(err));
});



module.exports = router;