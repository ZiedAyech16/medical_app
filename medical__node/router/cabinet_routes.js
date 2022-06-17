const express = require("express");
const { selectAllCabinet, selectOneCabinet, removeCabinet, ajouterCabinet } = require("../controller/cabinet_DB");
const { uploadImage, upload, uploadImage1, upload1 } = require("../controller/controller_image_cabinet");
const router = express.Router();
const fs =require("fs");

router.get("/",(req,res)=>{
    selectAllCabinet().then(cabinet=>res.send(cabinet)).catch(errr=>res.send(errr));
})

router.get("/:id",(req,res)=>{
    selectOneCabinet(req.params.id).then(cabinet=>res.send(cabinet)).catch(errr=>res.send(errr));
})



router.post("/",uploadImage,upload);

router.put("/:id",uploadImage1,upload1);

router.delete("/:id",(req,res)=>{
    removeCabinet(req.params.id).then(cabinet=>res.res.sendStatus(200).send(cabinet)).catch(errr=>res.send(errr));
})

router.get("/images/:nom",function(req,res){
    fs.readFile("./"+"public_cabinets/"+req.params.nom,function(err,data){
        if(err){console.log(err);}
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        res.end(data);

    });
})

module.exports = router;