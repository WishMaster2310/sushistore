$(function() {


	$('.c-slider').slick({
		autoplay: true,
		prevArrow: "<div class='c-slider__arrow c-slider__arrow--prev'>",
		nextArrow: "<div class='c-slider__arrow c-slider__arrow--next'>",
		responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        dots: true
      }
    }]
	});

	$('.c-appForm__input--tel').mask('+7 (999) 999-99-99');
	$('.c-nav__item--list').on('click', function(e) {
		
		if ((e.target).tagName === 'A') { return }
			e.preventDefault();

		if($(this).hasClass('c-nav__item--active')) {
			$($(this).find('.c-subNav')).css('display', 'block').stop(true, true).slideUp(300);
			$(this).removeClass('c-nav__item--active');
		} else {
			$($(this).find('.c-subNav')).stop(true, true).slideDown(300);
			$(this).addClass('c-nav__item--active');
		}
		
	});

	$('.c-header__burger').on('click', function() {
		if (!$(this).hasClass('c-header__burger--active')) {
			$(this).addClass('c-header__burger--active');
			$('.c-navBox').slideDown();
		} else {
			$(this).removeClass('c-header__burger--active')
			$('.c-navBox').slideUp();
		}
	});

	$('.c-product-list .c-buyline__btn').on('click', function() {

		var $img = $($(this).closest('.c-product').find('.c-product__img img'));
		var $cart = $('.c-cart');

		if($img) {
			var t = new Image();
			t.src = $img.attr('src');
			$(t).css({
				width: $img.width(),
				position: 'absolute',
				zIndex: 3,
				top: $img.offset().top,
				left: $img.offset().left
			})
			$('body').append(t);
			$(t).animate({
				top: $cart.offset().top, 
				left: $cart.offset().left,
    		width: '30px',
				opacity: 0 
			}, 600, function() {
				$(t).remove()
			}) 
		}

		return
	});

	var headerAtivetel = 0;

	$('.c-header__tel-handler').on('click', function() {

			var len = $('.c-header__tel').length;

			if(len > 1) {

				if (headerAtivetel < len-1) {
					headerAtivetel +=1;
				} else {
					headerAtivetel  = 0;
				}

				

				$('.c-header__tel').removeClass('c-header__tel--active');
				$('.c-header__tel').eq(headerAtivetel).addClass('c-header__tel--active');
			}
	});

	$(window).on('resize', function() {

		$('.c-navBox').stop().attr('style', '');
		$('.c-header__burger').removeClass('c-header__burger--active')
		
	});

	$('.j-fancy').on('click', function(e) {
		e.preventDefault();

		var target = $(this).attr('data-fancy');
		if(target.length > 0) {
			$.fancybox({
				content: $(target)
			})
		}else {
			return
		}
	});
	$('#headerCityChooser').SumoSelect();

	$('.c-buyline__arr--top').on('click', function() {
		var input = $(this).closest('.c-buyline').find('.c-buyline__input');
		$(input).val(+$(input).val() + 1)
	});

	$('.c-buyline__arr--down').on('click', function() {
		var input = $(this).closest('.c-buyline').find('.c-buyline__input');
		if ($(input).val() > 1) {
			$(input).val(+$(input).val() - 1)
		}
	});

	$('.c-banner__slider').slick({
		dots: true,
		arrows: false
	});

	$('#form-tel').mask('+7 (999) 999-99-99');

	$('.c-btn__scroll-to').on('click', function(event) {
		var attrVal = $(this).attr('href');
		event.preventDefault();

		$('html, body').animate({
	        scrollTop: $(attrVal).offset().top
	    }, 1000);
	});
});