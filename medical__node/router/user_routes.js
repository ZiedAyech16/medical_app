const express = require("express");
const { findAllUsers, insertUser, updateUser, removeUser, findUser, findUserByPasswordEmail } = require("../controller/user_DB");
const router = express.Router();

//findUserByPasswordEmail("zied44@","1111").then((result)=>console.log(result));

router.get("/",(req,res)=>{
    findAllUsers().then((result)=>res.json(result)).catch((err)=>res.status(500).json(err));
})


router.get("/:id",(req,res)=>{
    findUser(req.params.id).then((result)=>res.json(result)).catch((err)=>res.status(500).json(err));
})

router.post("/",(req,res)=>{
    insertUser(req.body.nom,req.body.prenom,req.body.email,req.body.contact,req.body.username,req.body.password);
})

router.put("/:id",(req,res)=>{
    updateUser(req.params.id,req.body.nom,req.body.prenom,req.body.email,req.body.contact,req.body.username,req.body.password)
    .then(res=>res.json(res)).catch(err=>console.log(err));
});

router.delete("/:id",(req,res)=>{
    removeUser(req.params.id).then((ress)=>res.json(ress)).catch((err)=>res.json(err));
})

module.exports = router;