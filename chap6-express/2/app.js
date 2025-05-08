const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('combined'));
// static은 내부적으로 next()를 호출하지 않기 때문에 다른 작업들을 할 필요 없이 morgan만 실행해서 응답 바로보내도록 하는게 좋다
// 요청 경로 localhost:3000/gyus.html -> 실제 경로 2/public-2341/gyus.html 매칭 가능
// 이렇게 하면 서버의 파일 구조에 대해 좀 더 보안성을 챙길 수 있다 (public 만 쓰는건 너무 유명해서 다른 값 추가하는게 좋음)
app.use('/', express.static(path.join(__dirname, 'public-2341')));

app.use(cookieParser());
// express에 포함된 body-parser 기능
// app.get('/', (req, res, next) => {
//      // client에서 JSON.stringify({name:'gyus'}) 로 데이터를 보냈다면
//      // 위 body-parser 기능을 통해서 바로 아래와 같이 조회가 가능하다
//      req.body.name
//})
app.use(express.json());

// client에서 <form>을 보낼때 기본적으로 컨텐트 타입이 x-www-form-urlencoded으로 오는데 이걸 파싱해주는 용도
// extended:true면 qs를 사용하고, false면 querystring을 사용하는데 일반적으로 qs가 더 강력해서 이를 쓴다고 함
// 만약 form에서 이미지 같은 파일을 보낼경우 urlencoded가 처리할 수 없기 때문에 multer같은 다른 모듈을 사용해야함
app.use(express.urlencoded({ extended: true }));

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
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.status(200).json({ hello: 'test' });
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
    req.cookies // 쿠키 파싱을 알아서 해서 넣어줌 {'cookieName':Value}
    req.signedCookies // 쿠키를 만들때 서명을 한 경우 그 서명을 한 쿠키를 조회함
    // 'Set-Cookie':`test=${encodeURIComponent('value')}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
    res.cookie('test', encodeUriComponent('value'), {
        expires: new Date(),
        httpOnly: true,
        path: '/',
    });
    res.clearCookie('name', encodeURIComponent('value'), {
        httpOnly: true,
        path: '/',
    })
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