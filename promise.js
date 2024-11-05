const fsPromises = require ('fs').promises;
const path = require('path');

// const fileOps = async() => {
//     try {
//         const data = await fs.Promises.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8');
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// fileOps();

const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'new.txt'), 'I am a Technical Trainer');
        console.log('Write Completed');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'new.txt'), '\n\nFull Stack Development');
        console.log('Append Completed');
        await fsPromises.rename(path.join(__dirname, 'files', 'new.txt'), path.join(__dirname, 'files', 'end.txt'));
        console.log('Rename Completed');
        await fsPromises.unlink(path.join(__dirname, 'files', 'start.txt'));
        console.log('Delete Completed');
    }

    catch (err) {
        console.log(err);
    }
}
fileOps();

//exit on uncaught errors

process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ${err}');
    process.exit(1);
});