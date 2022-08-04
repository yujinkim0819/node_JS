// 모듈을 추출합니다
var fs = require('fs');
var ejs = require('ejs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

// 데이터베이스와 연결합니다
var client = mysql.createConnection({
    user: 'root',
    password: '1111',
    database: 'Company'
});

//서버를 실행합니다
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

//서버를 실행합니다
app.listen(4444, function () {
    console.log('server running at http://127.0.0.1:4444');
})

// 라우트를 수행합니다
app.get('/',function (request, response) {
    // 파일을 읽습니다
    fs.readFile('list.html','uft8',function (error, data) {
        // 데이터베이스 쿼리를 시작합니다
        client.query('select * from product', function (error, results) {
            // 응답합니다
            response.send(ejs.render(data,{
                data: results
            }));
        });
    });
});