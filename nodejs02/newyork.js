const http = require('http');
const fs = require('fs');
http.createServer(function (req,res) {
    try{
    fs.readFile('./newyork.html', function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    });
}
catch(err){
    console.log(err);
    res.writeHead(500,{'Content-Type':'text/plain;charset=utf-8'});
    res.end(err);
}
}).listen(4444, () => {
    console.log('4444번 포트에서 서버 대기 중입니다!');
});