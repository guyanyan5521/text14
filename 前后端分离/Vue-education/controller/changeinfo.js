var changeInfo = require('../models/user_info');
var user = require('../models/user_operation');

exports.get_info = function(req,res){
    var username = req.query.username;
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    user.getByName(username,function(err,result){
        var userinfo = JSON.stringify(result[0]);
        res.send(userinfo);
    });
};



exports.update_name = function(req,res){
    var name = req.query.name;
    var u_id = req.query.u_id;
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    changeInfo.changeName(u_id,name,function(err,result){
        if(result){
            res.send('success');
        }else{
            res.send('fail');
        }
    });
};
exports.update_pwd = function(req,res){
    var pwd = req.query.pwd;
    var u_id = req.query.u_id;
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    changeInfo.changePwd(u_id,pwd,function(err,result){
        if(result){
            res.send('success');
        }else{
            res.send('fail');
        }
    });
};
exports.update_phone = function(req,res){
    var phone = req.query.phone;
    var u_id = req.query.u_id;
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    changeInfo.changePhone(u_id,phone,function(err,result){
        if(result){
            res.send('success');
        }else{
            res.send('fail');
        }
    });
};

exports.update_signature = function(req,res){
    var signature = req.query.signature;
    var u_id = req.query.u_id;
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    changeInfo.changeSignature(u_id,signature,function(err,result){
        if(result){
            res.send('success');
        }else{
            res.send('fail');
        }
    });
};

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                //头像 姓名 个性签名 密码 手机 背景图片