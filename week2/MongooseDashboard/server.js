const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const session = require('express-session');
const flash = require('express-flash');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/client/static"));
app.use(flash());
app.use(session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 6000}
}));

app.set("view engine", "ejs");
app.set("views",__dirname+ "/client/views");


require("./server/config/routes")(app)
require('./server/config/mongoose')

