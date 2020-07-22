const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/LoginReg', {useNewUrlParser: true});

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

require("./server/config/routes")(app)
