// "МОДАЛЬНОЕ ОКНО"
// 26-07-2019

'use strict';

(function () {
	const popupWrapper = document.querySelector('.popup_wrapper');
	const popup = {
		activator: document.querySelector('.popup_activator'),
		body: popupWrapper.querySelector('.popup_body'),
		close: popupWrapper.querySelector('.popup_close')
	};

	popupWrapper.addEventListener('click', onWrapperClick);
	popup.activator.addEventListener('click', onActivatorClick);
	popup.body.addEventListener('click', onBodyClick);
	popup.close.addEventListener('click', onCloseClick);

	function onActivatorClick () {	
		popupWrapper.classList.add('popup_active');
		popup.body.classList.add('popup_active');
	}	
	
	function onWrapperClick () {
		hidePopup ();	
	}
	
	function onCloseClick () {
		hidePopup ();		
	}
	
	function onBodyClick (evt) {
		evt.stopPropagation();
	}
	
	function hidePopup () {
		popupWrapper.classList.remove('popup_active');
		popup.body.classList.remove('popup_active');					
	}
})();
