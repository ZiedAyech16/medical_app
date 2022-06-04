const fs = require("fs");
const express = require("express");
const { findAllMedecin, findOneMedecin, insertMedecin, updateMedecin, removeMedecin } = require("../controller/medecin_DB");
const router = express.Router();
//findAllMedecin().then((data)=>console.log(data)).catch((err)=>console.log(err));

const {upload,uploadImage, uploadImage1, upload1} = require("../controller/controller_image_medecins");
router.get("/",(req,res)=>{
    findAllMedecin().then((data)=>res.status(200).send(data)).catch((err)=>res.status(500).send(err));
})


router.get("/:id",(req,res)=>{
    findOneMedecin(req.params.id).then((data)=>res.status(200).send(data)).catch((err)=>res.status(500).send(err));
})

// router.post("/",(req,res)=>{
//     insertMedecin(req.body).then((data)=>req.status(201).send(data)).catch((err)=>res.status(500).send(err));
// })

router.post("/",uploadImage,upload);

router.put("/:id",uploadImage1,upload1);


router.delete("/:id",(req,res)=>{
    removeMedecin(req.params.id).then((data)=>res.status(500).send(data)).catch((err)=>res.status(500).send(err));
})

router.get("/images/:nom",function(req,res){
    console.log(__dirname);
    console.log(__dirname+'/public_medecins/'+JSON.stringify(req.params.nom));
    fs.readFile("./"+'public_medecins/'+req.params.nom, function(err, data) {
    if (err) console.log(err); // Fail if the file can't be read.
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data); // Send the file data to the browser.
  });
  });

  
module.exports = router;