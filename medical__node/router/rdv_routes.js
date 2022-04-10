const express = require("express");
const { findAllRDV, findOneRDV, insertRDV, updateRDV, removeRDV } = require("../controller/rdv_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    findAllRDV().then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

router.get("/:id",(req,res)=>{
    findOneRDV(req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

router.post("/",(req,res)=>{
    insertRDV(req.body).then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})


router.put("/:id",(req,res)=>{
    updateRDV(req.body,req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

router.delete("/:id",(req,res)=>{
    removeRDV(req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

module.exports = router;