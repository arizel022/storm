$(document).ready(function () {

//-----------------------------------------гармошка блока faq
    $('.faq__ans').hide();
    $('.faq__item-wrapper').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.faq__ans').slideToggle('slow', function() {
            $(".faq__ans").not(this).hide('slow');
        });
    });
//-----------------------------------------работа кнопки меню
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');
    });
//-----------------------------------------спрятать меню при сворачивании панели
    $('.header__video__layer').mouseleave(function () {
        $('.menu-btn').removeClass('active');
    });
//-----------------------------------------backToTopButton
    $(window).scroll(function() {
        if
        ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
//-----------------------------------------E-mail Ajax Send
	$(".backform__form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Спасибо");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
    });
//-----------------------------------------вызов попапа заказать
    $('.order__wrapper').hide();
	$('.why__btn.btn-main--act').click(function() {
		$('.order__wrapper').fadeIn();
		return false;
	});	
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.order__wrapper').fadeOut();
		}
	});
	// Закрытие при клике вне попапа
	$('.order__wrapper').click(function(e) {
		if ($(e.target).closest('.order').length == 0) {
			$(this).fadeOut();					
		}
	});
//-----------------------------------------




});


