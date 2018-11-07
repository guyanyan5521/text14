<template>
  <div class="page-search-result">
    <div v-if="flag">
        <div class="result">
            <ul class="list">
                <li v-for="commodity in commodityList">
                    <router-link :to="'/details/'+commodity.good_id">
                        <img :src="commodity.url">
                    </router-link>
                    <router-link :to="'/details/'+commodity.good_id">
                        <p class="goodname">{{commodity.name}}</p>
                    </router-link>
                    <span class="new-price">¥<b>{{commodity.price}}</b></span>
                    <span class="old-price">¥<del>128.00</del></span>
                    <span class="number">评论<b>146</b>条</span>
                </li>
                <!-- <li>
                    <img src="../../assets/img/m01.jpg">
                    <p class="goodname">五常大米啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                    <span class="new-price">¥<b>68.00</b></span>
                    <span class="old-price">¥<del>128.00</del></span>
                    <span class="number">评论<b>146</b>条</span>
                </li> -->
            </ul>
        </div>
    </div>
    <div v-else> 
        <div class="empty-list">
            <h4>啥也没搜到，搜点别的 T.T</h4>
            <p>要不回首页找找</p>
            <router-link to="/home">去找找</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'page-search-result',
  data () {
    return {
        keyword:this.$route.params.key,
        commodityList:[],
        flag:false
    }
  },
  components:{

  },
  mounted(){
    this.search_key();
  },
  methods:{
    search_key:function(){
      Axios.get('http://localhost:3000/search_key',{
        params:{
          key:this.keyword,
        }
      }).then((res)=>{
        // console.log(res.data);
        if(res.data!=0){
            this.commodityList=JSON.parse(res.data);
            console.log(this.commodityList);
            this.flag=true;
        }else{
            this.flag=false;
        }
      }).catch((error)=>{
        console.log(error);
      });
    }
  },
    watch:{
      '$route'(to,from){
        this.keyword=this.$route.params.key,
        this.search_key();
      }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page-search-result *{
        margin: 0;
        padding: 0;
    }
    .page-search-result ul, .page-search-result ol{
        list-style: none;
    }
    .page-search-result body{
        background: #ecf0f1;
        color: #333;
    }
    .page-search-result a{
        text-decoration: none;
    }
    .page-search-result img{
        border: 0.01rem solid #eee;
    }
    .page-search-result b{
        font-weight: 400;
    }
    .page-search-result .result{
        padding: 0 0.15rem;
        padding-top: 1.3rem;
    }
    .page-search-result .list li{
        width: 100%;
        height: 2.12rem;
        border-bottom: 0.03rem solid #ddd;
        padding: 0.1rem 0.2rem;
        position: relative;
    }
    .page-search-result .list img{
        width: 1.8rem;
        height: 1.8rem;
        float: left;
        /*margin: 0 0.1rem;*/
        margin-right: 0.25rem;
    }
    .page-search-result .list .goodname{
        /*display: inline-block;*/
        font-size: 0.25rem;
        height: 0.8rem;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
        margin-bottom: 0.25rem;
    }
    .page-search-result .list .old-price{
        font-size: 0.22rem;
        color: #aaa;
    }
    .page-search-result .list .new-price{
        color: #e33a35;
    }
    .page-search-result .list .number{
        font-size: 0.22rem;
        color: #666;
        float: right;
    }
    /*empty-list开始*/
    .page-search-result .empty-list{
        padding: 4rem 1rem;
        text-align: center;
    }
    .page-search-result .empty-list h4{
        font-size: 0.32rem;
        margin-bottom: 0.2rem;
        color: #666;
    }
    .page-search-result .empty-list p{
        color: #999;
    }
    .page-search-result .empty-list a{
        display: inline-block;
        border-radius: 3px;
        color: #f60;
        border: 0.01rem solid #f60;
        padding: 0.1rem 0.6rem 0.13rem 0.6rem;
        margin-top: 0.15rem;
    }
    /*empty-list结束*/
</style>
