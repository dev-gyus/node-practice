const varObj = require('./var');
const { odd, even } = require('./var');

console.log(`odd = ${varObj.odd} / even = ${varObj.even}`);
console.log(`odd = ${odd} / even = ${even}`); 

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    }
    return even;
}
// module.exports = { checkOddOrEven };
exports.checkOddOrEven = checkOddOrEven ;