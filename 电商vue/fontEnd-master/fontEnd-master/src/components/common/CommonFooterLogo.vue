<template>
  <div class="common-footer-logo">
  	<div class="navv">
  		<ul>
  			<router-link tag="li" to="/home">店铺主页</router-link>	
  			<router-link tag="li" to="/user">会员中心</router-link>	
  			<router-link tag="li" to="/aboutus">关于我们</router-link>	
  			<router-link tag="li" to="/aboutus">店铺信息</router-link>	
  		</ul>
  	</div>
  	<img src="../../assets/img/logo.png" alt="">
  	<p>龙江原产递</p>
  </div>
</template>

<script>
export default {
  name: 'common-footer-logo',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.common-footer-logo{
	/*background: #f7f8f2;*/
	background: #fafafa;
}
.common-footer-logo .navv{
	height: .7rem;
	background: #fafafa;
}
.common-footer-logo .navv ul{
	height: .7rem;
	width: 5.8rem;
	display: flex;
	margin: 0 auto;
	border-bottom: .001rem solid #ccc;
	list-style: none;
	padding: 0;
}
.common-footer-logo .navv ul li{
	height: .7rem;
	line-height: .7rem;
	flex: 1;
	text-align: center;
	list-style: none;
}
.common-footer-logo img{
	width: 2.4rem;
	height: 1.5rem;
	margin: .1rem 2rem;
}
.common-footer-logo p{
	width: 100%;
	text-align: center;
	font-size: .3rem;
	font-weight: bolder;
	font-family: "华文新魏","华文行楷";
	margin: 0;

}
</style>
