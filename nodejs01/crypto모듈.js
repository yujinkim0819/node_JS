const crypto = require('crypto');

console.log('base54 :', crypto.createHash('sha512').update('123').digest('base64'));
console.log('md5 :', crypto.createHash('md5').update('123').digest('base64'));
console.log('hex : ', crypto.createHash('sha512').update('123').digest('hex'));