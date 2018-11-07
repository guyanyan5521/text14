<template>
  <div class="page-search-recommend">
    <div class="recommend">
        <p>推荐搜索</p>
        <ul>
          <router-link tag="li" v-for="search in searchList" :to="'/search/result/'+search.content">{{search.content}}</router-link>
            <!-- <li>鸣人</li>
            <li>佐助</li>
            <li>卡卡西</li>
            <li>晓</li>
            <li>四代目火影</li> -->
        </ul>
    </div>
    <div style="clear: both;"></div>
    <div class="more">
      <p class="title">热卖商品</p>
      <ul>
        <li v-for="hot in hotList">
          <router-link :to="'/details/'+hot.good_id" tag="div">
            <img :src="hot.url">
          </router-link>
          <router-link :to="'/details/'+hot.good_id" class="goodname" tag="p">{{hot.name}}</router-link>
          <p class="price">￥{{hot.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'page-search-recommend',
  data () {
    return {
      searchList:[],
      hotList:[],

    }
  },
  components:{

  },
  mounted(){
    this.hot_search();
    this.hot_goods();
  },
  methods:{
    hot_search:function(){
      Axios.get('http://localhost:3000/hot_search')
      .then((res)=>{
        // console.log(res.data);
        this.searchList=JSON.parse(res.data);
        // console.log(this.hotList);
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    ul, ol{
        list-style: none;
    }
    body{
        background: #ecf0f1;
        color: #333;
    }
    a{
        text-decoration: none;
    }
    img{
        border: 0;
    }
    .recommend{
        /*padding: 0 0.15rem;*/
        padding-left: 0.15rem;
        padding-top: 1.3rem;
    }
    .recommend p{
        color: #999;
        margin-bottom: 0.2rem;
    }
    .recommend ul li{
        float: left;
        font-size: 0.24rem;
        border: 0.02rem solid #aaa;
        padding: 0.1rem 0.2rem;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
    }
    /*more开始*/
    .more{
      margin-top: 0.15rem;
      margin-bottom: 1rem;
    }
    .more .title{
      padding: 0.2rem 0.15rem;
      color: #999;
      border-bottom: 0.03rem solid #eee;
      margin-bottom: 0.15rem;
    }
    .more ul li{
      width: 3.06rem;
      float: left;
      background: #fff;
      padding: 0 0.08rem;
      margin: 0.06rem 0.06rem;
      position: relative;
      border-bottom: 0.05rem solid #eee;
    }
    .more ul li img{
      width: 2.9rem;
      height: 2.9rem;
    }
    .more ul li .goodname{
      height: 0.65rem;
      font-size: 0.23rem;
    }
    .more ul li .price{
      float: left;
      font-size: 0.23rem;
      font-weight: bold;
      color: #09bb07;
    }
</style>
