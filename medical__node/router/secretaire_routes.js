const fs = require("fs");
const express = require("express");
const { findAllSecretaire, findOneSecretaire, insertSecretaire, updateSecretaire, removeSecretaire } = require("../controller/secretaire_DB");
const router = express.Router();
const {upload,uploadImage} = require("../controller/controller_image_secretaire");


router.get("/",(req,res)=>{
    findAllSecretaire().then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));
});


router.get("/:id",(req,res)=>{
    findOneSecretaire(req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));
})

// router.post("/",(req,res)=>{
//     insertSecretaire(req.body).then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));
// })

router.post("/",uploadImage,upload);

// router.put("/:id",(req,res)=>{
//     updateSecretaire(req.body,req.params.id).then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));
// })
router.put("/:id",uploadImage,upload);

router.delete("/:id",(req,res)=>{
    removeSecretaire(req.params.id).then(data=>res.sendStatus(200).send(data)).catch(err=>res.sendStatus(500).send(err));
})
router.get("/images/:nom",function(req,res){
    console.log(__dirname);
    console.log(__dirname+'/public_image_secretaire/'+JSON.stringify(req.params.nom));
    fs.readFile("./"+'public_image_secretaire/'+req.params.nom, function(err, data) {
    if (err) console.log(err); // Fail if the file can't be read.
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data); // Send the file data to the browser.
  });
  });
  

module.exports = router;