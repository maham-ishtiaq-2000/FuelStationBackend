const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 // For legacy browser support
}


const User = require('./model/userSchema');
const DB = "mongodb+srv://maham:maham2000@cluster0.jsltunj.mongodb.net/hotelbooking?retryWrites=true&w=majority"

//middleware

mongoose.connect(DB).then(() => {
    console.log("connection successfull");
}).catch((err) => console.log("no connection"))

app.use(cors(corsOptions));
app.use(express.json())
app.use(require('./router/auth'));



app.listen(3000 , () => {
    console.log("Server is running at port number 3000")
})


console.log("here from the express part")