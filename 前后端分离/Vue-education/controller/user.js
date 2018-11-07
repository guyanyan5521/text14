var user = require('../models/user_operation');

exports.checkLogin = function(req,res){
	var username = req.body.username;
	var password = req.body.password;

	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	//res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	//res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	user.getByNameAndPwd(username,password,function(err,result){
		console.log(result);
		if(result.length > 0){
			res.send('success');
			req.session = result[0].u_id;
		}else{
			res.send('fail');
		}
	});
};
exports.checkName = function(req,res){
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	var uname = req.body.username;
	user.getByName(uname,function(err,result){
		if(result[0] == undefined){
			res.send('success');
		}else{
			res.send('fail');
		}
	});
};
exports.regist = function(req,res){
	var uname = req.body.username;
	var pwd = req.body.password;
	var identity = req.body.user_identity;
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	user.getByName(uname,function(err,result){
		if(result[0] == undefined){
			user.doreg(uname,pwd,identity,function(err,result){
				if(result){
					res.send('success');
					req.session = result[0].u_id;
				}
			})
		}else{
			res.send(['error']);
		}
	});
};
