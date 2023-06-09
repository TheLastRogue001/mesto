export default class Card {
  constructor(data, elementTemplate, cardConf, setElementWithImage) {
    this._name = data.name;
    this._link = data.link;
    this._elementTemplate = elementTemplate;
    this._cardConf = cardConf;
    this._setElementWithImage = setElementWithImage;
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

  // Функция удаления карточки
  _removeElementCard() {
    this._elementCard.remove();
  }

  //Добавляет и удаляет активный класс like
  _handleLikeClick() {
    this._likeButton.classList.toggle(this._cardConf.likeActiveButton);
  }

  _setEventListeners() {
    // FullScreen картинки
    this._elementCardImg.addEventListener("click", () => {
      this._setElementWithImage.open(this._name, this._link);
    });
    // Удаление карточки
    this._trashButton.addEventListener("click", () => {
      this._removeElementCard();
    });
    // Лайкать карточки
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });
  }
}
