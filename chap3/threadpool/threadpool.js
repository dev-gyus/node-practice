// fs, crypto, zlib 등의 메소드는 백그라운드에서 동시에 실행됨
// 무한대로 동시에 실행되는 것은 아니고, 노드 버전에 따라, 설정에 따라 다를 수 있는데 기본은 4개로 되어있음
const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

// 총 8개의 100만번의 재연산을 하는 해싱 작업을 진행하는데
// 로그에 찍히는 처리 시간을 보면 4개씩 그룹이 지어져서 동작하는 것을 알 수 있음
// 동시에 더 많은 작업이 백그라운드에서 동시에 실행되도록 설정하려면 UV_THREADPOOL_SIZE={값} 으로 설정 할 수 있음

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});