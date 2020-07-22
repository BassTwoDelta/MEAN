const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const session = require('express-session');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/static"));
app.use(session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge : 6000}
}))
app.set("view engine", "ejs");
app.set("views",__dirname+ "/views");

app.get("/", (req, res) => {
    res.render("survey");
});

app.post("/get_results", (req, res) => {
    context = {
    "name": req.body.name,
    "location" : req.body.location,
    "faveLang" : req.body.faveLang,
    "comment" : req.body.comment,
    }
    res.render("results", context)
})