import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  cardConf,
  initialCards,
  validConf,
  popupEdit,
  popupCard,
  popupFullscreen,
  popupList,
  elementsCard,
  elementTemplate,
  elementsFullScreen,
  titleName,
  subtitleJob,
  inputName,
  inputJob,
  inputCard,
  inputLink,
  editButton,
  addCardButton,
  closeButtonEdit,
  closeButtonCard,
  closeButtonFullscreen,
  formSubmitEditProfile,
  formSubmitAddCard,
} from "./consts.js";

const formEditValidator = new FormValidator(validConf, formSubmitEditProfile);
formEditValidator.enableValidation();
const formAddValidator = new FormValidator(validConf, formSubmitAddCard);
formAddValidator.enableValidation();

//Обработчик Cards
const createCard = (
  data,
  elementTemplate,
  cardConf,
  elementsFullScreen,
  openPopup
) => {
  const card = new Card(
    data,
    elementTemplate,
    cardConf,
    elementsFullScreen,
    openPopup
  );
  const cardElement = card.generateElementCardItem();
  return cardElement;
};

// Функция закрытия попапов по нажатию Esc
const handleClosePopupByEsc = (evt) => {
  const escape = 27;
  const popup = document.querySelector(".popup_opened");
  if (evt.keyCode === escape) {
    closePopup(popup);
  }
};

// Функция которая открывает модальное окно
export const openPopup = (popup) => {
  document.addEventListener("keydown", handleClosePopupByEsc);
  popup.classList.add("popup_opened");
};

// Функция которая закрывает модальное окно
export const closePopup = (popup) => {
  document.removeEventListener("keydown", handleClosePopupByEsc);
  popup.classList.remove("popup_opened");
};

// Открывает модально окно с изменением профиля
const openEditProfilePopup = () => {
  inputName.value = titleName.textContent;
  inputJob.value = subtitleJob.textContent;
  formEditValidator.removeValidationErrors();
  openPopup(popupEdit);
};

// Открывает модально окно с добавлением карточки
const openAddCardPopup = () => {
  inputCard.value = "";
  inputLink.value = "";
  formAddValidator.removeValidationErrors();
  openPopup(popupCard);
};

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
  const data = {
    name: inputCard.value,
    link: inputLink.value,
  };
  elementsCard.prepend(
    createCard(
      data,
      elementTemplate,
      cardConf,
      elementsFullScreen,
      openPopup
    )
  );
  closePopup(popupCard);
};

const renderInitialCards = () => {
  // Генерация карточек
  initialCards.forEach((item) => {
    elementsCard.append(
      createCard(
        item,
        elementTemplate,
        cardConf,
        elementsFullScreen,
        openPopup
      )
    );
  });
};
renderInitialCards();

// Закрытие popup по нажатию на blum
popupList.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) closePopup(popup);
  });
});

editButton.addEventListener("click", openEditProfilePopup);
addCardButton.addEventListener("click", openAddCardPopup);
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
