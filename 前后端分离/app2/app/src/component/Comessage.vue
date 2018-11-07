<template>
  <div id="comessage">
    <div id="mess" v-for="tab in tabs">
     <mt-cell :title="tab.name">
       <span>{{ tab.time }}</span>
       <img slot="icon" :src="tab.imgs" width="30" height="30">
     </mt-cell>
     <div>
        {{tab.content}}
     </div>
        <Communitysay></Communitysay>
    </div>
  </div>
</template>
<script>
    import Communitysay from './Communitysay.vue'
    export default {
      name: 'comessage',
      data () {
        return {
          msg: '返回',
          tabs:[
            { 
               name: '张钰',
               time: '5-20 19:32',
               content: '爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群爱谁谁爱的啊啊打飞机飞机去就级气浮机勤恳起来可能勤恳胸腔和就去哪交流群',
               imgs:'/src/assets/img/1.jpg'
            },
            { 
               name: '郭栖澎',
               time: '6-01 21:54',
               content: '人格谈何容易截图可以人个体户语句块气发多少个同样具有交流群',
               imgs:'/src/assets/img/2.jpg'
            },
            { 
               name: '宋佳凡',
               time: '6-05 04:22',
               content: '刹车大商股份个人体会依据人个体户语句块开盘即使不会弄庇护农机不会omni比很多我去Joan佛全文弄弄欺负我弄全文农夫欧文敲键盘键盘去',
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

#mess{
  margin:1%;

}
</style>
