<template>
     <div id="personalload">
         <router-link to="./login"><mt-button type="primary" id="loadbutton">登陆</mt-button></router-link>
     </div>
</template>

<script>
     export default {
         name:'personalload',
         data(){
           return{

           }
     },
     methods:{

     }
     }
</script>

<style>
    #personalload{
        background: #26a2ff;
        width: 100%;

        margin-top: 0;
    }
    #loadbutton{
        width:20%;
        margin: 30% 40% 30% 40%;
        border: 1px solid white;
    }

</style>
