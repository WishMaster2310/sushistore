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
		$(this).toggleClass('c-nav__item--active');
		$($(this).find('.c-subNav')).stop(true, true).slideToggle();
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

	$(window).on('resize', function() {

		$('.c-navBox').stop().attr('style', '');
		$('.c-header__burger').removeClass('c-header__burger--active')
		
	})

});