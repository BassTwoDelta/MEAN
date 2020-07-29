const express = require("./node_modules/express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Products', {useNewUrlParser: true, useUnifiedTopology: true })
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/public/dist/public"));
app.use(express.json());

require("./server/config/routes")(app)