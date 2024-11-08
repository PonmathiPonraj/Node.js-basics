const http = require('http');
const PORT = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.write('Hi Everyone');
    res.end();
});

server.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    }
    else {
        console.log('Server is running on' + PORT)
    }
});