import { odd, even } from './var.mjs';  // named exports (모듈에서 정의한 외부 노출 객체 명을 통해 할당이 가능)
import checkNumber from './func.mjs';   // default exports (모듈을 가져오는 입장에서 다른 변수명으로 설정해서 가져올 수 있음)

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));