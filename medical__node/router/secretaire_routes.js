const express = require("express");
const { findAllSecretaire, findOneSecretaire, insertSecretaire, updateSecretaire, removeSecretaire } = require("../controller/secretaire_DB");
const router = express.Router();


router.get("/",(req,res)=>{
    findAllSecretaire().then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));
});


router.get("/:id",(req,res)=>{
    findOneSecretaire(req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));
})

router.post("/",(req,res)=>{
    insertSecretaire(req.body).then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));
})

router.put("/:id",(req,res)=>{
    updateSecretaire(req.body,req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));
})

router.delete("/:id",(req,res)=>{
    removeSecretaire(req.params.id).then(data=>res.sendStatus(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

module.exports = router;