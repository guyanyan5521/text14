/**
 * Created by dell on 2017/8/22.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});
require(["jquery","dialog"],function($,Dialog){
    document.onreadystatechange = function() {
        alert("22");
        if (document.readyState == "complete") {
            var setting = {
                width: "600px",
                height: "4000px",
                title: "登陆",
                content: "login.html"

            };
            var dialog = new Dialog(setting);
            dialog.open();
        }
    }

    $("#open").on("click",function(){

    });
});