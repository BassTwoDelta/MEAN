const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/helloAngular', {useNewUrlParser: true})

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/HelloAngular/dist/HelloAngular"));
app.use(express.json())


require('./server/config/routes')(app)

app.listen(8000, () => console.log("listening on port 8000"));


