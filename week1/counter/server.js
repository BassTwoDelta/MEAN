const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const session = require('express-session');

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

app.get("/", (req, res) => {
    if(!req.session.count){
        req.session.count = 0; 
    }
    req.session.count += 1;
    context = {
        "count" : req.session.count
    }
    res.render('counter', context);
});

app.post('/add2', (req, res) => {
    req.session.count +=1;
    res.redirect('/')
})

app.post('/reset', (req, res) => {
    req.session.count = 0;
    res.redirect('/')
})