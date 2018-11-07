<template>
    <div id="background">
        <div id="white">
            <img src="../assets/img/1.jpg" alt="">
            <img src="../assets/img/2.jpg" alt="">
            <img src="../assets/img/3.jpg" alt="">
            <img src="../assets/img/4.jpg" alt="">
            <img src="../assets/img/5.jpg" alt="">
            <img src="../assets/img/6.jpg" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        name:'background',
        data(){
            return{

            }
        }
    }
</script>

<style>
    #white img{
        width: 40%;
        height: 100%;
        margin:3%;
        border-radius: 10%;
    }
    #white{
        width: 100%;

        padding-left:3%;
        margin-top:40%;
    }
    #background{
        background: #fff;
        position: relative;
        width: 100%;

    }
</style>
