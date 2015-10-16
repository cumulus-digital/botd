// @codekit-prepend 'iframeResizer.js';

(function(window, undefined){
	var iframe = window.document.querySelector('.botd-iframe'),
		isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
	window.iFrameResize({
		log: window._CMLS && window._CMLS.debug ? window._CMLS.debug : false,
		checkOrigin: false,
		heightCalculationMethod: isOldIE ? 'max' : 'lowestElement',
		tolerance: 5,
		messageCallback: function(msg) {
			try {
				console.log('RECEIVED MESSAGE FROM IFRAME', msg);
			} catch(e) {}
			var botd = jQuery('.botd-iframe');
			if (msg.message === 'GO TO TOP') {
				jQuery('html,body').animate({
					scrollTop: botd.length && botd.offset() && botd.offset().top ? botd.offset().top : 0
				}, 500);
			}
		}
	}, iframe);
}(window));