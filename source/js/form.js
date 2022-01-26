'use strict';

const nameInput = document.querySelector('.page-header__name-input');
const phoneInput = document.querySelector('.page-header__phone-input');
const form = document.querySelector('.page-header__form');
const formSubmitBtn = document.querySelector('.page-header__form-button');

const setInputValidity = input => {
  const checkValidity = input.checkValidity();
  input.classList.toggle('page-header__form-input--invalid', !checkValidity);
}

const checkNameInput = () => {
  nameInput.addEventListener('input', () => {
    nameInput.setCustomValidity('');
    setInputValidity(nameInput);
    if (nameInput.value && !nameInput.checkValidity()) {
      nameInput.setCustomValidity('Поле должно содержать только буквы русского алфавита');
    }
  });

  nameInput.addEventListener('focusout', () => {
    nameInput.classList.remove('page-header__form-input--invalid');
    if (phoneInput.value.length !==0) {
      setInputValidity(phoneInput);
    }
  })
}

const checkPhoneInput = () => {
  phoneInput.addEventListener('focusin', () => {
    if (!phoneInput.value) {
      phoneInput.value = "+7";
    }
  })

  phoneInput.addEventListener('focusout', () => {
    console.log(phoneInput.checkValidity());

    // if (phoneInput.value.length <= 2) {
    //   phoneInput.value = "";
    // } else if (phoneInput.value.length !==0 && !phoneInput.checkValidity()) {
    //   phoneInput.setCustomValidity('Введите 10 цифр номера телефона');
    //   setInputValidity(phoneInput);
    // }



  })
}

const onFormSubmit = () => {

  formSubmitBtn.addEventListener('click', () => {
    setInputValidity(nameInput);
    setInputValidity(phoneInput);
  })

  form.addEventListener('submit', evt => {
    evt.preventDefault();
  })
}

export {onFormSubmit, checkNameInput, checkPhoneInput}
