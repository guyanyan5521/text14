<template>
    <div id="personal">
            <Personaltop v-if="xianshi"></Personaltop>
            <Personalload v-if="!xianshi"></Personalload>
            <Personalbody ></Personalbody>
            <Background v-if="bg"></Background>
    </div>
</template>

<script>
    import Personaltop from './Personaltop.vue'
    import Personalload from './Personalload.vue'
    import Personalbody from './Personalbody.vue'
    import Background from './Background.vue'
    export default {
        name:'personal',
        data(){
        return{
            xianshi:false,
            bg:false


        }
    },
    methods: {

    },
    components:{
        Personaltop,
        Personalbody,
        Personalload,
        Background
    }
    }
</script>

<style>

</style>
