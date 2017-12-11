<template>
  <div class="photo">
    <common-header title="photo"></common-header>
    <common-footer></common-footer>

  </div>
</template>

<script>
  import CommonHeader from "../common/CommonHeader"
  import CommonFooter from "../common/CommonFooter"
  import Axios from "axios"


  export default {
    name: 'hello',
    data () {
    return {

    }

  },


  components: {
    CommonHeader,


      CommonFooter,

  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
