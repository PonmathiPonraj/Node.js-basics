const fs = require ('fs');
const path = require('path');

//Read file

fs.readFile(path.join(__dirname, 'files', 'start1.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data); 
});
console.log('Hi');

//Write file

fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'I am a Technical Trainer', (err) => {
    if(err) throw err;
    console.log("Write completed"); 
});

//Append File

fs.appendFile(path.join(__dirname, 'files', 'new.txt'), '\n\nFull Stack Development', (err) => {
    if(err) throw err;
    console.log("Append completed"); 
});

//Rename File

fs.rename(path.join(__dirname, 'files', 'new.txt'), path.join(__dirname, 'files', 'end.txt'), (err) => {
    if(err) throw err;
    console.log("Rename completed"); 
});

console.log('Hi');

//exit on uncaught errors

process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ${err}');
    process.exit(1);
});