$(document).ready(function (){
    $("#home").click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});
$(document).ready(function (){
    $("#historia").click(function (){
        $('html, body').animate({
            scrollTop: $(".historia").offset().top
        }, 1000);
    });
});
$(document).ready(function (){
    $("#galeria").click(function (){
        $('html, body').animate({
            scrollTop: $(".galeria").offset().top
        }, 1000);
    });
});