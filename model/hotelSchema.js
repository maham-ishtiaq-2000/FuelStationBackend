const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    city : {
        type : String,
        required:true
    },
    path : {
        type : String,
        required : true
    }
})

const Hotel = mongoose.model('hotel',hotelSchema);


module.exports = Hotel;