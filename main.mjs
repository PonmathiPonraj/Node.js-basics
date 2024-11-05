import {readFile} from 'node:fs';

readFile('./files/start.txt', (err, data) => {
    if(err) throw err;
    // console.log(data);      //buffer data will displayed
    console.log(data.toString());   //string will displayed
});


//without toString
readFile('./files/start.txt', 'utf8', (err, data) => {      //utf8 - changes to string so only toString removed
    if(err) throw err;
    console.log(data); 
});


//exit on uncaught errors

process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ${err}');
    process.exit(1);
});