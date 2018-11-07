<template>
  <div class="page-aboutus">
    <div class="about-header">
      <img src="../../assets/img/logo.jpg">
      <p>龙江原产递</p>
    </div>
    <div class="about-content">
      <div class="con-top">
        <span>简介</span>
        <p>
          &nbsp; &nbsp; 黑龙江电视台《龙江原产递》结合传统媒体的权威性和专业性，搭建电视购物，网络电商，线下体验店为一体的O2O优质黑龙江特产销售渠道，为广大消费者，提供最安全、最地道、最正宗、最优质的农产品食材和特产，推荐最农产品的原产地。
        </p>
      </div>
      <div class="con-top">
        <span>优质服务</span>
        <p>
          &nbsp; &nbsp; 在这里，我们把黑龙江本土严选的好特产、好食材，一点一点带给您，同时，把我们认知里健康生活方式也一点一点传递给您，让我们一同享受原产地美食，一同享受健康品质生活。
        </p>
      </div>
      <div class="con-top">
        <span>联系我们</span><br />
        <i class="iconfont qq btn" data-toggle="modal" data-target=".bs-example-modal-sm">&#xe63a;</i>
        <i class="iconfont weixin btn" data-toggle="modal" data-target=".bs-example-modal-sm">&#xe7ba;</i>
        <i class="iconfont weibo btn" data-toggle="modal" data-target=".bs-example-modal-sm">&#xe620;</i>
      </div>
      <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">客服QQ</h4>
          </div>
          <div class="modal-body">
            <img src="../../assets/img/logo.jpg" class="qq-img">
            <img src="../../assets/img/weixin.jpg" class="weixin-img">
            <img src="../../assets/img/logo.png" class="weibo-img">
          </div>
          <!-- <div class="modal-content">
            <p>客服QQ</p>
            <img src="../../assets/img/logo.jpg">
          </div> -->
        </div>
      </div>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery';
  export default {
    name: 'page-aboutus',
    data () {
      return {
      }
    },
    components:{

    },
    mounted(){
      var $iqq = $('.con-top .qq');
      var $iweixin = $('.con-top .weixin');
      var $iweibo = $('.con-top .weibo');
      $iqq.on('click',function(){
        $('.modal-title').text('客服QQ');
        $('.qq-img').show().siblings().hide();
      });
      $iweixin.on('click',function(){
        $('.modal-title').text('客服微信');
        $('.weixin-img').show().siblings().hide();
      });
      $iweibo.on('click',function(){
        $('.modal-title').text('客服微博');
        $('.weibo-img').show().siblings().hide();
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/page/abouts.css";
</style>
