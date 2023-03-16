const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId
    },
    days : {
        type : String,
        required:true
    },
    roomType :{
        type : String
    },
    occupants : {
        type : String
    },
    hotelName : {
        type : String
    },
    hotelCity : {
        type : String
    }
})


const Booking = mongoose.model('hotelbooking',bookingSchema);


module.exports = Booking;