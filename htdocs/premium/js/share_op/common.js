/**
 * common.js
 *
 *  version --- 
 *  updated --- 2012/06/30
 */


/* !stack ------------------------------------------------------------------- */
jQuery(document).ready(function($) {
	hideAdBar();
	pageScroll();
	addCss();
});


/* !isUA -------------------------------------------------------------------- */
var isUA = (function(){
	var ua = navigator.userAgent.toLowerCase();
	indexOfKey = function(key){ return (ua.indexOf(key) != -1)? true: false;}
	var o = {};
	o.ie      = function(){ return indexOfKey("msie"); }
	o.fx      = function(){ return indexOfKey("firefox"); }
	o.chrome  = function(){ return indexOfKey("chrome"); }
	o.opera   = function(){ return indexOfKey("opera"); }
	o.android = function(){ return indexOfKey("android"); }
	o.ipad    = function(){ return indexOfKey("ipad"); }
	o.ipod    = function(){ return indexOfKey("ipod"); }
	o.iphone  = function(){ return indexOfKey("iphone"); }
	return o;
})();
/* !hide address bar -------------------------------------------------------- */
var hideAdBar = function(){
	if( isUA.ipod() || isUA.iphone() ){
		setTimeout(scrollTo, 100, 0, 1);
	} else if ( isUA.android() ) {
		window.scrollTo(0,1);
	}
};
/* !pageScroll -------------------------------------------------------------- */
var pageScroll = function(){
	jQuery.easing.easeInOutCubic = function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}; 
	$('a.scroll, .scroll a, .ToPagetop a').each(function(){
		$(this).bind("click keypress",function(e){
			e.preventDefault();
			var target  = $(this).attr('href');
			var targetY = $(target).offset().top;
			var parent  = ( isUA.opera() )? (document.compatMode == 'BackCompat') ? 'body': 'html' : 'html,body';
			$(parent).animate(
				{scrollTop: targetY },
				400,
				'easeInOutCubic',
				function(){
					location.hash = target;
				}
			);
			return false;
		});
	});
};
/* !Addition First & Last --------------------------------------------------- */
var addCss = function(){
	$('li:first-child:not(:last-child)').addClass('first');
	$('li:last-child').addClass('last');
	$('dd:first-child:not(:last-child)').addClass('first');
	$('dd:last-child').addClass('last');
};
