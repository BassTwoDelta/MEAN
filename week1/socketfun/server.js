const express = require("express"),
    app = express(),
    port = 8000,
    server = app.listen(port,() => console.log(`Listening on port ${port}`));
var http = require("http").createServer(app);
var io = require('socket.io')(http);

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+ "/static"));

app.set("view engine", "ejs");
app.set("views",__dirname+ "/views");

app.get('/', (req, res) =>{
    res.render("index")
});

io.on("connection", (socket)=> {
    console.log("a user connected");
});