<template>
  <div class="page-order-all">
    <div v-if="flag">
      <ul id="order-all">
        <li class="order-list" v-for="elem in orders_info">
          <div class="time-state">
            <p class="order-time">下单时间：{{elem.time}}</p>
            <p class="order-state">{{elem.state}}</p>
          </div>
          <div class="order-content">
          <img :src=elem.url  alt="">
            <div class="order-detail">
              <p class="overhide">订单编号：{{elem.order_id}}</p>
              <p class="overhide">商品名：{{elem.name}}</p>
            </div>
          </div>
          <p class="total-price">共&nbsp;{{elem.count}}件商品 合计：￥{{elem.count*elem.price}}</p>
          <div class="order-state-list">
            <span>延长收货</span>
            <span>查看物流</span>
            <span>确认收货</span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="empty-list">
        <h4>这里空空的，一份订单也没有 T.T</h4>
        <p>赶快去下单</p>
        <router-link to="/home">去逛逛</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios"
export default {
  name: 'page-order-all',
  data () {
    return {
      flag:true,
      user_id:"",
      orders_info:{},
      state:""
      // sum:orders_info.count*orders_info.pric
    }
  },
  components:{

  },
  mounted(){
       if(document.cookie){
          this.show=true;
          var arr=document.cookie.split(";");
          var user_id=arr[0].split("=")[1];
          this.user_id=user_id;
          this.get_orders_info();

      }
  },
  methods:{
      get_orders_info:function(){
        var _this=this;
          Axios.get('http://127.0.0.1:3000/get_orders',{
              params:{
                userid:this.user_id,
                state:this.state
              }
          }).then(function(res){
            _this.orders_info=JSON.parse(res.data);

          });

      }
  }
}
</script>

<style scoped>

  body{
    background: #fff;
  }
  ul{
    list-style: none;
    padding:0;
  }
  p{
    margin:0;
  }
  .page-order-all{
    /*padding: 1rem 0.1rem 0 0.1rem ;*/
    color: #867e7e;
    padding-top: .8rem;
    font-size: .2rem;

  }
  #order-all{
    padding-bottom:1rem;
  }
  #order-all .order-list{
    border-bottom: 0.2rem solid #eee;
    position: relative;
    heigth : 3rem;
  }
  #order-all .time-state{
    height:.5rem;
    line-height:.5rem;
    /*background: #FCF8E8;*/
    padding : 0 .1rem;
  }
  #order-all .order-time{
    float: left;

  }
  #order-all .order-state{
    float: right;

  }
  #order-all .order-content{
    height:1.8rem;
    /*border-bottom: .03rem solid #eeeeee;*/
    padding:0 .1rem;
    background: rgba(245,245,245,0.5);
  }
  #order-all .order-content img{
    display: block;
    float: left;
    width:30%;
    height:1.6rem;
    margin-right:.2rem;
    margin-top:.09rem;
  }
  #order-all .order-detail{
    width:66%;
    float: right;
    margin-top: .2rem;


  }
  #order-all .order-detail p{
    margin-bottom: .1rem;
  }
  #order-all .total-price{
    height: 0.5rem;
    width:100%;
    line-height:0.5rem;
    padding-left:4rem;
    border-bottom: .05rem solid #eeeeee;
  }
  #order-all .overhide {
    width:3.5rem;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
    -webkit-box-orient: vertical;
  }
  #order-all .order-state-list{
    height: 0.8rem;
    width:100%;
    line-height:0.8rem;
    padding-left:2.5rem;

  }
  #order-all .order-state-list span{
    display: inline-block;
    width: 1.2rem;
    height:.5rem;
    line-height: .5rem;
    border:0.03rem solid #eee;
    border-radius: .25rem;
    text-align: center;
    color: #504c4c;
  }
  /*empty-list开始*/
  .empty-list{
      margin: 1rem 1rem;
      text-align: center;
  }
  .empty-list h4{
      font-size: 0.32rem;
      margin-bottom: 0.2rem;
      color: #666;
  }
  .empty-list p{
      color: #999;
  }
  .empty-list a{
      display: inline-block;
      border-radius: 3px;
      color: #f60;
      border: 0.01rem solid #f60;
      padding: 0.1rem 0.6rem 0.13rem 0.6rem;
      margin-top: 0.15rem;
  }
  /*empty-list结束*/
</style>
























