<template>
    <div id="order">
        <div id="ordertop" >
            <mt-header fixed title="预约"></mt-header>
            <Orderselect></Orderselect>
        </div>
        <Ordercontent></Ordercontent>
    </div>
</template>
<script>
    import Orderselect from './Orderselect.vue'
    import Ordercontent from './Ordercontent.vue'
    export default {
        name:'order',
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            Orderselect,
            Ordercontent
        }
    }
</script>
<style >


</style>