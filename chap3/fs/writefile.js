const fs = require('fs').promises;
const path = require('path');

const filePathName = path.join(__dirname, './writeme.txt');

fs.writeFile(filePathName, '글이 입력됩니다.2')
    .then(() => {
        return fs.readFile(filePathName);
    })
    .then(data => {
        console.log(data);
        console.log(data.toString('utf-8'));
    })
    .catch(err => {
        console.error(err);
    })