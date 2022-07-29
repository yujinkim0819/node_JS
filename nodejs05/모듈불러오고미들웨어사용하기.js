var express = require('express');
var http = require('http');
var static = require('serve-static'); // 경로 static를 위한 미들웨어
var path = require('path');
var body=require('body-parser');

//세션추가
var expressSession = require('express-session');
//익스프레스 시작 
var app=express();
//세션사용하기
app.use(expressSession({
    secret:'mellong',
    resave:true,
    saveUninitialized:true
}));
// 라우터 사용, 라우터를 사용할 때는 use 미들웨어를 사용 안 함
var router = express.Router();
app.use('/',router);

// 1. 로그인 라우터 / 세션추가
router.route('/process/login').post(function (req, res) {
    console.log('/process.login 라우팅 함수에서 발음');
    var paramId = req.query.id||req.body.id;
    var paramPw = req.query.paramPw||req.body.password;
    console.log('요청파라미터 : ' + paramId + ' : ' + paramPw);
    if(req.session.user){
        console.log('이미로그인 상태');
        res.redirect('/image/score.html');
    } else {
        // 세션 저장
        req.session.user = {
            id:paramId,
            name: '홍길동',
            // authorized:true
        }
    }
    res.writeHead(200,{'Content-Type':'text/html;charser=utf-8'});
    res.write('<h1> 로그인 성공 </h1>');
    res.write('<h1>id : '+ paramId +'</div>');
    res.write('<h6>pw : '+ paramPw +'</div>');
    res.write('<a href="/press/score"> 성적확인하기 </a>');
    res.end();
});
// 2. 로그아웃 라이터 - 세션 삭제
router.route('/process/logout').get(function (req, res) {
    console.log('/process/logout 라우팅 함수에서 호출됨');
    if(req.session.user) //로그인상태
    {
        console.log('로그아웃합니다');
        req.session.destroy(function (error) {
            if(err){
                throw err;
            }
            console.log('세션을 삭제하고 로그아웃되었습니다');
            res.redirect('/image/login2.html');
        })
    }
    else {
        console.log('아직 로그인 되어 있지 않습니다');
        res.redirect('/image/login2.html');
    }
})

// 3. 점수정보 라우터 사용, 라우터를 사용할 때는 use 미들웨어를 사용안함
router.route('/process/score/').get(function (req, res) {
    console.log('/process/score/ 라우팅 함수 호출됨');
    if(req.session.user){
        res.redirect('/image/score.html');
    } else {
        res.redirect('/media/login2.html');
    }
});


//
router.route('/process/photo').post(upload.array('photo',1), function (req, res) {
    console.log('/process/photo 호출됨');
    var files = req.files;

    console.log("====================업로드 된  파일==========================");
    if(files.length > 0){
        console.dir(files[0]);
    } else {
        console.log("파일이 없습니다");
    }
})
