const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));

app.use(express.static(__dirname+ "/static"));

app.get("/cars.html", function(request,response){
    response.render("cars");
})

app.get("/cats.html", function(request, response){
    response.render("cats");
})

app.get("/new_car.html", function(request, response){
    response.render("new_car");
})