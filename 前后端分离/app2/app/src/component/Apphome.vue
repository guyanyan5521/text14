<template>
        <div id="apphome">
            <mt-tabbar v-model="selected" fixed>
                <mt-tab-item id="home">
                    <img slot="icon" src="../assets/icon/home.png">
                    首页
                </mt-tab-item>
                <mt-tab-item id="order">
                    <img slot="icon" src="../assets/icon/myorder.png">
                    预约
                </mt-tab-item>
                <mt-tab-item id="add" >
                    <img slot="icon" src="../assets/icon/put(1).png">
                    发布
                </mt-tab-item>
                <mt-tab-item id="community">
                    <img slot="icon" src="../assets/icon/community.png">
                    社区
                </mt-tab-item>
                <mt-tab-item id="me">
                    <img slot="icon" src="../assets/icon/me.png">
                    我
                </mt-tab-item>
            </mt-tabbar>
            <mt-tab-container v-model="selected" >
                <mt-tab-container-item id="home" >
                    <Homepage></Homepage>
                </mt-tab-container-item>
                <mt-tab-container-item id="order">
                    <Order></Order>
                </mt-tab-container-item>
                <mt-tab-container-item id="add">
                    <Issue></Issue>
                </mt-tab-container-item>
                <mt-tab-container-item id="community">
                    <Community></Community>
                </mt-tab-container-item>
                <mt-tab-container-item id="me">
                    <Personal></Personal>
                </mt-tab-container-item>
            </mt-tab-container>
            <div id="botto"></div>
        </div>

</template>
<script>
    import Homepage from './Home.vue'
    import Order from './Order.vue'
    import Community from './Community.vue'
    import Personal from './Personal.vue'
    import Issue from './Issue.vue'
    export default {
        name: 'apphome',
        data () {
        return {
            msg: '',
            selected:'home'
        }
    } ,
    methods:{

    },
    components:{
        Homepage,
        Order,
        Community,
        Personal,
        Issue
    }
    }
</script>
<style>
   #botto{
       height: 55px;
   }

</style>