const http = require('http');

const server = http.createServer((req, res) => {
    // 사파리같은 브라우저는 아래 write()내의 문자열이 String인지 HTML인지 구분을 못해서 직접 HTML임을 명시해줘야함
    // 한글 못 알아먹을 경우 대비해서 Charset utf-8로 설정
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<h1>Hello Server!</h1>');
    res.end('<p>The End</p>');
})
    .listen(8080);

    server.on('listening', () => {
        console.log('8080번 포트에서 서버 대기 중입니다.');
    });
    server.on('error', (error) => {
        console.error(error);
    });