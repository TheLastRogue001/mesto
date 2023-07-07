import FormValidator from "./FormValidator.js";
import Cards from "./Card.js";
import {
  cardConf,
  validConf,
  popupEdit,
  popupCard,
  popupFullscreen,
  elementsCard,
  elementTemplate,
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

// Функция закрытия попапов по нажатию Esc
const keyHandler = (evt) => {
  const escape = 27;
  const popup = document.querySelector(".popup_opened");
  if (evt.keyCode === escape) {
    closePopup(popup);
  }
};

// Функция которая открывает модальное окно
export const openPopup = (popup) => {
  document.addEventListener("keydown", keyHandler);
  popup.classList.add("popup_opened");
};

// Функция которая закрывает модальное окно
export const closePopup = (popup) => {
  document.removeEventListener("keydown", keyHandler);
  popup.classList.remove("popup_opened");
};

// Открывает модально окно с изменением профиля
const setEditProfile = () => {
  inputName.value = titleName.textContent;
  inputJob.value = subtitleJob.textContent;
  formEditValidator.removeValidationErrors();
  openPopup(popupEdit);
};

// Открывает модально окно с добавлением карточки
const setAddCard = () => {
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
  const card = new Cards(data, elementTemplate, cardConf);
  const cardElement = card.generateElementCardItem();
  elementsCard.prepend(cardElement);
  closePopup(popupCard);
};

// Закрытие popup по нажатию на blum
document.addEventListener("click", function (evt) {
  if (evt.target === popupEdit) {
    closePopup(popupEdit);
  }
  if (evt.target === popupCard) {
    closePopup(popupCard);
  }
  if (evt.target === popupFullscreen) closePopup(popupFullscreen);
});

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
