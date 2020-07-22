const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const session = require('express-session');
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Quotes', {useNewUrlParser: true})

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model("User", UserSchema);

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/static"));
app.set("view engine", "ejs");
app.set("views",__dirname+ "/views");

app.use(session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 6000}
}))