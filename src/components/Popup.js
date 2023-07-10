export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._buttonClose = this._popup.querySelector(".popup__close");;

    this._setEventListeners();
  }

  // Функция которая открывает модальное окно
  open() {
    document.addEventListener("keydown", this._handleClosePopupByEsc);
    this._popup.classList.add("popup_opened");
  }

  // Функция которая закрывает модальное окно
  close() {
    document.removeEventListener("keydown", this._handleClosePopupByEsc);
    this._popup.classList.remove("popup_opened");
  }

  // Функция закрытия попапов по нажатию Esc
  _handleClosePopupByEsc = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _setEventListeners() {
    // Закрытие popup по нажатию на X

    this._buttonClose.addEventListener("click", () => {
      this.close();
    });

    // Закрытие popup по нажатию на blum
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });
  }
}
