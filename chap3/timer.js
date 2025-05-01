const hello = () => console.log('1초마다 실행');
const interval = setInterval(hello, 1000);
const timeout = setTimeout(() => console.log('2초 후 실행'), 2000);
const immediate = setImmediate(() => console.log('백그라운드에서 즉시 실행 => timeout 0과 동일'));
setTimeout(() => {
    console.log('5초후 interval 정지');
    clearInterval(interval);
}, 5000);

clearTimeout(timeout); // timeout 실행 x
clearImmediate(immediate); // immediate 실행 안됨


function sleep() {
    for (let i = 0; i < 100000; i++){}
}