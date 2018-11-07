<template>
    <div id="tofilter">
     <mt-cell title="选择">
            <mt-button type="default" icon="close" slot="right"></mt-button>
     </mt-cell>
     <mt-cell title="城市" slot="left" class="selecttop">
     </mt-cell>
        <ul class="filtercontent">
            <li v-for="addr in addrs" @click="changcolor(addr)" v-bind:class="{ active:isActive }">{{addr}}</li>
        </ul>
        <mt-cell title="年级" slot="left" class="selecttop">
        </mt-cell>
        <ul class="filtercontent">
            <li v-for="grade in grades"  @click="changcolor()" v-bind:class="{ active:isActive }">{{grade}}</li>
        </ul>
        <mt-cell title="学科" slot="left" class="selecttop">
        </mt-cell>
        <ul class="filtercontent">
            <li v-for="subject in subjects"  @click="changcolor()"  v-bind:class="{ active: isActive }">{{subject}}</li>
        </ul>
    <mt-cell title="">
        <mt-button type="default">确认</mt-button>
    </mt-cell>
    </div>
</template>
<script>
    export default{
        name:'tofilter',
        data(){
            return{
               addrs:['哈尔滨','北京'],
               grades:['小学','初中','高中'],
               subjects:['语文','数学','英语','物理','化学','生物'] ,
                isActive:true
            }
            },
        methods:{
           changcolor:function (item) {
              item.isActive=!item.isActive
           }
        }
    }
</script>
<style>
   #tofilter{
       height: 100%;
   }
   #tofilter ul{
       width: 300px;
       height: 100px;
   }
   #tofilter li{
       display: block;
       width: 60px;
       height: 40px;
       border: 1px solid #eee;
       float: left;
       text-align: center;
       line-height: 40px;
       margin-right: 10px;
       border-radius: 10px;
   }



</style>