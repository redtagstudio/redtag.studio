(function () {
	var lastwidth = 0;

	/*******************/
	/****DEBOUNCE*******/
	/*******************/
	// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)

	// Returns a function, that, as long as it continues to be invoked, will not
	// be triggered. The function will be called after it stops being called for
	// N milliseconds. If `immediate` is passed, trigger the function on the
	// leading edge, instead of the trailing.
	function debounce(func, wait, immediate) {
		var timeout;

		return function executedFunction() {
			var context = this;
			var args = arguments;

			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};

			var callNow = immediate && !timeout;

			clearTimeout(timeout);

			timeout = setTimeout(later, wait);

			if (callNow) func.apply(context, args);
		};
	};

	var slider;
	function drawslider() {
		if ($("#body_case").length) {
			if (slider) slider.destroy();
			if ($(window).width() <= 500) var items = 1; else if ($(window).width() <= 800) var items = 2; else items = 4;
			slider = $("#lightSlider").lightSlider({
				item: items
			});
		}
	}

	$(window).on("resize", function () {
		drawslider();
	});

	$(document).ready(function () {
		//scrollreveal
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (w > 768) {
			// Changing the defaults
			window.sr = ScrollReveal({ reset: false });

			// Customizing a reveal set
			sr.reveal(".revealdivs div:not(.cardcontent):not(.dontrevealme)", { duration: 200 });
		}



		drawslider();
	});


	/*change image to video by data-vidid*/
	$(".playbutton").click(function () {
		// console.log('f');
		if ($(this).attr("data-portal") == "youtube")
			$(this).parent().html('<iframe width="' + $(this).width() + '" src="https://www.youtube.com/embed/' + $(this).attr("data-vidid") + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
		else if ($(this).attr("data-portal") == "vimeo")
			$(this).parent().html('<iframe width="' + $(this).width() + '" src="https://player.vimeo.com/video/' + $(this).attr("data-vidid") + '?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	});


	/*hamburger icons from https://github.com/callmenick/Animating-Hamburger-Icons */

	$("#hamcont").on("click", function (e) {
		e.preventDefault();
		var ham = $(this).find('.c-hamburger');
		if (ham.hasClass("is-active") === true) {
			ham.removeClass("is-active")
			$("#menucont").slideUp();
			$("#allbuthead").slideDown();
		} else {
			ham.addClass("is-active");
			$("#menucont").slideDown();
			$("#allbuthead").slideUp();
		}
	});


	/*************************************/
	/*************GRID********************/
	/*************************************/
	//define global vars
	if ($(window).width() <= 619) {
		var sqw = 41
		var sqh = 40
	} else {
		var sqw = 68
		var sqh = 67
	}
	//home
	var lines_big = [];
	var lines_short = [];
	var lines_tiny = [];
	var lines_medium = [];
	var lines_team = [];
	var lines_big_withtop = [];
	//case
	var lines_case_top = [];
	var lines_case_underperex = [];
	var lines_case7 = [];
	var lines_case_casebottom = [];

	var lineMaker = false;
	var lineMaker2 = false;
	var lineMaker3 = false;
	var lineMaker4 = false;
	var lineMaker5 = false;
	var lineMaker6 = false;
	var lineMaker7 = false;

	var vcount = 0;
	var hcount = 0;

	function destroylines() {
		$(".decolines").remove();
		//home
		lines_big = [];
		lines_short = [];
		lines_tiny = [];
		lines_medium = [];
		lines_team = [];
		lines_big_withtop = [];
		//case
		lines_case_top = [];
		lines_case_underperex = [];
		lines_case7 = [];
		lines_case_casebottom = [];

		lineMaker = false;
		lineMaker2 = false;
		lineMaker3 = false;
		lineMaker4 = false;
		lineMaker5 = false;
		lineMaker6 = false;
		lineMaker7 = false;

		if ($(window).width() <= 619) {
			sqw = 41
			sqh = 40
		} else {
			sqw = 68
			sqh = 67
		}
		vcount = Math.floor($(window).width() / sqw);
		hcount = Math.floor($(window).height() / sqh);
	}

	if ($("body").attr("ID") == "body_home") {


		window.gridinit = function () {
			/*************************************/
			/*******CREATE GRIDS FOR HOMEPAGE*****/
			/*************************************/
			destroylines();


			//vertical
			for (var i = 1; i <= vcount; i++) {
				lines_big.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: (12 * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'TopBottom' } });
			}
			//horizontal
			for (i = 1; i <= 12; i++) {
				lines_big.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'LeftRight' } });
			}

			//vertical
			var dir = 'TopBottom';
			for (var i = 1; i <= vcount; i++) {
				lines_short.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: (5 * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1500, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: dir } });
				if (dir == 'TopBottom') dir = 'BottomTop'; else dir = 'TopBottom';
			}
			//horizontal
			var dir = 'LeftRight';
			for (i = 0; i <= 5; i++) {
				lines_short.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1500, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: dir } });
				if (dir == 'LeftRight') dir = 'RightLeft'; else dir = 'LeftRight';
			}

			//vertical
			for (var i = 1; i <= vcount; i++) {
				lines_tiny.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: (3 * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'TopBottom' } });
			}
			//horizontal
			for (var i = 0; i <= 3; i++) {
				lines_tiny.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'LeftRight' } });
			}

			//vertical
			for (var i = 1; i <= vcount; i++) {
				lines_medium.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: (6 * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'TopBottom' } });
			}
			//horizontal
			for (var i = 0; i <= 6; i++) {
				lines_medium.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'LeftRight' } });
			}

			//vertical
			for (var i = 1; i <= vcount; i++) {
				lines_team.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: (12 * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'TopBottom' } });
			}
			//horizontal
			for (var i = 0; i <= 12; i++) {
				lines_team.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'LeftRight' } });
			}

			//vertical
			for (var i = 1; i <= vcount; i++) {
				lines_big_withtop.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: ((($('#foot').height() / sqh) + 1) * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 1000 + (i * 40), direction: 'TopBottom' } });
			}
			//horizontal
			for (var i = 0; i <= (($('#foot').height() / sqh) + 1); i++) {
				lines_big_withtop.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'LeftRight' } });
			}
		}

		window.placegrid = function (e) {
			/*************************************/
			/*******PLACE GRIDS FOR HOMEPAGE******/
			/*************************************/

			if (e.type == "resize") {
				//RECREATE
				gridinit();
			}
			if (e.type == "load" || e.type == "resize") {
				lineMaker = new LineMaker({ parent: { element: '#body_home', position: 'prepend' }, lines: lines_big });

				setTimeout(function () {
					lineMaker.animateLinesIn();
				}, 500);
			}
			const $stairs = $('#stairs');
			if ($stairs.length > 0 && $(window).scrollTop() + $(window).height() >= $stairs.offset().top && !lineMaker2) {
				//when class is selector, works only for first one
				lineMaker2 = new LineMaker({ parent: { element: '#stairs', position: 'prepend' }, lines: lines_short });

				setTimeout(function () {
					lineMaker2.animateLinesIn();
				}, 100);
			}


      let $caselist = $('#caselist');
      if ($caselist.length > 0 && $(window).scrollTop() + $(window).height() >= $caselist.offset().top && !lineMaker3) {

				//when class is selector, works only for first one
				lineMaker3 = new LineMaker({ parent: { element: '#caselist', position: 'prepend' }, lines: lines_tiny });

				setTimeout(function () {
					lineMaker3.animateLinesIn();
				}, 100);
			}


      let $shiftedgrid = $('.shiftedgrid');
      if ($shiftedgrid.length > 0 && $(window).scrollTop() + $(window).height() >= $shiftedgrid.offset().top && !lineMaker4) {
				//when class is selector, works only for first one
				lineMaker4 = new LineMaker({ parent: { element: '.shiftedgrid', position: 'prepend' }, lines: lines_medium });

				setTimeout(function () {
					lineMaker4.animateLinesIn();
				}, 100);
			}

			const $tinyGrid = $('#tinygrid');
			if ($tinyGrid.length > 0 && $(window).scrollTop() + $(window).height() >= $tinyGrid.offset().top && !lineMaker5) {
				//when class is selector, works only for first one
				lineMaker5 = new LineMaker({ parent: { element: '#tinygrid', position: 'prepend' }, lines: lines_tiny });

				setTimeout(function () {
					lineMaker5.animateLinesIn();
				}, 100);
			}
			const $teamCont = $('#teamcont');
			if ($teamCont.length > 0 && $(window).scrollTop() + $(window).height() >= $teamCont.offset().top && !lineMaker7) {
				//when class is selector, works only for first one
				lineMaker7 = new LineMaker({ parent: { element: '#teamcont', position: 'prepend' }, lines: lines_team });

				// console.log(lineMaker7);
				setTimeout(function () {
					lineMaker7.animateLinesIn();
				}, 100);
			}

			const $foot = $('#foot')
			if ($foot.length > 0 && $(window).scrollTop() + $(window).height() >= $foot.offset().top && !lineMaker6) {
				//when class is selector, works only for first one
				lineMaker6 = new LineMaker({ parent: { element: '#foot', position: 'prepend' }, lines: lines_big_withtop });

				setTimeout(function () {
					lineMaker6.animateLinesIn();
				}, 100);
			}
		}

	} else if ($("body").attr("id") == "body_case") {

		window.gridinit = function () {
			/*************************************/
			/*******CREATE GRIDS FOR CASE ST.*****/
			/*************************************/
			destroylines();

			//vertical
			for (let i = 1; i <= vcount; i++) {
				lines_case_top.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: (9 * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'TopBottom' } });
			}
			//horizontal
			for (let i = 1; i <= 9; i++) {
				lines_case_top.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: 'LeftRight' } });
			}

			//vertical
			var dir = 'TopBottom';
			for (let i = 1; i <= vcount; i++) {
				lines_case_underperex.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: (2 * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1500, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: dir } });
				if (dir == 'TopBottom') dir = 'BottomTop'; else dir = 'TopBottom';
			}
			//horizontal
			var dir = 'LeftRight';
			for (let i = 0; i <= 2; i++) {
				lines_case_underperex.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1500, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: dir } });
				if (dir == 'LeftRight') dir = 'RightLeft'; else dir = 'LeftRight';
			}

			//vertical
			var dir = 'TopBottom';
			for (let i = 1; i <= vcount; i++) {
				lines_case_casebottom.push({ top: 0, left: (i * sqw) + 'px', width: 1, height: (2 * sqh) + 'px', color: '#e2e2e2', hidden: true, animation: { duration: 1500, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: dir } });
				if (dir == 'TopBottom') dir = 'BottomTop'; else dir = 'TopBottom';
			}
			//horizontal

			var dir = 'LeftRight';
			for (let i = 0; i <= 1; i++) {
				lines_case_casebottom.push({ top: (i * sqh) + 'px', left: 0, width: '100%', height: 1, color: '#e2e2e2', hidden: true, animation: { duration: 1500, easing: 'easeInOutSine', delay: (i - 1) * 40, direction: dir } });
				if (dir == 'LeftRight') dir = 'RightLeft'; else dir = 'LeftRight';
			}
		}

		window.placegrid = function (e) {
			/*************************************/
			/********PLACE GRIDS FOR CASE ST.*****/
			/*************************************/

			if (e.type == "resize") {
				gridinit();
			}
			if (e.type == "load" || e.type == "resize") {
				lineMaker = new LineMaker({ parent: { element: '#body_case', position: 'prepend' }, lines: lines_case_top });

				setTimeout(function () {
					lineMaker.animateLinesIn();
				}, 500);
			}
			if ($(window).scrollTop() + $(window).height() >= $('#casemain').offset().top && !lineMaker2) {
				//when class is selector, works only for first one
				lineMaker2 = new LineMaker({ parent: { element: '#casemain', position: 'prepend' }, lines: lines_case_underperex });

				setTimeout(function () {
					lineMaker2.animateLinesIn();
				}, 100);
			}

      let $casefoot = $('#casefoot');
      if ($casefoot.length > 0 && $(window).scrollTop() + $(window).height() >= $casefoot.offset().top && !lineMaker4) {
				//when class is selector, works only for first one
				lineMaker4 = new LineMaker({ parent: { element: '#casefoot', position: 'prepend' }, lines: lines_case_underperex });

				lineMaker5 = new LineMaker({ parent: { element: '#casefoot', position: 'append' }, lines: lines_case_casebottom });

				setTimeout(function () {
					lineMaker4.animateLinesIn();
					lineMaker5.animateLinesIn();
				}, 100);

			}
		}
	}

	if (typeof window.gridinit === 'function') {
		window.gridinit();
	}

	if (typeof window.placegrid === 'function') {

		var returnedFunction = debounce(function (e) {
			window.placegrid(e);
		}, 250);
		$(window).on('resize', function (e) {
			$(".decolines").hide();
			returnedFunction(e);
		});
		$(window).on('scroll load', function (e) {
			window.placegrid(e);
		});


	}

	//slide to anchor
	$('a[href^="#"]').click(function (e) {
		// console.log('a');
		e.preventDefault();
		//close menu if open
		var ham = $('.c-hamburger');
		if (ham.hasClass("is-active") === true) {
			ham.removeClass("is-active")
			$("#menucont").hide();
			$("#allbuthead").show();
		}

		var dest = $(this).attr('href');
		$('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
	});
})();

