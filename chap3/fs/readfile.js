const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'readme.txt'), (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString('utf-8'));
});