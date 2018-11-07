<template>
  <div class="page-details">
    <div class="carousel">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../../static/img/details/1.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../../../static/img/details/2.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../../../static/img/details/3.jpg">
          </div>
        </div>
        <div class="swiper-pagination">
        </div>

      </div>
      <div class="gooddetail">
        <p class="goodname">{{myShop.name}}</p>
        <span class="price">¥{{myShop.price}}</span>
        <span class="like">
          <i class="iconfont">&#xe60a;</i>
          <span>喜欢</span>
        </span>
      </div>
      <div class="stockdetail">
        <ul>
          <li class="col-sm-4">运费：¥10.00</li>
          <li class="col-sm-4">剩余：481</li>
          <li class="col-sm-4">销量：496</li>
        </ul>
      </div>
    </div>
    <div class="sale">
      <span>返现</span>
      <span>包邮</span>
      <span>优惠</span>
      <p><b>&nbsp;前5笔订单返现</b> 满100元包邮；满200元包邮...</p>
      <b class="next">&rsaquo;</b>
    </div>
    <div class="size">
      选择：规格
      <b>&rsaquo;</b>
    </div>
    <div class="store">
      <div class="enter">
        <p><i class="iconfont">&#xe67e;</i> 黑龙江电视台--龙江原产递</p>
        <router-link tag="span" to="/home">进入店铺<b>&rsaquo;</b></router-link>
      </div>
      <div class="safety">
        <span>
          <i class="iconfont">&#xe632;</i>
          企业认证
        </span>
        <span>
          <i class="iconfont">&#xe632;</i>
          担保交易
        </span>
      </div>
    </div>
    <div class="checkbox">
      <div class="ckeckleft selected">商品详情</div>
      <div class="checkright">评论</div>
    </div>
    <div class="checkcon">
      <div class="content-text goodimg">
        <img v-for="img in myShop.img_all" :src="img">
        <!-- <img src="../../../static/img/details/goods-02.jpg">
        <img src="../../../static/img/details/goods-03.jpg">
        <img src="../../../static/img/details/goods-04.jpg">
        <img src="../../../static/img/details/goods-05.jpg">
        <img src="../../../static/img/details/goods-06.jpg">
        <img src="../../../static/img/details/goods-07.jpg"> -->
      </div>
      <div class="content-text comment">
        <ul>
          <li v-for="comment in commentList">
            <div class="con-header">
              <img :src="comment.url">
              <span>{{comment.name}}</span>
            </div>
            <div>
              <span class="time">{{comment.time}}</span>&nbsp;
              <span class="con-size">规格：{{myShop.parameter}}</span>
            </div>
            <p>{{comment.content}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="more">
      <p class="title">更多精选商品</p>
      <ul>
        <li v-for="hot in hotList">
          <router-link :to="'/details/'+hot.good_id" tag="div">
            <img :src="hot.url">
          </router-link>
          <router-link :to="'/details/'+hot.good_id" class="goodname" tag="p">{{hot.name}}</router-link>
          <p class="price">￥{{hot.price}}</p>
        </li>
      </ul>
      <p class="pb">
        <router-link class="btn" to="/home">进店逛逛></router-link>
      </p>
    </div>
    <div class="details-foot">
      <a href="" class="service col-md-2">
        <i class="iconfont">&#xe7a3;</i>
        <span>客服</span>
      </a>
      <span class="collect col-md-2" @click="collect">
        <i class="iconfont" v-if="iscollect">&#xe605;</i>
        <i class="iconfont" v-else>&#xe60a;</i><br />
        <span>收藏</span>
      </span>
      <span class="buycar col-md-4" @click="buy()">加入购物车</span>
      <span class="buyying col-md-4" @click="buy_immediately()">立即购买</span>
    </div>
    <common-add-buycar v-if="show" :shopId="shopId" :type="type"  v-on:child-isshow="isshow"></common-add-buycar>
  </div>
</template>

<script>
import $ from 'jquery'
import Axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import CommonAddBuycar from '../common/CommonAddBuycar'
export default {
  name: 'page-details',
  data () {
    return {
      show:false,
      shopId:this.$route.params.tag,
      hotList:[],
      myShop:{},
      commentList:[],
      iscollect:false,
      type:false
    }
  },
  components:{
    swiper,
    swiperSlide,
    CommonAddBuycar
  },
  methods:{
    buy:function(){
      this.show=true;
      // console.log(id);
      this.type=true;
    },
    buy_immediately(){
      this.show=true;
      // console.log(id);
      this.type=false;
    },
    isshow: function (a){
      this.show = false;
    },
    hot_goods:function(){
      Axios.get('http://localhost:3000/hot_goods')
      .then((res)=>{
        // console.log(res.data);
        this.hotList=JSON.parse(res.data);
        // console.log(this.hotList);
      }).catch((error)=>{
        console.log(error);
      });
    },
    get_goods:function(){
      Axios.get('http://localhost:3000/get_goods',{
          params:{
              sid:this.shopId,
          }
      }).then((res)=>{
          // console.log(JSON.parse(res.data));
          this.myShop=JSON.parse(res.data);
      }).catch((error)=>{
          console.log(error);
      });
    },
    get_comment:function(){
      Axios.get('http://localhost:3000/get_comment',{
          params:{
              sid:this.shopId,
          }
      }).then((res)=>{
          console.log(JSON.parse(res.data));
          this.commentList=JSON.parse(res.data);
      }).catch((error)=>{
          console.log(error);
      });
    },
    is_collect:function(){
      var arr=document.cookie.split(";");
      var user_id=arr[0].split("=")[1];
      Axios.get('http://localhost:3000/is_collect',{
          params:{
              sid:this.shopId,
              uid:user_id
          }
      }).then((res)=>{
          if(res.data==1){
            this.iscollect=true;
          }else{
            this.iscollect=false;
          }
      }).catch((error)=>{
          console.log(error);
      });
    },
    collect:function(){
      if(!document.cookie){
        this.$router.push("/login");
      }
      var arr=document.cookie.split(";");
      var user_id=arr[0].split("=")[1];
      if(this.iscollect){
        this.collect_out(user_id);
      }else{
        this.collect_in(user_id);
      }
    },
    collect_in:function(uid){
      Axios.get('http://localhost:3000/collect_in',{
          params:{
              sid:this.shopId,
              uid:uid
          }
      }).then((res)=>{
          if(res.data==1){
            this.iscollect=true;
          }else{
            this.iscollect=false;
          }
      }).catch((error)=>{
          console.log(error);
      });
    },
    collect_out:function(uid){
      Axios.get('http://localhost:3000/collect_out',{
          params:{
              sid:this.shopId,
              uid:uid
          }
      }).then((res)=>{
          if(res.data==1){
            this.iscollect=false;
          }else{
            this.iscollect=true;
          }
      }).catch((error)=>{
          console.log(error);
      });
    },
    menu:function(){
      window.scrollTo(0,0);
    }
  },
  mounted() {
    this.hot_goods();
    this.get_goods();
    this.get_comment();
    if(document.cookie){
      this.is_collect();
    }
    //选项卡
    var $checkbox = $('.checkbox div');
    $checkbox.on('click',function(){
      $(this).addClass('selected').siblings().removeClass('selected');
      $('.content-text').eq($(this).index()).show().siblings().hide();
    });
    //图片切换
    var mySwiper = new Swiper('.swiper-container', {
      pagination : '.swiper-pagination',
      paginationClickable: true,
      loop : true,
      loopAdditionalSlides : 0,
      watchSlidesProgress : true,
      watchSlidesVisibility : true,
    });
  },
  created(){
    this.menu();
  },
 watch:{
    '$route'(to,from){
      this.menu();
      this.shopId=this.$route.params.tag,
      this.hot_goods();
      this.get_goods();
      this.get_comment();
      if(document.cookie){
        this.is_collect();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/font/iconfont.css";
@import "../../assets/css/swiper.min.css";
</style>
<style src="../../assets/css/page/details.css" scoped></style>
