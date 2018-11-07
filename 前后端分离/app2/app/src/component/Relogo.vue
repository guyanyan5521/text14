<template>
    <div id="relogo">
        <img src="../assets/img/logo.png" alt="" id="logo">
    </div>
</template>
<script>
    export default {
        name: 'relogo',
        data () {
        return {
            msg: ''
        }
    }
    }

</script>

<style>
    #relogo{
        height: 100%;
        width: 100%;
    }
    #logo{
        height: 100%;
        width: 50%;
        margin:0 25% 0 25%;
    }
</style>
