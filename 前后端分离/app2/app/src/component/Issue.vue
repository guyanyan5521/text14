<template>
    <div id="issue">
        <mt-header title="发布">
        </mt-header>
            <mt-cell title="地点" slot="left" class="selecttop">
            </mt-cell>
            <ul class="iscontent">
                <li v-for="addr in addrs">{{addr}}</li>
            </ul>
            <mt-cell title="年级" slot="left" class="selecttop">
            </mt-cell>
            <ul class="iscontent">
                <li v-for="grade in grades" >{{grade}}</li>
            </ul>
            <mt-cell title="学科" slot="left" class="selecttop">
            </mt-cell>
            <ul class="iscontent">
                <li v-for="subject in subjects">{{subject}}</li>
            </ul>
            <mt-cell title="价格" slot="left" class="selecttop">
            </mt-cell>
            <ul class="iscontent">
                <li v-for="money in moneys">{{money}}</li>
            </ul>
            <div id="beizhu">
        </div>
            <mt-field label="备注" type="textarea" rows="4" v-model="introduction" class="beizhu"></mt-field>
        <div id="isb">
            <mt-button type="primary" size="large">发布</mt-button>
        </div>
    </div>
</template>

<script>
    import Relogo from "./Relogo.vue";
    export default {
        name: 'issue',
        data () {
            return {
                addrs:['哈尔滨','北京'],
                grades:['小学','初中','高中'],
                subjects:['语文','数学','英语','物理','化学','生物'],
                moneys:['50','100','150','200','250','300'],
                introduction:''
            }
        },
        components:{
            Relogo
        }
    }
</script>

<style>

    #issue ul{
        width: 100%;
        height:30%;
        margin-top: 5px;
    }
    #issue li{
        display: block;
        width: 60px;
        height: 40px;
        border: 1px solid #eee;
        float: left;
        text-align: center;
        line-height: 40px;
        margin: 10px;
        border-radius: 10px;
    }
    .selecttop{
        width: 100%;
    }
    .beizhu{
        display: block;
        width: 100%;
    }

</style>