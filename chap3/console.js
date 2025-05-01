const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        }
    }
};
console.time('전체 시간');
console.log('평범한 로그');
console.error('에러 로그');
console.table([{ name: '규스', age: 32 }, { name: '유스', age: 30 }]);
console.dir(obj, { name: '규스', age: 32 });

console.time('시간 측정');
for (let i = 0; i < 100000; i++) { }
console.timeEnd('시간 측정');

function b() {
    console.trace('에러 위치 추적');
}
function a() {
    b();
}
a();

console.time('전체 시간')
