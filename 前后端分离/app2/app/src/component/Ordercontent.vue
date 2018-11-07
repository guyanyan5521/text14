<template>
    <div id="ordercontent">
        <router-link to="./personalmessage">
            <mt-cell class="eachorder"
                   v-for ='n in 30'
                   title="数学老师"
                   label="06-02">
            <span style="color: red">
                100-150/小时
            </span>
            <img slot="icon" src="../assets/img/1.jpg" width="40" height="40">
        </mt-cell></router-link>
    </div>
</template>

<script>
   export default {
       name:'Ordercontent',
       data(){
         return{

         }
   },
   method:{

   }
   }
</script>

<style>
    #ordercontent{
        margin-top: 80px;
        overflow: hidden;
    }
    .eachorder{
        height: 60px;
        margin-top: 2%;
    }
</style>
