const multer = require("multer");
const { ajouterAdmin, updateAdmin } = require("./admin_DB");

const multerConfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public_controller_admin');
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

    ajouterAdmin(req.body,req.file.filename).then((admin)=>{
        res.status(200).send({
            success:'Success',
            admin:admin,
            message:"added"
        })
    });
}

const upload1 = multer({
    storage:multerConfig
})
exports.uploadImage1 = upload1.single("photo");
exports.upload1 = (req,res)=>{
    updateAdmin(req.body,req.params.id,req.file.filename).then(admin=>{
        res.status(200).send({
            success:'Success',
            admin:admin,
            message:"updated"
        })
    });
}