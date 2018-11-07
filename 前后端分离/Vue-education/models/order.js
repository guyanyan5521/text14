var db = require('./db');

exports.addOrder = function(title,subject,grade,content,time,address,money,identity,callback){
    var sql = "insert into t_order(title,subject,grade,content,time,address,money,identity) values(?,?,?,?,?,?,?,?)";
    db.query(sql, [title,subject,grade,content,time,address,money,identity], callback);
};
exports.deleteOrder = function(order_id,callback){
    var sql = "delete from t_order where order_id = ?";
    db.query(sql, [order_id], callback);
};
