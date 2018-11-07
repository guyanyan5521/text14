<template>
    <div id="list">
        <mt-header title="教师列表">
            <mt-button icon="back" @click="back" slot="left">返回</mt-button>
        </mt-header>
        <div id="lia" v-for="tab in tabs">
            <img :src="tab.imgs" id="liimg">
            <div id="compellation"><strong>{{tab.name}}</strong> | {{tab.age}}</div>
            <div id="discipline">{{tab.subject}}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'list',
        data () {
            return {
                tabs:[
                    {
                        imgs:'/src/assets/img/4.jpg',
                        name:'张钰',
                        age:'女',
                        subject:'数学'
                    },
                    {
                        imgs:'/src/assets/img/3.jpg',
                        name:'宋佳凡',
                        age:'男',
                        subject:'语文'
                    },
                    {
                        imgs:'/src/assets/img/5.jpg',
                        name:'郭昔澎',
                        age:'男',
                        subject:'英语'
                    },
                    {
                        imgs:'/src/assets/img/6.jpg',
                        name:'孙天翼',
                        age:'男',
                        subject:'物理'
                    }
                ]
            }
        },
        methods:{
          back(){
              window.history.go(-1);
          }
        },
        components:{

        }
    }
</script>

<style>
    #lia{
        margin:2%;
        padding-bottom:18px;
        border-bottom:1px solid #ccc;
    }
    #liimg{
        position: absolute;
        height: 60px;
        width: 60px;
        border-radius: 100px;
    }
    #compellation{
        margin-left:70px;

    }
    #discipline{
        margin-left:70px;
        margin-top:10px;
        color:blue;
    }
</style>