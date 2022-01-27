const http = require('http');
const fs = require('fs'); 
const { exit } = require('process');
const args = require('minimist')(process.argv.slice(2));

const port = args['port'] || 3000; 

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');

    const data = fs.readFileSync('./www/index2.html', 'utf8'); 
    if (data) {
        res.end(data); 
    }
    else {
        console.log(err);
        exit(1); 
    }
}); 

server.listen(port, () => {
    console.log(`Server running at port ${port}`); 
}); 
