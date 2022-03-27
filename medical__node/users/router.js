const express = require("express");
const router = express.Router();
const userDB = require("./user_db");



var users__=[];
const user_db = new userDB();
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



router.post("/",(req,res)=>{
    user_db.ajouterUser();

});

module.exports = router;
