<template>
  <div class="page-all-class">
    <div class="content">
      <ul>
        <li v-for="n in 8" :class="nl[n-1]">
          <router-link :to="'/classify/'+classify[n-1]+'/1'" tag="div">
            <i class="iconfont" :class="classifyIconColor[n-1]"></i>
            <p>{{classify[n-1]}}</p>
          </router-link>
        </li>
        <!-- <li class="a1">
          <div>
            <i class="iconfont">&#xe69d;</i>
            <p>居家</p>
          </div>
          
        </li>
        <li class="a2">
          <div>
            <i class="iconfont">&#xe669;</i>
            <p>农副</p>
          </div>
        </li>
        <li class="a3">
          <div>
            <i class="iconfont">&#xe61e;</i>
            <p>干货</p>
          </div>
        </li>
        <li class="a4">
          <div>
            <i class="iconfont">&#xe602;</i>
            <p>零食</p>
          </div>
        </li>
        <li class="a5">
          <div>
            <i class="iconfont">&#xe650;</i>
            <p>水产</p>
          </div>
        </li>
        <li class="a6">
          <div>
            <i class="iconfont">&#xe601;</i>
            <p>酒茶</p>
          </div>
        </li>
        <li class="a7">
          <div>
            <i class="iconfont">&#xe66f;</i>
            <p>养生</p>
          </div>
        </li>
        <li class="a8">
          <div>
            <i class="iconfont">&#xe65c;</i>
            <p>生鲜</p>
          </div>
        </li> -->
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonFooter from '../common/CommonFooter'
// import {Swipe, SwipeItem } from 'vue-swipe'
import $ from 'jquery'
export default {
  name: 'page-all-class',
  data () {
    return {
      nl:["a1","a2","a3","a4","a5","a6","a7","a8"],
      classify:["农副","干货","零食","水产","酒茶","养生","生鲜","居家"],
      classifyIcon:["icon-mifan","icon-mogu","icon-lingshi-copy","icon-haixian","icon-cha","icon-shiwu","icon-shengxian","icon-jiaju"],
      classifyIconColor:["icon-mifan i1","icon-mogu i2","icon-lingshi-copy i3","icon-haixian i4","icon-cha i5","icon-shiwu i6","icon-shengxian i7","icon-jiaju i8"],
    }
  },
  components:{
    CommonFooter
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import "../../assets/css/vue-swipe.css";*/
@import "../../assets/font/iconfont.css";
</style>
<style src="../../assets/css/page/allclass.css" scoped></style>