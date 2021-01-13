$(document).ready(function () {

    $('.faq__ans').hide();
    $('.faq__item-wrapper').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.faq__ans').slideToggle('slow', function() {
            $(".faq__ans").not(this).hide('slow');
        });
    });


    $('.menu-btn').click(function () {
        $(this).toggleClass('active');
    });
    






    

});


