$(function() {


	$('.c-slider').slick({
		arrows: false,
		autoplay: true
	});

	$('.c-appForm__input--tel').mask('+7 (999) 999-99-99');
	$('.c-nav__item--list').on('click', function(e) {
		e.preventDefault();
		if ((e.target).tagName === 'A') { return }

		$($(this).find('.c-subNav')).stop(true, true).slideToggle()
	})

});