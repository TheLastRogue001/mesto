// Object Validation
const validConf = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
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
  errorElement.textContent = "";
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
    buttonElementContinue.setAttribute("disabled", true);
    buttonElementContinue.classList.add(validConf.inactiveButtonClass);
  } else {
    buttonElementContinue.removeAttribute("disabled");
    buttonElementContinue.classList.remove(validConf.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, validConf) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validConf.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
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

const removeValidationErrors = (formElement, inputList) => {
  for (let i = 0; i < inputList.length; i++) {
    hideInputError(formElement, inputList[i], validConf);
  }
};

const enableValidation = (validConf) => {
  const formList = Array.from(
    document.querySelectorAll(validConf.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, validConf);
  });
};

enableValidation(validConf);
