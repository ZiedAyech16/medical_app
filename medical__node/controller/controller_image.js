const multer = require("multer");
const { insertUser } = require("./user_DB");


const multerConfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'public/');
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
   // console.log(req.file);
    console.log(req.body);
    insertUser(req.body.nom,req.body.prenom,req.body.age,req.body.email,req.body.contact,req.body.username,req.body.password,req.file.filename)
    .then((user)=>{
        
         res.status(200).json({
        success: 'Success',
        user:user,
        image:req.file.filename    });
       // res.send(user)
        }
    ).catch((err_)=>res.send(err_));

   
}