/**
 * Created by song on 2017/5/31.
 */
var db = require('./db');

exports.getByNameAndPwd = function(username, password, callback){
    var sql = "select * from t_user where username = ? and password =?";
    db.query(sql, [username,password], callback);
};

exports.getByName = function(uname,callback){
    var sql = "select * from t_user where username = ?";
    db.query(sql, [uname], callback);
};
exports.doreg = function(uname,pwd,identity,callback){
    var sql = "insert into t_user(username,password,identity) values(?,?,?)";
    db.query(sql, [uname,pwd,identity], callback);
    //”√ªß√˚£¨√‹¬Î£¨teacher or student
};


