// 모듈을 추출합니다
var http = require('http');
var jade = require('jade');
var fs = require('fs');

// 서버를 생성하고 실행합니다
http.createServer(function (request, response) {
    // JadePage.jade 파일을 읽습니다
    fs.readFile('JadePage_jade모듈.jade', 'utf-8', function (error, data) {
        // jade 모듈을 사용합니다
        var fn = jade.compile(data);
        
        // 출력합니다
        response.writeHead(200, {'Content-Type': 'text/html;charset-utf-8'});
        response.end(fn());
    });        
}).listen(4444, function() {
    console.log('Server Running at http://127.0.0.1:4444');
});