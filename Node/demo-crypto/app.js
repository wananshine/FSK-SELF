const crypto = require('crypto');

const password = 'abc123';


//hash加密
//const hash = crypto.createHash('sha1').update(password).digest('hex')

//md5加密
const MD5 = crypto.createHash('md5').update(password).digest('hex')


console.log(MD5)