console.log('SALAM');
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> i cover  emit events   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// const eventEmitter = require('events');
// const mYEmitter = new eventEmitter();
// mYEmitter.on('mr',()=>{
//     console.log('first events');
// });
// mYEmitter.on('m',()=>{
//     console.log('second events');
// });
// mYEmitter.on('num',number=>{
//     console.log(number);
// })
// mYEmitter.emit('mr');
// mYEmitter.emit('m');
// mYEmitter.emit("num",10+10);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> create server  first Example <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// const server = require('http').createServer()
// const fs =  require('fs');
const url = require('url')
// server.on('request',(req,res)=>{
//     if(req == '/favicon.ico ') return false
//     fs.readFile("./text3",(error,data)=>{
//         res.end(data)
//     })
//     // fs.appendFile(`text3`,`${req.url}  ek new req i hen`,(error,data)=>{
//     //     // res.end('well come home page')
//     //     res.end(data)
//     // })
// });
// let port = 8000
// server.listen(8000,'127.0.0.1',()=>{
//     console.log(('server started'));
// })
// server.on('request',(req,res)=>{
//     fs.readFile("./text3",(error,data)=>{
// res.end(data)
//     })
// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('server listening');
// })
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> create server  second Example <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//  server.on('request',(req,res)=>{
//     //     fs.readFile("./text3",(error,data)=>{
//     // res.end(data)
//     //     })
//     const reader  = fs.createReadStream('./tex3');
//    reader.on('data',chunk =>{
//     res.write(chunk);
// })
// reader.on('end',()=>{
//     res.end()
// })
// // reader.on('error',()=>{
// //     res.statusCode = 404
// //     res.end('files not found')
// // })  
//     })
//     server.listen(8000,'127.0.0.1',()=>{
//         console.log('server listening');
//     })



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> create server  three  Example <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// server.on('request',(res,req)=>{
// })
// const reader  = fs.createReadStream('./tex3');
// reader.pipe(res) 

// server.listen(8000,'120.0.0.1',()=>{
//     console.log("server on");
// })



const http = require('http');
const fs = require('fs');

const server = http.createServer()
server.on('request',(req,res)=>{
    const reader = fs.createReadStream('./text3');

    // Set the appropriate headers for the response
    res.setHeader('Content-Type', 'text/plain');

    // Pipe the contents of the file to the response stream
    reader.pipe(res);
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Server is running at http://127.0.0.1:8000");
});
