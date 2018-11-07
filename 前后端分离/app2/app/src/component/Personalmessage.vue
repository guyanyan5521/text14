<template>
  <div id="personalmessage">
    <mt-header title="个人详情">
        <router-link to="./home" slot="left"><mt-button icon="back" >返回</mt-button></router-link>
    </mt-header>
<mt-navbar v-model="selected">
  <mt-tab-item id="1">简介</mt-tab-item>
  <mt-tab-item id="2">课程</mt-tab-item>
  <mt-tab-item id="3">评价</mt-tab-item>
</mt-navbar>
<mt-tab-container swipeable v-model="selected">
  <mt-tab-container-item id="1"> 
    <div id="bgs">
      <img src="../assets/img/1.jpg" id="bgimgs">
    </div> 
    <div id="containers">
     <img src="../assets/img/2.jpg" id="heimgs">
     <div id="namess"><strong>张钰</strong> | 男</div>
     <div id="greens">年龄：21</div>
     <div id="blues">厚德载物，自强不息</div>
    </div>
    <div id="bmessage">
      <div class="blues">&基本信息&</div>
      <div class="cmessage">
       <div class="mars">授课年级：初中 | 高中</div>
       <div class="mars">擅长科目：数学 | 语文</div>
       <div class="mars">地址：黑龙江省哈尔滨市</div>
      </div>
      
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell-swipe v-for="tab in tabs"
  :title="tab.title"
  :label="tab.price"
  class="mars"
  :right="[
    {
      content: '预约',
      style: { background: 'cornflowerblue', color: '#fff' },
    }
  ]"></mt-cell-swipe>

  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <Cograde></Cograde>
  </mt-tab-container-item>
</mt-tab-container>
    
  </div>
</template>

<script>
import Cograde from "./Cograde.vue";
export default {
  name: 'personalmessage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:'1',
      tabs:[
       {
         title:'初中【英语】',
         price:'￥200/小时'
       },
       {
         title:'高中【数学】',
         price:'￥400/小时'
       },
       {
         title:'小学【语文】',
         price:'￥100/小时'
       },
       {
         title:'初中【语文】',
         price:'￥300/小时'
       },
       {
         title:'高中【语文】',
         price:'￥500/小时'
       }
      ]
      
    }
  },
  components:{
       Cograde
  }
}
</script>

<style>
.mint-tab-container-item{
        height: 100%;
    }

#containers{
  margin:5%;
}
#namess{
  margin-left:90px;
}
#heimgs{
  position: absolute;
  height: 80px;
  width: 80px;
  border-radius: 100px;
}
.cmessage{
  background: #c8c8cd;
  padding:3%;
}
.mars{
  margin:10px;
}
.blues{
  color:blue;
  margin:1%;
}
#blues{
  color:blue;
  margin-left:90px;
  margin-top:10px;
}
#greens{
  color:green;
  margin-left:90px;
  margin-top:10px;
}
  #bgs{
    width: 100%;
    height: 55%;
  }
  #bgimgs{
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }



</style>

