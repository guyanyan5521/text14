<template>
    <div id="fabiao">
        <mt-header title="发表">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div id="put">
            <mt-field label="" placeholder="" type="textarea" rows="6" v-modal="introduction"></mt-field>
        </div>
        <div id="think">
            <mt-button type="primary">发表</mt-button>
        </div>
    </div>
</template>
<script>
    export default{
        name:'fabiao',
        data(){
            return{
                introduction:''
            }
        }
    }
</script>
<style>
</style>