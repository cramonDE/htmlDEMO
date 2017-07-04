/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

;(function () {

	'use strict';


	$('.carousel').carousel();

	var i;
	var els = $("button");

// Case 1
	for(i=0 ; i<els.length ; i++) {
	  els[i].addEventListener("click", function(e) {

			$(".detail" + e.path[0].id.substr(6,1)).hide();
			$("#carousel-example-generic").show("slow");
		});
	}

	var els = $(".item img");
	for(i=0 ; i<els.length ; i++) {
		els[i].addEventListener("click", function(e) {
			console.log(e.path[0].id);
			$("#carousel-example-generic").hide("slow");
			$(".detail" + e.path[0].id.substr(5,1)).show();
		});
	}


	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Full height
	var fullHeight = function() {
		if ( !isiPhone() || !isiPad() ) {
			$('.js-full-height').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-full-height').css('height', $(window).height());
			});
		}
	};

	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	// Counter
	var counter = function() {
		$('.fh5co-counter-style-1').waypoint( function( direction ) {
			var el = $(this.element).attr('class');
			if( direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout( function(){
					// console.log($(this.element));
					$('.'+el).find('.js-counter').countTo({
						 formatter: function (value, options) {
				      	return value.toFixed(options.decimals);
				   	},
					});
				} , 200);

				$(this.element).addClass('animated');

			}
		} , { offset: '75%' } );


		$('.fh5co-counter-style-2').waypoint( function( direction ) {
			var el = $(this.element).attr('class');
			if( direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout( function(){
					$('.'+el).find('.js-counter').countTo({
						 formatter: function (value, options) {
				      	return value.toFixed(options.decimals);
				   	},
					});
				} , 200);

				$(this.element).addClass('animated');

			}
		} , { offset: '75%' } );
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvass, .js-fh5co-mobile-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('html').removeClass('mobile-menu-expanded');
	    	$('.js-fh5co-mobile-toggle').removeClass('active');
	    }
		});
	};

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
			event.preventDefault();
		});

	};

	// Off Canvass
	var offCanvass = function() {

		if ( $('#fh5co-offcanvass').length == 0 ) {
			if ( $('.fh5co-nav-style-1').length > 0 ) {
				$('body').prepend('<div id="fh5co-offcanvass" />');

				$('.fh5co-link-wrap').each(function(){
					$('#fh5co-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());
				})
				$('#fh5co-offcanvass').find('.js-fh5co-mobile-toggle').remove();
				$('#fh5co-offcanvass, #fh5co-page').addClass($('.fh5co-nav-style-1').data('offcanvass-position'));
				$('#fh5co-offcanvass').addClass('offcanvass-nav-style-1');
			}

			if ( $('.fh5co-nav-style-2').length > 0 ) {
				$('body').prepend('<div id="fh5co-offcanvass" />');

				$('.fh5co-link-wrap').each(function(){
					$('#fh5co-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());
				})
				$('#fh5co-offcanvass').find('.js-fh5co-mobile-toggle').remove();
				$('#fh5co-offcanvass, #fh5co-page').addClass($('.fh5co-nav-style-2').data('offcanvass-position'));
				$('#fh5co-offcanvass').addClass('offcanvass-nav-style-2');
			}
		}

		$('body').on('click', '.js-fh5co-mobile-toggle', function(e){
			var $this = $(this);
			$this.toggleClass('active');
			$('html').toggleClass('mobile-menu-expanded');

		});

		if ( $(window).width() < 769 ) {
			$('body, html').addClass('fh5co-overflow');
		}

		$(window).resize(function(){
			if ( $(window).width() < 769 ) {
				$('body, html').addClass('fh5co-overflow');
			}
			if ( $(window).width() > 767 ) {
				if ( $('html').hasClass('mobile-menu-expanded')) {
					$('.js-fh5co-mobile-toggle').removeClass('active');
					$('html').removeClass('mobile-menu-expanded');
				}
			}
		});

	};


	// Magnific Popup

	var imagePopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 10,
			titleSrc: 'title',
			gallery:{
				enabled:false
			}
		});
	};


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			}

		});
	};


	// Document on load.
	$(function(){

		fullHeight();
		ScrollNext();
		parallax();
		counter();
		mobileMenuOutsideClick();
		burgerMenu();
		imagePopup();
		offCanvass();


	});


}());


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "module.exports = \"<!DOCTYPE html><!--[if lt IE 7]>      <html class=\\\"no-js lt-ie9 lt-ie8 lt-ie7\\\"> <![endif]--><!--[if IE 7]>         <html class=\\\"no-js lt-ie9 lt-ie8\\\"> <![endif]--><!--[if IE 8]>         <html class=\\\"no-js lt-ie9\\\"> <![endif]--><!--[if gt IE 8]><!--> <html class=\\\"no-js\\\"> <!--<![endif]-->\\t<head>\\t<meta charset=\\\"utf-8\\\">\\t<meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\t<title>Voltage &mdash; 100% Free Fully Responsive HTML5 Template by FREEHTML5.co</title>\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\t<meta name=\\\"description\\\" content=\\\"Free HTML5 Template by FREEHTML5.CO\\\" />\\t<meta name=\\\"keywords\\\" content=\\\"free html5, free template, free bootstrap, html5, css3, mobile first, responsive\\\" />\\t<meta name=\\\"author\\\" content=\\\"FREEHTML5.CO\\\" />  \\t<!--\\t//////////////////////////////////////////////////////\\tFREE HTML5 TEMPLATE\\tDESIGNED & DEVELOPED by FREEHTML5.CO\\tWebsite: \\t\\thttp://freehtml5.co/\\tEmail: \\t\\t\\tinfo@freehtml5.co\\tTwitter: \\t\\thttp://twitter.com/fh5co\\tFacebook: \\t\\thttps://www.facebook.com/fh5co\\t//////////////////////////////////////////////////////\\t-->  \\t<!-- Facebook and Twitter integration -->\\t<meta property=\\\"og:title\\\" content=\\\"\\\"/>\\t<meta property=\\\"og:image\\\" content=\\\"\\\"/>\\t<meta property=\\\"og:url\\\" content=\\\"\\\"/>\\t<meta property=\\\"og:site_name\\\" content=\\\"\\\"/>\\t<meta property=\\\"og:description\\\" content=\\\"\\\"/>\\t<meta name=\\\"twitter:title\\\" content=\\\"\\\" />\\t<meta name=\\\"twitter:image\\\" content=\\\"\\\" />\\t<meta name=\\\"twitter:url\\\" content=\\\"\\\" />\\t<meta name=\\\"twitter:card\\\" content=\\\"\\\" />\\t<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\\t<link rel=\\\"shortcut icon\\\" href=\"+JSON.stringify(require(\"./images/favicon.jpg\"))+\">\\t<!-- Google Fonts -->\\t<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Monsterrat:400,700|Merriweather:400,300italic,700' rel='stylesheet' type='text/css'>\\t<!-- Animate.css -->\\t<link rel=\\\"stylesheet\\\" href=\\\"css/animate.css\\\">\\t<!-- Icomoon Icon Fonts-->\\t<link rel=\\\"stylesheet\\\" href=\\\"css/icomoon.css\\\">\\t<!-- Magnific Popup-->\\t<link rel=\\\"stylesheet\\\" href=\\\"css/magnific-popup.css\\\">\\t<!-- Owl Carousel -->\\t<link rel=\\\"stylesheet\\\" href=\\\"css/owl.carousel.min.css\\\">\\t<link rel=\\\"stylesheet\\\" href=\\\"css/owl.theme.default.min.css\\\">\\t<!-- Bootstrap  -->\\t<link rel=\\\"stylesheet\\\" href=\\\"css/bootstrap.css\\\">\\t<!-- Cards -->\\t<link rel=\\\"stylesheet\\\" href=\\\"css/cards.css\\\">\\t<!-- Modernizr JS -->\\t<script src=\\\"js/modernizr-2.6.2.min.js\\\"></script>\\t<!-- FOR IE9 below -->\\t<!--[if lt IE 9]>\\t<script src=\\\"js/respond.min.js\\\"></script>\\t<![endif]-->\\t</head>\\t<body>\\t<div id=\\\"fh5co-page\\\">\\t\\t<div class=\\\"fh5co-cover  js-full-height\\\" id = 'background' data-next=\\\"yes\\\"  style=\\\"background-image: url(期末dw/背景图片.jpg);\\\">\\t\\t\\t<h1 class=\\\"wow bounceInUp\\\" data-wow-duration=\\\"2s\\\">Modern     life    is rubbish without</h1>\\t\\t\\t<h2 class=\\\"wow bounceInRight\\\"><img src=\"+JSON.stringify(require(\"./期末dw/t013fcac1b0505efaaf.jpg\"))+\" width=\\\"400\\\" height=\\\"241\\\" alt=\\\"\\\"/></h2>\\t\\t\\t<div class=\\\"navPage\\\" >\\t\\t\\t\\t<div class=\\\"navStyle\\\">\\t\\t\\t\\t\\t<ul class=\\\"nav nav-pills nav-stacked \\\">\\t\\t\\t\\t\\t\\t<li role=\\\"presentation\\\" class = \\\"active\\\"><a href=\\\"#introduce\\\" data-toggle=\\\"pill\\\"  >简介</a></li>\\t\\t\\t\\t\\t  <li role=\\\"presentation\\\"><a href=\\\"#works\\\"data-toggle=\\\"pill\\\" >专辑作品</a></li>\\t\\t\\t\\t\\t  <li role=\\\"presentation\\\"><a href=\\\"#news\\\" data-toggle=\\\"pill\\\" >近日新闻</a></li>\\t\\t\\t\\t\\t\\t<li role=\\\"presentation\\\"><a href=\\\"#resource\\\" data-toggle=\\\"pill\\\">现场资源</a></li>\\t\\t\\t\\t\\t\\t<li role=\\\"presentation\\\"><a href=\\\"#album\\\" data-toggle=\\\"pill\\\" >相册合集</a></li>\\t\\t\\t\\t\\t\\t<li role=\\\"presentation\\\"><a href=\\\"#contact\\\" data-toggle=\\\"pill\\\" >联系我们</a></li>\\t\\t\\t\\t\\t</ul>\\t\\t\\t\\t</div>\\t\\t\\t\\t<div class=\\\"tab-content tabDetail\\\">\\t\\t\\t    <div role=\\\"tabpanel\\\" class=\\\"tab-pane active\\\" id=\\\"introduce\\\">\\t\\t\\t\\t\\t\\t<div id=\\\"carousel-example-generic\\\" class=\\\"carousel slide catouselPage\\\" data-ride=\\\"carousel\\\">\\t\\t\\t\\t\\t\\t\\t  <!-- Indicators -->\\t\\t\\t\\t\\t\\t\\t  <ol class=\\\"carousel-indicators\\\">\\t\\t\\t\\t\\t\\t\\t    <li data-target=\\\"#carousel-example-generic\\\" data-slide-to=\\\"0\\\" class=\\\"active\\\"></li>\\t\\t\\t\\t\\t\\t\\t    <li data-target=\\\"#carousel-example-generic\\\" data-slide-to=\\\"1\\\"></li>\\t\\t\\t\\t\\t\\t\\t    <li data-target=\\\"#carousel-example-generic\\\" data-slide-to=\\\"2\\\"></li>\\t\\t\\t\\t\\t\\t\\t\\t\\t <li data-target=\\\"#carousel-example-generic\\\" data-slide-to=\\\"3\\\"></li>\\t\\t\\t\\t\\t\\t\\t  </ol>\\t\\t\\t\\t\\t\\t\\t  <!-- Wrapper for slides -->\\t\\t\\t\\t\\t\\t\\t  <div class=\\\"carousel-inner catouselPage\\\" role=\\\"listbox\\\">\\t\\t\\t\\t\\t\\t\\t    <div class=\\\"item active catouselPage\\\" >\\t\\t\\t\\t\\t\\t\\t      <img src=\"+JSON.stringify(require(\"./images/alex touxiang.jpg\"))+\" id=\\\"photo1\\\" alt=\\\"alex\\\">\\t\\t\\t\\t\\t\\t\\t      <div class=\\\"carousel-caption\\\">\\t\\t\\t\\t\\t\\t\\t        <h2>Alex</h2>\\t\\t\\t\\t\\t\\t\\t      </div>\\t\\t\\t\\t\\t\\t\\t    </div>\\t\\t\\t\\t\\t\\t\\t    <div class=\\\"item catouselPage\\\">\\t\\t\\t\\t\\t\\t\\t      <img src=\"+JSON.stringify(require(\"./images/damon.jpg\"))+\"  id=\\\"photo2\\\" alt=\\\"damon\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"carousel-caption\\\">\\t\\t\\t\\t\\t\\t\\t        <h2>Damon</h2>\\t\\t\\t\\t\\t\\t\\t      </div>\\t\\t\\t\\t\\t\\t\\t    </div>\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"item catouselPage\\\">\\t\\t\\t\\t\\t\\t\\t      <img src=\"+JSON.stringify(require(\"./images/dave touxiang.jpg\"))+\" id=\\\"photo3\\\" alt=\\\"dave\\\">\\t\\t\\t\\t\\t\\t\\t      <div class=\\\"carousel-caption\\\">\\t\\t\\t\\t\\t\\t\\t        <h2>Dave</h2>\\t\\t\\t\\t\\t\\t\\t      </div>\\t\\t\\t\\t\\t\\t\\t    </div>\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"item catouselPage\\\">\\t\\t\\t\\t\\t\\t\\t      <img src=\"+JSON.stringify(require(\"./images/graham touxiang.jpg\"))+\" id=\\\"photo4\\\" alt=\\\"graham\\\">\\t\\t\\t\\t\\t\\t\\t      <div class=\\\"carousel-caption\\\">\\t\\t\\t\\t\\t\\t\\t        <h2>Graham</h2>\\t\\t\\t\\t\\t\\t\\t      </div>\\t\\t\\t\\t\\t\\t\\t    </div>\\t\\t\\t\\t\\t\\t\\t  </div>\\t\\t\\t\\t\\t\\t\\t  <!-- Controls -->\\t\\t\\t\\t\\t\\t\\t  <a class=\\\"left carousel-control\\\" href=\\\"#carousel-example-generic\\\" role=\\\"button\\\" data-slide=\\\"prev\\\">\\t\\t\\t\\t\\t\\t\\t    <span class=\\\"glyphicon glyphicon-chevron-left\\\" aria-hidden=\\\"true\\\"></span>\\t\\t\\t\\t\\t\\t\\t    <span class=\\\"sr-only\\\">Previous</span>\\t\\t\\t\\t\\t\\t\\t  </a>\\t\\t\\t\\t\\t\\t\\t  <a class=\\\"right carousel-control\\\" href=\\\"#carousel-example-generic\\\" role=\\\"button\\\" data-slide=\\\"next\\\">\\t\\t\\t\\t\\t\\t\\t    <span class=\\\"glyphicon glyphicon-chevron-right\\\" aria-hidden=\\\"true\\\"></span>\\t\\t\\t\\t\\t\\t\\t    <span class=\\\"sr-only\\\">Next</span>\\t\\t\\t\\t\\t\\t\\t  </a>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t<div class=\\\"detail detail1\\\">\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/Alex.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"text\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t<h2>Alex</h2>\\t\\t\\t\\t\\t\\t\\t\\t\\t<br>\\t\\t\\t\\t\\t\\t\\t\\t\\t<br>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Born ：21 November 1968 (age?48)       Boscombe, Bournemouth, England</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Genres：Rock, Britpop</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Occupation(s)：Musician, songwriter, cheesemaker, author, columnist, TV personality, model</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Instruments：Bass, double bass, vocals, guitar, piano, keyboards</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Years active：1988–present</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Associated acts：Blur, Fat Les, WigWam, Me Me Me</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" id = \\\"button1\\\" class=\\\"btn btn-default btn-class\\\">BACK</button>\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t<div class=\\\"detail detail2\\\">\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/damon01.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"text\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t<h2>Damon</h2>\\t\\t\\t\\t\\t\\t\\t\\t\\t<br>\\t\\t\\t\\t\\t\\t\\t\\t\\t<br>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Born：23 March 1968 (age?49)      Whitechapel, London, England</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Origin ：Aldham, Essex</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Genres：Britpop/alternative rock/indie rock/world/electronic/hip hop/experimental</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Occupation(s)：Musiciansinger-songwritercomposerrecord producermulti-instrumentalist </p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Years active：1988–present</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Labels：Food/SBK/Virgin/Parlophone/X</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Associated acts：Blur/Gorillaz/The Good, the Bad & the Queen</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" id = \\\"button2\\\" class=\\\"btn btn-default btn-class\\\">BACK</button>\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t<div class=\\\"detail detail3\\\">\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/Dave  11.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"text\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t<h2>Dave</h2>\\t\\t\\t\\t\\t\\t\\t\\t\\t<br>\\t\\t\\t\\t\\t\\t\\t\\t\\t<br>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Born：8 May 1964 (age?53)      Colchester, Essex, England</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Genres：Britpop, indie rock</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Occupation(s)：Musician, animator, solicitor, political activist, DJ</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Instruments：Drums, drum machine, percussion, guitar</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Years active：1988–present</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Associated acts：Blur, The Ailerons</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Dave Rowntree (born 8 May 1964)is an English musician, politician, solicitor and animator. </p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" id = \\\"button3\\\" class=\\\"btn btn-default btn-class\\\">BACK</button>\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t<div class=\\\"detail detail4\\\">\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/graham.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"text\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t<h2>Graham</h2>\\t\\t\\t\\t\\t\\t\\t\\t\\t<br>\\t\\t\\t\\t\\t\\t\\t\\t\\t<br>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Birth name：Graham Leslie Coxon</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Born：12 March 1969 (age?48)      Rinteln, West Germany</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Origin：Spondon, Derby, England</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Genres：Alternative rock, indie rock, indie folk, lo-fi, Britpop</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Occupation(s)：Musician, singer-songwriter, multi-instrumentalist, painter</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<p>Instruments：Guitar, vocals, banjo, saxophone, bass, drums, piano, clarinet, harmonica</p>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\"  id = \\\"button4\\\" class=\\\"btn btn-default btn-class\\\">BACK</button>\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t<div role=\\\"tabpanel\\\" class=\\\"tab-pane\\\" id=\\\"works\\\">\\t\\t\\t\\t\\t\\t\\t<div class=\\\"container-wrap\\\">\\t\\t\\t\\t\\t\\t\\t    <div class=\\\"container\\\">\\t\\t\\t\\t\\t\\t\\t        <div class=\\\"vertical-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/《leisure》.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-info album-info-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\\"lead\\\">Leisure</h3>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dl class=\\\"dl-horizontal\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dt>表演者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>Blur</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>流派</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>流行</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>专辑类型</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>专辑</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>介质</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd> Audio CD </dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>发行时间</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>1991</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>出版者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dd>Capitol</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</dl>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"vertical-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/《modern life is rubbish》.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\\"lead\\\">modern life is rubbish</h3>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dl class=\\\"dl-horizontal album-info-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dt>表演者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>Blur</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>流派</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>摇滚</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>专辑类型</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>专辑</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>介质</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd> Audio CD </dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>发行时间</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>1993</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>出版者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dd>Food</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</dl>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"vertical-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/《parklife》.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\\"lead\\\">Parklife</h3>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dl class=\\\"dl-horizontal album-info-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dt>表演者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t <dd>Blur</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>流派</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>摇滚</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>专辑类型</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>专辑</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>介质</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>CD</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>发行时间</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>1994</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>出版者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dd>Food</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</dl>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"vertical-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/《the great escape》.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\\"lead\\\">The Great Escape</h3>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dl class=\\\"dl-horizontal album-info-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dt>表演者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>Blur</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>流派</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>摇滚</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>专辑类型</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>专辑</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>介质</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd> Audio CD </dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>发行时间</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>1993</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>出版者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dd>Food</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</dl>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"vertical-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/《blur》.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\\"lead\\\">Blur</h3>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dl class=\\\"dl-horizontal album-info-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dt>表演者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>Blur</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>流派</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>流行</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>专辑类型</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>专辑</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>介质</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd> Audio CD </dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>发行时间</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>1997</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>出版者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dd>Virgin Records Us</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</dl>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"vertical-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/《13》.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\\"lead\\\">13</h3>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dl class=\\\"dl-horizontal album-info-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dt>表演者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>Blur</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>流派</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>流行</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>专辑类型</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>专辑</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>介质</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd> Audio CD </dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>发行时间</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>1999</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>出版者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dd>Food</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</dl>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"vertical-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/《think tank》.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\\"lead\\\">Think Tank</h3>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dl class=\\\"dl-horizontal album-info-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dt>表演者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>Blur</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>流派</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>摇滚</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>专辑类型</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>Import / Limited Edition</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>介质</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd> Audio CD </dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>发行时间</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>2003</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>出版者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dd>EMI</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</dl>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"vertical-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/《the magic whip》.jpg\"))+\" alt=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-info\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<h3 class=\\\"lead\\\">The Magic Whip</h3>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dl class=\\\"dl-horizontal album-info-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dt>表演者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>Blur</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>流派</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>摇滚</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>专辑类型</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>专辑</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>介质</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd> Audio CD </dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>发行时间</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t  <dd>2015-04-27</dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dt>出版者</dt>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<dd>Parlophone Records </dd>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</dl>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t    </div>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t    <div role=\\\"tabpanel\\\" class=\\\"tab-pane\\\" id=\\\"news\\\">\\t\\t\\t\\t\\t\\t\\t<div class=\\\"news-detail\\\">\\t\\t\\t\\t\\t\\t\\t\\t<p class=\\\"bg-success\\\">2015.7.22</p>\\t\\t\\t\\t\\t\\t\\t\\t<p>Blur香港演唱会</p>\\t\\t\\t\\t\\t\\t\\t\\t<p class=\\\"bg-success\\\">2015.4.27：</p>\\t\\t\\t\\t\\t\\t\\t\\t<p>该专辑受到了中国香港文化的强烈影响，从封面上印着的中文专辑名“模糊魔鞭”到三藩市华人助阵的广场舞MV均可窥见一斑。英版专辑共12首歌，其中'Go Out'，'There Are Too Many Of Us'，'Lonesome Street'，'My Terracotta Heart'，'I Broadcast'和'Ong Ong'已作为先发曲目通过电台电视等渠道面市，日版新增一首'Y'all Doomed'，同时，这首单曲将限量发行3000张7寸黑胶唱片。</p>\\t\\t\\t\\t\\t\\t\\t\\t<p class=\\\"bg-success\\\">2014.1.13-14</p>\\t\\t\\t\\t\\t\\t\\t\\t<p>Blur前往世界巡演的最后一站 — 日本进行演出。</p>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t    <div role=\\\"tabpanel\\\" class=\\\"tab-pane\\\" id=\\\"resource\\\">\\t\\t\\t\\t\\t\\t\\t<div class=\\\"resource\\\">\\t\\t\\t\\t\\t\\t\\t\\t<p>\\t\\t\\t\\t\\t\\t\\t\\t  <span>全世界糊饭的视频大本营 </span>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" class=\\\"btn btn-link\\\"><a href=\\\"http://www.blurcast.tv/login\\\">LINK</a></button>\\t\\t\\t\\t\\t\\t\\t\\t</p>\\t\\t\\t\\t\\t\\t\\t\\t<p>\\t\\t\\t\\t\\t\\t\\t\\t  <span>MV大全集（1990-2015）</span>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" class=\\\"btn btn-link\\\"><a href=\\\"http://www.bilibili.com/video/av3352478/?from=search&seid=497669468628179552\\\">LINK</a></button>\\t\\t\\t\\t\\t\\t\\t\\t</p>\\t\\t\\t\\t\\t\\t\\t\\t<p>\\t\\t\\t\\t\\t\\t\\t\\t  <span>1993：《Starshaped》记录了Blur乐队1991年的Reading Festival和1992年的Glastonbury Festival演出</span>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" class=\\\"btn btn-link\\\"><a href=\\\"http://www.bilibili.com/video/av2359275/?from=search&seid=497669468628179552\\\">LINK</a></button>\\t\\t\\t\\t\\t\\t\\t\\t</p>\\t\\t\\t\\t\\t\\t\\t\\t<p>\\t\\t\\t\\t\\t\\t\\t\\t  <span>2015： 《Blur：New World Towers》讲了The Magic Whip的创作历程、他们在海德和香港的两场演出。</span>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" class=\\\"btn btn-link\\\"><a href=\\\" http://www.bilibili.com/video/av5823410/?from=search&seid=497669468628179552\\\">LINK</a></button>\\t\\t\\t\\t\\t\\t\\t\\t</p>\\t\\t\\t\\t\\t\\t\\t\\t<p>\\t\\t\\t\\t\\t\\t\\t\\t  <span>2009年7月海德公园经典重组LIVE </span>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" class=\\\"btn btn-link\\\"><a href=\\\" http://www.bilibili.com/video/av5823410/?from=search&seid=497669468628179552\\\">LINK</a></button>\\t\\t\\t\\t\\t\\t\\t\\t</p>\\t\\t\\t\\t\\t\\t\\t\\t<p>\\t\\t\\t\\t\\t\\t\\t\\t  <span>2009年6月28日Glastonbury音乐节</span>\\t\\t\\t\\t\\t\\t\\t\\t\\t<button type=\\\"button\\\" class=\\\"btn btn-link\\\"><a href=\\\"  http://www.bilibili.com/video/av3408265/?from=search&seid=497669468628179552\\\">LINK</a></button>\\t\\t\\t\\t\\t\\t\\t\\t</p>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t<div role=\\\"tabpanel\\\" class=\\\"tab-pane\\\" id=\\\"album\\\">\\t\\t\\t\\t\\t\\t\\t<div class=\\\"\\\">\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"album-image\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\"+JSON.stringify(require(\"./images/777.jpg\"))+\" alt=\\\"album\\\">\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"well well-lg link-class\\\">\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\\"#https://www.douban.com/note/165183758/\\\">传送门</a>\\t\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t<div role=\\\"tabpanel\\\" class=\\\"tab-pane\\\" id=\\\"contact\\\">\\t\\t\\t\\t\\t\\t\\t<div class=\\\"contact-area\\\">\\t\\t\\t\\t\\t\\t\\t\\t<form class=\\\"form-horizontal\\\">\\t\\t\\t\\t\\t\\t\\t\\t  <div class=\\\"form-group contact-us\\\">\\t\\t\\t\\t\\t\\t\\t\\t    <label for=\\\"name\\\" class=\\\"col-sm-2 control-label\\\">Name</label>\\t\\t\\t\\t\\t\\t\\t\\t    <div class=\\\"col-sm-6\\\">\\t\\t\\t\\t\\t\\t\\t\\t      <input type=\\\"text\\\" class=\\\"form-control\\\" placeholder=\\\"Text input\\\">\\t\\t\\t\\t\\t\\t\\t\\t    </div>\\t\\t\\t\\t\\t\\t\\t\\t  </div>\\t\\t\\t\\t\\t\\t\\t\\t  <div class=\\\"form-group contact-us\\\">\\t\\t\\t\\t\\t\\t\\t\\t    <label for=\\\"mail\\\" class=\\\"col-sm-2 control-label\\\">Email</label>\\t\\t\\t\\t\\t\\t\\t\\t    <div class=\\\"col-sm-6\\\">\\t\\t\\t\\t\\t\\t\\t\\t      <input type=\\\"text\\\" class=\\\"form-control\\\" placeholder=\\\"Text input\\\">\\t\\t\\t\\t\\t\\t\\t\\t    </div>\\t\\t\\t\\t\\t\\t\\t\\t  </div>\\t\\t\\t\\t\\t\\t\\t\\t <textarea class=\\\"form-control textarea-class\\\" rows=\\\"10\\\"></textarea>\\t\\t\\t\\t\\t\\t\\t\\t <button type=\\\"button\\\" class=\\\"btn btn-info\\\">SEND</button>\\t\\t\\t\\t\\t\\t\\t\\t</form>\\t\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t\\t</div>\\t\\t\\t\\t\\t</div>\\t\\t\\t  </div>\\t\\t\\t</div>\\t\\t\\t<!-- Nav tabs -->\\t\\t</div>\\t\\t<!-- END footer -->\\t</div>\\t<!-- END page--></script>\\t<!-- jQuery -->\\t<script src=\\\"js/jquery.min.js\\\"></script>\\t<!-- jQuery Easing -->\\t<script src=\\\"js/jquery.easing.1.3.js\\\"></script>\\t<!-- Bootstrap -->\\t<script src=\\\"js/bootstrap.min.js\\\"></script>\\t<!-- Waypoints -->   <script src=\\\"js/jquery.waypoints.min.js\\\"></script>\\t<!-- Owl Carousel -->\\t<script src=\\\"js/owl.carousel.min.js\\\"></script>\\t<!-- Magnific Popup -->\\t<script src=\\\"js/jquery.magnific-popup.min.js\\\"></script>\\t<!-- Stellar -->\\t<script src=\\\"js/jquery.stellar.min.js\\\"></script>\\t<!-- countTo -->\\t<script src=\\\"js/jquery.countTo.js\\\"></script>\\t<!-- WOW -->\\t<script src=\\\"js/wow.min.js\\\"></script>\\t<script src=\\\"期末dw/architects-daughter-n4-default.js\\\" type=\\\"text/javascript\\\"></script>\\t<script>\\t\\tnew WOW().init();\\t</script>\\t<!-- Main -->\\t<script src=\\\"js/main.js\\\"></script>\\t<script src = \\\"app.js\\\" type=\\\"text/javascript\\\"></script>\\t</body></html>\""

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.4@css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.4@css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_main_css__);

