const content = document.querySelector('.content');

// Modal
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupCard = document.querySelector('.popup_card');
const popupFullscreen = document.querySelector('.popup_fullscreen');
const popupContainerEdit = popupEdit.querySelector('.popup__container');
const popupContainerCard = popupCard.querySelector('.popup__container');
const popupContainerFullscreen =
  popupFullscreen.querySelector('.popup__container');

// ElementCardImg
const elementFullScreenImg =
  popupContainerFullscreen.querySelector('.popup__img');

// ElementCard
const elementsCard = content.querySelector('.elements');
const elementTemplate = content.querySelector('#element').content;

// Title
const titleName = content.querySelector('.profile__title');
const subtitleJob = content.querySelector('.profile__subtitle');
const titlePopupEdit = popupContainerEdit.querySelector('.popup__title');
const titlePopupCard = popupContainerCard.querySelector('.popup__title');
const titlePopupFullscreen =
  popupContainerFullscreen.querySelector('.popup__title');

// Input
const inputName = popupEdit.querySelector('#name-input');
const inputJob = popupEdit.querySelector('#job-input');
const inputCard = popupCard.querySelector('#card-input');
const inputLink = popupCard.querySelector('#link-input');

// Button
const editButton = content.querySelector('.profile__edit-button');
const addCardButton = content.querySelector('.profile__add-button');
const closeButtonEdit = popupEdit.querySelector('.popup__close');
const closeButtonCard = popupCard.querySelector('.popup__close');
const closeButtonFullscreen = popupFullscreen.querySelector('.popup__close');

// Form
const formSubmitEditProfile = popupContainerEdit.querySelector('.popup__form');
const formSubmitAddCard = popupContainerCard.querySelector('.popup__form');
const inputListEditProfile = Array.from(
  formSubmitEditProfile.querySelectorAll(validConf.inputSelector)
);
const inputListAddCard = Array.from(
  formSubmitAddCard.querySelectorAll(validConf.inputSelector)
);
const buttonAddCard = formSubmitAddCard.querySelector(
  validConf.submitButtonSelector
);

// Функция которая открывает модальное окно
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

// Функция которая закрывает модальное окно
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

//Добавляет и удаляет активный класс like
const checkLikeActive = (evt) => {
  evt.target.classList.toggle('element__like_active');
};

// Открывает модально окно с изменением профиля
const setEditProfile = () => {
  inputName.value = titleName.textContent;
  inputJob.value = subtitleJob.textContent;
  toggleButtonState(
    formSubmitEditProfile,
    inputListEditProfile,
    validConf.submitButtonSelector,
    validConf
  );
  openPopup(popupEdit);
};

// Открывает модально окно с добавлением карточки
const setAddCard = () => {
  inputCard.value = '';
  inputLink.value = '';
  toggleButtonState(
    formSubmitAddCard,
    inputListAddCard,
    validConf.submitButtonSelector,
    validConf
  );
  inputListAddCard[1].classList.add('popup__input_margin_top');
  buttonAddCard.classList.remove('popup__button_margin_top');
  openPopup(popupCard);
};

const createElementCardItem = (name, link) => {
  // Клонируем elemntCard
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  const elementCardTitle = elementCard.querySelector('.element__title');
  const elementCardImg = elementCard.querySelector('.element__img');
  // Функция fullScreen картинки
  const checkFullScreenImage = () => {
    titlePopupFullscreen.textContent = name;
    elementFullScreenImg.alt = name;
    elementFullScreenImg.src = link;
    openPopup(popupFullscreen);
  };
  const trashButton = elementCard.querySelector('.element__trash');
  // Функция удаления карточки
  const removeElementCard = () => {
    trashButton.parentNode.remove();
  };
  const likeButton = elementCard.querySelector('.element__like');

  // Создание карточек и изменение контента
  elementCardTitle.textContent = name;
  elementCardImg.alt = name;
  elementCardImg.src = link;

  // FullScreen картинки
  elementCardImg.addEventListener('click', checkFullScreenImage);
  // Удаление карточки
  trashButton.addEventListener('click', removeElementCard);
  // Лайкать карточки
  likeButton.addEventListener('click', checkLikeActive);

  return elementCard;
};

const renderElementCardItem = () => {
  // Генерация карточек
  initialCards.forEach((item) => {
    elementsCard.append(createElementCardItem(item.name, item.link));
  });
};

renderElementCardItem();

//Форма для отправки новыых данных имени и работы профиля
const handleFormSubmitEditProfile = (evt) => {
  evt.preventDefault();
  titleName.textContent = inputName.value;
  subtitleJob.textContent = inputJob.value;
  closePopup(popupEdit);
};

//Форма для отправки названия картинки и картинку
const handleFormSubmitAddCard = (evt) => {
  evt.preventDefault();
  elementsCard.prepend(createElementCardItem(inputCard.value, inputLink.value));
  closePopup(popupCard);
};

editButton.addEventListener('click', setEditProfile);
addCardButton.addEventListener('click', setAddCard);
closeButtonEdit.addEventListener('click', function () {
  for (let i = 0; i < inputListEditProfile.length; i++) {
    hideInputError(formSubmitEditProfile, inputListEditProfile[i], validConf);
  }
  closePopup(popupEdit);
});
closeButtonCard.addEventListener('click', function () {
  for (let i = 0; i < inputListAddCard.length; i++) {
    hideInputError(formSubmitAddCard, inputListAddCard[i], validConf);
  }
  closePopup(popupCard);
});
closeButtonFullscreen.addEventListener('click', function () {
  closePopup(popupFullscreen);
});
formSubmitEditProfile.addEventListener('submit', handleFormSubmitEditProfile);
formSubmitAddCard.addEventListener('submit', handleFormSubmitAddCard);
