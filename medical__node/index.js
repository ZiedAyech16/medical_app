const express= require("express");
const app = express();
const users = require("./users/router");
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
app.use("/users",users);

app.listen(5000);