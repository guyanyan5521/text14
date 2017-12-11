<template>
  <div class="top250">

      <div class="movie-img">
        <img :src="img" alt=""/>
      </div>
      <div class="movie-title">
      <span>
      {{title}}
      </span>
        <p>
          {{desc}}
          ({{year}}) (平均{{avg}}分)
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  props:['title','avg','desc','year','img'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top250 {
  /*margin-top: 2rem;*/
  padding: 0.4rem;
  margin: 0.4rem 0;
}
 .movie-img {
   float: left;
   width: 0.8rem;
   height: 0.8rem;
 }
.movie-img img{
  width : 100%;
  height: 100%;
}
.movie-title{
  float: left;
  width: 4rem;
  margin-left: 0.6rem;
  border-bottom:1px solid #999999;
}
</style>
