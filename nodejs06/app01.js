//모듈
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
// express 서버실행
var app = express();
app.set('port', process.env.PORT||4444);
app.use(bodyParser.urlencoded({
    extended:false
}));
//모듈을 추출합니다
var mysql = require('mysql');
//데이터베이스와 연경합니다
var client = mysql.createConnection({
    user: 'root',
    password: '1111',
    database: 'company'
});

//서버를 실행합니다
app.listen(4444, function () {
    console.log('server running at http://127.0.0.1:4444');
})
//데이터 삭제
app.get('/delete/:id', function (req, res) {
    client.query('delete from produts where id=?', [req.params.id],
    function () {
        res.redirect('/')
    })
})
// 라우트를 수행합니다
app.get('/',function (req, res) {
    // 파일을 읽습니다
    fs.readFile('list.html','uft8',function (err,data) {
        client.query('select * from product', function (error, results) {
            res.send(ejs.render(data,{
                data : results
            }));
        });
    });
});
//데이터베이스 쿼리를 실행합니다
client.query('SELECT * FROM product', function (error, result, fields) {
    if(error){
        console.log('쿼리 문장에 오류가 있습니다');
    } else {
        console.log(result);
    }
});

var server = http.createServer(app).listen(app.get('port'),function (error, result, fields) {
    if(error){
        console.l
    }    
})