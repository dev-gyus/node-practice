const url = require('url');
const myURL = new URL('https://naver.com');
console.log(`myUrl = ${myURL}`);
console.log(`url = ${url.format(myURL)}`);
