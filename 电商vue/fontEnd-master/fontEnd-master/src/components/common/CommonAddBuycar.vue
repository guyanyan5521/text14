<template>
  <div class="common-addbuycar">
    <div class="dialog-box">
        <div class="buycar">
            <div class="content">
                <img :src="goods.url">
                <!-- <img src="../../assets/img/m01.jpg"> -->
                <!-- <img src="/static/img/nongfu/01.jpg" alt=""> -->
                <p>{{goods.name}}</p>
                <span class="price">¥{{goods.price}}</span>
                <span class="glyphicon glyphicon-remove-circle remove" @click="isshow"></span>
            </div>
            <div class="size">
                <p>规格：</p>
                <ul>
                    <li class="selected">默认</li>
                    <!-- <li>10kg</li> -->
                </ul>
                <div style="clear: both;"></div>
            </div>
            <div class="buynum">
                <p>购买数量：</p>
                <span class="sub cancel">-</span>
                <input type="text" maxlength="3" onkeyup="value=value.replace(/[^\d]/g,'')" name="num" v-model="num" class="num">
                <span class="add">+</span>
            </div>
            <span class="addbtn" @click="buy" v-if="type_">加入购物车</span>
            <span class="addbtn" @click="buy_immediately" v-else>立即购买</span>

        </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import $ from 'jquery'
export default {
  name: 'common-addbuycar',
  props: ['shopId','type'],
  data () {
    return {
        goods:{},
        num:1,
        user_id:0,
        show:true,
        check:[],
        type_:true,
    }
  },
  mounted(){
      console.log(this.type);
    if(this.type==false){
      this.type_=false;
    }

    var $sub = $('.sub');
    var $add = $('.add');
    var $num = $('.num');
    var $box = $('.dialog-box');
    var $rem = $('.remove');
    $('.size li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    console.log(this.shopId);
    var _this=this;
    $add.on('click',function(){
        // $num.val(parseInt($num.val())+1);
        _this.num++;
        if(_this.num>=999){
            _this.num=999;
            $(this).addClass('cancel');
        }
        else{
            $(this).removeClass('cancel');
            $sub.removeClass('cancel');
        }
    });
    $sub.on('click',function(){
        _this.num--;
        if(_this.num<=1){
            _this.num=1;
            $(this).addClass('cancel');
        }
        else{
            $(this).removeClass('cancel');
            $add.removeClass('cancel');
        }
    });
    $('input').bind('input propertychange', function() {
        if(_this.num>=999){
            _this.num=999;
            $add.addClass('cancel');
            $sub.removeClass('cancel');
        }
        else if(_this.num<=1){
            _this.num=1;
            $sub.addClass('cancel');
            $add.removeClass('cancel');
        }else{
            $sub.removeClass('cancel');
            $add.removeClass('cancel');
        }

    });
    this.info();
  },
  methods:{
    info:function(){
        Axios.get('http://localhost:3000/info',{
            params:{
              shop_id:this.shopId
            }
        }).then((res)=>{
            console.log(JSON.parse(res.data));
            this.goods=JSON.parse(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    },
    buy:function(){
        if(!document.cookie){
           this.$router.push("/login");
        }
        var arr=document.cookie.split(";");
        var user_id=arr[0].split("=")[1];
        this.user_id=user_id;
        Axios.get('http://localhost:3000/insert_cart',{
            params:{
                u_id:this.user_id,
                shop_id:this.shopId,
                count:this.num
            }
        }).then((res)=>{
            // if(res.data==1){
                this.show=false;
                this.$emit('child-isshow',this.show);
            // }
        }).catch((error)=>{
            console.log(error);
        });
    },
    isshow:function(){
        // console.log("close");
        this.show=false;
        this.$emit('child-isshow',this.show);
    },
    buy_immediately(){
      if(!document.cookie){
        this.$router.push("/login");
      }
      var arr=document.cookie.split(";");
      var user_id=arr[0].split("=")[1];
      this.user_id=user_id;
      var check=new Array(this.goods);
      check[0].count=this.num;
      check[0].user_id=this.user_id;
      this.$store.dispatch('get_goods_info',check);
      this.$router.push('/cart/orderforgoods');
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<style src="../../assets/css/common/addbuycar.css" scoped></style>
