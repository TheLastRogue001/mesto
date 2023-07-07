import { openPopup } from "./index.js";
import {
  cardConf,
  initialCards,
  elementFullScreenImg,
  titlePopupFullscreen,
  popupFullscreen,
  elementsCard,
  elementTemplate,
} from "./consts.js";

export default class Cards {
  constructor(data, elementTemplate, cardConf) {
    this._name = data.name;
    this._link = data.link;
    this._elementTemplate = elementTemplate;
    this._cardConf = cardConf;
  }

  _getTemplate() {
    // Клонируем elemntCard
    const elementCard = this._elementTemplate
      .querySelector(this._cardConf.elementCard)
      .cloneNode(true);

    return elementCard;
  }

  generateElementCardItem() {
    this._elementCard = this._getTemplate();
    this._elementCardTitle = this._elementCard.querySelector(
      this._cardConf.elementCardTitle
    );
    this._elementCardImg = this._elementCard.querySelector(
      this._cardConf.elementCardImg
    );
    this._likeButton = this._elementCard.querySelector(
      this._cardConf.likeButton
    );
    this._trashButton = this._elementCard.querySelector(
      this._cardConf.trashButton
    );
    this._setEventListeners();

    // Создание карточек и изменение контента
    this._elementCardTitle.textContent = this._name;
    this._elementCardImg.alt = this._name;
    this._elementCardImg.src = this._link;

    return this._elementCard;
  }

  // Функция fullScreen картинки
  _checkFullScreenImage() {
    titlePopupFullscreen.textContent = this._name;
    elementFullScreenImg.alt = this._name;
    elementFullScreenImg.src = this._link;
    openPopup(popupFullscreen);
  }

  // Функция удаления карточки
  _removeElementCard() {
    this._trashButton.parentNode.remove();
  }

  //Добавляет и удаляет активный класс like
  _checkLikeActive(evt) {
    evt.target.classList.toggle(this._cardConf.likeActiveButton);
  }

  _setEventListeners() {
    // FullScreen картинки
    this._elementCardImg.addEventListener("click", () => {
      this._checkFullScreenImage();
    });
    // Удаление карточки
    this._trashButton.addEventListener("click", () => {
      this._removeElementCard();
    });
    // Лайкать карточки
    this._likeButton.addEventListener("click", (evt) => {
      this._checkLikeActive(evt);
    });
  }
}

const renderElementCardItem = () => {
  // Генерация карточек
  initialCards.forEach((item) => {
    const card = new Cards(item, elementTemplate, cardConf);
    const cardElement = card.generateElementCardItem();
    elementsCard.append(cardElement);
  });
};

renderElementCardItem();
