<template>
  <div id="regist">
    <mt-header title="注册">
      <router-link to="./login" slot="left">
        <mt-button icon="back" >返回</mt-button>
      </router-link>
    </mt-header>
    <div id="red">
      <Relogo></Relogo>
    </div>
    <div id="rea">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="确认密码" placeholder="请输入确认密码" type="password" v-model="password"></mt-field>
    </div>
    <div id="reb">
      <div id="rec">
        <input type="checkbox"/>已阅读并同意www.alshcasl
      </div>
        <mt-button type="primary" size="large">注册</mt-button>
    </div>
  </div>
</template>

<script>
import Relogo from "./Relogo.vue";
export default {
  name: 'regist',
  data () {
    return {
        username:'',
        password:''
    }
  },
  components:{
       Relogo
  }
}
</script>

<style>
  #rea,#reb,#red{
    margin:18% auto;
  }
  #rec{
    margin:8%;
  }
  
</style>
