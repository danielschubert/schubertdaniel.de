jQuery(document).ready(function($) {
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
