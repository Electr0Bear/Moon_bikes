'use strict';

if (document.querySelector('.header__nav')) {
  const pageBody = document.querySelector('.body');
  const header = document.querySelector('.header__nav');
  const headerBtn = document.querySelector('.header__nav-button')
  const links = header.querySelectorAll('a[href^="#"]');
  const topOffset = 0;

  const onJsLoad = () => {
    header.classList.remove('header__nav--js-inactive');
  }

  const navHandler = () => {
    headerBtn.addEventListener('click', evt => {
      evt.preventDefault();
      const checkClass = header.classList.contains('header__nav--opened');
      header.classList.toggle('header__nav--opened', !checkClass);
      pageBody.classList.toggle('body--disabled-scroll', !checkClass);
    });
  }


  const smoothScrollHandler = () => {
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

  onJsLoad();
  navHandler();
  smoothScrollHandler();
}

if (document.querySelector('.page-header__form')) {
  const form = document.querySelector('.page-header__form');
  const formInputs = form.querySelectorAll('.page-header__form-input');
  const formSubmitBtn = document.querySelector('.page-header__form-button');

  const setInputValidity = input => {
    const checkValidity = input.checkValidity();
    input.classList.toggle('page-header__form-input--invalid', !checkValidity);
  }

  const clearInput = input => {
    input.classList.remove('page-header__form-input--invalid');
    input.value = '';
    console.log('Поле ввода очищено');
  }

  if (document.querySelector('.page-header__name-input')) {
    const nameInput = document.querySelector('.page-header__name-input');

    const checkNameInput = () => {
      nameInput.addEventListener('input', () => {
        nameInput.setCustomValidity('');
        setInputValidity(nameInput);
      });

      nameInput.addEventListener('focusout', () => {
        setInputValidity(nameInput);
      });
    }

    checkNameInput();
  }

  if (document.querySelector('.page-header__phone-input')) {
    const phoneInput = document.querySelector('.page-header__phone-input');

    const checkPhoneInput = () => {
      phoneInput.addEventListener('input', () => {
        phoneInput.setCustomValidity('');
        phoneInput.classList.remove('page-header__form-input--invalid');
      });

      phoneInput.addEventListener('focusout', () => {
        setInputValidity(phoneInput);
      });
    }

    checkPhoneInput();
  }

  const onSubmitForm = () => {
    formSubmitBtn.addEventListener('click', () => {
      formInputs.forEach(input => {
        setInputValidity(input);
      })
    });

    form.addEventListener('submit', evt => {
      evt.preventDefault();
      formInputs.forEach(input => {
        clearInput(input);
      });
      console.log('Форма отправлена');
    });
  }

  onSubmitForm();
}
