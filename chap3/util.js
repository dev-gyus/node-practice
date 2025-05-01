const crypto = require('crypto');
const util = require('util');


const deprecated = util.deprecate(() => {console.log('deprecated 함수 호출')}, `deprecated 함수는 이제 더이상 사용하지 마세요`);
deprecated();

// randomBytes 함수는 콜백 함수
// util.promisify는 (error, data) 형태로 매개변수를 받는 콜백 함수를 프로미스화 시켜줌
const randomBytes = util.promisify(crypto.randomBytes);
randomBytes(64)
    .then(buf => console.log(buf.toString('base64')))
    .catch(err => console.error(err));