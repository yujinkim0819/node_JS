const {odd,even} = require('./module01');
function check(num) {
    if(num%2){ // 0이면 수행 안 함
        return odd;
    }
    return even;
}
console.log(check(30));