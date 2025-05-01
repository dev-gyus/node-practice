// CommonJS에서는 if문 안에 require로 모듈 가져올 수 있음
// ECMAScript에서는 import가 항상 최상위에 위치해 있어야 하기 때문에 아래 코드는 실행될 수 없음
// 조건절에 따라서 dynamic import를 실행하려면 import 함수를 쓰면 됨

const a = true;

if (a) {
    // import './func.mjs'; // 실패 
    // const m1 = await import('./func.mjs');
    const m2 = await import('./func.mjs');
    console.log(m2); // func.mjs에서는 exports default로 checkOddOrEven을 정의했기 때문에 exports.default에 해당 함수가 정의되어 있음
}
console.log('성공');