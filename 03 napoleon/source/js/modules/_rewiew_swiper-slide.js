// review slider
const reviewSlider = $('.js-reviews-slider'),
		reviewSliderOptions = {
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: true,
			arrows: false,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		};

$(reviewSlider).slick(reviewSliderOptions);