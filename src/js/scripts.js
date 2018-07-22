$('.slick-slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	sliderToScroll: 2,
	responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				}

			    }]
});