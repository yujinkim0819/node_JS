process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('무한출력!');
}, 1000);

setInterval(() => {
    console.log('실행됩니다');
}, 2000);
