<template>
  <div class="page-collect">
    <div v-if='flag'>
      <ul id="collect">
        <li class="collect-list" v-for="(elem,n) in collect_info"> <!--/*遍历传入数据，包括商品名，价格*/-->
          <div class="img-detail">
           <!-- /*跳转页面传参数为tag（商品id）*/ -->
            <router-link :to="'/details/'+elem.good_id"><img :src='elem.url' alt=""></router-link>
          </div>
          <div class="product-detail" >
            <router-link :to="'/details/'+elem.good_id"><p class="product-info overhide">{{elem.name}}</p></router-link>
            <span class="product-price">￥&nbsp;{{elem.price}}</span>
            <span class="like" @click="collect(n,elem.good_id)">
              <i class="iconfont gicon">&#xe605;</i>
               <!--//调用收藏接口，传出数据为商品id-->
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="empty-list">
        <h4>您还没有收藏过宝贝 T.T</h4>
        <p>赶快挑点宝贝</p>
        <router-link to="/home">去逛逛</router-link>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
//import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
import Axios  from 'axios'
export default {
  name: 'page-collect',
  data () {
    return {
      flag:false,
      user_id:"",
      collect_info:{},
      iscollect:[]
    }
  },
  components:{

    CommonFooter
  },
  mounted(){
    if(document.cookie){
      var arr=document.cookie.split(";");
      var user_id=arr[0].split("=")[1];
      this.user_id=user_id;
       var _this=this;
      Axios.get('http://127.0.0.1:3000/get_collect', {
        params:{
          user_id:this.user_id
        }
      }).then(function(res){
        if(res.data!=0){
          _this.collect_info=JSON.parse(res.data);
          _this.flag = true;
          for (var i = 0; i < _this.collect_info.length; i++) {
            _this.iscollect[i]=true;
          }
          console.log(_this.collect_info);
        }
       
      });
    }else{
      this.$router.push("/login");
    }
  },
  methods:{
    collect:function(n,gid){
      console.log(this.iscollect);
      if(this.iscollect[n]){
        this.collect_out(n,gid);
      }else{
        this.collect_in(n,gid);
      }
    },
    collect_in:function(n,gid){
      Axios.get('http://localhost:3000/collect_in',{
          params:{
              sid:gid,
              uid:this.user_id
          }
      }).then((res)=>{
          console.log("aaain"+res.data);
          if(res.data==1){
            this.iscollect[n]=true;
            $(".gicon").eq(n).html("&#xe605;");
          }else{
            this.iscollect[n]=false;
            $(".gicon").eq(n).html("&#xe60a;");
          }
      }).catch((error)=>{
          console.log(error);
      });
    },
    collect_out:function(n,gid){
      Axios.get('http://localhost:3000/collect_out',{
          params:{
              sid:gid,
              uid:this.user_id
          }
      }).then((res)=>{
        console.log("aaaout"+res.data);
          if(res.data==1){
            this.iscollect[n]=false;
            $(".gicon").eq(n).html("&#xe60a;");
          }else{
            this.iscollect[n]=true;
            $(".gicon").eq(n).html("&#xe605;");
          }
      }).catch((error)=>{
          console.log(error);
      });
    },
  }
}
</script>


<style src="../../assets/font/iconfont.css" scoped></style>
<style scoped>
  .page-collect{
    margin-bottom: 1rem;
  }
  ul{
    list-style:none;
    padding: .1rem 0  ;
    margin-bottom: 0.1rem;


  }
  #collect{
    font-size:0.25rem;

  }
  #collect .collect-list{
    height:2.1rem;
    width:100%;
    border-bottom: .1rem solid #eee;
    padding: 0.1rem 0.2rem 0 .2rem;
  }
  #collect .img-detail{
    float: left;
    width: 30%;
  }
  #collect .collect-list img{
    width: 100%;
  }
  #collect .product-detail{
    float: right;
    width:69%;
    padding-left:0.2rem;
    position: relative;
    height:2.0rem;

  }
  #collect .product-price{
    position: absolute;
    left:0.2rem;
    bottom: .2rem;
    color: red;
  }
  #collect .like i{
    position: absolute;
    left:2rem;
    bottom: .2rem;
    color: red;
    font-size: 0.3rem;
  }
  #collect .overhide {
    display: -webkit-box !important;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #867e7e;

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
