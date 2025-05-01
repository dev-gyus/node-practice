console.log(this); // 글로벌 아님 (anonymous가 아니고 module.export가 전역 컨텍스트가 됨)
console.log(this === module.exports)

function a() {
    console.log(this === global); // 글로벌임
}

a();