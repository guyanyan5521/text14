var express = require('express');
var router = express.Router();
var request = require('request');
var session = require('express-session');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*样例*/
// router.get('/insert_user', function(req, res, next) {
//     var name=req.query.name;//接收前端传来的数据
//     var tel=req.query.tel;//接收前端传来的数据
//     var psd=req.query.psd;//接收前端传来的数据
//	   //用get发给后台和post方式发给后台，26行27行二选一，有中文必须post
//     request.post({url:'http://127.0.0.1/afterEnd/user/insert_user', form: {name:name,tel:tel,psd:psd}}, function (error, response, body) {
//     request.get('http://127.0.0.1/afterEnd/user/insert_user?name='+name+"&tel="+tel+"&psd="+psd, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             res.json(body);//发给前台
//         }
//     });
// }); 
// 注册
router.get('/insert_user', function(req, res, next) {
    var name=req.query.name;

    var tel=req.query.tel;
    var psw=req.query.psw;
    console.log(name);
    request.post({url:'http://127.0.0.1/afterEnd/user/insert_user', form: {name:name,tel:tel,psw:psw}}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });
}); 
//登录
router.get('/login_user', function(req, res, next) {
    var tel=req.query.tel;
    var psw=req.query.psw;
    request.post({url:'http://127.0.0.1/afterEnd/user/login_user', form: {tel:tel,psw:psw}}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//首页所有商品
router.get('/com_home', function(req, res, next) {
    request.get('http://127.0.0.1/afterEnd/goods/get_goods', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//热卖商品
router.get('/hot_goods', function(req, res, next) {
    request.get('http://127.0.0.1/afterEnd/goods/hot_goods', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
router.get('/goods_paging', function(req, res, next) {
    var cls=req.query.cls;
    var count=req.query.count;
    var page=req.query.page;
    console.log(cls);
    request.post({url:'http://127.0.0.1/afterEnd/goods/paging', form: {cls:cls,count:count,page:page}}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//获取用户信息
router.get('/get_user',function(req,res,next){
    var uid=req.query.userid;
    // console.log(uid);
    request.get('http://127.0.0.1/afterEnd/user/get_user?uid='+uid, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});

router.get('/info',function(req,res,next){
    var gid=req.query.shop_id;
    console.log(gid);
    request.get('http://127.0.0.1/afterEnd/goods/info?gid='+gid, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });
});

router.get('/insert_cart',function(req,res,next){
    var uid=req.query.u_id
    var gid=req.query.shop_id;
    var count=req.query.count;
    console.log(count);
    request.get('http://127.0.0.1/afterEnd/cart/insert_cart?uid='+uid+"&gid="+gid+"&count="+count, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//

// 获取和用户有关的所有订单信息
router.get('/get_orders',function(req,res,next){
    var uid=req.query.userid;
    var state=req.query.state;
    // request.get('http://127.0.0.1/afterEnd/orders/get_orders?uid='+uid+'&state='+state,function(error, response, body){
    request.post({url:'http://127.0.0.1/afterEnd/orders/get_orders', form: {uid:uid,state:state}}, function(error, response, body){
        if (!error && response.statusCode == 200) {
            res.json(body);
        }    
    });
});
//收藏页
router.get('/get_collect',function(req,res,next){
    var uid=req.query.user_id;
    console.log(uid);
    request.get('http://127.0.0.1/afterEnd/goods/collection?uid='+uid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});

//获取用户的地址信息
router.get('/get_address',function(req,res,next){
    var uid=req.query.userid;
    request.get('http://127.0.0.1/afterEnd/user/get_address?uid='+uid,function (error, response, body){
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });
})
//给地址id获取地址
router.get('/get_single_address',function(req,res,next){
    var aid=req.query.address_id;
    console.log(aid);
    request.get('http://127.0.0.1/afterEnd/user/get_address_by_aid?aid='+aid,function (error, response, body){
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });
})

//保存地址
router.get('/save_address',function(req,res,next){
    var aid=req.query.address_id;
    var name=req.query.name;
    var tel=req.query.tel;
    var pro=req.query.pro;
    var city=req.query.city;
    var dis=req.query.dis;
    var detail=req.query.detail;
    request.post({url:'http://127.0.0.1/afterEnd/user/update_address', form: {aid:aid,name:name,tel:tel,pro:pro,city:city,dis:dis,detail:detail}}, function(error, response, body){
        if (!error && response.statusCode == 200) {
            res.json(body);
        }
    });


})
//插入新地址
router.get('/insert_address',function(req,res,next){
    var uid=req.query.user_id;
    var name=req.query.name;
    var tel=req.query.tel;
    var pro=req.query.pro;
    var city=req.query.city;
    var dis=req.query.dis;
    var detail=req.query.detail;
    console.log(detail);
    request.post({url:'http://127.0.0.1/afterEnd/user/insert_address', form: {uid:uid,name:name,tel:tel,pro:pro,city:city,dis:dis,detail:detail}}, function(error, response, body){
        if (!error && response.statusCode == 200) {
            res.json(body);
            console.log(body);
        }
    });
})

//删除地址
router.get('/delete_address',function(req,res,next){
    var aid=req.query.address_id;
    request.get('http://127.0.0.1/afterEnd/user/delete_address?aid='+aid,function (error, response, body){
        if (!error && response.statusCode == 200) {
            res.json(body);
            console.log(body);
        }
    });


})
//商品详情
router.get('/get_goods',function(req,res,next){
    var sid=req.query.sid;
    var count=req.query.count;
    request.get('http://127.0.0.1/afterEnd/goods/info?gid='+sid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//该商品的评论
router.get('/get_comment',function(req,res,next){
    var sid=req.query.sid;
    request.get('http://127.0.0.1/afterEnd/comment/get_comment?gid='+sid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//购物车
router.get('/cart_all',function(req,res,next){
    var uid=req.query.u_id;
    request.get('http://127.0.0.1/afterEnd/cart/get_cart?uid='+uid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//修改购物车数目
router.get('/update_cart',function(req,res,next){
    var sid=req.query.s_id;
    var count=req.query.count;
    request.get('http://127.0.0.1/afterEnd/cart/update_cart?sid='+sid+"&count="+count,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//从购物车里移除
router.get('/cart_del',function(req,res,next){
    var uid=req.query.u_id;
    var w_sid=req.query.s_id;
    var sid;
    // console.log(typeof(w_sid));
    if(typeof(w_sid)=="string"){
        sid = [w_sid];
    }else{
        sid = w_sid;
    }
    console.log(sid);
    request.get('http://127.0.0.1/afterEnd/cart/delete_cart?sid='+sid+"&uid="+uid,{qs:{uid:uid,sid:sid}},function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });
});
//热门搜索
router.get('/hot_search', function(req, res, next) {
    request.get('http://127.0.0.1/afterEnd/search/hot_search', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//搜索结果
router.get('/search_key', function(req, res, next) {
    var key=req.query.key;
    console.log(key);
    request.post({url:'http://127.0.0.1/afterEnd/search/fuzzy_search', form:{ipt:key}},  function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });
});
//全部购物券
router.get('/get_money', function(req, res, next) {
    request.get('http://127.0.0.1/afterEnd/coupon/get_coupon', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//获取代金券
router.get('/add_money',function(req,res,next){
    var uid=req.query.uid;
    var cid=req.query.cid;
    request.get('http://127.0.0.1/afterEnd/coupon/add_coupon?uid='+uid+"&cid="+cid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//查看代金券
router.get('/get_discount',function(req,res,next){
    var uid=req.query.uid;
    request.get('http://127.0.0.1/afterEnd/coupon/get_owncoupon?uid='+uid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.json(body);
        }
    });
});
//该商品是否被收藏
router.get('/is_collect',function(req,res,next){
    var sid=req.query.sid;
    var uid=req.query.uid;
    request.get('http://127.0.0.1/afterEnd/comment/check_collection?gid='+sid+"&uid="+uid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//添加收藏
router.get('/collect_in',function(req,res,next){
    var sid=req.query.sid;
    var uid=req.query.uid;
    request.get('http://127.0.0.1/afterEnd/comment/add_collection?gid='+sid+"&uid="+uid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
//取消收藏
router.get('/collect_out',function(req,res,next){
    var sid=req.query.sid;
    var uid=req.query.uid;
    request.get('http://127.0.0.1/afterEnd/comment/remove_collection?gid='+sid+"&uid="+uid,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            res.json(body);
        }
    });
});
module.exports = router;
//superagent 
//快递api
//web嵌入QQ