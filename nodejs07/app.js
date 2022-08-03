// Express 기본 모듈 설치
var express = require('express');
var http = require('http');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var static = require('serve-static');
var errorHandler = require('errorhandler');

//에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT||4444);
// body-parse
app.use('/public',static(path.join(__dirname, 'public')));

// 라우팅 함수 등록
var router = express.Router();

// 로그인 라우팅
router.route('/process/login').post(function (req, res) {
    console.log('/process/login 호출됨');

    // 요청 파라미터 확인
    var paramId = req.body.id||req.query.id;
    var paramPassword = req.body.password || req.query.password;
    console.log('요청 파라미터 : ' + paramId + ', ' + paramPassword);

    // authUser 함수 호출하여 사용자 인증
    if(database){
        authUser(database, paramId, paramPassword, function (err, docs) {
            if(err){ throw err; }

            // 조회된 레코드가 있으면 성공 응답 전송
            if(docs){
                console.dir(docs);

                // 조회 결과에서 사용자 이름 확인
                var username = docs[0].name;
                res.writeHead
            }
        })
    }
})

res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
res.write('<h2>데이터베이스 연결 실패</h2>');
res.write('<div><p>데이터베이스에 연결하지 못했습니다.</p></div>');
res.end();