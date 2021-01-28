// $(document).ready(function () {
// });

//-----------------------------------------E-mail Ajax Send

$(document).ready(function() {
	$("#ankform").submit(function() {
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
});

//-------------------------переключатель атрибута для элементов формы
$(document).ready(function() {
	$(".obj-start").click(function(){ //активатор
		$(this).parent().nextAll().find('.obj-end').toggleAttr("disabled", true);
		$(this).parent().nextAll().find('.variable').toggleClass('disabled');
		$(this).parent().nextAll('.obj-end').toggleAttr("disabled", true);
	});
	$.fn.toggleAttr = function(attr, val) {
		var test = $(this).attr(attr);
		if (test) { 
			$(this).removeAttr(attr);
		} else {
			$(this).attr(attr, val);
		}
		return this;
	};
	
});

	//-------------------------функция-переключатель значений атрибута для элементов формы
	// $.fn.toggleAttrVal = function(attr, val1, val2) {
	// 	var test = $(this).attr(attr);
	// 	if ( test === val1) {
	// 	  $(this).attr(attr, val2);
	// 	  return this;
	// 	}
	// 	if ( test === val2) {
	// 	  $(this).attr(attr, val1);
	// 	  return this;
	// 	}
	// 	// default to val1 if neither
	// 	$(this).attr(attr, val1);
	// 	return this;
	//   };

	//-------------------textarea autoresize
	$('textarea').each(function () {
		this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
	}).on('input', function () {
		this.style.height = 'auto';
		this.style.height = (this.scrollHeight) + 'px';
	});



	//-----------------------------------------гармошка блока faq
    $('.faq__ans').hide();
    $('.faq__item-wrapper').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.faq__ans').slideToggle('slow', function() {
            $('.faq__ans').not(this).hide('slow');
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


//-----------------------------------------спрятать меню при клике вне меню
	$(document).mouseup(function (e){ // отслеживаем клик
		var block = $(".menu-btn"); //кнопка, меню В ней
		if (!block.is(e.target)&& block.has(e.target).length === 0) { //если клик не по кнопке/меню/чайлдам
			$('.menu-btn').removeClass('active'); //кнопка неактивна
		}
	});

//-----------------------------------------backToTopButton
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();} 
		else {
            $('#toTop').fadeOut();}
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
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



//-----------------------------------------magnific
$(document).ready(function() {
	$('.card__gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>'; //мелкий текст между тегами
			}
		}
	});
});

//-----------------------------------------slick
	$('.slider--portfolio').slick({
		dots: false,
		infinite: true,
		arrows: false,
		autoplay: true
	});
	//-----------------------------------------mixer
	// var mixer = mixitup('.works');
	//проверка для миксера, есть ли его элементы на странице - вызов впустую дает ошибку в консоли 
	var containerEl = document.querySelector('.works');
	var mixer;
	if (containerEl) {
		mixer = mixitup(containerEl, {
			selectors: {control: '.works__btn'},
			load: {filter: '.works__item'}
		});
	}



