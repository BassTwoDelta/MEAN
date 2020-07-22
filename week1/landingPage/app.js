const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request,response){
    console.log(`Client request URL: ${request.url}`); 

    if(request.url === "/"){
        fs.readFile("./static/index.html", function(errors, contents){
            response.writeHead(200, { "Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/ninjas"){
        fs.readFile("./static/ninjas.html", function(errors, contents){
            response.writeHead(200, { "Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/dojos/new"){
        fs.readFile("./static/dojos.html", function(errors, contents){
            response.writeHead(200, { "Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    }
    else{
        response.writeHead(404);
        response.end("THE URL REQUESTED IS NOT FOUND!!!!!!!!!!!!!!!!!!!!!!");
    }
})

server.listen(6789, function () {console.log("listening on port 6789")})