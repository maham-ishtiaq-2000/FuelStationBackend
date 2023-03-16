const express = require("express");
const router = express.Router()
const User = require("../model/userSchema");
const Booking = require("../model/bookingSchema");
const Hotel = require("../model/hotelSchema");
const Fuel = require("../model/fuelStation");
const fs = require('fs'); 
const csv = require('csv-parser');





router.get("/",(req,res) => {
    res.send("ALLAH U AKBAR")
})

router.post('/register' , (req,res) => {
    const {email , password , contact} = req.body
    if(!email || !password || !contact){
        return res.status(422).json({error : "Any field cant be empty"})
    }
    User.findOne({email : email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({error : "Email already exist"})
        }
        const user = new User({email , password , contact})
        user.save().then(() => {
            res.status(200).json({success : true})
        }).catch((err) => res.status(500).json({error : "Failed to register"}))
    }).catch((err) => console.log(err))
})



router.post('/login' , async(req,res) => {
    const {email , password } = req.body
    try{
        const user = await User.findOne({email : email})
        console.log(user)
        if(user){
            if(user.password === password){
                console.log("pasword matched")
                res.status(200).json({success : true , data : user})
            }
            else{
                console.log("password not matched")
                res.status(400).json({success : false , message : "password not matched"})
            }
            
        }
        else{
            res.status(500).json({error : "No such User Exists . Kindly Sign Up First"})
        }
    }
    catch{
        console.log("err")
    }
    
})


router.post('/bookings/:id' , async(req,res) => {
    const {days,roomType,occupants,hotelName,hotelCity} = req.body
    console.log(req.params.id)
    const addToArray = {days : days , roomType : roomType , occupants : occupants , hotelName : hotelName , hotelCity : hotelCity}
    try{
        const user = await User.findOne({_id : req.params.id})
        if(user){
            const booking = new Booking ({user_id : req.params.id , days , roomType , occupants , hotelName ,hotelCity})
            await booking.save()
            res.status(200).json({data : booking})
        }
        else{
            res.status(500).json({error : "No such User Exists . Kindly Sign Up First"})
        }
    }
    catch{
        console.log("err")
    }
})


router.get("/userBookings/:id" , async(req,res) => {
    try{
        const booking = await Booking.find({user_id : req.params.id})
        console.log(booking)
        res.status(200).json({data : booking , messages : "Ahamdulillah ! booking info provided"})
    }
    catch{
        console.log("here is an error")
    }

})


router.post("/addAnHotel" , async(req,res) => {
    console.log(req.body)
    const {city,name,path} = req.body
    try{
        const hotel = await new Hotel({city , name , path })
        hotel.save()
        res.status(200).json({message : "Hotel added to the database successfully"})
    }
    catch{
        res.status(400).json({err : "Something went wrong"})
    }
})


router.get("/getSpecificHotel/:city" , async(req,res) => {
    
    const {city} = req.params
    try{
        const hotel = await Hotel.find({city : city})
        res.status(200).json({data : hotel , message : "Have your hotels"})
    }
    catch{
        console.log("Something went wrong")
    }
})








module.exports = router;