const fs = require('fs')
fs.readFile('./sam.txt',(err,data) => {
    if(err){
        throw err;
    }
    // console.log(data);
    console.log(data.toString()); // 문자열로 변환한다
})