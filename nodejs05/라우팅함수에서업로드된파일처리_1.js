

var originalname = '';
var filename = '';
var mimetype='';
var size=0;
if(Array.isArray(files)){
    for (var i = 0; i < files.length; i++) {
        originalname = files[i].originalname;
        filename = files[i].filename;
        mimetype = files[i].mimetype;
        size = files[i].size;
    }
}
res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
res.write("<h1> 파일 업로드 성공 </h1>");
res.write("<p> 원본 파일 : " + originalname + "<p>");
res.write("<p> 저장 파일 : " + filename + "<p>");
res.end();
//}
//)