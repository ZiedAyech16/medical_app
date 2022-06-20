const express = require("express");
const { selectAllOrdonnace, ajouterOrdanace, selectOneOrdonnace, updateOrdonnace, removeOrdonnace } = require("../controller/ordonnance_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    selectAllOrdonnace().then(re=>res.send(re)).catch(err=>res.send(err));
})

router.post("/",(req,res)=>{
    ajouterOrdanace(req.body).then(r=>res.send(r));
})

router.get("/:id",(req,res)=>{
    selectOneOrdonnace(req.params.id).then(r=>res.send(r));
})

router.put("/:id",(req,res)=>{
    updateOrdonnace(req.body,req.params.id).then(r=>res.send(r));
})


router.delete("/:id",(req,res)=>{
    removeOrdonnace(req.params.id).then(r=>res.send(r));
})

module.exports = router;