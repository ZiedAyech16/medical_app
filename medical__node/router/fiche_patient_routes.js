const express = require("express");
const { selectAllFichePatient, ajouterFichePatient, updateFichePatient, removeFichePatient } = require("../controller/fichepatinet_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    selectAllFichePatient().then((result)=>res.send(result)).catch(err=>res.send(err));
})

router.post("/",(req,res)=>{
    ajouterFichePatient(req.body).then((ress)=>res.send(ress)).catch((err)=>res.send(err));
})

router.put("/:id",(req,res)=>{
    updateFichePatient(req.body,req.params.id).then((result)=>res.send(result)).catch((err)=>res.send(err));
});

router.delete("/:id",(req,res)=>{
    removeFichePatient(req.params.id).then((result)=>res.send(result)).catch((err)=>res.send(err));
});



module.exports = router;