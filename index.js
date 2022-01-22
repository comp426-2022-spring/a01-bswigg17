const http = require('http');
const fs = require('fs'); 
const args = require('minimist')(process.argv.slice(2))

const port = args['port'] || 3000; 

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./www/index.html', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        res.end(data); 
    })
}); 

server.listen(port, () => {
    console.log(`Server running at port ${port}`); 
}); 
