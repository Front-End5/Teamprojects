// review slider
const reviewSlider = $('.js-reviews-slider'),
		reviewSliderOptions = {
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			dots: true,
			arrows: false
		};

$(reviewSlider).slick(reviewSliderOptions);