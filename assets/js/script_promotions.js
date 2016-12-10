/**
 * Created by ignaciogcl on 10/12/16.
 */
$(document).ready(function () {
    $('.preloader-background').delay(1700).fadeOut('slow');
    $('.preloader-wrapper')
        .delay(1700)
        .fadeOut();


    $('.div-promotion-taza').hover(function () {
        $('.hover-content-taza').css({
            "position": "absolute",
            "display": "inline-block",
            "vertical-align":"middle",
            "background-color": "#8c2420",
            "color": "#ffffff",
            "height": "100%",
            "width": "100%",
            "right": "0",
            "bottom": "0",
            "font-size": "1.3em"
        }).animate({opacity:'1'},500);
    }, function(){
        $('.hover-content-taza').css({
            "display":"none"
        }).animate({opacity:'0'},500);
    });

    $('.div-promotion-boligrafo').hover(function () {
        $('.hover-content-boligrafo').css({
            "position": "absolute",
            "display": "block",
            "background-color": "#bea413",
            "color": "#ffffff",
            "height": "100%",
            "width": "100%",
            "right": "0",
            "bottom": "0",
            "font-size": "1.2em"
        }).animate({opacity:'1'},500);
    }, function(){
        $('.hover-content-boligrafo').css({
            "display":"none"
        }).animate({opacity:'0'},500);
    });

    $('.div-promotion-mechero').hover(function () {
        $('.hover-content-mechero').css({
            "position": "absolute",
            "display": "block",
            "background-color": "#393185",
            "color": "#ffffff",
            "height": "100%",
            "width": "100%",
            "right": "0",
            "bottom": "0",
            "font-size": "1.2em"
        }).animate({opacity:'1'},500);
    }, function(){
        $('.hover-content-mechero').css({
            "display":"none"
        }).animate({opacity:'0'},500);
    });
});

