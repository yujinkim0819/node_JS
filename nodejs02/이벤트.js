const EventEmitter = require('events');
const myEvent = new EventEmitter();
myEvent.on('event1', ()=>{
    console.log('이벤트1');
})
myEvent.addListener('event2', ()=>{
    console.log('이벤트2');
})
myEvent.on('event2', ()=>{
    console.log('이벤트2 추가');
})
myEvent.on('event3', ()=>{ // 한 번만 수정
    console.log('이벤트3');
})
myEvent.on('event4', ()=>{ 
    console.log('이벤트4');
})
myEvent.removeAllListeners('event4');

const listener = () => {
    console.log('이벤트5');
}
myEvent.on('event5', listener);
myEvent.emit('event5');

myEvent.emit('event1'); //이벤트호출
myEvent.emit('event2');
myEvent.emit('event3'); //once 사용하여 한 번만 사용
myEvent.emit('event3'); //once 사용하여 한 번만 사용
myEvent.emit('event4'); //지웠기 때문에 실행안됨
console.log(myEvent.listenerCount('event1'));
console.log(myEvent.listenerCount('event2')); //2개 연결
