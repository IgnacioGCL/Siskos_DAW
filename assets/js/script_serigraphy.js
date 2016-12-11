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
                img.set({width:100,height:100});
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