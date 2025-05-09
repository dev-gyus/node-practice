const express = require('express');
const morgan = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const redirectRouter = require('./routes/redirect');
const pugRouter = require('./routes/pug');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router 분리
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/redirect', redirectRouter);
app.use('/pug', pugRouter);



// 요청한 엔드포인트를 처리할 라우터가 없는 경우를 대비해 404 응답 처리 목적 미들 웨어
app.use((req, res, next) => {
    res.status(404).send('Not Found');
})
// 그 외 에러 처리 미들 웨어
app.use((err, req, res, next) => {
    console.error('에러 처리 미들 웨어', e);
    res.status(500).send(err.message);
});



app.listen(3000, () => console.log('익스프레스 서버 실행'));