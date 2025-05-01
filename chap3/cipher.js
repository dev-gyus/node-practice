const crypto = require('crypto');

const cipher = crypto.createCipheriv('aes-256-cbc', 'abcdefghijklmnopqrstuvwxyz123456', '1234567890123456');
let result = cipher.update('암호화문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);


const decipher = crypto.createDecipheriv('aes-256-cbc', 'abcdefghijklmnopqrstuvwxyz123456', '1234567890123456');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log(result2);