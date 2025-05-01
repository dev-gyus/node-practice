setInterval(() => {
    console.log('error 발생');
    try {
        throw new Error('에러 발생');
    }
    catch (err) {
        console.error(err);
    }
}, 1000);