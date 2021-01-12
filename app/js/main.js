$(document).ready(function () {

    $('.faq__ans').hide();
    $('.faq__item-wrapper').click(function () {
        $(this).siblings('.faq__ans').slideToggle('slow', function() {
            $(".faq__ans").not(this).hide('slow');
        });
    });






    

});


