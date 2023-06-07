// Object Validation
const validConf = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const showInputError = (formElement, inputElement, errorMessage, validConf) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validConf.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validConf.errorClass);
};

const hideInputError = (formElement, inputElement, validConf) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validConf.inputErrorClass);
  errorElement.classList.remove(validConf.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validConf) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      validConf
    );
  } else {
    hideInputError(formElement, inputElement, validConf);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (
  formElement,
  inputList,
  buttonElement,
  validConf
) => {
  const buttonElementContinue = formElement.querySelector(buttonElement);
  if (hasInvalidInput(inputList)) {
    inputList[1].classList.remove('popup__input_margin_top');
    buttonElementContinue.classList.add('popup__button_margin_top');
    buttonElementContinue.setAttribute('disabled', true);
    buttonElementContinue.classList.add(validConf.inactiveButtonClass);
  } else {
    inputList[1].classList.add('popup__input_margin_top');
    buttonElementContinue.classList.remove('popup__button_margin_top');
    buttonElementContinue.removeAttribute('disabled');
    buttonElementContinue.classList.remove(validConf.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, validConf) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validConf.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validConf);
      toggleButtonState(
        formElement,
        inputList,
        validConf.submitButtonSelector,
        validConf
      );
    });
  });
};

const enableValidation = (validConf) => {
  const formList = Array.from(
    document.querySelectorAll(validConf.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, validConf);
  });
};

enableValidation(validConf);
