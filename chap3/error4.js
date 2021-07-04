// Global Exception처리
// 기본적으로 Promise와 같이 error발생시 별도의 error객체를 인자로 넘겨주는 기능의 경우 Exception자체가 Thread를 뻗게 하진 않음
// 반대로 말하면 error객체 인자로 안넘겨주는 기능의 경우 try, catch로 감싸서 예외처리해줘야된다. 특히 async await
// catch 내부에는 로그를 확인하기 위한 코드만 적어두는게 좋다.
// catch 내부에 장애 복구에 관련된코드를 넣어둘경우 동작을 보장하지 않는다고 노드 공식문서에 적혀있다.
process.on('uncaughtException', (err) => {
    console.error(err);
});

setInterval(() => {
    throw new Error('서버를 고장내주마');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);