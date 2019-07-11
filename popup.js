// "МОДАЛЬНОЕ ОКНО"
// 11-07-2019

'use strict';

(function () {
	const popup = {
		activator: document.querySelector('.popup_activator'),
		wrapper: document.querySelector('.popup_wrapper'),
		body: document.querySelector('.popup_body'),
		close: document.querySelector('.popup_close')
	};

	popup.activator.addEventListener('click', onActivatorClick);
	popup.body.addEventListener('click', onBodyClick);
	popup.wrapper.addEventListener('click', onWrapperClick);
	popup.close.addEventListener('click', onCloseClick);

	function onActivatorClick () {	
		popup.body.classList.add('popup_active');
		popup.wrapper.classList.add('popup_active');
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
		popup.body.classList.remove('popup_active');
		popup.wrapper.classList.remove('popup_active');			
	}
})();
