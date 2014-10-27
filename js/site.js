jQuery(document).ready(function($) {
	// for navigation scrolling 
	elem = $("html,body");
	init_dh = $(elem).height();

	// To Top Arrow
	(function() {
		var
			$title         = 'Nach Oben',
			$displayHeight = 200,
			$speed         = 800,
			$fixedPos      = true;

		// Detect if mobile browser support fixed position
		if (/(iPhone|iPod|iPad)\sOS\s[0-4][_\d]+/i.test(navigator.userAgent))
			$fixedPos= false;
		if (/Android\s+([0-2][\.\d]+)/i.test(navigator.userAgent))
			$fixedPos = false;
		
		// Append scroll button
		$('body').append('<a href="#" id="scroll-button" title="' + $title + '" class="hidden">'+ $title + '</a>');

		$('#scroll-button').click(function(e){
				$('html, body').animate({ scrollTop : 0 }, $speed, 'easeOutExpo');

				e.preventDefault();
			});

		$(window).scroll(function() {
			var $pos = $(window).scrollTop();

			if (!$fixedPos) {
				$('#scroll-button').css({
					position : 'absolute',
					top      : $pos+20
				});
			}

			if ($pos > $displayHeight)
				$('#scroll-button').removeClass('hidden');
			else 
				$('#scroll-button').addClass('hidden');
		});

	})();
});

/* scroll navigation */
$(window).scroll(function() {
	if ($( window ).width() > 400){
		var hh = $('header').height(),
			st = $(elem).scrollTop(),
			max_scroll = init_dh - $("nav").height(),
			value;

		if ( st > hh){
			if (st >= max_scroll) {
				value = max_scroll - hh + "px";}
			else {
				value = (st - hh) + "px" }
		}else {value = "0px"}

		$("nav").css("margin-top", value);
	}
});
