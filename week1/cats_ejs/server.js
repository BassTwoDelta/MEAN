const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));

app.use(express.static(__dirname+ "/static"));
app.set("view engine", "ejs");
app.set("views",__dirname+ "/views");

app.get("/cats", function (request, response){
    response.render("cats");
})

app.get("/cats/Curiosity", (req,res)=> {
    context = { 
        name: "Curiosity",
        favoriteFood : "catnip",
        age: "5 months",
        sleepingSpots : ["balcony", "window", "hidden"]
    }
    res.render("details", context);
})

app.get("/cats/Carole", (req,res)=> {
    context = { 
        name: "Carole",
        favoriteFood : "Tigers Blood and Her Ex-Husband(because she killed him)",
        age: "59 Years Old",
        sleepingSpots : ["Joe Exotic's Zoo", "Grass", "Trashcans"]
    }
    res.render("details", context);
})

app.get("/cats/Cutie", (req,res)=> {
    context = { 
        name: "Cutie",
        favoriteFood : "Cute things",
        age: "5 months cute",
        sleepingSpots : ["Cute beds", "Cute couches", "Cute windows"]
    }
    res.render("details", context);
})

