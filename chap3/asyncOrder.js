const fs = require('fs');

// Async로 순서 맞춰서 실행하는법
// Callback Hell
fs.readFile('./readme.txt', (err, data) => {
    if (err){

    }
    console.log('1번', data.toString());
    fs.readFile('./readme.txt', (err, data) => {
        if (err){
    
        }
        console.log('2번', data.toString());
        fs.readFile('./readme.txt', (err, data) => {
            if (err){
        
            }
            console.log('3번', data.toString());
            fs.readFile('./readme.txt', (err, data) => {
                if (err){
            
                }
                console.log('4번', data.toString());
            });
        });
    });
    
});