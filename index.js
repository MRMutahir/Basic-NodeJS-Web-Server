const { error } = require('console');
const http = require('http');
const url = require('url');
let server =  http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('server Run!');
    }else if (req.url === '/about') {
        res.end('server  Run About ! ');
        
    }else if(req.url === '/contact'){
        res.end('server  Run contact ! ');

    }else{
        // console.log(error,'server not run ?');
        res.end('incorect url')
    }
});
let port = 8000
server.listen(port,'127.0.0.1',()=>{
console.log(`listen to server ${port}`);
})