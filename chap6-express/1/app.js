const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log('모든 요청에 실행하고 싶어요');
    next();
}, (req, res, next) => {
    console.log('모든 요청에 실행하고 싶어요2');
    next();
},(req, res, next) => {
    try {
        console.log('에러~');
        // throw new Error('에러발생!');
        next();
    } catch (err) {
        // next()에 매개변수를 주는 경우 에러 미들웨어를 바로 다음에 실행함
        next(err);
    }
});

app.get('/', (req, res, next) => {
    // res.send('hello express');
    // res.sendFile(path.join(__dirname, 'index.html'));
    res.status(200).json({ hello: 'test' });
    console.log('hello gyus');
    // next('route')를 하게되면 같은 엔드포인트를 처리하는 다음 라우터를 바로 실행하고, 이 다음에 바로있는 함수는 실행안됨
    // 그럼 이걸 왜쓰느냐? -> if-else문에 포함시켜서 특정 조건에 따라 라우터를 분기해서 실행하도록 처리하는 목적
    if (true) {
        next('route');
    } else {
        next();
    }
}, (req, res) => {
    console.log('실행됨?');
});

app.get('/', (req, res) => {
    console.log('실행돼용');
});

app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

app.post('/', (req, res) => {
    res.send('hello express');
})

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    res.send('404가뜸');
})

// Error 미들웨어는 반드시 매개변수가 4개여야한다.
// 하나라도 빼먹으면 에러 미들웨어로 취급되지 않음
app.use((err, req, res, next) => {
    console.error(err);
    res.send('에러났는데 안알랴줌');
});

app.listen(3000, () => console.log('익스프레스 서버 실행'));