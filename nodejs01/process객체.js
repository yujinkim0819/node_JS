// process 객체
// 시간 측정을 시작합니다
console.time('mirim');
var output = 0;
for (var i = 1; i < 100; i++) {
    output += i;  
}

process.exit(); // 프로그램 종료
console.log('Result : ', output);
// 시간 측정을 종료합니다
console.timeEnd('mirim');