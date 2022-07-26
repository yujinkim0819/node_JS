console.log('hello world');
console.log(10+10);

// 걸리는 시간 측정
console.time('전체시간');
console.log('hello');
var sum = 0;
for(i=0; i<10000; i++)
{
    sum += i;
}
console.timeEnd('전체시간'); // console.time() 가 리터널이 같아야 한다