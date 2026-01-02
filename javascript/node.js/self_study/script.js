// HTTP Web server : a software web server that understand 'url' and HTTP Protocol
let http = require('http');
let path = require('path'); //provide utilities for working with file and path directory
let fs = require('fs');// procide an API, interacting with file system


//create a http web server
const server = http.createServer((req, res) => {
    //Read HTML file
    fs.readFile(path.join(__dirname, 'index.html'), (err,data)=> {
        //ERROR
        if(err) {
            res.writeHead(500,{'Content-Type': 'text/plain'});
            return res.end('Error loading HTML file');
        }
        
        //RUN
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data); // signal that repsonse (header&body) has been sent(Must call on each respone)
    })
})

server.listen(3000, ()=> {
    console.log('Server running at http://localhost:3000/');
})