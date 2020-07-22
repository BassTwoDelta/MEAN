const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));

app.use(express.static(__dirname+ "/static"));
app.set("view engine", "ejs");
app.set("views",__dirname+ "/views");

app.get("/", function (request, response){
    const user = { name: "Garrett"};
    response.render("index", {user: user});
})