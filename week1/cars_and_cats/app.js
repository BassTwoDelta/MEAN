const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
    console.log(`Client Request URL: ${request.url}`);

    if(request.url === "/cars"){
        fs.readFile("./views/cars.html", "utf8", function(errors, contents){
            response.writeHead(200, { "Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })

    }
    else if (request.url ==="/cats"){
        fs.readFile("./views/cats.html","utf8", function(errors, contents){
            response.writeHead(200, { "Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url ==="/cars/new"){
        fs.readFile("./views/new_car.html","utf8", function(errors, contents){
            response.writeHead(200, { "Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/stylesheets/bootstrap.css'){
        fs.readFile('./stylesheets/bootstrap.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
        })
    }
    else if(request.url === '/images/bently.jpg'){
        fs.readFile('./images/bently.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/lambo.jpg'){
        fs.readFile('./images/lambo.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/vintage_rolls.jpeg'){
        fs.readFile('./images/vintage_rolls.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat1.jpeg'){
        fs.readFile('./images/cat1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/carole.jpg'){
        fs.readFile('./images/carole.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat2.jpeg'){
        fs.readFile('./images/cat2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else{
        response.writeHead(404);
        response.end("Page Not Found!!!");
    }
})

server.listen(7077, function () {console.log("listening on port 7077")})