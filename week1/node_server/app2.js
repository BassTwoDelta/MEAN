const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
    console.log(`Client Request URL: ${request.url}`);

    if(request.url === "/"){
        fs.readFile("./static/index.html", function(errors, contents){
            response.writeHead(200, { "Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })

    }
    else if (request.url ==="/css/style.css"){
        fs.readFile("./static/css/style.css", function(errors, contents){
            response.writeHead(200, { "Content-Type": "text/css"});
            response.write(contents);
            response.end();
        })
    }
    else{
        response.writeHead(404);
        response.end("Page Not Found!!!");
    }
})

server.listen(6789, function () {console.log("listening on port 6789")})