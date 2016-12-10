$('#panel-servicios li p').addClass('hvr-radial-out');
$('#dropdown3 li').addClass('hvr-shutter-out-vertical');


document.addEventListener("DOMContentLoaded", function(){
    $('.preloader-background').delay(1700).fadeOut('slow');
    $('.preloader-wrapper')
        .delay(1700)
        .fadeOut();
});

$('#panel-promociones').click(function(){
    window.location.href = "promotions.html";
})

var productsCart=[[1,'shirt','4,00',3,'w','Con manga,100% algodón, doble costura, gramage 120,variedad de colores'],
    [2,'shirt','4,00',1,'m','Con manga,100% algodón, doble costura, gramage 120,variedad de colores'],[3,'shirt','3,00',2,'m','Con manga,100% algodón, doble costura, gramage 120,variedad de colores']];
function addProductToCart() {

    for (var i =0;i<productsCart.length;i++){
        var li= $('<li>');
        var divPhoto=$('<img>');
        var divDescription=$('<div>');
        var btnDelPhoto=$('<button>');
        var divPrecio=$('<p>Precio</p>');
        var pPrecio=$('<p>');
        pPrecio.text(productsCart[i][2]+'€');
        pPrecio.addClass('price-product');

        var divCantidad=$('<p>Cantidad</p>');
        var inputCantidad=$('<input type="number">');
        inputCantidad.val(productsCart[i][3]);
        inputCantidad.addClass('amount-product');

        var divDerecha=$('<div>');
        divDerecha.addClass('amount-price col s2');
        divDerecha.append(divPrecio,pPrecio,divCantidad,inputCantidad);

        divDescription.addClass('description-product col s6');
        divDescription.text(productsCart[i][5]);
        btnDelPhoto.addClass('btn-del col s1');
        btnDelPhoto.text('Eliminar');
        divPhoto.addClass('img-product col s4');

        li.append(divPhoto);
        li.append(divDescription);
        li.append(divDerecha);

        $('#cart-products').append(li);
        $('#cart-products   ').append(btnDelPhoto);
    }
}
function calculateTotalCart() {
    var prices=document.querySelectorAll('.price-product');
    var total=0;
    var totalProducts=0;
    var amounts=document.querySelectorAll('.amount-product');
    for(var i=0;i<prices.length;i++) {
        console.log(amounts[i].value);
        total+=parseFloat(prices[i].innerHTML)*amounts[i].value;
        totalProducts+=parseInt(amounts[i].value);
    }
    $('#total').text(total.toFixed(2)+" €");
    $('#total-products').text(totalProducts+ " productos");


}
addProductToCart();
calculateTotalCart();
$('#cart-products input').on('change',function () {
    calculateTotalCart();
})
