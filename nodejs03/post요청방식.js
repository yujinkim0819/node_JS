// 모듈을 추출합니다
var http = require('http');
var fs = require('fs');

// 모듈을 사용합니다
http.createServer(function (request, response) {
    if(request.method == 'GET'){
        // GET요청
        fs.readFile('test.html', function (error, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        })
    } else if (request.method == 'POST'){
        // POST 요청
        request.on('data', function (data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end('<h1>' + data + '</h1>');
        });
    }
}).listen(4444, function() {
    console.log('4444번 포트에서 서버 대기 중입니다!');
});