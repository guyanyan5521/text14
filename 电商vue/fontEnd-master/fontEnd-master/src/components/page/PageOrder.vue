<template>
  <div class="page-order">
    <ul class="nav">
      <li><router-link to="/order/all">全部</router-link></li>
      <li><router-link to="/order/wait_pay">待付款</router-link></li>
      <li><router-link to="/order/wait_go">待发货</router-link></li>
      <li><router-link to="/order/wait_arrive">待收货</router-link></li>
      <li><router-link to="/order/on_arrive">已收货</router-link></li>
    </ul>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
export default {
  name: 'page-order',
  data () {
    return {


    }
  },
  components:{
    CommonHeader,
    CommonFooter
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  height: .795rem;
  width: 6.4rem;
  display: flex;
  position: fixed;
  border-bottom: .005rem solid #eee;
  font-size: .23rem;
  background: #fff;
  z-index: 100;
}
.nav li{
  flex:1;
  height: .75rem;
  line-height: .7rem;
}
.nav a{
  color: #333;
  padding: 0;
  margin: 0 10px;
  text-align: center;
}
.nav a.router-link-active{
  color: #08dc03;
  background: #fff;
  border-bottom: .05rem solid #08dc03;
}

</style>
