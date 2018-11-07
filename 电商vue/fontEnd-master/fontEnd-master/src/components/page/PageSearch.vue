<template>
  <div class="page-search">
  <div class="search">
    <span class="glyphicon glyphicon-search"></span>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="输入您想要的商品" v-model="keyword"><!-- @focus="focus" -->
    <input type="button" name="" class="sea-btn" value="搜索" @click="searchKey">
  </div>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'page-search',
  data () {
    return {
      keyword:this.$route.params.key,
    }
  },
  components:{

  },
  mounted(){
    document.getElementById("exampleInputEmail1").focus();
  },
  methods:{
    searchKey:function(){
      if(this.keyword){
        this.$router.push("/search/result/"+this.keyword);
      }
    }
  },
    watch:{
      '$route'(to,from){
        this.keyword=this.$route.params.key;
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search{
        /*width: 100%;*/
        margin: 0.15rem;
        position: relative;
    }
    .search .form-control{
        width: 4.7rem;
        position: absolute;
        z-index: 998;
        opacity: 0.9; 
        background: #eee;
        margin: 0.15rem;
        padding-left: 0.5rem;
    }
    .search .glyphicon-search{
        position: absolute;
        color: #a3bbbb;
        left: 0.3rem;
        top: 0.33rem;
        z-index: 999;
        opacity: 0.9; 
    }
    .search .sea-btn{
        height: 0.65rem;
        float: right;
        border: none;
        background: #0092d8;
        color: #fff;
        padding: 0 0.2rem;
        margin: 0.15rem;
    }
</style>
