const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/People', {useNewUrlParser: true})

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/client/static"));
app.use(express.json());


require("./server/config/routes")(app)