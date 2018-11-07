<template>
    <div id="community">
      <Top></Top>
        <Search></Search>
        <Cocommunity></Cocommunity>
    </div>
</template>

<script>
    import Top from './Top.vue'
    import Search from './Search.vue'
    import Cocommunity from './Cocommunity.vue'
    export default {
        name:'community',
        data(){
        return{


        }
    },
    components:{
        Top,
        Search,
        Cocommunity
    }
    }
</script>

<style>
  
</style>
