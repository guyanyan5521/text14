<template>
    <div id="subjecttype">
        <router-link to="./list/chinese" ><img src="../assets/icon/chinese.jpg" alt="" ></router-link>
        <router-link to="./list/math"><img src="../assets/icon/math.jpg" alt=""></router-link>
        <router-link to="./list/english"><img src="../assets/icon/english.jpg" alt=""></router-link>
        <router-link to="./list/huaxue"><img src="../assets/icon/huaxue.jpg" alt=""></router-link>
        <router-link to="./list/wuli"><img src="../assets/icon/wuli.png" alt=""></router-link>
        <router-link to="./list/shengwu"><img src="../assets/icon/shengwu.png" alt=""></router-link>
    </div>
</template>
<script>
    export default{
        name:'subjecttype',
        data(){
            return{

            }
        }
    }
</script>
<style>
    #subjecttype{
        width: 100%;
        height: 40%;
        margin-top: 3%;
    }
    #subjecttype img{
        height: 30%;
        width: 20%;
        margin: 5%;

    }
</style>