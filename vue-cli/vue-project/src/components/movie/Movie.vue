<template>
  <div class="movie">
  <common-header title="movie" bgcolor="rgb(33, 150, 243)"></common-header>
  <movie-nav></movie-nav>
  <div class="list">
    <movie-list v-for="(obj,index) in movieList" :key="index" :title="obj.nm" :year="obj.snum"
                :avg = "obj.sc" :img = "obj.img" :desc = "obj.cat" ></movie-list>
  </div>
    <div class="loading" v-show="isShow">
      <img src="/static/img/loading.gif" alt=""/>
    </div>
  <common-footer></common-footer>


  </div>
</template>

<script>
  import CommonHeader from "../common/CommonHeader"
  import CommonFooter from "../common/CommonFooter"
  import MovieNav from "./MovieNav"
  import MovieList from "./MovieList"
  import Axios from "axios"


  export default {
  name: 'hello',
  data () {
    return {
  movieList:[],
      isShow : false
     }

  },
  mounted(){
    let _this           = this;
    window.onscroll = function(){
      let scrollTop    = document.body.scrollTop;
      let clientHeight = document.body.clientHeight;
      let htmlHeight   = document.body.scrollHeight;
      if(scrollTop + clientHeight >= htmlHeight){
        _this.isShow = true;
        _this.loadData();
      }
    }
    //https://api.douban.com/v2/movie/top250?count=10&start=10
    this.loadData();
  },
  methods:{
    loadData(){
      Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+this.movieList.length+"&limit=10")
        .then((res)=>{
        this.movieList = this.movieList.concat(res.data.data.movies);
        this.isShow    = false;
      });
    }
  },

  components: {
    CommonHeader,
      MovieNav,
      MovieList,
      CommonFooter,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list{
    margin: 2rem 0 1.6rem;
  }
  .loading{
    margin-bottom:  1rem;
    text-align:center;
  }



</style>
<!--//    {-->
<!--//    title:"霸王别姬",-->
<!--//    year:1994,-->
<!--//      avg: 9.6,-->
<!--//      desc:[-->
<!--//      "同性",-->
<!--//      "爱情",-->
<!--//      "悬疑"-->
<!--//    ]-->
<!--//  },-->
<!--//    {-->
<!--//    title:"正义联盟",-->
<!--//    year:2017,-->
<!--//      avg: 0.0,-->
<!--//    desc:[-->
<!--//    "同性",-->
<!--//      "打片",-->
<!--//      "悬疑"-->
<!--//  ]-->
<!--//  },-->
<!--//  {-->
<!--//    title:"寻梦记",-->
<!--//    year:2017,-->
<!--//      avg: 0.0,-->
<!--//    desc:[-->
<!--//    "动漫",-->
<!--//      "人性",-->
<!--//      "亲情"-->
<!--//  ]-->
<!--//  }-->
