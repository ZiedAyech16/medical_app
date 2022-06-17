const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { findUserByPasswordEmail } = require("../controller/user_DB");


router.get("/api",(req,res)=>{
    res.json({"message":"Welcome!!"});
})

router.get("/posts",verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretKey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({"message":"Post created!",authData});
        }
    });
});

    // findUserByPasswordEmail("zied44@","1111").then((result)=>{
    //     console.log(result);
    // }).catch((e)=>res.send({"message":"user not exists!!"}));

router.get("/login",(req,res)=>{
    // findUserByPasswordEmail(req.body.email,req.body.password).then((result)=>{
    //     //  console.log(result);
    //     //  res.send({res:result});

    //      if(result>0){
                 jwt.sign({user:req.body},'secretKey',{expiresIn:'30s'},(err,token)=>{
                    res.json({token})
                });
        //  }else{
        //      res.json({"message":"user not found!"})
        //  }
    //}).catch((e)=>res.send({"message":"user not exists!!"}));

    // jwt.sign({user:req.body},'secretKey',{expiresIn:'30s'},(err,token)=>{
    //     res.json({token})
    // });
});

function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof(bearerHeader)!=="undefined"){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token=bearerToken;
        next();

    }else{
        res.sendStatus(403);
    }
}

module.exports=router;