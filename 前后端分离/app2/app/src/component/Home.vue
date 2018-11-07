<template>
    <div id="homepage">
        <div id="homeswip">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img src="../assets/img/homepage1.jpg" alt=""/></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/homepage2.jpg" alt=""/></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/homepage3.jpg" alt=""/></mt-swipe-item>
            </mt-swipe>
        </div>
        <Homeselect></Homeselect>
    </div>

</template>
<script>
    import Homeselect from './Homeselect.vue'
    export default {
        name: 'homepage',
        data () {
        return {

        }
    } ,
    methods:{

    },
    components:{
        Homeselect,

    }
    }
</script>

<style scoped>

    #homeswip{
        height: 250px;
    }
    #homepage img{
        width: 100%;
        height: 100%;
    }

</style>
