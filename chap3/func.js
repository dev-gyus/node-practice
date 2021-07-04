// const value = require('./var');
const {odd, even} = require('./var');

// console.log(value);

function checkOddOrEven(number){
    if(number % 2 ){
        return odd;
    }else{
        return even;
    }
}

// 다른 module에서 선언한 변수도 같이 module로 넘길 수 있다
module.exports = {
    checkOddOrEven,
    odd,
    even,
}