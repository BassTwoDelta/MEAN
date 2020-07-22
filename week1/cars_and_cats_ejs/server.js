const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));

app.use(express.static(__dirname+ "/static"));
app.set("view engine", "ejs");
app.set("views",__dirname+ "/views");

app.get("/cars", function (request, response){
    response.render("cars");
})

app.get("/cats", function (request, response){
    response.render("cats");
})

app.get("/cars/new", function (request, response){
    response.render("new_car");
})