const multer = require("multer");
const { insertMedecin, updateMedecin } = require("./medecin_DB");
const { insertPatient } = require("./patient_DB");

const multerConfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public_medecins/');
    },
    filename:(req,file,callback)=>{
        const ext = file.mimetype.split('/')[1];
        callback(null,`image-${Date.now()}.${ext}`);
        
    }
})

const upload = multer({
    storage:multerConfig
})
exports.uploadImage = upload.single("photo");

exports.upload = (req,res)=>{


    insertMedecin(req.body,req.file.filename).then((medecin)=>{
        res.status(200).json({
            success:'Success',
            medecin:medecin,image:req.file.filename
        })
    })

}

const upload1 = multer({
    storage:multerConfig
});

exports.uploadImage1 = upload1.single("photo");
exports.upload1 = (req,res)=>{
    updateMedecin(req.body,req.params.id,req.file.filename).then((data)=>res.status(200).send(data)).catch((err)=>res.status(500).send(err));

}