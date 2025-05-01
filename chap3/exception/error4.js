// 글로벌 예외 핸들링 함수를 등록
// 혹시 모를 예외 발생시 스레드 fail이 발생하지 않도록 최후의 보루라고 생각하고 쓰는게 좋다
// 콜백 함수의 동작이 보장되지 않기 때문에 fail에 대한 복구 작업에 쓰는 것은 부적절
process.on('uncaughtException', (err) => {
    console.error('예기치 못한 예외', err);
});

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);