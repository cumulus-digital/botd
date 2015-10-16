// @codekit-prepend 'iframeResizer.js';

(function(window, undefined){
	var iframe = window.document.querySelector('#botd-iframe'),
		isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
	window.iFrameResize({
		log: window._CMLS && window._CMLS.debug ? window._CMLS.debug : false,
		checkOrigin: false,
		heightCalculationMethod: isOldIE ? 'max' : 'lowestElement',
		tolerance: 5
	}, iframe);
}(window));