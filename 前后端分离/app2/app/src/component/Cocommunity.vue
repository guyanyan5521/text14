<template>
  <div id="cocommunity">
      <router-link to="./message">
          <div id="aa" v-for="tab in tabs">
              <div id="bb">
                  <img :src="tab.imgs" id="heimg">
                  <div id="names"><strong>{{ tab.name }}</strong></div>
                  <div id="green">{{ tab.time }}</div>
              </div>
              <div class="ccc">
                  <div class="blue">@{{ tab.aite }}</div>
                  {{ tab.content }}
              </div>
              <Communitysay></Communitysay>
          </div>
      </router-link>
  </div>
</template>

<script>
import Communitysay from './Communitysay.vue'
export default {
  name: 'cocommunity',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tabs:[
            {
                id:'1',
               name: '张钰',
               time: '5-20 19:32',
               content: '爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群',
               aite: '宋佳凡',
               imgs:'/src/assets/img/1.jpg'
            },
            {
                id:'2',
               name: '郭栖澎',
               time: '6-01 21:54',
               content: '人格谈何容易截图可以人个体户语句块气发多少个同样具有交流群',
               aite: '张钰',
               imgs:'/src/assets/img/2.jpg'
            },
            { id:'3',
               name: '宋佳凡',
               time: '6-05 04:22',
               content: '刹车大商股份个人体会依据人个体户语句块开盘即使不会弄庇护农机不会omni比很多我去Joan佛全文弄弄欺负我弄全文农夫欧文敲键盘键盘去',
               aite: '郭栖澎',
               imgs:'/src/assets/img/3.jpg'
            }
           ]
    }
  },
  components:{
      Communitysay
  }
}
</script>

<style>
#aa{
  border-bottom:5px solid #dee;
}
#names{
  margin-left:60px;
  margin-top:15px;
}
#bb{
  margin:10px;
}
#heimg{
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 100px;
}
.ccc{
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
#btn{
    float: right;
}

</style>