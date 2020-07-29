const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

    rating: {
        type: Number,
        require: [true, "You must rate the cake!!"]
    },

    comment: {
        type: String,
        minlength: [5, "The comment must be at least 5 characters!!"],
    }
}, {timestamps: true});

const Comment = new mongoose.model("Comment", commentSchema)

const cakeSchema = new mongoose.Schema({

    baker: {
        type:String,
        minlength: [2, "Baker's name must be at least 3 characters!!" ],
        required: [true, "The baker must have a name!"]
    },

    image: {
        type: String,
        required: [true, "You must insert an image url of you cake!!!"]
    },

    comment: [commentSchema]

}, {timestamps: true});

const Cake = new mongoose.model("Cake", cakeSchema)

module.exports = {

    Cake: Cake,
    CakeSchema: cakeSchema,
    Comment: Comment, 
    CommentSchema: commentSchema,

}