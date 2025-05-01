const crypto = require('crypto');

const pass = '패스';
const pass2 = '패스2';
console.log('base64', crypto.createHash('SHA-512').update(pass).digest('base64'));
console.log('hex', crypto.createHash('SHA-512').update(pass).digest('hex'));
console.log('base64', crypto.createHash('SHA-512').update(pass2).digest('base64'));