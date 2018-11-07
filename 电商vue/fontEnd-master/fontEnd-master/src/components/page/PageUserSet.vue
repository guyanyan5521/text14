<template>
  <div class="page-user-set">
    <div class="userset-1">
      <span class="user-font font-2">头像</span>
      <span class="user-content">
        <img src="../../../static/img/userset/userset.png" alt="" class="user-logo">
        <button class="btn btn-me" data-toggle="modal" data-target="#myModal">&nbsp; ></button>
      </span>
      <!--弹层开始-->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content btn-content">
            <div class="modal-header">
              <button type="button" class="close " data-dismiss="modal" aria-hidden="true" >
                &times;
              </button>
              <h4 class="modal-title userset-title" id="myModalLabel">
                更改内容
              </h4>
            </div>
            <div class="modal-body userset-content">
             <div class="userset-5">
              <span class="first-box"> <span class="glyphicon glyphicon-ok-sign ok first-box-icon"></span><span class="first-box-content">拍照</span></span>
             </div>
                <div class="userset-6">

                  <span class="secont-box"> <span class="glyphicon glyphicon-ok-sign ok first-box-icon"></span><span class="secont-box-content">相册</span></span>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭
              </button>
              <button type="button" class="btn btn-primary">
                提交更改
              </button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
        <!--弹层结束-->
      </div>
    </div>
    <div class="userset-2">
      <span class="user-font">昵称</span>
      <span class="user-content">
        <button class="btn btn-he" data-toggle="modal" data-target="#myModal">{{user_name}}&nbsp; ></button>
      </span>
    </div>
    <div class="userset-2">
      <span class="user-font">性别</span>
      <span class="user-content">
        <button class="btn btn-you" data-toggle="modal" data-target="#myModal">性别&nbsp; ></button>
      </span>
    </div>
    <div class="userset-2">
      <span class="user-font">会员等级</span>
      <span class="user-content">
        <!-- <a href="" class="vip">V0普通会员 ></a> -->
        <button class="btn btn-he vip">V{{user_info.grade}}普通会员&nbsp; ></button>
      </span>
    </div>
    <div class="userset-3">
      <img src="../../assets/img/logo.png" class alt="">
      <p>龙江原产递</p>
    </div>

    <div class="userset-4">
      <router-link to="/user"><button class="cencle-box">退出登录</button></router-link>
    </div>


  </div>
</template>

<script>
  import $ from 'jquery';
  import Axios from 'axios'

export default {
  name: 'page-user-set',
  data () {
    return {
      // show:false,
      user_name:"",
      user_id:"",
      level:"",
      url:"",
      user_info:{}
    }
  },
  components:{
  },
  mounted(){
      var $btnme =$('.btn-me');
      var $btnyou =$('.btn-you');
      var $btnhe =$('.btn-he');
      var $userContent = $('.user-content');
      var $userTitle = $('.userset-title');
      var $fb = $('.first-box');
      var $sb = $('.secont-box');
      var $fbc = $('.first-box-content');
      var $sbc = $('.secont-box-content');
      var $fbi = $(".first-box-icon");

      $btnme.on('click',function(){
        $fbi.hide();
        $sb.show();
        $userTitle.html('设置头像');
        $fbc.html('拍照');
        $sbc.html('相册')
      });
      $btnyou.on('click',function(){
        $fbi.show();
        $sb.show();

        $userTitle.html('设定性别');
        $fbc.html('男');
        $sbc.html('女')
      });
      $btnhe.on('click',function(){
        $fbi.hide();
        $sb.hide();
        $userTitle.html('设置昵称');
        $fbc.html('<input type="text" style="width:5.2rem;border:0; border-bottom: 1px solid #ecf0f1">');
        $sbc.html('')
      });

      if(document.cookie){
        this.show=true;
        var arr=document.cookie.split(";");
        var user_name=arr[1].split("=")[1];
        var user_id=arr[0].split("=")[1];
        this.user_name=user_name;
        this.user_id=user_id;
        this.get_user_info();

      }
  },
  methods:{
      get_user_info:function(){
        var _this=this;
          Axios.get('http://127.0.0.1:3000/get_user',{
              params:{
                userid:this.user_id
              }
          }).then(function(res){
//            console.log(res.data);
            _this.user_info=JSON.parse(res.data);
          });

      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/font/iconfont.css";

</style>
<style src="../../assets/css/page/userset.css"></style>
