<template>
  <div id="messages">
    <mt-header title="文章正文">
        <router-link to="./home"  slot="left"><mt-button icon="back">返回</mt-button></router-link>
    </mt-header>
    <div id="mea">
     <div id="meb">
       <img src="../assets/img/2.jpg" id="heimg">
       <div id="nam"><strong>张钰</strong></div>
       <div id="green">5-20 19:32</div>
     </div>
     <div class="cc"><div class="blue">@张钰</div>文章内容：爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群</div>
    </div>
    <div id="message"><strong>评论 10</strong></div>
     <Comessage></Comessage>
    
  </div>
</template>

<script>
import Comessage from "./Comessage.vue";
export default {
  name: 'messages',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     
    }
  },
  components:{
       Comessage
  }
}
</script>

<style>
#mea{
  margin:1%;
}
#nam{
  margin-left:60px;
  margin-top:20px;
}
#message{
  margin:2%;
}
#meb{
  margin:20px;
}
#heimg{
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 100px;
}
.cc{
  background: #eee;
  padding:3%;
}
.blue{
  color:blue;
}
#green{
  font-size: 0.5rem;
  color:#888;
  margin-left:60px;
  margin-top:10px;
}


</style>