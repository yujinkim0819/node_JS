const path = require('path');

const string = __filename; // 파일이름 = app01.js  ?
console.log('파일명 : ', __filename);
console.log('분리기호 : ', path.sep);
console.log('환경변수 구분자 : ', path.delimiter);

console.log('---------------------------------------------');
console.log('폴더명 : ', path.dirname(string));
console.log('확장자명 : ', path.extname(string));
console.log('전체파일명 : ', path.basename(string));


console.log('---------------------------------------------');
console.log('절대경로(C:\\) : ', path.isAbsolute('C:\\')); // C:\\ 가 절대경로냐?
console.log('path.isAbsolute : ', path.isAbsolute('D:\\js_work')); // D:\\js_work <- 작업 경로 작성


console.log('---------------------------------------------');
console.log('상대경로 : ', path.relative('d:/js_work', 'd:\\')); // d:/js_work : 우리가 작업하는 경로에서 d:\\로 가려면 어떻게 해야 되는가
console.log('상대경로 : ', path.relative('d:/js_work', 'd:\\js_work\\media'));
