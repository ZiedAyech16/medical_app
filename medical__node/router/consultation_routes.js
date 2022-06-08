const express = require("express");
const { selectAllConsultation, selectOneConsultation, ajouterConsultation, updateConsultation, supprimerConsultation } = require("../controller/consultations_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    selectAllConsultation().then(re=>res.send(re)).catch(re=>res.send(re));
})

router.get("/:id",(req,res)=>{
    selectOneConsultation(req.params.id).then(r=>res.send(r)).catch(r=>res.send(r));
})

router.post("/",(req,res)=>{
    console.log(req.body);
    ajouterConsultation(req.body).then(r=>res.send(r)).catch(r=>res.send(r));    
})

router.put("/:id",(req,res)=>{
    console.log(req.body);
    updateConsultation(req.body,req.params.id).then(r=>res.send(r)).catch(r=>res.send(r));    
})

router.delete("/:id",(req,res)=>{
    supprimerConsultation(req.params.id).then(r=>res.sendStatus(200).send(r)).catch(e=>res.send(e));
})


module.exports = router;