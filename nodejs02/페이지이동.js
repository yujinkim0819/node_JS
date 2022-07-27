// 모듈을 추출합니다
var http = require('http');

// 웹 서버를 생성하고 실행합니다
http.createServer(function (request, response) {
    response.writeHead(302, {'Location': 'https://www.e-mirim.hs.kr/main.do'});
    response.end();
}).listen(4444, function () {
    console.log('4444번 포트에서 서버 대기 중입니다!');
});