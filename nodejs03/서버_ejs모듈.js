// 모듈을 추출합니다
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

// 서버를 생성하고 실행합니다
http.createServer(function (request, response) {
    fs.readFile('ejsPage.ejs', 'utf-8', function (error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(ejs.render(data));
    });        
}).listen(4444, function() {
    console.log('Server Running at http://127.0.0.1:4444');
});