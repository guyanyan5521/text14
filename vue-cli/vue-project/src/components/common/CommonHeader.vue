<template>
  <div class="header" :style ="{background:bgcolor}">
    <button>首页</button>
    <h2>{{title}}</h2>

  </div>
</template>

<script>
export default {
  name: '',
  props:['title','bgcolor'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  height: 1rem;
  background: rgb(33, 150, 243);
  display:flex;
  position: fixed;
  top:0;
  width: 100%;
}
  .header button{

    width: 1rem;
    height:1rem;
    color:#FFFFff;
    background: rgb(33, 150, 243);
    border:0;
  }
  .header h2{
    text-align: center;
    flex:1;
    color:#FFFFff;
    text-indent: -1rem;

  }

</style>
