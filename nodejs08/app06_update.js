var fs=require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('express');

// express 서버 실행
var app=express();
app.set('port', process.env.PORT || 4444);
app.use(bodyParser.urlencoded({
    extended:false
}));
// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
    user: 'root',
    password: '1111',
    database:'company'
  });
////////데이터 표시
app.get('/', function (req, res) {
    fs.readFile('list.html', 'utf8', function (err, data) {
        client.query('SELECT * FROM products', function (err, results) {
            res.send(ejs.render(data, {
                data: results
            }));
        });
    });
});
////////데이터 삭제
app.get('/delete/:id',function(req,res){
    client.query('delete from products where id=?',[req.params.id],function(){
        res.redirect('/');
    });
});
//// 데이터 추가
app.get('/insert',function(req,res){
    fs.readFile('insert.html','utf8',function(err,data){
        res.send(data);
    });
});

app.post('/insert',function(req,res){
    var body = req.body;
    client.query('insert into products (name,modelnumber,series) value (?,?,?)',
    [body.name,body.modelnumber,body.series],function(){
        res.redirect('/');
    });
});

//////////////// 데이터 수정  get
app.get('/update/:id',function(req,res){
    fs.readFile('update.html','utf8',function(err,data){
        client.query('select * from products where id=?',[
            req.params.id
        ],function(err,result){
            res.send(ejs.render(data,{
                data:result[0]
            }));
        })
    });
});
app.post('/update/:id',function(req,res){
    var body = req.body;
    client.query('update products set name=?,modelnumber=?,series=? where id=?',[
        body.name,body.modelnumber,body.series,req.params.id
    ],function (){
        res.redirect('/');
    });
});

 // Express 서버 시작
 var server=http.createServer(app).listen(app.get('port'), function(){
   console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'));
 });


 