const url = require('url');

const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3';

const params = new URLSearchParams(url.parse(urlString).search);

console.log(url.parse(urlString), params)

console.log(params.get('id'), params.get('tag'))