const pg = require('pg');

//数据库配置
//tcp://用户名：密码@localhost/数据库名
const conString = "tcp://postgres:000000@http://10.130.200.222/student"; 
const client =  new pg.Client(conString);

// 数据库配置
const config = {
    user: "postgres",
    database: "shop",
    password: "000000",
    port: 5432,

    // 扩展属性
    max:20, // 连接池最大连接数
    idleTimeoutMillis:3000, // 连接最大空闲时间 3s
}

const pool = new pg.Pool(config);


// 链接数据库
pool.connect(function(err, client, done) {
  if(err) {
    return console.error('数据库连接出错', err);
  }
  done(); // 释放连接（将其返回给连接池）
  return console.log("数据库链接成功！Yeah");
});



/*
*简单输出个 Hello World 
*@param1: 'SELECT $1::varchar AS OUT'
*@param2: ["Hello World"]
*@param3: function
*/
//查询语句 
// const searchSql = "select * from users";
// pool.query(searchSql, function(err, result) {
// 	if(err) {
// 	  return console.error('查询出错', err);
// 	}
// 	console.log(result); //result.rows[0].out    output: Hello World
// });


//插入语句 
// const insertSql = `insert into users(user_id, user_name, user_email, user_gender, user_birthday) 
// 															values($1::bigint, $2::character, $3::character, $4::boolean, $5::date)`;
// pool.query(insertSql, [10014, '10014', '10014@qq.com', '0', '2005-10-08'],function(err, result) {
// 	if(err) {
// 	  return console.error('查询出错', err);
// 	}
// 	console.log(result); //result.rows[0].out    output: Hello World
// });


const sqlQuery = (strSql, arr) => { 
    return new Promise((resolve, reject) => { 
        pool.query(strSql, arr, (err, results) => { 
            if (err) {
                reject(err);
            } else { 
                resolve(results)
            }
        })
    })
}

module.exports = sqlQuery