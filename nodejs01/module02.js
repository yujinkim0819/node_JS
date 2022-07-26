// 모듈 3가지 사용방법
exports.aaa=function (a, b) {
    return a+b;
}

exports.bbb=function (a, b) {
    return a-b;
}

/*
module.exports.aaa=function (a, b) {
    return a+b;
}
module.exports.bbb=function (a, b) {
    return a-b;
}
*/

aaa = function (a, b) {
    return a+b;
}
bbb = function (a, b) {
    return a-b;
}

module.exports={aaa, bbb};
