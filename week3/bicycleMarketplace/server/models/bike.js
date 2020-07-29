const mongoose = require("mongoose");

const BikeSchema = new mongoose.Schema({

    title:{
        type: String,
        required: [true, "Title is required"],
    },

    description: {
        type: String,
        maxlength: [200, "Description can only be 200 characters"],
    },

    price: {
        type: Number,
        min: [1, "Min price must be $1"],
        required: [true, "You must enter a price!"]
        
    }, 

    location: {
        type: String,
        required: [true, "You must provide the location"]

    },

    image: {
        type: String,
        required: [true, "You must provide a bike image"]
    }

}, {timestamps: true})

const Bike = new mongoose.model("Bike", BikeSchema)

module.exports = {
    Bike: Bike, 
    BikeSchema:BikeSchema
}