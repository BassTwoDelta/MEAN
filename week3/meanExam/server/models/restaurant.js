const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({

    customer_name: {
        type: String,
        required: [true, "Must enter a customer name!!"],
        minlength: [3, "Customer name must have at least 3 characters!!"]
    },

    stars: {
        type: Number, 
        required: [true, "Must give the restaraunt a rating!!"]
    },

    review: {
        type: String, 
        minlength: [3, "Review must be at least 3 characters!!"]
    }

}, {timestamps: true});

const Review = new mongoose.model("Review", ReviewSchema)

const RestaurantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Restaraunt must have a name!!"],
        minlength: [3, "Restaraunt name must have 3 characters!!"]
    },

    cuisine: {
        type: String, 
        required: [true, "Restaraunt must have a cuisine!!"],
        minlength: [3, "Cuisine must be at least 3 characters long!!"]
    },

    reviews: [ReviewSchema]
}, {timestamps: true})

const Restaurant = new mongoose.model("Restaurant", RestaurantSchema)

module.exports = {

    Review: Review,
    ReviewSchema: ReviewSchema,
    Restaurant: Restaurant,
    RestaurantSchema: RestaurantSchema,

}

