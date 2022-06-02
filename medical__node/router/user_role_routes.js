const express = require("express");
const { selectAllUserRole, ajouterUserRole } = require("../controller/UserRole_DB");
const router = express();

router.get("/",(req,res)=>{
    selectAllUserRole().then(result=>res.send(result)).catch(errr=>res.send(errr));
});

router.post("/",(req,res)=>{
    ajouterUserRole(req.body.email,req.body.userId,req.body.role).then(result=>res.send(result)).catch(errr=>res.send(errr));
})

module.exports = router;