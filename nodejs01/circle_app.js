// 절대값 원의 면적을 구하는 모듈을 만들기
// 모듈을 사용해서 값을 출력해보기
const c = require('./circle');
var area = c.circle(10);
console.log(area);

console.log(module.exports == exports);