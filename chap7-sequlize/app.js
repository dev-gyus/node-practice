const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const { sequelize } = require('./models');

const indexRouter = require('./router/index');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});
sequelize.sync({ force: false })
    .then(() => {
        console.log('database 연결 성공');
    }).catch((err) => {
        console.error(err);
    });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

// 404 처리 미들웨어
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})

app.listen(PORT, () => { console.log('서버 이니셜라이즈 완료') });