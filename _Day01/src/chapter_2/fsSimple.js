const fs = require("fs");
const path = require("path");
const { readFile, writeFile } = require("fs/promises");
let pathFile1 = path.join(__dirname, "files/fsSimple/file1.txt")
let pathFile2 = path.join(__dirname, "files/fsSimple/file2.txt")

const readAndWriteCallbackHell = () => {
    fs.readFile(pathFile1, {encoding: 'utf-8'}, (err, data) => {
        if(!err) {
            fs.writeFile(pathFile2, data, () => console.log("Callback - SUCCESSED"))
        } else {
            console.log(err);
        }
    })
};

const readAndWritePromises = () => {
    readFile(pathFile1, {encoding: 'utf-8'})
    .then(data => writeFile(pathFile2, data))
    .then(console.log("Promises - SUCCESSED"))
};

const readAndWriteAsyncAwait = async () => {
    let data = await readFile(pathFile1, {encoding: 'utf-8'});
    await writeFile(pathFile2, data)
    console.log("Async/Await - SUCCESSED");
};

readAndWriteCallbackHell()