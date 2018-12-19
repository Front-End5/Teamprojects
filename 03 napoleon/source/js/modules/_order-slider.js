// order slider
const orderSlider = $('.js-order-slider'),
		orderSliderOptions = {
			autoplay: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			responsive: [
				{
				  breakpoint: 993,
				  settings: {
					slidesToShow: 2,
					infinite: false,
					arrows: true
				  }
				},
				{
				  breakpoint: 769,
				  settings: {
					slidesToShow: 1,
					infinite: false,
					arrows: true
				  }
				},
				{
				  breakpoint: 569,
				  settings: {
					slidesToShow: 1,
					infinite: false,
					dots: true
				  }
				}
			]
		};

$(orderSlider).slick(orderSliderOptions);