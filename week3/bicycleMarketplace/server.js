const express = require("./node_modules/express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Bikes', {useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/public/dist/public"));
app.use(express.json());


require("./server/config/routes")(app)