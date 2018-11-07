<template>
    <div id="personalbody">
        <router-link to="/mypersonal">
            <mt-cell title="我的简介" style="margin-top: 2px">
            <img slot="icon" src="../assets/icon/me.png">
        </mt-cell>
        </router-link>
        <mt-cell title="我的预约" style="margin-top: 2px">
            <img slot="icon" src="../assets/icon/myorder.png">
        </mt-cell>
        <mt-cell title="我的评价" style="margin-top: 2px">
        <img slot="icon" src="../assets/icon/myecaluate.png">
        </mt-cell>
        <mt-cell title="我的发布" style="margin-top: 2px">
            <img slot="icon" src="../assets/icon/myput.png">
        </mt-cell>
    </div>
</template>

<script>
    export default {
        name:'personalbody',
        data(){
           return{

           }
    }
    }
</script>

<style>
    #personalbody{
        margin-top: 5px;
    }
    #personalbody img{
        width: 30px;
        height: 30px;
    }
</style>
