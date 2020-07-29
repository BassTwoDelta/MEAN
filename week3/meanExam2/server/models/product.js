const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Product must have a name!"],
        minlength: [3, "Product name must have at least 3 characters"]
    },

    qty: {
        type: Number,
        required: [true, "Must enter a qty!"],
        min: [0, "Must be 0 or greater"]
    },

    price: {
        type: Number, 
        required: [true, "Product must have a price"],
        min: [0, "Price must be 0 or greater!"]
    }

}, {timestamps: true});

const Product = new mongoose.model('Product', ProductSchema)

module.exports = {
    Product: Product, 
    ProductSchema: ProductSchema,
}