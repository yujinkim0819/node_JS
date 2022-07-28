var express = require('express');
var http = require('http');
// 익스프렛 시작
var app = express();
app.set('port', process.env.port||4444);

// 미들웨어 사용
app.use(function (req,res,next) {
    console.log('첫번째 미들웨어\n');
    req.user = 'hong';
    req.next(); // 두번째 가져온다
    /*
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end('<h1>서버에서 응답한 결과:' + req.user +'</h1>');
    */
});

// 두번째 미들웨어 사용
app.use(function (req,res,next) {
    console('두번째 미들웨어 _send()\n');
    // json 형태로 정의
    var student = {name:'홍길동', tel:'010-1223-4567'};
    res.send(student);
    var studentStr = JSON.stringify(student);
    res.send(student);
});

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('익스프레스 웹서버 실행 : ' + app.get('port'));
});