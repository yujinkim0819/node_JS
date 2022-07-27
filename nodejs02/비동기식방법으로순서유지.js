// readFile의 콜백에 다음 readFile을 추가하면된다
const fs = require('fs'); //비동기식 파일 읽기
console.log('시작');

fs.readFile('./sam.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./sam.txt', (err,data) => {
    if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./sam.txt', (err,data) => {
        if(err){
            throw err;
        }
        console.log('3번', data.toString());
        console.log('끝');
        }); // 3번    
    }); // 2번
}); // 1번
// 콜백지옥(callback hell)