$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});

$(document).ready(function(){
    $('.slider').slick({
        // autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
    });
  });