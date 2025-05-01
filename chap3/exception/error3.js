const fs = require('fs').promises;

// 자체적으로 error 핸들링이 되는 경우는 try-catch 안감싸도 됨
setInterval(() => {
    fs.unlink('./abcdefg.js').catch(err => console.error(err));
}, 1000);