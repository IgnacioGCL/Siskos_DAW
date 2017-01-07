/**
 * Created by ignaciogcl on 8/12/16.
 */
document.addEventListener("DOMContentLoaded", function () {
    $('.preloader-background').delay(1700).fadeOut('slow');
    $('.preloader-wrapper')
        .delay(1700)
        .fadeOut();
});
var file;
var reader;
var canvasFront;
var canvasBack;
var zero = 0;

$('input[name=groupColorShirt]').on('change', function(){
    if(this.checked){
        switch(this.id){
            case 'purple': $('#blue, #yellow, #orange, #red, #green, #aqua, #black, #white, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'blue': $('#purple, #yellow, #orange, #red, #green, #aqua, #black, #white, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'yellow': $('#blue, #purple, #orange, #red, #green, #aqua, #black, #white, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'orange': $('#blue, #yellow, #purple, #red, #green, #aqua, #black, #white, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'red': $('#blue, #yellow, #orange, #purple, #green, #aqua, #black, #white, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'green': $('#blue, #yellow, #orange, #red, #purple, #aqua, #black, #white, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'aqua': $('#blue, #yellow, #orange, #red, #green, #purple, #black, #white, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'black': $('#blue, #yellow, #orange, #red, #green, #aqua, #purple, #white, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'white': $('#blue, #yellow, #orange, #red, #green, #aqua, #black, #purple, #grey, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'grey': $('#blue, #yellow, #orange, #red, #green, #aqua, #black, #white, #purple, #pink, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'pink': $('#blue, #yellow, #orange, #red, #green, #aqua, #black, #white, #grey, #purple, #brown, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'brown': $('#blue, #yellow, #orange, #red, #green, #aqua, #black, #white, #grey, #pink, #purple, #violet, #deepskyblue').prop('checked', false);
                break;
            case 'violet': $('#blue, #yellow, #orange, #red, #green, #aqua, #black, #white, #grey, #pink, #brown, #purple, #deepskyblue').prop('checked', false);
                break;
            case 'deepskyblue': $('#blue, #yellow, #orange, #red, #green, #aqua, #black, #white, #grey, #pink, #brown, #violet, #purple').prop('checked', false);
                break;
            default: console.log("Not working");
                break;
        }
    }
});

$('input[name=groupSize]').on('change', function(){
    if(this.checked){
        switch(this.id){
            case 's': $('#m, #l, #xl, #xxl').prop('checked', false);
                break;
            case 'm': $('#s, #l, #xl, #xxl').prop('checked', false);
                break;
            case 'l': $('#m, #s, #xl, #xxl').prop('checked', false);
                break;
            case 'xl': $('#m, #l, #s, #xxl').prop('checked', false);
                break;
            case 'xxl': $('#m, #l, #xl, #s').prop('checked', false);
                break;
            default: console.log("Not working");
                break;
        }
    }
});

$('input[name=groupType]').on('change', function(){
    if(this.checked){
        switch(this.id){
            case 'hombre': $('#mujer, #niño').prop('checked', false);
                break;
            case 'mujer': $('#hombre, #niño').prop('checked', false);
                break;
            case 'niño': $('#hombre, #mujer').prop('checked', false);
                break;
            default: console.log("Not working");
                break;
        }
    }
});

$('input[name=groupColorNumb]').on('change', function(){
    if(this.checked){
        switch(this.id){
            case '1-color': $('#2-color, #3-color, #4-color, #5-color').prop('checked', false);
                break;
            case '2-color': $('#1-color, #3-color, #4-color, #5-color').prop('checked', false);
                break;
            case '3-color': $('#2-color, #1-color, #4-color, #5-color').prop('checked', false);
                break;
            case '4-color': $('#2-color, #3-color, #1-color, #5-color').prop('checked', false);
                break;
            case '5-color': $('#2-color, #3-color, #4-color, #1-color').prop('checked', false);
                break;
            default: console.log("Not working");
                break;
        }
    }
});

$('#upload-file').change(function () {
    canvasFront.clear().renderAll();
    canvasBack.clear().renderAll();
    $('#trasera').prop("checked",false);
    file = this.files[0];
    reader = new FileReader();
    reader.onloadend = function () {
        $('.div-image').css('background-image', 'url("' + reader.result + '")');
        $('.div-image').css('background-color', 'rgba(0,0,0,0)');
        canvas(reader.result, "front");
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }
});

$('.serigraphy-prev-med-and-up').hide();

$('.custom-button').click(function () {
    $('.custom-button-div').hide();
    $('.serigraphy-prev-med-and-up').show('slow');
    if(zero==0){
        canvasFront = this.__canvas = new fabric.Canvas('canvas-front');
        fabric.Object.prototype.transparentCorners = false;
        canvasBack = this.__canvas = new fabric.Canvas('canvas-back');
        fabric.Object.prototype.transparentCorners = false;
        zero++;
    }
});

$('.close-button').click(function () {
    $('.serigraphy-prev-med-and-up').hide('slow', function(){
        $('.custom-button-div').show('slow');
    });
});

$('#frente').change(function () {
    if(!($('#frente').prop("checked"))){
        canvas("nothing","no-front");
    }else{
        canvas(reader.result, "front");
    }
})

$('#trasera').change(function () {
    if(!($('#trasera').prop("checked"))){
        canvas("nothing","no-back");
    }else{
        canvas(reader.result, "back");
    }
})

function canvas(image, option) {

    switch(option){
        case "front":
            fabric.Image.fromURL(image, function(img) {
                img.scale(0.08);
                img.set({width:500,height:500,});
                canvasFront.add(img).setActiveObject(img);
            });
            break;
        case "back":
            fabric.Image.fromURL(image, function(img) {
                img.scale(0.08);
                img.set({width:500,height:500});
                canvasBack.add(img).setActiveObject(img);
            });

            break;
        case "no-front":
            console.log("No front");
            canvasFront.clear().renderAll();
            break;
        case "no-back":
            console.log("No back");
            canvasBack.clear().renderAll();
            break;
    }
};
