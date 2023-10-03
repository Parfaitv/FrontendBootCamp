const fs = require("fs");
const path = require('path');
const folderPath = path.join(__dirname, '/files/fsHard/');

const getTotalSize = async (files) => {
    let totalSize = 0;
    for (const file of files) {
        const filePath = `${folderPath}/${file}`;
        const stats = await fs.promises.stat(filePath);
        if (stats.isFile()) totalSize += stats.size;
    };
    return totalSize;
};

const wait = (ms) => {
    return new Promise(res => setTimeout(res, ms))
}

const updateProgressBar = (currentSize, totalSize) => {
    let percent = (currentSize / totalSize) * 100;
    let j = (20 * percent) / 100;
    const dots = "=".repeat(j.toFixed(0))
    const left = 20 - j
    const empty = "*".repeat(left)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`\r[${dots}${empty}] = ${percent.toFixed(2)}%`);
}

const main = async (totalSize, files) => {
    let currentSize = 0;
    for (const file of files) {
        const filePath = `${folderPath}/${file}`;
        const stats = fs.statSync(filePath);
        currentSize += stats.size;
        await wait(1000);
        updateProgressBar(currentSize, totalSize);
    }
};

const progressbar = async () => {
    const files = await fs.promises.readdir(folderPath);
    const totalSize = await getTotalSize(files);
    main(totalSize, files);
}

progressbar()


