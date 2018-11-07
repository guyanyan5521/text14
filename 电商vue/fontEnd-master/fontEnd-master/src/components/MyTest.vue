<template>
  <div class="test">
    <!-- <common-header></common-header> -->
    <swipe class="my-swipe">
      <swipe-item class="item1"></swipe-item>
      <swipe-item class="item2"></swipe-item>
      <swipe-item class="item3"></swipe-item>
    </swipe>
    <!-- <common-footer></common-footer> -->

  </div>
</template>

<script>
// import CommonHeader from './common/CommonHeader'
// import CommonFooter from './common/CommonFooter'

import {Swipe, SwipeItem } from 'vue-swipe'
Swipe.auto= false;
export default {
  name: 'test',
  data () {
    return {


    }
  },
  components:{
    // CommonHeader,
    // CommonFooter,

    Swipe,
    SwipeItem
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/vue-swipe.css";
.my-swipe {
  height: 3rem;
  font-size: 30px;
  text-align: center;
}
.my-swipe .mint-swipe-item{
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.item1 {
  background: url('https://img3.doubanio.com/lpic/s27102925.jpg');
  background-size: cover;
}

.item2 {
  background: url('https://img3.doubanio.com/lpic/s6989253.jpg');
  background-size: cover;
}

.item3 {
  background: url('https://img3.doubanio.com/lpic/s24468373.jpg');
  background-size: cover;
}
</style>
