const mongoose = require("mongoose");

const fuelStation = new mongoose.Schema({
    CardNumber : {
        type:String,
    },
    Department : {
        type : String,
    },
    
    postDate : {
        type : String
    },
    transDate:{
        type : String
    },
    Time:{
        type : String
    },
    Merchant:{
        type : String
    },
    DriverID:{
        type: String
    },

    Units:{
        type:String
    },
    UnitCost:{
        type:String
    },
    fuelCost:{
        type:String
    },
    nonFuelCost:{
        type:String
    },
    GrossCost:{
        type:String
    },
    netCost:{
        type : String
    }

})

const Fuel = mongoose.model('fuel',fuelStation);


module.exports = Fuel;