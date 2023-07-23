import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(data, popup) {
    super(popup);
    this._titlePopupFullscreen = data.titlePopupFullscreen;
    this._elementFullScreenImg = data.elementFullScreenImg;
  }

  open(name, link) {
    this._titlePopupFullscreen.textContent = name;
    this._elementFullScreenImg.alt = name;
    this._elementFullScreenImg.src = link;
    super.open();
  }
}
