const fs = require("fs");
const  express = require("express");
const { findAllPatients, insertPatient, findOnePatient, updatePatient, removePatient } = require("../controller/patient_DB");
const router = express.Router();
const patients = findAllPatients();
console.log(patients);

const {upload,uploadImage} = require("../controller/controller_image_patient");


router.get("/",(req,res)=>{
    const patients = findAllPatients();
    console.log(patients);
    patients.then(resultat=>res.status(200).send(resultat)).catch(err=>res.status(500).send(err));
})

// router.post("/",(req,res)=>{
//      insertPatient().then(result=>res.status(201).send(result));
// })

router.post("/",uploadImage,upload);

router.get("/:id",(req,res)=>{
    findOnePatient(req.params.id).then((resultat)=>res.status(200).send(resultat));
})

router.put("/:id",uploadImage,upload);
// router.put("/:id",(req,res)=>{
//     updatePatient(req.body,req.params.id).then((data)=>res.status(200).send(data));
// })

router.delete("/:id",(req,res)=>{
    removePatient(req.params.id).then((data)=>res.status(200).send(data)).catch((err)=>res.status(400).send(err));
})


router.get("/images/:nom",function(req,res){
    console.log(__dirname);
    console.log(__dirname+'/public_patient'+JSON.stringify(req.params.nom));
    fs.readFile("./"+'public_patient/'+req.params.nom, function(err, data) {
    if (err) console.log(err); // Fail if the file can't be read.
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data); // Send the file data to the browser.
  });
  });

module.exports = router;