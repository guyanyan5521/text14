<template>
    <div id="orderselect" >
        <table width="100%">
            <tr>
                <td align="center">按时间</td>
                <td align="center">按人气</td>
                <td align="center">按价格</td>
                <td align="center" @click="clickpopup">按条件</td>
            </tr>
        </table>
        <mt-popup
                class="popupstyle"
                position="right"
                closeOnClickModal="true"
                v-model="popupVisible">
            <Tofilter></Tofilter>
        </mt-popup>
    </div>
</template>

<script>
    import Tofilter from './Tofilter.vue'
    export default {
        name: 'orderselect',
        data() {
        return {
            popupVisible:false
        }
    },
    methods: {
        clickpopup(){
            this.popupVisible=true
        }

    },
    components: {
        Tofilter
    }
    }

</script>

<style scoped>
    #orderselect{
        background: #fff;
        height: 40px;
        width: 100%;
        border-bottom: 1px solid #cccccc;
        border-top: 1px solid #cccccc;
        position: fixed;
        top:40px;
        z-index: 50;
    }
    #orderselect td{
        line-height: 40px;
        border-right: 1px solid #cccccc;
    }
    #orderselect td:last-child{
        border-right:none;
    }
</style>
