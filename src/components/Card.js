export default class Card {
  constructor(data, elementTemplate, cardConf, currentUser, callbacks) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._userId = data.owner._id;
    this._currentUserId = currentUser._id;
    this._currentUser = currentUser;
    this._elementTemplate = elementTemplate;
    this._cardConf = cardConf;
    this._handleFullScreen = callbacks.handleFullScreen;
    this._handleTrashDeleteCard = callbacks.handleTrashDeleteCard;
    this._handleLikeApi = callbacks.handleApi;
    this._handleRemoveCard = callbacks.handleApi;
    this._isLiked = false;
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
    this._likesCounter = this._elementCard.querySelector(
      this._cardConf.likesCounter
    );
    this._trashButton = this._elementCard.querySelector(
      this._cardConf.trashButton
    );
    if (this._userId !== this._currentUserId) {
      this._trashButton.style.display = "none";
    }
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === this._currentUserId) {
        this._isLiked = true;
        this._likeButton.classList.add(this._cardConf.likeActiveButton);
      }
    }
    this._setEventListeners();

    // Создание карточек и изменение контента
    this._elementCardTitle.textContent = this._name;
    this._elementCardImg.alt = this._name;
    this._elementCardImg.src = this._link;
    this._likesCounter.textContent = this._likes.length;

    return this._elementCard;
  }

  //Добавляет и удаляет активный класс like
  async _handleLikeClick() {
    this._isLiked = !this._isLiked;
    if (this._isLiked) {
      this._likeActive = await this._handleLikeApi
        .likeActiveInitialCards(this._cardId)
        .then((result) => result)
        .catch((err) => {
          console.log(err);
        });
      this._likesCounter.textContent = this._likeActive.likes.length;
      this._likeButton.classList.add(this._cardConf.likeActiveButton);
    } else {
      this._likeEnabled = await this._handleLikeApi
        .likeEnabledInitialCards(this._cardId)
        .then((result) => result)
        .catch((err) => {
          console.log(err);
        });
      this._likesCounter.textContent = this._likeEnabled.likes.length;
      this._likeButton.classList.remove(this._cardConf.likeActiveButton);
    }
  }

  _setEventListeners() {
    // FullScreen картинки
    this._elementCardImg.addEventListener("click", () => {
      this._handleFullScreen.open(this._name, this._link);
    });
    // Удаление карточки
    this._trashButton.addEventListener("click", () => {
      this._handleTrashDeleteCard(this._elementCard, this._cardId);
    });
    // Лайкать карточки
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });
  }
}
