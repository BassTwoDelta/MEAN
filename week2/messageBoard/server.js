const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt') ;
mongoose.connect('mongodb://localhost/messageBoard', {useNewUrlParser: true});


const CommentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    comment: {type: String, required: true},
})
const MessageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: [CommentSchema]
})

const Comment = mongoose.model("Comment", CommentSchema)
const Message = mongoose.model("Message", MessageSchema)


app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/static"));
app.use(flash());
app.set("view engine", "ejs");
app.set("views",__dirname+ "/views");

app.use(session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 6000}
}))

app.get('/', (req,res) => {
    var errors = req.flash("errors")
    messages =  Message.find()
    .then(data => {
        console.log(data)
        res.render("messageBoard", {messages: data, errors:errors});
    })
});

app.post('/postmessage', (req,res)=> {
    const message = new Message();
    message.name = req.body.name;
    message.message = req.body.message;
    message.save()
    .then(() => {
        res.redirect("/")
    })
    .catch(err => {
        console.log("err:", err)
        if(err.errors.name){
            req.flash('errors', "Name is required")
        }
        if(err.errors.message){
        req.flash('errors', "Message is requiered")
        }
        res.redirect("/")
    })
})

app.post('/postcomment/:id', (req,res) => {
    Message.findById(req.params.id)
    .then((message)=> {
        const comment = new Comment();
        comment.name = req.body.name;
        comment.comment = req.body.comment;
        comment.save()
        .then(comment => {
            message.comments.push(comment)
            message.save()
            .then(()=> {
                res.redirect('/')
            })
        })
        .catch(err => {
            console.log("err:", err)
            if(err.errors.name){
                req.flash('errors', "Name is required")
            }
            if(err.errors.comment){
            req.flash('errors', "Comment is required")
            }
            res.redirect("/")
        })
    })
})