// import $ from 'expose?$!jquery'
// require('./js/jquery.min.js')
// require('./js/jquery.easing.1.3.js')
// require('./js/bootstrap.min.js')
// require('./js/jquery.waypoints.min.js')
// require('./js/owl.carousel.min.js')
// require('./js/jquery.magnific-popup.min.js')
// require('./js/jquery.stellar.min.js')
// require('./js/jquery.countTo.js')
// require('./js/wow.min.js')
// require('./js/main.js')
// require('./js/modernizr-2.6.2.min.js')
// import './css/animate.css'
// import './css/icomoon.css'
// import './css/magnific-popup.css'
// import './css/owl.carousel.min.css'
// import './css/owl.theme.default.min.css'
// import './css/bootstrap.css'
// import './css/cards.css'

//
__webpack_require__(0)

__webpack_require__(1)
// import Image from './images/img_4.jpg'

// document.write(Image);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\n#background {\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: 0% 95%;\n}\nh1 {\n\tcolor: #F50383;\n\tfont-style: normal;\n\tfont-family: architects-daughter;\n\tfont-weight: 400;\n\tfont-variant: normal;\n\tfont-size: 80px;\n\tline-height: 5;\n\ttext-indent: 10px;\n\ttext-shadow: 5px 0px #2E0FFB;\n\tposition: absolute;\n\ttop: -9%;\n  margin-left: 7%;\n}\nh2 {\n\tfloat: right;\n}\nh2 img {\n\tvertical-align: middle;\n  height: 25%;\n  width: 89%;\n  margin-left: 10.9%;\n}\n.navPage {\n\tmargin-left: 11%;\n\twidth: 57%;\n\tbackground-color: grey;\n\theight: 70%;\n\tposition: relative;\n\ttop: 23%;\n\tbackground-color: rgba(80,80,80,0.2);\n}\n.navStyle {\n\tpadding: 0%;\n\twidth: 95%;\n\tmargin: auto;\n\theight: 70%;\n\tfont-size: 15pt;\n\ttop: 15%;\n\tposition: relative;\n\theight: 70%;\n}\n.navStyle li {\n\ttext-align: center;\n\twidth: 20%;\n\theight: 70px;\n}\n.navStyle a {\n\t color: #8593b6;\n}\n.navStyle a:hover {\n\t color: #337ab7;\n}\n.tabSelect {\n\tcolor: #337ab7;\n}\n.navStyle li.active>a {\n\tbackground-color: rgba(80, 80, 80, 0.1)!important;\n\tcolor: #1c5060!important;\n}\n.navPage .tabDetail {\n\tbackground: rgba(80, 80, 80, 0.1);\n  width: 73%;\n  position: relative;\n  left: 24%;\n  height: 85%;\n  top: -62%;\n}\n#introduce {\n\theight: 100%\n}\n.catouselPage {\n\theight: 100%;\n\twidth: 100%;\n\n\t/*display: none;*/\n}\n.catouselPage img {\n\twidth: 58%;\n\tmargin: auto;\n\tmargin-top: 0%;\n\tdisplay: block;\n\theight: 100%!important;\n}\n.catouselPage h2 {\n\tposition: relative;\n\tleft: -100%\n}\n.detail {\n  height: 100%;\n  position: absolute;\n\n}\n.detail img {\n\theight: 80%;\n\tmargin-left: 4%;\n\tmargin-top: 7%;\n\twidth: 39%;\n}\n.detail .text {\n\twidth: 49%;\n\tposition: relative;\n\theight: 79%;\n\tleft: 48%;\n\ttop: -83%;\n}\n.detail h2 {\n\tcolor: rgba(147, 0, 255, 0.88);\n}\n.detail p {\n\tmargin-bottom:3%;\n}\n.detail .btn-class {\n\topacity: 0.5;\n\tposition: absolute;\n\tleft: 85%;\n\ttop: 103%;\n}\n.detail1 {\n\tdisplay: none;\n}\n.detail2 {\n\n\tdisplay: none;\n}\n.detail3 {\n\tdisplay: none;\n}\n.detail4 {\n\tdisplay: none;\n}\n.album-image img {\n\twidth: 53%;\n\tposition: relative;\n\tleft: 4%;\n\tmargin-top: 4%;\n}\n.link-class {\n\twidth: 20%;\n\ttext-align: center;\n\tfont-size: 15pt;\n\tposition: relative;\n\tleft: 70%;\n\tmargin-top: -37%;\n}\n#contact {\n\theight: 100%\n}\n.contact-us {\n\tpadding-left: 20%;\n\tpadding-top: 1%;\n}\n.textarea-class {\n\twidth: 85%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 7%;\n}\n.contact-area {\n\tpadding-top: 4%;\n\theight: 100%\n}\n.contact-area button {\n\tfloat: right;\n\tmargin-right: 7.6%;\n\tmargin-top: 2.8%;\n}\n.contact-area form {\n\theight: 100%\n}\n.container-wrap {\n    width: 100%;\n    height: 100%;\n\n    white-space: nowrap;\n    overflow: hidden;\n    overflow-x: scroll; /* 1 */\n    -webkit-backface-visibility: hidden;\n    -webkit-perspective: 1000;\n    -webkit-overflow-scrolling: touch; /* 2 */\n    text-align: justify; /* 3 */\n    &::-webkit-scrollbar {\n        display: none;\n    }\n}\n\n.container {\n\n}\n.container > div {\n    display: inline-block;\n    color: grey;\n\t\twidth: 20%;\n\t\toverflow: hidden;\n}\n.container > div img {\n\twidth: 100%;\n\tmargin-top: 18%;\n\tmargin-left: 4%\n}\n#works {\n\theight: 100%\n}\n.album-info {\n\ttext-align: center;\n\tpadding-top: 4%;\n}\n.album-info-detail {\n\tmargin-left: -30%;\n}\n.vertical-info {\n\tmargin-right: 2%;\n}\n.news-detail {\n\tmargin: 2%;\n\tpadding-top: 3%;\n}\n#resource {\n\theight: 100%;\n}\n\n.resource button {\n\tfloat: right;\n\tdisplay: inline;\n}\n.resource {\n\tfont-size: 13pt;\n  margin-left: 2%;\n  padding-top: 4%;\n  line-height: 200%;\n\theight: 100%\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);