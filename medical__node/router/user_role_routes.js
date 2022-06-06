const express = require("express");
const { selectAllUserRole, ajouterUserRole, selectOneUserRole, removeUserRole } = require("../controller/UserRole_DB");
const router = express();

router.get("/",(req,res)=>{
    selectAllUserRole().then(result=>res.send(result)).catch(errr=>res.send(errr));
});

router.get("/:id",(req,res)=>{
    selectOneUserRole(req.params.id).then(result=>res.send(result)).catch(errr=>res.send(errr));
});


router.post("/",(req,res)=>{
    ajouterUserRole(req.body.email,req.body.userId,req.body.role).then(result=>res.send(result)).catch(errr=>res.send(errr));
})

router.get("/:id",(req,res)=>{
    removeUserRole(req.params.id).then(result=>res.send(result)).catch(errr=>res.send(errr));
});

router.get("/:id",(req,res)=>{
    updateUserRole(req.body,req.params.id).then(result=>res.send(result)).catch(errr=>res.send(errr));
});



module.exports = router;