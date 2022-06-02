const express = require("express");
const { selectAllSpecialite, insertSpecialte, selectOneSpecialite } = require("../controller/specialte_DB");
const router = express.Router();

router.get("/",(req,res)=>{
    selectAllSpecialite().then((result)=>res.send(result)).catch((err)=>res.send(err));
})

router.post("/",(req,res)=>{
    insertSpecialte(req.body).then((result)=>res.send(result));
})

router.get("/:id",(req,res)=>{
    selectOneSpecialite(req.params.id).then((result)=>res.send(req.body));
})

module.exports = router;