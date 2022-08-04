//모듈을 추출합니다
var mysql = require('mysql');

//데이터베이스와 연경합니다
var client = mysql.createConnection({
    user: 'root',
    password: '1111',
    database: 'company'
});

//데이터베이스 쿼리를 실행합니다
client.query('SELECT * FROM product', function (error, result, fields) {
    if(error){
        console.log('쿼리 문장에 오류가 있습니다');
    } else {
        console.log(result);
    }
});
