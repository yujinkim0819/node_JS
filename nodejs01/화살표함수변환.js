/*
const fs = require('fs'); // 파일 읽기
fs.readFile('./app01.js', function (err, data) {
    if(err){
        throw err;
    }
    console.log(data.toString()); // 파일 내용을 읽는다
})
*/

// 화살표함수
const fs = require('fs'); 
fs.readFile('./app01.js', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data.toString()); 
})