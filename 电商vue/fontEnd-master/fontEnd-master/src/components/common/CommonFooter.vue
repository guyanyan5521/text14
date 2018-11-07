<template>
  <div class="common-footer">
  	<ul class="nav">
      <li><router-link to="/home"><span class="glyphicon glyphicon-home"></span></router-link></li>
      <li><router-link to="/all_class"><span class="glyphicon glyphicon-th-large"></span></router-link></li>
      <li><router-link to="/cart"><span class="glyphicon glyphicon-shopping-cart"></span></router-link></li>
      <li><router-link to="/order"><span class="glyphicon glyphicon-list-alt"></span></router-link></li>
      <li><router-link to="/user"><span class="glyphicon glyphicon-user"></span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'common-footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/common/footer.css";
@import "../../assets/font/iconfont.css";
.common-footer{
  position: fixed;
  bottom: 0;
}
.nav{
  height: .995rem;
  line-height: .995rem;
  width: 6.4rem;
  display: flex;
  border-top: .005rem solid #eee;
  font-size: .4rem;
  background: #fff;
}
.nav li{
  flex:1;
  height: .75rem;
  line-height: .7rem;
}
.nav a{
  color: #888;
  padding: .15rem; 
  /*margin: 0 10px;*/
  text-align: center;
}
.nav a.router-link-active{
  color: #cbe2b0;
  background: #fff;
}
</style>
