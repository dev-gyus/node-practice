// 구조 분해 할당 가능
const {odd,even} = require('./var');
const checkNumber = require('./func');

function checkStringOrNumber(value){
    if(typeof value === 'string' ){
        return 'string';
    }else{
        return 'number';
    }
}

console.log(checkNumber(10));
console.log(checkStringOrNumber);