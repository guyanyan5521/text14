/**
 * Created by dell on 2017/8/22.
 */
requirejs.config({
        paths:{
            jquery:'jquery-1.11.2'
        }
    }
);
define(["jquery"],function($){
    function Carousel(setting){
        this.container = $('<div class="carousel-container"></div>');
        this.img = $('<div class="carousel-img"></div>');
        this.number = $('<div class="carousel-number"></div>');
        this.per = $('<div class="carousel-per"></div>');
        this.next = $('<div class="carousel-next"></div>');
        this.defaultSettings = {
            selector:"container1",
            imgArr:[],



        };
    }
});

