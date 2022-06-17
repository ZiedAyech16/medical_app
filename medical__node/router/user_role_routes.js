const express = require("express");
const jwt = require("jsonwebtoken");
const { selectAllUserRole, ajouterUserRole, selectOneUserRole, removeUserRole } = require("../controller/UserRole_DB");
const router = express();

router.get("/",(req,res)=>{
    selectAllUserRole().then(result=>res.send(result)).catch(errr=>res.send(errr));
});

// router.get("/:id",(req,res)=>{
//     selectOneUserRole(req.params.id).then(result=>res.send(result)).catch(errr=>res.send(errr));
// });


router.get("/login",(req,res)=>{
   // res.send({"message":"posted"});
    jwt.sign({user:req.body},'secretKey',{expiresIn:'30s'},(err,token)=>{
        res.send({token});
    })
});

router.get("/login_success/:id",verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretKey',{expiresIn:'30s'},(err,authData)=>{
        selectOneUserRole(req.params.id).then(user=>res.send({
            user:user,
            authData:authData
        }))
        
    })
})


router.post("/",(req,res)=>{
    ajouterUserRole(req.body.email,req.body.userId,req.body.role).then(result=>res.send(result)).catch(errr=>res.send(errr));
})

router.get("/:id",(req,res)=>{
    removeUserRole(req.params.id).then(result=>res.send(result)).catch(errr=>res.send(errr));
});

router.get("/:id",(req,res)=>{
    updateUserRole(req.body,req.params.id).then(result=>res.send(result)).catch(errr=>res.send(errr));
});


function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof(bearerHeader)!="undefined"){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}


module.exports = router;