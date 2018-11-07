<template>
    <div id="search">
        <mt-search v-model="value">
            <mt-cell>

            </mt-cell>
        </mt-search>
    </div>
</template>

<script>
    export default {
        name:'search',
        data(){
          return{
             value:''
          }
    }
    }
</script>

<style>
  #search{
    height: 52px;
  }
</style>
