const multer = require("multer");
const { ajouterCabinet, updateCabinet } = require("./cabinet_DB");

const multerConfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public_cabinets')
    },
    filename:(req,file,callback)=>{
        const ext = file.mimetype.split("/")[1];
        callback(null,`image-${Date.now()}.${ext}`)
    }
})

const upload = multer({
    storage:multerConfig
});

exports.uploadImage = upload.single("photo");

exports.upload = (req,res)=>{
    ajouterCabinet(req.body,req.file.filename).then((cabinet)=>{
        res.status(201).send({
            success:"Success",
            cabinet:cabinet,
            message:"ajouter"
        }).catch(e=>res.send(e));
    })
}

const upload1 = multer({
    storage:multerConfig
})

exports.uploadImage1 = upload1.single("photo");

exports.upload1 = (req,res)=>{
    updateCabinet(req.body,req.params.id,req.file.filename).then((cabinet)=>{
        res.status(200).send({
            success:'Success',
            cabinet:cabinet,
            message:"update"
        })
    })
}