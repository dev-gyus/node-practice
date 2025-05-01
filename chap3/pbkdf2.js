const crypto = require('crypto');

const pass = '패스';

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt = ', salt);
    crypto.pbkdf2(pass, salt, 100000, 64, 'sha512', (err, key) => {
        console.log('pass = ', key.toString('base64'));
    })
})