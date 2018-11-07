<template>
  <div class="page-orderforgoods">
    <div class="content">
      <div class="orderforgoods-exist" v-if="flag"><router-link to="/user/address">
        <div class="exist-left">
          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
        </div>
        <div class="exist-center">
          <p class="user-name">收货人：{{first_address.name}}</p>
          <p class="user-phone">联系电话：{{first_address.telephone}}</p>

          <p class="user-address overhide">收货地址：{{first_address.province }}{{first_address.city}}{{first_address.district}}{{first_address.address}}</p>
        </div>
        <div class="exist-right">
          <span >></span>
        </div>
      </router-link></div>
      <div class="orderforgoods-title" v-else @click="newAddress">
        <span class="glyphicon glyphicon-plus orderforgoods-title-font"></span>
        <span>新建收货地址</span>
      </div>
      <div class="orderforgoods-logo">
        <span class="	glyphicon glyphicon-briefcase orderforgoods-logo-font"></span>
        <span>龙江原产递</span>
      </div>
      <div class="orderforgoods-content" v-for="elem in $store.state.goods_info">
        <img :src='elem.url' alt="">
        <div class="orderforgoods-content-2">
          <div class="orderforgoods-content-3">
            <span class="o-3-left">{{elem.name}}</span>
            <span class="o-3-right">￥{{elem.price}}</span>
          </div>
          <div class="orderforgoods-content-4">
            <span>5kg</span>
            <span class="o-3-right">x{{elem.count}}</span>
          </div>
        </div>
      </div>
      <div class="orderforgoods-content-5">
        <div class="orderforgoods-content-6">
          <span>配送方式</span>
        </div>
        <div class="orderforgoods-content-7">
          ￥0.00<br/>快递发货

        </div>
      </div>
      <div class="orderforgoods-content-5">
        <div class="orderforgoods-content-6">
          <span>合计</span>
        </div>
        <span class="total-price">
        ￥{{$store.state.goods_info[0].price*$store.state.goods_info[0].count}}
      </span>
      </div>

      <div class="orderforgoods-content-5">
        <span class="discount">优惠</span>
        <span class="use-discount">
        使用优惠>

      </span>
      </div>
      <div class="orderforgoods-content-5">
        <div class="orderforgoods-content-6">
          <span>短信通知收件人</span>
        </div>
        <div class="orderforgoods-content-7">


        </div>
      </div>
      <div class="orderforgoods-content-5">
        <div class="orderforgoods-content-6 order-last">
          <span>商品金额<br>运费</span>
        </div>
        <div class="orderforgoods-content-7">
          ￥{{$store.state.goods_info[0].price*$store.state.goods_info[0].count}}<br>+￥0.00


        </div>
      </div>
    </div>
    <div class="orderforgoods-footer">
      <span>合计:￥{{$store.state.goods_info[0].price*$store.state.goods_info[0].count}}</span>
      <div class="orderforgoods-button">提交订单</div>
    </div>

  </div>




</template>
<script>
  import Axios from 'axios'
  export default {
    name: 'page-orderforgoods',
    data () {
      return {
        flag:true,
        address_info:[],
        first_address:[],
        user_id:"",
        index:'0'

      }
    },
    components:{

    },
    mounted(){
      if(document.cookie){
        var arr=document.cookie.split(";");
        var user_id=arr[0].split("=")[1];
        this.user_id=user_id;
      }

//      console.log(11111);
//      console.log(this.$store.state.address);
//      console.log(this.$store.state.goods_info);
        var length=this.get_address(this.$store.state.address?this.$store.state.address:this.index);
//      this.select_ads();
        if(length==0){
            this.flag=false;
        }
    },
    created(){
      window.scrollTo(0,0);
    },
    methods:{
      //当没有地址是添加新地址
      newAddress:function(){
        this.$router.push("/user/address/edit/0");
        this.get_address(this.$store.state.address);
        this.flag=true;
      },
      //获取队形u_id下的地址信息，初始是index=0；
      get_address:function(index){
          console.log("aaaaa");
          console.log(index);
        Axios.get('http://127.0.0.1:3000/get_address',{
          params:{
            userid:this.user_id,
          }
        }).then((res)=>{
          this.address_info=JSON.parse(res.data);
          console.log(this.address_info);
          for(var i=0;i<this.address_info.length;i++){
              if(this.address_info[i].receipt_id==index){
                this.first_address=this.address_info[i];
              }

          }
          console.log(this.address_info.length);
          return this.address_info.length;

        });
        return this.address_info.length;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/page/orderforgoods.css";
  @import "../../assets/font/iconfont.css";
</style>
