<template>
    <div id="personaltop">
        <div id="setting">
            <mt-button type="default">设置</mt-button>
        </div>
        <mt-button id="cloth" @click="jumpbg">
            <img src="../assets/img/4.png" height="20" width="20" slot="icon">
        </mt-button>
        <div id="center">
            <div id="imgboder">
                <img src="" alt=""/>
            </div>
            <div id="name">
                <h4>郭栖澎</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'personaltop',
        data(){
            return{

            }
        },
        methods:{
            jumpbg(){

            }
        }
    }
</script>

<style>
    #cloth{
        border-radius: 50%;
        margin:2%;
    }
    #personaltop{
        background: #cccccc;
        width: 100%;
        margin-top: 0;
        overflow: hidden;
    }
    #setting{
        float: right;
        margin:2%;
    }
    #imgboder{
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: white;
        width: 100px;
        height: 100px;
        margin: 0 auto;
        overflow: hidden;
    }
    #center{
        margin: 10% auto;
    }
    #name{
        text-align: center;
        margin-top: 5%;
    }
</style>
