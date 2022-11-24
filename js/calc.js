
var calc = {
	lg: '1450',
	md: '1200',
	sm: '992',
	xs: '640',
	xxs: '480',

	calculation: function () {
		var count = $('.js-calc-count-input').val();
		var price = false;
		var sale = $('.js-calc-sale-radio:checked').val();
		var oldPrice = false;

		$('.js-sale-value').removeClass('is-active');

		if (count <= 2) { // 1-2
			price = 490;
		} else if (count > 2 && count <= 5) { // 3-5
			price = 990;
		} else if (count > 5 && count <= 10) { // 6-10
			price = 1490;
		} else if (count > 10 && count <= 15) { // 11-15
			price = 1990;
		} else if (count > 15 && count <= 20) { // 16-20
			price = 2490;
		} else if (count > 20 && count <= 30) { // 21-30
			price = 3490;
		} else if (count > 30 && count <= 50) { // 31-50
			price = 4490;
		} else if (count > 50 && count <= 100) { // 51-100
			price = 5990;
		} else if (count > 100 && count <= 1000) { // 101-1000
			price = 6990;
		} else if (count > 1000) { // 101-1000
			price = 9990;
		} else {
			//alert('Error');
			return false;
		}

		if (sale > 0) {
			oldPrice = Math.floor(price * (sale * 0.01));

			$('.js-sale-value').text(price).addClass('is-active');

			price = price - oldPrice;
		}

		$('.js-price-value').text(price);

	},

	ww: function () {
		return $(window).width();
	},

	wh: function () {
		return $(window).height();
	},

	saleChecked: function () {
		if ($('.js-tabs-scroll').length) {
			$('.js-tabs-scroll').scrollLeft($('input.js-calc-sale-radio:checked').parent().position().left - 20);

			$('input.js-calc-sale-radio').change(function () {
				$('.js-tabs-scroll').scrollLeft($(this).parent().position().left - 20);
				calc.calculation();
			});
		}
	},

	countBlock: function () {
		// Количество +-
		$(".js-count-plus").click(function () {
			var count = $(this).parent().children('input').val();
			$(this).parent().children('input').val(++count);

			calc.calculation();
			return false;
		});

		$(".js-count-minus").click(function () {
			var tempCount = $(this).parent().children('input').val();
			var count = (--tempCount <= 1) ? 1 : tempCount;

			$(this).parent().children('input').val(count);

			calc.calculation();
			return false;
		});

		$(".js-calc-count-input").on('keyup', function () {
			var n = parseInt($(this).val().replace(/\D/g, ''), 10);
			console.log(n);
			if (isNaN(n)) {
				n = '';
			}
			$(this).val(n);
			//$(this).val(n.toLocaleString());

			calc.calculation();
		});
		$(".js-calc-count-input").on('focusout', function () {
			if ($(this).val() == '') {
				$(this).val(1);
			}
		});
	},

	tabs: function () {
		$('[data-tab]').click(function (e) {
			e.preventDefault();
			let tab = typeof ($(this).attr('href')) != 'undefined' ? $(this).attr('href') : $(this).attr('data-tab');
			if (typeof ($(this).attr('data-parent')) != 'undefined') {
				$('[href="' + tab + '"], [data-tab="' + tab + '"]').closest($(this).attr('data-parent')).addClass('is-active').siblings().removeClass('is-active');
			} else {
				$(this).addClass('is-active').siblings().removeClass('is-active');
			}
			$(tab).addClass('is-visible').siblings().removeClass('is-visible');
		});

		$(".js-tab-nav").click(function (e) {
			e.preventDefault();
			var href = $(this).attr("href");
			$(".tabs__nav__item, .tabs__nav-item, .tabs__body").removeClass("is-active");
			$(this).parent().addClass("is-active");
			$(href).addClass("is-active");
		});

		$(".js-tab-show").click(function (e) {
			//alert(); 
			//console.log("#"+$(this).val()); 

			if ($(this).attr('href') != undefined) {

				//e.preventDefault(); 
			}
			var href = ($(this).attr("href") != undefined) ? $(this).attr("href") : "#" + $(this).val();
			var nav_id = $(this).data("navid");
			$(".tabs__nav__item, .tabs__nav-item, .tabs__body").removeClass("is-active");
			$(nav_id).addClass("is-active");
			$(href).addClass("is-active");
		});
		//$(".js-tab-show").che
	},



	mainInit: function () {

		this.tabs();
		this.countBlock();
		this.calculation();
		this.saleChecked();
	}
};
$(document).ready(function () {

	calc.mainInit();

	$('.js-calc-count-input').click(function () {

		var input = this;
		input.focus();
		console.log(input.value.length);
		input.selectionStart = input.value.length;
		//input.setSelectionRange(2, 5);
		input.setSelectionRange(input.value.length, input.value.length);
	});

	/* $(".js-calc-count-input").on('keyup', function () {
		var n = parseInt($(this).val().replace(/\D/g, ''), 10);
		$(this).val(n.toLocaleString());
		//do something else as per updated question
		//myFunc(); //call another function too
	}); */


});
