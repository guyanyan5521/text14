/**
 * Created by song on 2017/6/4.
 */
var db = require('./db');

exports.ByGrade = function(Grade,callback){
    var sql = "select * from t_order where grade = ?";
    db.query(sql, [Grade], callback);
};

exports.BySubject = function(Subject,callback){
    var sql = "select * from t_order where subject = ?";
    db.query(sql, [Subject], callback);
};

exports.ByAddress = function(Address,callback){
    var sql = "select * from t_order where address = ?";
    db.query(sql, [Address], callback);
};
//年级 科目 地点


//时间排序 价格排序