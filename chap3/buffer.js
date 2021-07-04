const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
console.log(Buffer.concat(array).toString()); // 위의 버퍼 합치고 문자열로 변환


// Buffer 내부에 아무 데이터도 없는데 메모리만 할당해두는것
console.log(Buffer.alloc(5));