var http= require("http");
var fs = require('fs');
var data =[{name:"anil",age:"20"},
{name:"anil",age:"20"},
{name:"anil",age:"20"},
{name:"anil",age:"20"}];
var page= `<input type="text"><br>
<h1>Hello "Node js "</h1>`;
http.createServer(function(req,res){
   fs.readFile('./newhtml.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
   })



}).listen(5000);

module.exports=http;