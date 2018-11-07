var db = require('./db');
var fs = require('fs');

exports.changeName = function(u_id,name,callback){
    var sql = "update t_user SET name = ? where u_id = ?";
    db.query(sql, [name,u_id], callback);
};

exports.changePwd = function(u_id,pwd,callback){
    var sql = "update t_user SET password = ? where u_id = ?";
    db.query(sql, [pwd,u_id], callback);
};

exports.changePhone = function(u_id,phone,callback){
    var sql = "update t_user SET phone = ? where u_id = ?";
    db.query(sql, [phone,u_id], callback);
};

exports.changeSignature = function(u_id,signature,callback){
    var sql = "update t_user SET signature = ? where u_id = ?";
    db.query(sql, [signature,u_id], callback);
};


