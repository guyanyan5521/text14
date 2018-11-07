<template>
  <div id="cograde">
    <div class="mar" v-for="mes in mess">
     <mt-cell :title="mes.name">
      <img slot="icon" :src="mes.imgs" width="40" height="40">
      评分<p style="color: #f9c855" id="wid">{{mes.grade}}</p>
    </mt-cell>
     <div id="mg">
        {{mes.comment}}
     </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'cograde',
      data () {
        return {
          msg: '返回',
          mess:[
       {
         name:"张钰",
         comment:"阿里可能大你安卡拉我的期望了昆明气温看看嘛看到没",
         imgs:"/src/assets/img/3.jpg",
         grade:"*****"
       },
       {
         name:"宋佳凡",
         comment:"阿里可能大你安卡拉我的期望了昆明气温看看嘛看到没大漫无目的全文看到我老婆看到抛弃我怕蔷薇科蔷薇科",
         imgs:"/src/assets/img/4.jpg",
         grade:"***"
       },
       {
         name:"郭栖澎",
         comment:"阿里可能大你安卡拉我的期望了昆明气温看看嘛看到没大漫无目非我二哥二五五二位为为犯桃花呀句的全文看到我老婆看到抛弃我怕蔷薇科蔷薇科",
         imgs:"/src/assets/img/5.jpg",
         grade:""
       }
      ]
        }
      }
    }

</script>

<style>
#wid{
  width: 40px;
}
#mg{
  margin:2%;
}
.mar{
  margin:10px;
}
</style>
