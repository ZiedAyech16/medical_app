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

app.listen(5000);