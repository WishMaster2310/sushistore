$(function() {


	$('.c-slider').slick({
		autoplay: true,
		prevArrow: "<div class='c-slider__arrow c-slider__arrow--prev'>",
		nextArrow: "<div class='c-slider__arrow c-slider__arrow--next'>"
	});

	$('.c-appForm__input--tel').mask('+7 (999) 999-99-99');
	$('.c-nav__item--list').on('click', function(e) {
		e.preventDefault();
		if ((e.target).tagName === 'A') { return }

		$($(this).find('.c-subNav')).stop(true, true).slideToggle()
	})

});