const http =require("http");
const url =require("url");

http.createServer((request,response)=>{

    
    console.log(request.url);
   const urlob= url.parse(request.url,true);  //url parse 
   console.log(urlob);

   console.log(urlob.query.keywords);



}).listen(8082);