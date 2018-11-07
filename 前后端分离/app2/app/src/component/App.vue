<template>
  <div id="app">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}
</script>

<style>
    @font-face{
        font-family: 微软雅黑;
    }
    *{
        margin:0;
        padding:0;
        font-family: 微软雅黑;
    }
    a{
        text-decoration:none;
        color: black;
    }

</style>
