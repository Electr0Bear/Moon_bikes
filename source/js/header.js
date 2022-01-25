'use strict';

var header = document.querySelector('.header__nav');
var headerBtn = document.querySelector('.header__nav-button')

var onJsLoad = function() {
  header.classList.remove('header__nav--js-inactive');
}

var navHandler = function() {
  headerBtn.addEventListener('click', evt => {
    evt.preventDefault();
    const checkClass = header.classList.contains('header__nav--opened');
    header.classList.toggle('header__nav--opened', !checkClass);
  })
}

export {onJsLoad, navHandler}
