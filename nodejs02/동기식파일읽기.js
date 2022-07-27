// readFile 대신 readFileSync라는 메서드를 사용한다
// 치명적인 문제점은 이전 작업이 오나료되어야만 다음 작업을 진행할 수 있다
// 읽고 출력하고 읽고
const fs = require('fs')
console.log('시작');

let data = fs.readFileSync('./sam.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./sam.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./sam.txt');
console.log('3번', data.toString());

console.log('끝');
