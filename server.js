const http = require('http');
const fs = require('fs'); 
const { exit } = require('process');
const args = require('minimist')(process.argv.slice(2));

const port = args['port'] || 3000; 

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./www/index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return 
            process.exit(1);
        }
        res.end(data); 
    }); 
}); 

server.listen(port, () => {
    console.log(`Server running at port ${port}`); 
}); 
