const fs = require('fs');

setInterval(() => {
    // unlink() = 파일삭제
    fs.unlink('./sam1.txt', (err) => {
        if(err){
            console.log(err);
        }
    });
}, 500);

