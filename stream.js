//rs - read stream, ws - write stream

const fs = require('fs');
const path = require('path');
const rs = fs.createReadStream(path.join(__dirname, 'files', 'bigfile.txt'), {encoding: 'utf-8'});
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new_bigfile.txt'));
rs.on('data', (datachunk) => {
    ws.write(datachunk)
})
        //or
rs.pipe(ws);