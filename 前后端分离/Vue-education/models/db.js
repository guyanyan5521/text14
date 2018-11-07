var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'jiajiao',
  port :3306
});

exports.query = function (sql, data, callback) {
  //console.log(data);
  pool.getConnection(function (err, conn) {
    if (err) {
      console.log('数据库连接异常');
    } else {
      if(typeof data == 'function'){
        callback = data;
        data = null;
      }
      conn.query(sql, data, function(err,vals,fields){
        if(err){
          console.log('执行sql语句错误');
        }
        //释放连接
        conn.release();
        //事件驱动回调
        callback(err,vals,fields);
      });
    }
  });
};