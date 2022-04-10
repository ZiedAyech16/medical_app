const  express = require("express");
const { findAllPatients, insertPatient, findOnePatient, updatePatient, removePatient } = require("../controller/patient_DB");
const router = express.Router();
const patients = findAllPatients();
console.log(patients);

router.get("/",(req,res)=>{
    const patients = findAllPatients();
    console.log(patients);
    patients.then(resultat=>res.status(200).send(resultat)).catch(err=>res.status(500).send(err));
})

router.post("/",(req,res)=>{
     insertPatient().then(result=>res.status(201).send(result));
})

router.get("/:id",(req,res)=>{
    findOnePatient(req.params.id).then((resultat)=>res.status(200).send(resultat));
})

router.put("/:id",(req,res)=>{
    updatePatient(req.body,req.params.id).then((data)=>res.status(200).send(data));
})

router.delete("/:id",(req,res)=>{
    removePatient(req.params.id).then((data)=>res.status(200).send(data)).catch((err)=>res.status(400).send(err));
})

module.exports = router;