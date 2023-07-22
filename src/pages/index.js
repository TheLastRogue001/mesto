import "./index.css";
import { api } from "../components/Api.js";
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
  popupTrash,
  elementsCard,
  elementTemplate,
  elementsFullScreen,
  editButton,
  addCardButton,
  avatarButton,
  popupAvatar,
} from "../utils/consts.js";

const formValidators = {};

api
  .getInitialCards()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

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

const createUserInfo = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__subtitle",
  userAvatar: ".profile__avatar",
});

const setElementWithImage = new PopupWithImage(
  elementsFullScreen,
  elementsFullScreen.popupFullscreen
);

//Обработчик Cards
const createCard = (data, elementTemplate, cardConf, callbacks) => {
  const card = new Card(data, elementTemplate, cardConf, callbacks);
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

// Открывает модально окно с добавлением карточки
const openAvatarPopup = () => {
  formValidators["popup-avatar"].removeValidationErrors();
  handleFormSubmitAvatar.open();
};

// Открывает модально окно с изменением профиля
const handleFormSubmitEditProfile = new PopupWithForm((data) => {
  createUserInfo.setUserInfo(data.name, data.job);
  handleFormSubmitEditProfile.close();
}, popupEdit);

// Открывает модально окно с изменением профиля
const handleFormSubmitAvatar = new PopupWithForm((data) => {
  createUserInfo.setUserAvatar(data.avatar);
  handleFormSubmitAvatar.close();
}, popupAvatar);

// Открывает модально окно с вопросом о удалении карточки
const createHandleFormSubmitTrash = (elementCard) => {
  const handleFormSubmitTrash = new PopupWithForm(() => {
    elementCard.remove();
    handleFormSubmitTrash.close();
  }, popupTrash);
  handleFormSubmitTrash.open();
  handleFormSubmitTrash.setEventListeners();
};

const callbacks = {
  handleFullScreen: setElementWithImage,
  handleTrashDeleteCard: createHandleFormSubmitTrash,
};

//Форма для отправки названия картинки и картинку
const handleFormSubmitAddCard = new PopupWithForm((item) => {
  const dataObj = {
    name: item.card,
    link: item.link,
    likes: item.likes,
  };
  renderInitialCards.prependItem(
    createCard(dataObj, elementTemplate, cardConf, callbacks)
  );
  handleFormSubmitAddCard.close();
}, popupCard);

const renderInitialCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      renderInitialCards.addItem(
        createCard(item, elementTemplate, cardConf, callbacks)
      );
    },
  },
  elementsCard
);

editButton.addEventListener("click", openEditProfilePopup);
addCardButton.addEventListener("click", openAddCardPopup);
avatarButton.addEventListener("click", openAvatarPopup);
handleFormSubmitEditProfile.setEventListeners();
handleFormSubmitAddCard.setEventListeners();
handleFormSubmitAvatar.setEventListeners();
renderInitialCards.renderItems();
