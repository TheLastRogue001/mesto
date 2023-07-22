import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(handleFormSubmit, popup) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = popup;
    this._popupCard = document.querySelector(".popup_card");
    this._popupTrash = document.querySelector(".popup_trash");
    this._popupForm = popup.querySelector(".popup__form");
    this._buttonSubmit = this._popupForm.querySelector(".popup__button");
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
      if (this._popup != this._popupCard || this._popup != this._popupTrash)
        this._buttonSubmit.textContent = "Сохранение...";
      if (this._popup === this._popupTrash)
        this._buttonSubmit.textContent = "Удаление...";
      if (this._popup === this._popupCard)
        this._buttonSubmit.textContent = "Создание карточки...";
      this._handleFormSubmit(this._getInputValues());
    });
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
    if (this._popup != this._popupCard || this._popup != this._popupTrash)
      this._buttonSubmit.textContent = "Сохранить";
    if (this._popup === this._popupTrash) this._buttonSubmit.textContent = "Да";
    if (this._popup === this._popupCard)
      this._buttonSubmit.textContent = "Создать";
  }
}
