import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(data, popup, buttonsClosePopup) {
    super(popup, buttonsClosePopup);
    this._titlePopupFullscreen = data.titlePopupFullscreen;
    this._elementFullScreenImg = data.elementFullScreenImg;
    this._popupFullscreen = data.popupFullscreen;

    super._setEventListeners();
  }

  open(name, link) {
    this._titlePopupFullscreen.textContent = name;
    this._elementFullScreenImg.alt = name;
    this._elementFullScreenImg.src = link;
    super.open();
  }
}
