'use strict';

var nameInput = document.querySelector('.page-header__name-input');
var phoneInput = document.querySelector('.page-header__phone-input');
var form = document.querySelector('.page-header__form');
var formSubmitBtn = document.querySelector('.page-header__form-button');

var setInputValidity = function (input) {
  const checkValidity = input.checkValidity();
  input.classList.toggle('page-header__form-input--invalid', !checkValidity);
}

var checkNameInput = function () {
  nameInput.addEventListener('input', function () {
    nameInput.setCustomValidity('');
    setInputValidity(nameInput);
    if (nameInput.value && !nameInput.checkValidity()) {
      nameInput.setCustomValidity('Поле должно содержать только буквы русского алфавита');
    }
  });

  nameInput.addEventListener('focusout', function () {
    nameInput.classList.remove('page-header__form-input--invalid');
    if (phoneInput.value.length !==0) {
      setInputValidity(phoneInput);
    }
  })
}

var checkPhoneInput = function () {
  phoneInput.addEventListener('focusin', function () {
    if (!phoneInput.value) {
      phoneInput.value = "+7";
    }
  })

  phoneInput.addEventListener('focusout', function () {
    phoneInput.classList.remove('page-header__form-input--invalid');
    if (phoneInput.value.length <= 2) {
      phoneInput.value = "";
    } else if (phoneInput.value.length !==0 && !phoneInput.checkValidity()) {
      phoneInput.setCustomValidity('Введите 10 цифр номера телефона');
      setInputValidity(phoneInput);
    }
  })

  phoneInput.addEventListener
}

var onFormSubmit = function () {

  formSubmitBtn.addEventListener('click', function () {
    setInputValidity(nameInput);
    setInputValidity(phoneInput);
  })

  form.addEventListener('submit', evt => {
    evt.preventDefault();
  })
}

export {onFormSubmit, checkNameInput, checkPhoneInput}
