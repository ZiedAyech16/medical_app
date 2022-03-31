const express = require("express");
const User = require("./user");
const router = express.Router();
const userDB = require("./user_db");



var users__=[];
const user_db = new userDB();
//user_db.ajouterUser("user").then((data)=>console.log(data)).catch((err)=>console.log(err));


router.post("/",async(req,res)=>{
    console.log(req.body);
     res.send(req.body);
//      user_db.ajouterUser({
//     "nom": "guyfg",
//     "prenom": "bfuhjdbhj",
//     "email": "vghjvgjh@",
//     "contact": "5645",
//     "username": "kjnkjk",
//     "password": "kbnkj"
// }).then((data)=>res.status(201).send(data)).catch((err)=>res.status(500).send(err));

   // const user = new User( req.body);
   await user_db.ajouterUser(req.body).then((data)=>res.status(201).send(data)).catch((err)=>res.status(500).send(err));

});

router.delete("/:id",(req,res)=>{
    user_db.removeItem(req.params.id).then((res_)=>res.json(res_)).catch((err)=>res.json(err));
});

router.put("/:id",(req,res)=>{
    console.log(req.body);
    user_db.updateItem(req.params.id,req.body).then((res_)=>res.json(res_)).catch((err)=>res.json(err));
})

user_db.afficherTousUser().then((result)=>{
    //console.log(result);
    result.forEach(element => {
        users__.push(element);
       // console.log(users__)
    });
    console.log(users__.length);
    router.get("/",(req,res)=>{

        //console.log(user_db.afficherTousUser());
        const users = {"users":JSON.stringify(user_db.afficherTousUser())};     
        res.send(users__);
        });
        router.get("/:id",(req,res)=>{
            res.send(users__.filter(v=>v.id==req.params.id));

        });
        
});

console.log(users__.length);
//users__.forEach((element)=>console.log(element));
// router.get("/",(req,res)=>{

// console.log(user_db.afficherTousUser());
// const users = {"users":JSON.stringify(user_db.afficherTousUser())};     
// res.send("data");
// });





module.exports = router;
