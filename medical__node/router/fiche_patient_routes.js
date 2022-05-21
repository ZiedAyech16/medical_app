const express = require("express");
const { selectAllFichePatient, ajouterFichePatient } = require("../controller/fichepatinet_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    selectAllFichePatient().then((result)=>res.send(result)).catch(err=>res.send(err));
})

router.post("/",(req,res)=>{
    ajouterFichePatient(req.body).then((ress)=>res.send(ress)).catch((err)=>res.send(err));
})

module.exports = router;