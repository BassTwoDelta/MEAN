const express = require("express");

const app = express()
app.use(express.static(__dirname + "/public/dist/public"))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Cats', {useNewUrlParser: true, useUnifiedTopology: true})


require('./server/config/routes')(app)

app.listen(8000, ()=> console.log("The server is running!"))