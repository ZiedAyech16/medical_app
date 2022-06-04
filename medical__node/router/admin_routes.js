const fs = require("fs");
const express = require("express");
const { findAllAdmin, ajouterAdmin, findAdminById, removeAdmin } = require("../controller/admin_DB");
const router = express.Router();
const {upload,uploadImage, uploadImage1, upload1} = require("../controller/controller_image_admin");

router.get("/",(req,res)=>{
    findAllAdmin().then(result=>res.send(result)).catch((err)=>res.send(err));
})

// router.post("/",(req,res)=>{
//     ajouterAdmin(req.body).then(result=>res.send(result)).catch(err=>res.send(err));
// })

router.post("/",uploadImage,upload);

router.put("/:id",uploadImage1,upload1);

router.get("/:id",(req,res)=>{
    findAdminById(req.params.id).then(result=>res.send(result)).catch((err)=>res.send(err));
})

router.delete("/:id",(req,res)=>{
    removeAdmin(req.params.id).then(result=>res.send(result)).catch((errrr)=>res.send(errrr));
})


router.get("/images/:nom",function(req,res){
    console.log(__dirname);
    console.log(__dirname+'/public_controller_admin/'+JSON.stringify(req.params.nom));
    fs.readFile("./"+'public_controller_admin/'+req.params.nom, function(err, data) {
    if (err) console.log(err); // Fail if the file can't be read.
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data); // Send the file data to the browser.
  });
  });
module.exports = router;