var express = require('express');
var router = express.Router();

//加载路由
var user = require('../controller/user');
var changeinfo = require('../controller/changeinfo');
var info_filter = require('../controller/info_filter');
//加载控制器

router.post('/checkLogin',user.checkLogin);

//router.get('/checkLogin',user.checkLogin);

router.post('/regist',user.regist);
router.post('/checkName',user.checkName);
//登陆注册
router.post('/get_info',changeinfo.get_info);
router.post('/update_name',changeinfo.update_name);
router.post('/update_pwd',changeinfo.update_pwd);
router.post('/update_phone',changeinfo.update_phone);
router.post('/update_signature',changeinfo.update_signature);
//修改个人资料
router.post('/filterByGrade',info_filter.filterByGrade);
router.post('/filterBySubject',info_filter.filterBySubject);
router.post('/filterByAddress',info_filter.filterByAddress);
//首页资料筛选


router.get('/reg',function(req,res){
  res.render('reg');
});
router.get('/login',function(req,res){
  res.render('login');
});
router.get('/info',function(req,res){
  res.render('info');
});
router.get('/update',function(req,res){
  res.render('update');
});

module.exports = router;
