// 운영체제에 따라 경로 구분자를 노드가 알아서 처리해주고 기타 경로와 관련된 편의기능을 제공해줌
const path = require('path');

const joinedPath = path.join(__dirname);
console.log(joinedPath);
