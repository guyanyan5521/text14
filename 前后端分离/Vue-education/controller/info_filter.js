/**
 * Created by song on 2017/6/4.
 */

var filter = require('../models/filter');

exports.filterByGrade = function(req,res){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    filter.ByGrade = function(err,result){
        console.log(result);
        res.send(result);
    }
};
exports.filterBySubject = function(req,res){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    filter.BySubject = function(err,result){
        console.log(result);
        res.send(result);
    }
};
exports.filterByAddress = function(req,res){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    filter.ByAddress = function(err,result){
        console.log(result);
        res.send(result);
    }
};