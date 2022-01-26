'use strict';

const header = document.querySelector('.header');
const links = header.querySelectorAll('a[href^="#"]');
const topOffset = 0;

const smoothScroll = () => {
  links.forEach(link => {
    link.addEventListener('click', evt => {
      evt.preventDefault();
      const href = link.getAttribute('href');
      const targetElement = document.querySelector(`${href}`);
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}


export { smoothScroll };
