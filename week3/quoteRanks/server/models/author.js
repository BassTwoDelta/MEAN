const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author must have a name!!" ],
        minlength: [2, "Author's name must have at least 2 characters"]},

}, {timestamps: true})

const Author = new mongoose.model("Author", AuthorSchema)

module.exports = {
    Author: Author,
    AuthorSchema, AuthorSchema,
}