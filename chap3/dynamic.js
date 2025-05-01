// ECMAScript에서는 import가 항상 최상위에 위치해 있어야 하기 때문에 아래 코드는 실행될 수 없음
// CommonJS에서는 if문 안에 require로 모듈 가져올 수 있음

const a = false;

if (a) {
    require('./func');
}
console.log('성공');