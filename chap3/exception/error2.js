const fs = require('fs');

// 자체적으로 error 핸들링이 되는 경우는 try-catch 안감싸도 됨
setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        // console.error 찍는 이유는 error가 발생했다고 자동으로 콘솔에 에러를 찍어주진 않기 때문
        if (err) {
            console.error(err);
        }
    })
}, 1000);