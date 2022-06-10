//http module



var http = require ("http");

const server    =   http.createServer((req,resp) =>{


    resp.writeHead(200 , {"content-type" : "text/html"});
    resp.write("<h1> Wow this is first response from server</h1>");
    resp.end("ok by");
})



server.listen(8080);
// const http = require("http");

// const server = http.createServer((req,resp)=>{

// // req : request process
// // resp : for wirting response 

// resp.writeHead(200,{'content-type': 'text/html'  });
// resp.write("<h1> Wow this is first response from server</h1>");
// resp.end("ok by");


// });

// server.listen(8080);