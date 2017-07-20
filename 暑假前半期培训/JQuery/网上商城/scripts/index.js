/**
 * Created by dell on 2017/7/19.
 */
$(function(){
    var nowIndex = 0;
    var timer = null;
    $menu = $("#jnImageroll div a");
    $menu.on("mouseover",function(){
        nowIndex =  $(this).index();
        changeImage (nowIndex);
        });
    $("#JS_imgWrap ").hover(function(){
        if(timer){
            clearInterval (timer);
        }
    },function(){
        timer = setInterval (function(){
            changeImage (nowIndex );
            nowIndex ++;
            if(nowIndex  ==  $menu.length){nowIndex = 0;}

        },1000);
    }).trigger ("mouseleave");
    });
function changeImage(nowIndex){
    $menu.eq(nowIndex).addClass("chos").siblings ().removeClass("chos");
    $("#JS_imgWrap img").eq(nowIndex).stop(false, true).fadeIn().siblings().stop(false, true).fadeOut();

}
