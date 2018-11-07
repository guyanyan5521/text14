<template>
    <div id="login">
        <mt-header title="登录">
            <router-link to="/regist" slot="right"><mt-button>注册</mt-button></router-link>
            <router-link to="/" slot="left"><mt-button icon="back">返回</mt-button></router-link>
        </mt-header>
        <div id="lod">
            <Relogo></Relogo>
        </div>
        <div id="loa">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </div>
        <div id="lob">
            <mt-button type="primary" size="large">登录</mt-button>
        </div>
    </div>
</template>

<script>
    import Relogo from "./Relogo.vue";
    export default {
        name: 'login',
        data () {
        return {
            username:'',
            password:''
        }
    },
    components:{
        Relogo
    }
    }
</script>

<style scoped>
    #loa,#lob,#lod{
        margin:18% auto;
    }


</style>