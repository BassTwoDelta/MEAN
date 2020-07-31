// using express and setting the server to port 8000
const express = require("./node_modules/express"),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));
// connecting the mongo db for the users of the BudgetApp
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/BudgetApp', {useNewUrlParser: true, useUnifiedTopology: true})

//is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. 
app.use(express.urlencoded({extended: true}));

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static(__dirname+"/budgetApp/dist/budgetApp"));

app.use(express.json());
