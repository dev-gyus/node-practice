const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const morgan = require('morgan');

try {
    fs.readdirSync('uploads');
} catch (err) {
    console.error('uploads 폴더가 없기 때문에 uploads 폴더를 생성합니다');
    fs.mkdirSync(path.join(__dirname, 'uploads'));
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, path.join(__dirname, 'uploads/'));
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
})

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('combined'));
app.use(express.json());

// client에서 <form>을 보낼때 기본적으로 컨텐트 타입이 x-www-form-urlencoded으로 오는데 이걸 파싱해주는 용도
// extended:true면 qs를 사용하고, false면 querystring을 사용하는데 일반적으로 qs가 더 강력해서 이를 쓴다고 함
// 만약 form에서 이미지 같은 파일을 보낼경우 urlencoded가 처리할 수 없기 때문에 multer같은 다른 모듈을 사용해야함
app.use(express.urlencoded({ extended: true }));


app.get('/upload', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));

});

// input file이 한개인 경우 사용
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('ok');
});

// input file multiple 인 경우 사용
app.post('/upload-multiple', upload.array('image'), (req, res) => {
    console.log(req.files);
    res.send('ok');
});

// input file이 여러개인 경우 사용
app.post('/upload-images', upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]), (req, res) => {
    console.log(req.files.image1);
    console.log(req.files.image2);
    console.log(req.files.image3);
    res.send('ok');
});

// image가 없긴한데, form의 enctype이 multipart/form-data거나 new FormData() 로 뭔가 폼을 제출한 경우 사용
app.post('/upload-none', upload.none(), (req, res) => {
    req.body.title;
    res.send('ok');
});


app.listen(3000, () => console.log('익스프레스 서버 실행'));