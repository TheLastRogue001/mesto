import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  cardConf,
  initialCards,
  validConf,
  popupEdit,
  popupCard,
  elementsCard,
  elementTemplate,
  elementsFullScreen,
  inputName,
  inputJob,
  editButton,
  addCardButton,
} from "../utils/consts.js";

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    formValidators[formName].enableValidation();
  });
};

enableValidation(validConf);

const setElementWithImage = new PopupWithImage(
  elementsFullScreen,
  elementsFullScreen.popupFullscreen
);

const createUserInfo = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__subtitle",
});

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

// Открывает модально окно с изменением профиля
const openEditProfilePopup = () => {
  const userInfo = createUserInfo.getUserInfo();
  handleFormSubmitEditProfile.setInputValues(userInfo);
  formValidators["popup-edit"].removeValidationErrors();
  handleFormSubmitEditProfile.open();
};

// Открывает модально окно с добавлением карточки
const openAddCardPopup = () => {
  formValidators["popup-card"].removeValidationErrors();
  handleFormSubmitAddCard.open();
};

// Открывает модально окно с изменением профиля
const handleFormSubmitEditProfile = new PopupWithForm((data) => {
  createUserInfo.setUserInfo(data.name, data.job);
  handleFormSubmitEditProfile.close();
}, popupEdit);

//Форма для отправки названия картинки и картинку
const handleFormSubmitAddCard = new PopupWithForm((item) => {
  const dataObj = {
    name: item.card,
    link: item.link,
  };
  renderInitialCards.prependItem(
    createCard(dataObj, elementTemplate, cardConf, setElementWithImage)
  );
  handleFormSubmitAddCard.close();
}, popupCard);

const renderInitialCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      renderInitialCards.addItem(
        createCard(item, elementTemplate, cardConf, setElementWithImage)
      );
    },
  },
  elementsCard
);

editButton.addEventListener("click", openEditProfilePopup);
addCardButton.addEventListener("click", openAddCardPopup);
handleFormSubmitEditProfile.setEventListeners();
handleFormSubmitAddCard.setEventListeners();
renderInitialCards.renderItems();
