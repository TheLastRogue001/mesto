const content = document.querySelector(".content");

// Modal
const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupCard = document.querySelector(".popup_card");
const popupFullscreen = document.querySelector(".popup_fullscreen");
const popupContainerEdit = popupEdit.querySelector(".popup__container");
const popupContainerCard = popupCard.querySelector(".popup__container");
const popupContainerFullscreen =
  popupFullscreen.querySelector(".popup__container");

// ElementCardImg
const elementFullScreenImg =
  popupContainerFullscreen.querySelector(".popup__img");

// ElementCard
const elementsCard = content.querySelector(".elements");
const elementTemplate = content.querySelector("#element").content;

// Title
const titleName = content.querySelector(".profile__title");
const subtitleJob = content.querySelector(".profile__subtitle");
const titlePopupEdit = popupContainerEdit.querySelector(".popup__title");
const titlePopupCard = popupContainerCard.querySelector(".popup__title");
const titlePopupFullscreen =
  popupContainerFullscreen.querySelector(".popup__title");

// Input
const inputName = popupEdit.querySelector("#input-name");
const inputJob = popupEdit.querySelector("#input-job");
const inputCard = popupCard.querySelector("#input-card");
const inputLink = popupCard.querySelector("#input-link");

// Button
const editButton = content.querySelector(".profile__edit-button");
const addCardButton = content.querySelector(".profile__add-button");
const closeButtonEdit = popupEdit.querySelector(".popup__close");
const closeButtonCard = popupCard.querySelector(".popup__close");
const closeButtonFullscreen = popupFullscreen.querySelector(".popup__close");

// Form
const formSubmitEditProfile = popupContainerEdit.querySelector(".popup__form");
const formSubmitAddCard = popupContainerCard.querySelector(".popup__form");

// Функция которая открывает модальное окно
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

// Функция которая закрывает модальное окно
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};

//Добавляет и удаляет активный класс like
const checkLikeActive = (evt) => {
  evt.target.classList.toggle("element__like_active");
};

//Добавляет классы для popup__container и popup__title
const addClassTitleAndContainer = (titlePopup, popupContainer) => {
  titlePopup.classList.add("popup__title_font-size");
  popupContainer.classList.add("popup__container_size");
};

// Открывает модально окно с изменением профиля
const setEditProfile = () => {
  addClassTitleAndContainer(titlePopupEdit, popupContainerEdit);
  inputName.value = titleName.textContent;
  inputJob.value = subtitleJob.textContent;
  openPopup(popupEdit);
};

// Открывает модально окно с добавлением карточки
const setAddCard = () => {
  addClassTitleAndContainer(titlePopupCard, popupContainerCard);
  inputCard.value = "";
  inputLink.value = "";
  openPopup(popupCard);
};

const elementCardItem = (name, link) => {
  // Клонируем elemntCard
  const elementCard = elementTemplate.querySelector(".element").cloneNode(true);
  const elementCardTitle = elementCard.querySelector(".element__title");
  const elementCardImg = elementCard.querySelector(".element__img");
  // Функция fullScreen картинки
  const checkFullScreenImage = () => {
    titlePopupFullscreen.textContent = name;
    elementFullScreenImg.alt = name;
    elementFullScreenImg.src = link;
    openPopup(popupFullscreen);
  };
  const trashButton = elementCard.querySelector(".element__trash");
  // Функция удаления карточки
  const removeElementCard = () => {
    trashButton.parentNode.remove();
  };
  const likeButton = elementCard.querySelector(".element__like");

  // Создание карточек и изменение контента
  elementCardTitle.textContent = name;
  elementCardImg.alt = name;
  elementCardImg.src = link;
  elementsCard.prepend(elementCard);

  // FullScreen картинки
  elementCardImg.addEventListener("click", checkFullScreenImage);
  // Удаление карточки
  trashButton.addEventListener("click", removeElementCard);
  // Лайкать карточки
  likeButton.addEventListener("click", checkLikeActive);
};

const setElementCard = () => {
  // Генерация карточек
  initialCards.forEach((item) => {
    elementCardItem(item.name, item.link);
  });
};

setElementCard();

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
  elementCardItem(inputCard.value, inputLink.value);
  closePopup(popupCard);
};

editButton.addEventListener("click", setEditProfile);
addCardButton.addEventListener("click", setAddCard);
closeButtonEdit.addEventListener("click", function () {
  closePopup(popupEdit);
});
closeButtonCard.addEventListener("click", function () {
  closePopup(popupCard);
});
closeButtonFullscreen.addEventListener("click", function () {
  closePopup(popupFullscreen);
});
formSubmitEditProfile.addEventListener("submit", handleFormSubmitEditProfile);
formSubmitAddCard.addEventListener("submit", handleFormSubmitAddCard);
