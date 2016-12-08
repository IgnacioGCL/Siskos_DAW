/**
 * Created by ignaciogcl on 8/12/16.
 */
document.addEventListener("DOMContentLoaded", function(){
    $('.preloader-background').delay(1700).fadeOut('slow');
    $('.preloader-wrapper')
        .delay(1700)
        .fadeOut();
});

$('#upload-file').change(function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        $('.div-image').css('background-image', 'url("' + reader.result + '")');
        $('.div-image').css('background-color', 'rgba(0,0,0,0)');
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
    }
});
