var formidable = require('formidable');
var fs = require('fs');
const express = require("express");
const { findAllUsers, insertUser, updateUser, removeUser, findUser, findUserByPasswordEmail } = require("../controller/user_DB");
const router = express.Router();


// const express =require("express");
// const app = express();
const {upload,uploadImage} = require("../controller/controller_image");


//findUserByPasswordEmail("zied44@","1111").then((result)=>console.log(result));

router.get("/",(req,res)=>{
    findAllUsers().then((result)=>res.json(result)).catch((err)=>res.status(500).json(err));
})


router.get("/:id",(req,res)=>{
    findUser(req.params.id).then((result)=>res.json(result)).catch((err)=>res.status(500).json(err));
})

router.post("/",uploadImage,upload);


// router.post("/",(req,res)=>{
//     // var form = new formidable.IncomingForm({ 
//     //     uploadDir: __dirname + '/images',  // don't forget the __dirname here
//     //     keepExtensions: true,
//     //     multiples: true 
//     //   });
    
//     //   form.parse(req, (err, fields, files) => {
//     //     if (err) {
//     //       next(err);
//     //       return;
//     //     }

//     //     //res.json({ fields, files });
//     //   });
//       insertUser(req.body.nom,req.body.prenom,req.body.age,req.body.email,req.body.contact,req.body.username,req.body.password,'files.image.newFilename').then((user)=>res.send(user)).catch((err_)=>res.send(err_));

// })

router.put("/:id",(req,res)=>{
    updateUser(req.params.id,req.body.nom,req.body.prenom,req.body.email,req.body.contact,req.body.username,req.body.password)
    .then(res=>res.json(res)).catch(err=>console.log(err));
});

router.delete("/:id",(req,res)=>{
    removeUser(req.params.id).then((ress)=>res.json(ress)).catch((err)=>res.json(err));
})



router.get("/images/:nom",function(req,res){
  console.log(__dirname);
  console.log(__dirname+'/public/'+JSON.stringify(req.params.nom));
  fs.readFile("./"+'public/'+req.params.nom, function(err, data) {
  if (err) console.log(err); // Fail if the file can't be read.
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data); // Send the file data to the browser.
});
});



module.exports = router;