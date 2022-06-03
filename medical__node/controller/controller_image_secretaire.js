const multer = require("multer");
const { insertSecretaire, updateSecretaire } = require("./secretaire_DB");

const multerConfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public_image_secretaire/');
    },
    filename:(req,file,callback)=>{
        const ext = file.mimetype.split("/")[1];
        callback(null,`image-${Date.now()}.${ext}`);
    }
})

const upload = multer({
    storage:multerConfig
})

exports.uploadImage = upload.single("photo");

exports.upload = (req,res)=>{
 
    console.log("insert tache");
    insertSecretaire(req.body,req.file.filename).then((secretaire)=>{
        res.status(200).json({
            success: 'Success',
            secretaire:secretaire,
            image:req.file.filename
        })
    }).then(result=>res.status(200).send(result)).catch(err=>res.send(err));

}

const upload1 = multer({
    storage:multerConfig
})

exports.uploadImage1 = upload1.single("photo");


exports.upload1 = (req,res)=>{
    
        console.log("update tache");

        updateSecretaire(req.body,req.params.id,req.file.filename).then(data=>res.status(200).send(data)).catch(err=>res.status(500).send(err));


}