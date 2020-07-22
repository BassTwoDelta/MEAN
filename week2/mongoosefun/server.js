const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const session = require('express-session');
const mongoose = require("mongoose");
const flash = require("express-flash")
mongoose.connect('mongodb://localhost/mongofun1', {useNewUrlParser: true})

const ShoeSchema = new mongoose.Schema({
    name: String
})
const Shoe = mongoose.model("Shoe", ShoeSchema)
const WardrobeSchema = new mongoose.Schema({
    name: String,
    articles : [ShoeSchema]
})

const Wardrobe = mongoose.model("Wardrobe", WardrobeSchema)

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    age: { type: Number, required: true },
    wardrobe: WardrobeSchema,
    faveShoe: ShoeSchema
})
const User = mongoose.model('User', UserSchema)

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

app.get("/", (req, res) => {
    var errors = req.flash("errors")
    users = User.find()
    .then(data => {
        console.log("data from .then", data);
        res.render('users', {users: data, errors:errors});
    })
    console.log("After .then")
});

app.post('/users', (req,res) => {
    const user = new User();
    user.name = req.body.name
    user.age = req.body.age
    user.save()
    .then(data => {
        console.log("new user?: ", data);
        res.redirect("/");
    })
    .catch(err => {
        console.log("err:", err)
        if(err.errors.name){
            req.flash('errors', "Name is required")
        }
        if(err.errors.age){
        req.flash('errors', "Age is requiered")
        }
        res.redirect("/")
    })
});

app.get('/byeGarrett', (req,res) => {
    User.remove({name:"Garrett"})
    .then(()=>{
        res.redirect('/')
    })
});
app.get('/initshoes', (req, res) =>{
    newshoe = new Shoe()
    newshoe.name = "myKicks"
    othershoe = new Shoe()
    othershoe.name="othershoe"
    newshoe.save()
    .then((shoe1)=>{
        othershoe.save()
        .then((shoe2)=>{
            newwarddrobe = new Wardrobe()
            newwarddrobe.name = "Bob's clothes"
            newwarddrobe.articles = [shoe1, shoe2]
            newwarddrobe.save()
            .then((wd)=>{
                console.log("new wardrobe : ", wd)
                res.redirect('/')
            })
        })
    })
})
app.get("/updateGarrett",(req,res) => {
    User.findOne({name:"Garrett"})
    .then(data => {
        user = data
        user.name = "funnyGarrett"
        user.save()
        .then(() => {
            res.redirect("/")
        })
    })
})

