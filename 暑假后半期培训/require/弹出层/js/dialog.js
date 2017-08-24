/**
 * Created by dell on 2017/8/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
define(["jquery"],function($){
    function Dialog(setting){
        this.container = $('<div class="dialog-container"></div>');
        this.main = $('<div class="dialog-main"></div>');
        this.mask = $('<div class="dialog-mask"></div>');
        this.item = $('<div class="dialog-item"></div>');
        this.title = $('<div class="dialog-title"></div>');
        this.close = $('<div class="dialog-close">[X]</div>');
        this.content = $('<div class="content"></div>');
        this.defaultSettings = {
            width:"400px",
            height:"400px",
            title : "弹出层",
            content:""
        };
        $.extend(this.defaultSettings ,setting);
    }
    Dialog.prototype.open = function(){
        this.container.appendTo("body");
        this.container.append(this.mask).append(this.main);
        this.main.append(this.item).append(this.content);
        this.item.append(this.title).append(this.close);
        this.title.append(this.defaultSettings.title);
        this.main.css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height,
            marginTop:-this.defaultSettings.height/2,
            marginLeft:-this.defaultSettings.width/2
        });
        if(this.defaultSettings.content.indexOf(".html") != -1){
            this.content.load(this.defaultSettings.content);
        }else{
            this.content.html(this.defaultSettings.content);
        }
        this.close.on("click",function(){
            this.container.remove();
        }.bind(this));
    };
    return Dialog;
});