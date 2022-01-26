'use strict';

const header = document.querySelector('.header__nav');
const headerBtn = document.querySelector('.header__nav-button')

const onJsLoad = () => {
  header.classList.remove('header__nav--js-inactive');
}

const navHandler = () => {
  headerBtn.addEventListener('click', evt => {
    evt.preventDefault();
    const checkClass = header.classList.contains('header__nav--opened');
    header.classList.toggle('header__nav--opened', !checkClass);
  })
}

export {onJsLoad, navHandler}
