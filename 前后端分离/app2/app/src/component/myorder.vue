<template>

  <div >
<mt-header title="我的预约">
    <mt-button icon="back" slot="left">返回</mt-button>   
 </mt-header>
<mt-cell title="孙天翼" label="哈尔滨理工大学 硕士" class="name" v-for="n in 10">
  <p style="color: #888">已预约</p>
  <img slot="icon" src="../assets/icon/2.jpg" width="40" height="40">
</mt-cell>

  </div>

</template>

<script>

</script>

<style>
.name{
  margin-top:2%;
}
</style>