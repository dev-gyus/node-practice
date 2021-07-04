// node 내장객체에 대한 내용은 노드 공식사이트의 API Docs 참고하면 된다
// os정보에 대한 내용은 module.exports 안해도 node에서 미리 만들어 둔 os module을 사용 할 수 있음
const os = require('os');

console.log(os.cpus());