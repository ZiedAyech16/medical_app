const multer = require("multer");
const { insertPatient, updatePatient } = require("./patient_DB");


const multerConfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public_patient/');
    },
    filename:(req,file,callback)=>{
        const ext = file.mimetype.split('/')[1];
        callback(null,`image-${Date.now()}.${ext}`);
    }
})

const upload = multer({
    storage:multerConfig
});
exports.uploadImage = upload.single("photo");

exports.upload = (req,res)=>{

    if(req.params.id!==null){
        
            updatePatient(req.body,req.params.id).then((patient) => {
                res.status(200).json({
                    success:patient,
                    image:req.file.filename
                })
            }).catch((err) => {
                console.log(err)
            });
        
    }else{
    insertPatient(req.body,req.file.filename).then((patient) => {
        res.status(200).json({
            success:patient,
            image:req.file.filename
        })
    }).catch((err) => {
        console.log(err)
    });
}
}