<template>
  <div class="page-comment">
    <router-link to="/home">
        <div class="evaluation-title">
          <span class="glyphicon glyphicon-arrow-left">&nbsp发表评价</span>
        </div>
    </router-link>
        <div class="evaluation-box">
          <img src="../../assets/img/m01.jpg" alt="">
          <span>描述相符</span>
          <div class="stars">
            <div class="stars-empty">
              <span class="glyphicon glyphicon-star-empty star-1 star-z"></span>
              <span class="glyphicon glyphicon-star-empty star-2 star-z"></span>
              <span class="glyphicon glyphicon-star-empty star-3 star-z"></span>
              <span class="glyphicon glyphicon-star-empty star-4 star-z"></span>
              <span class="glyphicon glyphicon-star-empty star-5 star-z"></span>
            </div>
            <div class="stars-solid-one">
              <span class="glyphicon glyphicon-star"></span>
            </div>
            <div class="stars-solid-two">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
            </div>
            <div class="stars-solid-three">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
            </div>
            <div class="stars-solid-fore">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
            </div>
            <div class="stars-solid-five">
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
              <span class="glyphicon glyphicon-star"></span>
            </div>
          </div>
          <span class="evaluation-box-buhao evaluation-box-pingjia">不好</span>
          <span class="evaluation-box-cha evaluation-box-pingjia">差</span>
          <span class="evaluation-box-yiban evaluation-box-pingjia">一般</span>
          <span class="evaluation-box-lianghao evaluation-box-pingjia">良好</span>
          <span class="evaluation-box-youxiu evaluation-box-pingjia">优秀</span>

        </div>
    <textarea name="" id="" cols="30" rows="10" class="evaluation-content" >
    </textarea>
    <div>
      <button class="evaluation-button ">提交</button>
    </div>




  </div>

</template>

<script>
  import $ from 'jquery';
  export default {
    name: 'page-comment',
    data () {
      return {


      }
    },
    components:{

    },
    mounted(){
      var $star1 = $('.stars-solid-one');
      var $star2 = $('.stars-solid-two');
      var $star3 = $('.stars-solid-three');
      var $star4 = $('.stars-solid-fore');
      var $star5 = $('.stars-solid-five');
      var $stars1 = $('.star-1');
      var $stars2 = $('.star-2');
      var $stars3 = $('.star-3');
      var $stars4 = $('.star-4');
      var $stars5 = $('.star-5');
      var $eb = $('.evaluation-box-buhao');
      var $ec = $('.evaluation-box-cha');
      var $ey = $('.evaluation-box-yiban');
      var $el = $('.evaluation-box-lianghao');
      var $ex = $('.evaluation-box-youxiu');

      $stars1.on('click',function(){
//          alert('haha')
          $star1.hide();
          $star2.hide();
          $star3.hide();
          $star4.hide();
          $star5.hide();
          $eb.hide();
          $ec.hide();
          $ey.hide();
          $el.hide();
          $ex.hide();
          $eb.show()
          $star1.show();
      });

      $stars2.on('click',function(){
//          alert('haha')
        $star1.hide();
        $star2.hide();
        $star3.hide();
        $star4.hide();
        $star5.hide();
        $eb.hide();
        $ec.hide();
        $ey.hide();
        $el.hide();
        $ex.hide();
        $ec.show()
        $star2.show();
      });
      $stars3.on('click',function(){
//          alert('haha')
        $star1.hide();
        $star2.hide();
        $star3.hide();
        $star4.hide();
        $star5.hide();
        $eb.hide();
        $ec.hide();
        $ey.hide();
        $el.hide();
        $ex.hide();
        $ey.show()
        $star3.show();
      });
      $stars4.on('click',function(){
//          alert('haha')
        $star1.hide();
        $star2.hide();
        $star3.hide();
        $star4.hide();
        $star5.hide();
        $eb.hide();
        $ec.hide();
        $ey.hide();
        $el.hide();
        $ex.hide();
        $el.show()
        $star4.show();
      });
      $stars5.on('click',function(){
//          alert('haha')
        $star1.hide();
        $star2.hide();
        $star3.hide();
        $star4.hide();
        $star5.hide();
        $eb.hide();
        $ec.hide();
        $ey.hide();
        $el.hide();
        $ex.hide();
        $ex.show()
        $star5.show();
      });
//      $stars1.mouseover(function(){
////          alert('haha')
//        $star1.hide();
//        $star2.hide();
//        $star3.hide();
//        $star4.hide();
//        $star5.hide();
//        $star1.show();
//      });
//      $star1.on('click',function(){
////          alert('haha')
//        $star1.hide();
//        $star2.hide();
//        $star3.hide();
//        $star4.hide();
//        $star5.hide();
//        $star1.show();
//      });
//      $star2.on('click',function(){
////          alert('haha')
//        $star1.hide();
//        $star2.hide();
//        $star3.hide();
//        $star4.hide();
//        $star5.hide();
//        $star2.show();
//      });
//      $star3.on('click',function(){
////          alert('haha')
//        $star1.hide();
//        $star2.hide();
//        $star3.hide();
//        $star4.hide();
//        $star5.hide();
//        $star3.show();
//      });
//      $star4.on('click',function(){
////          alert('haha')
//        $star1.hide();
//        $star2.hide();
//        $star3.hide();
//        $star4.hide();
//        $star5.hide();
//        $star4.show();
//      });
//      $star5.on('click',function(){
////          alert('haha')
//        $star1.hide();
//        $star2.hide();
//        $star3.hide();
//        $star4.hide();
//        $star5.hide();
//        $star5.show();
//      });


    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/page/comment.css";
</style>
