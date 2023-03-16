const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type:String,
        required:true
    },
    password : {
        type : String,
        required:true
    },
    contact:{
        type : Number
    },
    bookings:[{
        days : {
            type : String,
            required:true
        },
        roomType :{
            type : String
        },
        occupants : {
            type : String
        }
    }]
})

const User = mongoose.model('hotelUser',userSchema);


module.exports = User;