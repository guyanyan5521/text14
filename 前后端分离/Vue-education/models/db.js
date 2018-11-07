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
      console.log('���ݿ������쳣');
    } else {
      if(typeof data == 'function'){
        callback = data;
        data = null;
      }
      conn.query(sql, data, function(err,vals,fields){
        if(err){
          console.log('ִ��sql������');
        }
        //�ͷ�����
        conn.release();
        //�¼������ص�
        callback(err,vals,fields);
      });
    }
  });
};