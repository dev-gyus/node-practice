const fs = require('fs');
const file = fs.createWriteStream('./Big.txt');

for (let i = 0; i <= 10_000_00; i++){
    file.write('안녕하세요. 엄청나게 큰 파일을 만들 것입니다. 각오 단단히 하세요');
}

file.end();