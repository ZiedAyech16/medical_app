const express = require("express");
const { selectAllRdv, findOneRDV, ajouterRdv, updateRdv, removeRdv } = require("../controller/rdv_DB");
const router = express.Router();

selectAllRdv().then((data)=>console.log(data));

router.get("/",(req,res)=>{
    selectAllRdv().then((data)=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

router.get("/:id",(req,res)=>{
    findOneRDV(req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

router.post("/",(req,res)=>{
    ajouterRdv(req.body).then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})


router.put("/:id",(req,res)=>{
    updateRdv(req.body,req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

router.delete("/:id",(req,res)=>{
    removeRdv(req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})

module.exports = router;