// 운영체제에 따른 경로 구분자 (Window: \ or POSIX(Mac or Linux): /) 를 알아서 구별해줌
const path = require('path');

// 절대경로가 있어도 무시하고 현재 파일에 대한 상대경로를 참조함
path.join(__dirname, '..', 'var.js');
// \chap3\var.js    <- window
// /chap3/var.js    <- mac/linux

// ..와같은 상위폴더 참조 구분자 무시하고 절대경로로 참조함
path.resolve(__dirname, '..', '/var.js');
// C:\~~
// ~/~~~