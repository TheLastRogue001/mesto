import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor(handleFormSubmit, popup) {
    super(popup);
    this._popup = popup;
    this._handleFormSubmit = handleFormSubmit;
    this._buttonSubmit = this._popup.querySelector(".popup__button");
  }

  open(cardId, elementCard, removeElementCard) {
    this._cardId = cardId;
    this._elementCard = elementCard;
    this.removeElementCard = removeElementCard;

    super.open();
  }

  setTextSubmitButton(text) {
    this._buttonSubmit.textContent = text;
  }

  setEventListeners() {
    super._setEventListeners();
    this._buttonSubmit.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(
        this._cardId,
        this._elementCard,
        this.removeElementCard
      );
    });
  }
}
