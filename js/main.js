var uikit = {
	lg: '1450',
	md: '1200',
	sm: '992',
	xs: '640',
	xxs: '480',
	ww: function () {
		return $(window).width();
	},

	wh: function () {
		return $(window).height();
	},

	mask: function () {
		$("input[type='tel']").mask('+7 (999) 999-9999', {
			placeholder: '+7 (___) ___-____'
		});
		$("input.js-mask-sms").mask('0 0 0 0 0 0', {
			placeholder: '_ _ _ _ _ _'
		});
	},

	/* niceSelect: function () {
		$('select').niceSelect();
		$('.nice-select .list').mCustomScrollbar();
	},

	niceSelectUpdate: function () {
		$('select').niceSelect('update');
		$('.nice-select .list').mCustomScrollbar();
	}, */

	popups: function () {
		$(document).on("click", ".js-popup-show", function () {
			if ($(this).attr("href") != "" && $(this).attr("href") != undefined) {
				var href = $(this).attr("href");
			} else {
				var href = $(this).data("href");
			}
			if ($(this).data('media') == "lg" && uikit.ww() <= uikit.md) {
				return false;
			}

			var bodyWidth = $('body').width();

			$("body, html").addClass("is-show-popup");

			if (bodyWidth - uikit.ww() < 0) {
				$('body').css('padding-right', ((bodyWidth - uikit.ww()) * -1) + 'px');
			}

			//$(".mobile-menu").removeClass("active");

			$(".popup").removeClass("active");
			$(href).addClass("active");

			return false;
		});

		$(".js-popup-hide").click(function () {
			$(".popup").removeClass("active");
			$("body, html").css('padding-right', 0).removeClass("is-show-popup");
			return false;
		});
	},

	lazy: function () {

		function logElementEvent(eventName, element) { }
		var callback_enter = function (element) { };
		var callback_exit = function (element) { };
		var callback_loading = function (element) { };
		var callback_loaded = function (element) { };
		var callback_error = function (element) { };
		var callback_finish = function () { };
		var callback_cancel = function (element) {

		};

		var lazyLoadOb = new LazyLoad({
			class_applied: "lz-applied",
			class_loading: "lz-loading",
			class_loaded: "lz-loaded",
			class_error: "lz-error",
			class_entered: "lz-entered",
			class_exited: "lz-exited",
			// Assign the callbacks defined above
			callback_enter: callback_enter,
			callback_exit: callback_exit,
			callback_cancel: callback_cancel,
			callback_loading: callback_loading,
			callback_loaded: callback_loaded,
			callback_error: callback_error,
			callback_finish: callback_finish
		});
		lazyLoadOb.update();
	},

	textMore: function () {
		// Разворот текстового описания
		$(".js-more-text").click(function () {
			if ($(this).hasClass('hide') == false) {
				$(this).addClass('hide');
				$(this).html('Скрыть');
				$(this).parent().find(".js-wrap-text").addClass("is-show");
			} else {
				$(this).removeClass('hide');
				$(this).html('Читать дальше');
				$(this).parent().find(".js-wrap-text").removeClass("is-show");
			}
			return false;
		});
	},

	tabs: function () {
		$(".js-info-show").click(function () {
			var href = $(this).attr("href");
			//var nav_id = $(this).data("navid");
			$(".js-info-show, .js-info-box").removeClass("is-active");
			//$(nav_id).addClass("active");
			$(this).addClass("is-active");
			$(href).addClass("is-active");
			return false;
		});
	},

	sliders: function () {
		var ww = this.ww();
		var wh = this.wh();
		var lg = this.lg;
		var md = this.md;
		var sm = this.sm;
		var xs = this.xs;
		var xxs = this.xxs;

		$(".js-comments-slider").slick({
			focusOnSelect: true,
			infinite: false,
			variableWidth: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			arrows: true,
			fade: false,
			dots: false,
			nextArrow: '<button type="button" class="partners-section__arrow-next slick-next slick-arrow"><svg class="icon"><use xlink:href="images/sprite-svg.svg#arrow-left"></svg></button>',
			prevArrow: '<button type="button" class="partners-section__arrow-prev slick-prev slick-arrow"><svg class="icon"><use xlink:href="images/sprite-svg.svg#arrow-left"></svg></button>',
		});

		$(".js-comments-slider").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$('.js-comments-slider .js-more-text').removeClass('hide').html('Читать дальше');
			$('.js-comments-slider .js-wrap-text').removeClass('is-show');
		});

		$(".js-comments-slider-2").slick({
			focusOnSelect: true,
			infinite: false,
			variableWidth: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			arrows: false,
			fade: false,
			dots: false,
			nextArrow: '<button type="button" class="partners-section__arrow-next slick-next slick-arrow"><svg class="icon"><use xlink:href="images/sprite-svg.svg#arrow-left-2"></svg></button>',
			prevArrow: '<button type="button" class="partners-section__arrow-prev slick-prev slick-arrow"><svg class="icon"><use xlink:href="images/sprite-svg.svg#arrow-left-2"></svg></button>',
		});

		$(".js-comments-slider-2").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$('.js-comments-slider-2 .js-more-text').removeClass('hide').html('Читать дальше');
			$('.js-comments-slider-2 .js-wrap-text').removeClass('is-show');
		});
	},

	/* fancybox: function () {
		$(".js-fancybox, .fancybox").fancybox({
			// Options will go here
			iframe: {
				preload: false
			}
		});
	}, */

	validation: function () {
		var
			classValidate = 'is-validate',
			classParent = '.form-group',
			classError = 'is-error';
		function error(el) {
			$(el)
				.addClass(classError)
				.removeClass(classValidate)
				.closest(classParent)
				.addClass(classError)
				.removeClass(classValidate);
		}
		function validate(el) {
			$(el)
				.removeClass(classError)
				.addClass(classValidate)
				.closest(classParent)
				.removeClass(classError)
				.addClass(classValidate);
		}
		function reset(el) {
			$(el)
				.removeClass(classValidate + ' ' + classError)
				.closest(classParent)
				.removeClass(classError)
				.removeClass(classValidate + ' ' + classError)
		}
		$('.form-control').focus(function () {
			reset($(this))
		});
		$('select').change(function () {
			reset($(this))
		});
		$('input[type="checkbox"], input[type="radio"]').change(function () {
			reset($(this))
		});
		function checkInput(el) {
			var $form = $(el);

			$form.find('.is-error').removeClass('is-error');//.each(function(){
			//$(this).removeClass('is-error');
			//console.log("!"+$form.find('.is-error').length+"!");
			//});

			$form.find('select.js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=tel].js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=email].js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=text].js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=password].js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			if ($('.js-pass1', $form).length != 0) {
				var pass01 = $form.find('.js-pass1').val();
				var pass02 = $form.find('.js-pass2').val();
				if (pass01 == pass02) {
					validate($('.js-pass1, .js-pass2', $form));
				} else {
					error($('.js-pass1, .js-pass2', $form));
				}
			}
			$form.find('textarea.js-required').each(function () {
				if ($(this).val() != '') {
					validate($(this));
				} else {
					error($(this));
				}
			});
			$form.find('input[type=email]').each(function () {
				var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
				var $this = $(this);
				if ($this.hasClass('js-required')) {
					if (regexp.test($this.val())) {
						validate($this);
					} else {
						error($this);
					}
				} else {
					if ($this.val() != '') {
						if (regexp.test($this.val())) {
							validate($this);
						} else {
							error($this);
						}
					} else {
						reset($this)
					}
				}
			});

			$form.find('input[type=checkbox].js-required').each(function () {

				if ($(this).is(':checked')) {
					validate($(this));
				} else {
					error($(this));
					//$(this).addClass('is-error');
				}
			});

			var radios = [];
			$form.find('input[type=radio]:required').each(function () {
				var name = $(this).attr('name');

				if (radios.indexOf(name) == -1) {

					radios.push(name);
					var result = false;
					$form.find('input[name=' + name + '].js-required').each(function () {

						if ($(this).is(':checked')) {
							result = true;
						}
					});
					if (result == true) {
						validate($(this));
						return false;
					} else {
						//console.log(radios);
						$form.find('input[name=' + name + '].js-required').addClass(classError);
						error($(this));
					}
				}
			});
		}

		$('.js-submit').click(function () {
			var $form = $(this).closest('form');
			checkInput($form);
			var errors = $form.find('.is-error:visible').length;
			//console.log(errors);
			if (errors) {
				return false;
			} else if ($(this).data('href') != "" && $(this).data('href') != undefined) {

				// Открытие попапа после отправки формы.

				if ($(this).attr("href") != "" && $(this).attr("href") != undefined) {
					var href = $(this).attr("href");
				} else {
					var href = $(this).data("href");
				}
				if ($(this).data('media') == "lg" && uikit.ww() <= uikit.md) {
					return false;
				}

				var bodyWidth = $('body').width();

				$("body, html").addClass("is-show-popup");

				if (bodyWidth - uikit.ww() < 0) {
					$('body').css('padding-right', ((bodyWidth - uikit.ww()) * -1) + 'px');
				}

				//$(".mobile-menu").removeClass("active");

				$(".popup").removeClass("active");
				$(href).addClass("active");

				return false;
			}
		});
	},

	menuBurger: function () {
		// burger menu
		$(".js-burger-menu").click(function () {
			$(this).toggleClass('is-active').next().toggleClass('is-active');
			if ($(this).hasClass("is-active")) {
				$(".js-nav-menu").addClass('is-active')
				// $(".js-overflow").addClass('overflow-is-active')
				$("html").addClass('overflow')
			} else {
				$(".js-nav-menu").removeClass('is-active')
				$("html").removeClass('overflow')
			}
		});
	},

	accardion: function () {
		$('.js-accardion-toggle').click(function () {
			if ($(this).hasClass('is-active') == false) {
				$('.js-accardion-toggle').removeClass('is-active');
				$('.js-accardion-body').removeClass('is-active');
				$(this).addClass('is-active').next().addClass('is-active');
			} else {
				$('.js-accardion-toggle').removeClass('is-active');
				$('.js-accardion-body').removeClass('is-active');
			}

			return false;
		});
	},

	mobile: function () {

		$('.js-menu-toggle').click(function () {
			$(this).parent().toggleClass('hover');
			$('body').toggleClass('overflow');

			//$('.js-mobile-menu').slideToggle();

			$(document).mouseup(function (e) { // событие клика по веб-документу
				var div = $('.js-menu-toggle').parent(); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
					&&
					div.has(e.target).length === 0) { // и не по его дочерним элементам
					div.removeClass('hover'); // скрываем его
					$('body').removeClass('overflow');
				}
			});

			return false;
		});

	},

	scrollTo: function () {
		$(".js-scroll-to").click(function () {
			var href = $(this).attr("href");
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 400);
			return false;
		});
	},

	moduleVariables: function () {
		$('.js-modules-settings').on('change', (e) => {

			var targetID = e.target.id;
			$('.header-example-block').css('display', 'none');

			var moduleId = e.target.id;
			$(`#module-${moduleId}`).css('display', 'block');

			if ($("#type1").is(":checked")) {
				$(`#module-${moduleId}`).css('display', 'block');
				$(`#module-${moduleId}`).removeClass('header-example-block--middle');
			} else if ($("#type2").is(":checked")) {
				$(`#module-${moduleId}__type2`).css('display', 'block');
				$(`#module-${moduleId}`).addClass('header-example-block--middle');
			}

			$('.header-example-block--vigit').css('display', 'none');
			$(`#module-${moduleId}-v`).css('display', 'block');

		});
	},

	police: function () {
		$('.js-police-checkbox input').change(function () {
			if ($(this).prop('checked') == false) {
				$(this).parents('form').find('.js-submit').prop('disabled', true);
			} else {
				$(this).parents('form').find('.js-submit').prop('disabled', false);
			}
		});
	},


	menuHover: function () {
		$('.menu-block__link.parent').hover(function () {
			$('body').addClass('is-hover');
		}, function () {
			$('body').removeClass('is-hover');
		});
	},


	mainInit: function () {

		this.sliders();

		this.lazy();

		this.moduleVariables();

		//this.niceSelect();
		this.menuBurger();
		this.textMore();
		this.popups();
		this.mask();
		this.accardion();
		this.mobile();
		this.validation();
		this.tabs();
		this.police();
		this.menuHover();

		//this.scrollTo();

	}
};
$(document).ready(function () {

	uikit.mainInit();

});
var clrTimeOut;
$(window).on('load', function (e) {
	clearTimeout(clrTimeOut);
	clrTimeOut = setTimeout(function () {

	}, 200);
});

