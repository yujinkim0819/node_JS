// querystring 모듈 = search 부분을 사용하기 쉽게 변환해서 만들어준다
const url = require('url');
const querystring = require('querystring');
const parseUrl = url.parse('https://search.shopping.naver.com/book/home');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse()', query);
console.log('querystring.stringify()', querystring.stringify(query));