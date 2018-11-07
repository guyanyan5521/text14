<template>
  <div class="page-home">
    <div class="carousel">
      <span class="glyphicon glyphicon-search"></span>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="输入您想要的商品" @focus="focus">
      <swipe class="my-swipe">
        <swipe-item class="item1"><router-link to="/details/1" class="click"></router-link></swipe-item>
        <swipe-item class="item2"><router-link to="/details/2" class="click"></router-link></swipe-item>
        <swipe-item class="item3"><router-link to="/details/3" class="click"></router-link></swipe-item>
      </swipe>
    </div>
    <div class="nav">
      <ul>
        <li v-for="n in 8">
          <router-link :to="'/classify/'+classify[n-1]+'/1'" tag="div">
            <i class="iconfont" :class="classifyIconColor[n-1]"></i><br />
            <span>{{classify[n-1]}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="packet">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="money in moneyList" @click="add_money(money.coupon_id)">
            <span class="money">¥{{money.preferential}}</span>
            <span class="con">全场通用<br />满减券</span>
            <span class="circle1"></span>
            <span class="circle2"></span>
          </div>
          <!-- <div class="swiper-slide">
            <span class="money">¥15</span>
            <span class="con">农副<br />满减券</span>
            <span class="circle1"></span>
            <span class="circle2"></span>
          </div>
          <div class="swiper-slide">
            <span class="money">¥15</span>
            <span class="con">农副<br />满减券</span>
            <span class="circle1"></span>
            <span class="circle2"></span>
          </div>
          <div class="swiper-slide">
            <span class="money">¥15</span>
            <span class="con">农副<br />满减券</span>
            <span class="circle1"></span>
            <span class="circle2"></span>
          </div>
          <div class="swiper-slide">
            <span class="money">¥15</span>
            <span class="con">农副<br />满减券</span>
            <span class="circle1"></span>
            <span class="circle2"></span>
          </div>
          <div class="swiper-slide">
            <span class="money">¥15</span>
            <span class="con">农副<br />满减券</span>
            <span class="circle1"></span>
            <span class="circle2"></span>
          </div> -->

        </div>
      </div>
    </div>
    <div class="details">
      <router-link to="/details/">
        <img src="../../../static/img/home/g1.jpg" class="gimg">
      </router-link>
      <div class="title hot-title">
        <i class="glyphicon glyphicon-fire"></i>&nbsp;
        <span>热卖商品</span>
      </div>
      <ul>
        <li v-for="hot in hotList">
          <router-link :to="'/details/'+hot.good_id">
            <img :src="hot.url">
          </router-link>
          <router-link :to="'/details/'+hot.good_id" class="goodname" tag="p">{{hot.name}}</router-link>
          <p class="price">￥{{hot.price}}</p>
          <div class="buybtn" @click="buy(hot.good_id)">
          </div>
        </li>
      </ul>
    </div>
    <div class="details" v-for="(commodity,index) in commodityList">
      <router-link :to="'/details/'+commodity[0].good_id">
        <img src="../../../static/img/home/g1.jpg">
      </router-link>
      <router-link :to="'/classify/'+classify[index]+'/1'" tag="div" class="title">
        <i class="iconfont" :class="classifyIcon[index]" ></i>&nbsp;
        <span>{{classify[index]}}</span>
        <b>></b>
      </router-link>
      <ul>
        <li v-for="common in commodity">
          <router-link :to="'/details/'+common.good_id">
            <img :src="common.url">
          </router-link>
          <router-link :to="'/details/'+common.good_id" class="goodname" tag="p">{{common.name}}</router-link>
          <p class="price">￥{{common.price}}</p>
          <div class="buybtn" @click="buy(common.good_id)">
          </div>
        </li>
      </ul>
    </div>
    <div style="clear: both;"></div>
    <hr />
    <div class="message">
      <ul>
        <li>
          <i class="iconfont">&#xe61a;</i>
          <span>300+<br />原产地</span>
        </li>
        <li>
          <i class="iconfont">&#xe65e;</i>
          <span>60万+<br />旅程</span>
        </li>
        <li>
          <i class="iconfont">&#xe625;</i>
          <span>7个<br />国家</span>
        </li>
        <li>
          <i class="iconfont">&#xe6f3;</i>
          <span>400+<br />好食材</span>
        </li>
      </ul>
    </div>
    <!-- <div class="cooperation">
      <ul>
        <li>
          <i class="iconfont">&#xe609;</i>&nbsp;
          <span>商/务/合/作</span>
          <b>></b>
        </li>
        <li>
          <i class="iconfont">&#xe604;</i>&nbsp;
          <span>产/品/合/作</span>
          <b>></b>
        </li>
      </ul>
    </div> -->
    <div style="clear:both"></div>
    <common-footer-logo  style="margin-bottom:1rem;"></common-footer-logo>
    <common-footer></common-footer>
    <common-add-buycar v-if="show" :shopId="shopId" v-on:child-isshow="isshow"></common-add-buycar>
    <div class="prompt">{{prompt}}</div>
  </div>
</template>

<script>

import Axios from 'axios'
import CommonFooter from '../common/CommonFooter'
import CommonFooterLogo from '../common/CommonFooterLogo'
import CommonAddBuycar from '../common/CommonAddBuycar'
import {Swipe, SwipeItem } from 'vue-swipe'
import {swiper, swiperSlide } from 'vue-awesome-swiper'
Swipe.auto= false;
export default {
  name: 'page-home',
  data () {
    return {
      nl:["i1","i2","i3","i4","i5","i6","i7","i8"],
      classify:["农副","干货","零食","水产","酒茶","养生","生鲜","居家"],
      classifyIcon:["icon-mifan","icon-mogu","icon-lingshi-copy","icon-haixian","icon-cha","icon-shiwu","icon-shengxian","icon-jiaju"],
      classifyIconColor:["icon-mifan i1","icon-mogu i2","icon-lingshi-copy i3","icon-haixian i4","icon-cha i5","icon-shiwu i6","icon-shengxian i7","icon-jiaju i8"],
      commodityList:[],
      show:false,
      shopId:0,
      hotList:[],
      moneyList:[],
      prompt:""
    }
  },
  components:{
    Swipe,
    SwipeItem,
    swiper,
    swiperSlide,
    CommonFooter,
    CommonFooterLogo,
    CommonAddBuycar
  },
  mounted(){
    var searchH = $(".form-control").offset().top;
    $(window).scroll(function(){
      var scroH = $(this).scrollTop();
      if(scroH>searchH){
        $(".form-control").css({"opacity":"1"});
      }else if(scroH<=searchH){
        $(".form-control").css({"opacity":"0.9"});
      }
    })
    this.com_home();
    this.hot_goods();
    this.get_money();
    
  },
  created(){
    window.scrollTo(0,0);
  },
  methods:{
//    get_coupon(){
//      $(this).
//      Axios.get('http://127.0.0.1:3000/get_coupon').then((res)=>{
//        this.address_info=JSON.parse(res.data);
//      });
//    },
    com_home:function(){
      Axios.get('http://localhost:3000/com_home')
      .then((res)=>{
        // console.log(res.data);
        this.commodityList=JSON.parse(res.data);
        // console.log(this.commodityList);
      }).catch((error)=>{
        console.log(error);
      });
    },
    get_money:function(){
      Axios.get('http://localhost:3000/get_money')
      .then((res)=>{
        this.moneyList=JSON.parse(res.data);
        // console.log(this.moneyList);
        this.$nextTick(function(){
          var mySwiper = new Swiper('.swiper-container', {
            direction : 'horizontal',
            slidesPerView : 'auto',
          });
        });
      }).catch((error)=>{
        console.log(error);
      });
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
    add_money:function(id){
      if(!document.cookie){
        this.$router.push("/login"); 
      }
      var arr=document.cookie.split(";");
      var user_id=arr[0].split("=")[1];
      Axios.get('http://localhost:3000/add_money',{
          params:{
              uid:user_id,
              cid:id
          }
      }).then((res)=>{
          if(res.data==1){
            this.prompt="获取代金券成功"; 
          }else if(res.data==0){
            this.prompt="代金券已存在"; 
          }else{
            this.prompt="代金券获取失败"; 
          }
          $(".page-home .prompt").stop(true,true).slideDown(200, function(){
            setTimeout(function(){
              $(".page-home .prompt").stop(true,true).slideUp(200);
            },1500);
          });
      }).catch((error)=>{
          console.log(error);
      });
    },
    focus:function(){
      this.$router.push("/search");
    },
    buy:function(id){
      this.show=true;
      this.shopId=id;
      // console.log(id);
    },
    isshow: function (a){
      this.show = false;
    },
  }, 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../assets/css/page/home.css" scoped></style>
<style scoped>
/*@import "../../assets/css/page/home.css";*/
@import "../../assets/css/vue-swipe.css";
@import "../../assets/font/iconfont.css";
.page-home{
  background: #eee;
}
.page-home .hot-title{
  color: #d83131;
}
.page-home .my-swipe .click{
  display: block;
  width: 100%;
  height: 100%;
}
.page-home .details img.gimg{
  margin-top: .1rem;
}
.page-home .prompt{
  display: none;
  z-index: 999;
  position: fixed;
  top: 0;
  height: .8rem;
  line-height: .8rem;
  width: 100%;
  background: #a6c73a;
  color: #fff;
  font-weight: bolder;
  text-align: center;
  font-size: .26rem;
  /*transition: display 2s;
  -moz-transition: display 2s; 
  -webkit-transition: display 2s; 
  -o-transition: display 2s; */
}
</style>
