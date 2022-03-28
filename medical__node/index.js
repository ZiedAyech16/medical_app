const express= require("express");
const app = express();
const users = require("./users/router");
const cors = require("cors");

const corsOptions ={
    origin:'*',
    credentials:true,
    optionsSuccessStatus:200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/users",users);

app.listen(5000);