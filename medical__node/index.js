const express= require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const corsOptions ={
    origin:'*',
    credentials:true,
    optionsSuccessStatus:200
};

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use(express.json());
//app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    res.header({"Access-Control-Allow-Origin":"*"});
    next();
})
//app.use("/users",users);
const  users_=require("./router/user_routes");
app.use("/users",users_);
const patients = require("./router/patient_routes");
app.use("/patients",patients);

const medecins = require("./router/medecin_routes");
app.use("/medecins",medecins);

const secretaires = require('./router/secretaire_routes');
app.use("/secretaires",secretaires);

const rdvs = require("./router/rdv_routes");
app.use("/rdvs",rdvs);

const auth = require("./security/auth");
app.use("/api",auth);

const calenders = require("./router/calender_routes");
app.use("/calenders",calenders);

const fiche_patients = require("./router/fiche_patient_routes");
app.use("/fiche_patients",fiche_patients);

var formidable = require('formidable');
var fs = require('fs');
app.get("/fileup",(req,res)=>{
   if (req.url == '/fileupload') {

        var form = new formidable.IncomingForm({ 
            uploadDir: __dirname + '/upload/images',  // don't forget the __dirname here
            keepExtensions: true
          });
        form.parse(req, function (err, fields, files) {
            //console.log(files);

          var oldpath = files.filetoupload.filepath;
          console.log(oldpath);
        //  var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
          var newpath = 'upload/images/' + files.filetoupload.originalFilename;
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw res.send({"msg err":err});
            

            res.write('File uploaded and moved!');
            res.end();
          });
     });
     } 



     app.use((req,res,next)=>{
      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader(
          'Access-Control-Allow-Headers','Origin, X-Requested-Width,Content-Type,Accept, Authorization'
      );
      res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH,DELETE');
      next();
  })

    // if (req.url == '/fileupload') {
    //     var form = new formidable.IncomingForm({ 
    //         uploadDir: __dirname + '/images',  // don't forget the __dirname here
    //         keepExtensions: true
    //       });
    //     form.parse(req, function (err, fields, files) {
    //         //console.log(files);
    //       var oldpath = files.filetoupload.filepath;
    //       console.log(oldpath);
    //     //  var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
    //       var newpath = 'images/' + files.filetoupload.originalFilename;
    //       fs.rename(oldpath, newpath, function (err) {
    //         if (err) throw err;
    //         res.write('File uploaded and moved!');
    //         res.end();
    //       });
    //  });
    //   } else {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    //     res.write('<input type="file" name="filetoupload"><br>');
    //     res.write('<input type="submit">');
    //     res.write('</form>');
    //     return res.end();
    //   }
})




// app.get('/', (req, res) => {
//     res.send(`
//       <h2>With <code>"express"</code> npm package</h2>
//       <form action="/api/upload" enctype="multipart/form-data" method="post">
//         <div>Text field title: <input type="text" name="title" /></div>
//         <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
//         <input type="submit" value="Upload" />
//       </form>
//     `);
//   });
  
  app.post('/api/upload', (req, res, next) => {
    //const form = formidable({ multiples: true });
    var form = new formidable.IncomingForm({ 
      uploadDir: __dirname + '/images',  // don't forget the __dirname here
      keepExtensions: true,
      multiples: true 
    });
  
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      res.json({ fields, files });
    });
  });
  
  // app.listen(3001, () => {
  //   console.log('Server listening on http://localhost:3000 ...');
  // });




app.listen(5000);