$(window).resize(function () {
	clearTimeout(clrTimeOut);
	clrTimeOut = setTimeout(function () {

	}, 200);

});

$(window).scroll(function () {
	//uikit.headerFixed();
});



(function ($) {
	$.fn.extend({
		rotaterator: function (options) {

			var defaults = {
				fadeSpeed: 1000,
				pauseSpeed: 700,
				child: null
			};

			var options = $.extend(defaults, options);

			return this.each(function () {
				var o = options;
				var obj = $(this);
				var items = $(obj.children(), obj);
				items.each(function () { $(this).hide(); })
				if (!o.child) {
					var next = $(obj).children(':first');
				} else {
					var next = o.child;
				}
				$(next).fadeIn(o.fadeSpeed, function () {
					$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
						var next = $(this).next();
						if (next.length == 0) {
							next = $(obj).children(':first');
						}
						$(obj).rotaterator({ child: next, fadeSpeed: o.fadeSpeed, pauseSpeed: o.pauseSpeed });
					})
				});
			});
		},

		rotateratorImg: function (options) {

			var defaults = {
				fadeSpeed: 1000,
				pauseSpeed: 700,
				child: null
			};

			var options = $.extend(defaults, options);

			return this.each(function () {
				var o = options;
				var obj = $(this);
				var items = $(obj.children(), obj);
				items.each(function () { $(this).css("display", "flex").hide().hide(); })
				if (!o.child) {
					var next = $(obj).children(':first');
				} else {
					var next = o.child;
				}
				$(next).fadeIn(o.fadeSpeed, function () {
					$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
						var next = $(this).next();
						if (next.length == 0) {
							next = $(obj).children(':first');
						}
						$(obj).rotaterator({ child: next, fadeSpeed: o.fadeSpeed, pauseSpeed: o.pauseSpeed });
					})
				});
			});
		}
	});
})(jQuery);

$(document).ready(function () {
	$('#rotate').rotaterator({ fadeSpeed: 1000, pauseSpeed: 700 });
	//$('#rotate-img').rotateratorImg({ fadeSpeed: 1000, pauseSpeed: 700 });
});