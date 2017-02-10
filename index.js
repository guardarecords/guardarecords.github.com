$(document).ready(function() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		var ww = ( $(window).width() < window.screen.width ) ? $(window).width() : window.screen.width;
		var mw = 480; 
		var ratio =  ww / mw;
		
		if (ww < mw) { 
			$('#Viewport').attr('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + ww);
		} else {
			$('#Viewport').attr('content', 'initial-scale=1.0, maximum-scale=2, minimum-scale=1.0, user-scalable=yes, width=' + ww);
		}
	}
});