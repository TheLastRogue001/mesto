import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  debugger;
  constructor(handleFormSubmit, popup, buttonsClosePopup) {
    super(popup, buttonsClosePopup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = popup.querySelector(".popup__form");
    this._inputList = Array.from(
      this._popupForm.querySelectorAll(".popup__input")
    );
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super._setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
