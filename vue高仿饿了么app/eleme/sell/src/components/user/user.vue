<template>
  <div class="user">
    <div>user</div>
    <div>{{userId}}</div>
  </div>

</template>
<script>
    export default {
        name: 'user',
      computed: {
        userId () {
          return this.$route.params.id;
        }
      }
    };
</script>

<style scoped>

</style>
