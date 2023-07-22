import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  cardConf,
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

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71",
  headers: {
    authorization: "60aadb55-160d-405b-85d4-d114cbcf9c50",
    "Content-Type": "application/json",
  },
});

const createUserInfo = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__subtitle",
  userAvatar: ".profile__avatar",
});

const initialCards = await api
  .getInitialCards()
  .then((result) => result)
  .catch((err) => {
    console.log(err);
  });

const userProfile = await api
  .getUserProfile()
  .then((result) => result)
  .catch((err) => {
    console.log(err);
  });

createUserInfo.setUserInfo(userProfile.name, userProfile.about);
createUserInfo.setUserAvatar(userProfile.avatar);

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

//Обработчик Cards
const createCard = (
  data,
  elementTemplate,
  cardConf,
  userProfile,
  callbacks
) => {
  const card = new Card(
    data,
    elementTemplate,
    cardConf,
    userProfile,
    callbacks
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

// Открывает модально окно с добавлением карточки
const openAvatarPopup = () => {
  formValidators["popup-avatar"].removeValidationErrors();
  handleFormSubmitAvatar.open();
};

// Открывает модально окно с изменением профиля
const handleFormSubmitEditProfile = new PopupWithForm(async (data) => {
  const updateUserProfile = await api
    .updateUserProfile(data.name, data.job)
    .then((result) => result)
    .catch((err) => {
      console.log(err);
    });
  createUserInfo.setUserInfo(updateUserProfile.name, updateUserProfile.about);
  handleFormSubmitEditProfile.close();
}, popupEdit);

// Открывает модально окно с изменением профиля
const handleFormSubmitAvatar = new PopupWithForm(async (data) => {
  const updateUserProfile = await api
    .updateAvatarProfile(data.avatar)
    .then((result) => result)
    .catch((err) => {
      console.log(err);
    });
  createUserInfo.setUserAvatar(updateUserProfile.avatar);
  handleFormSubmitAvatar.close();
}, popupAvatar);

// Открывает модально окно с вопросом о удалении карточки
const createHandleFormSubmitTrash = (elementCard, cardId) => {
  const handleFormSubmitTrash = new PopupWithForm(() => {
    api
      .deleteInitialCards(cardId)
      .then((result) => result)
      .catch((err) => {
        console.log(err);
      });
    elementCard.remove();
    handleFormSubmitTrash.close();
  }, popupTrash);
  handleFormSubmitTrash.open();
  handleFormSubmitTrash.setEventListeners();
};

const callbacks = {
  handleFullScreen: setElementWithImage,
  handleTrashDeleteCard: createHandleFormSubmitTrash,
  handleApi: api,
};

//Форма для отправки названия картинки и картинку
const handleFormSubmitAddCard = new PopupWithForm(async (item) => {
  const newInitialCards = await api
    .renderInitialCards(item.card, item.link)
    .then((result) => result)
    .catch((err) => {
      console.log(err);
    });
  renderInitialCards.prependItem(
    createCard(
      newInitialCards,
      elementTemplate,
      cardConf,
      userProfile,
      callbacks
    )
  );
  handleFormSubmitAddCard.close();
}, popupCard);

const renderInitialCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      renderInitialCards.addItem(
        createCard(item, elementTemplate, cardConf, userProfile, callbacks)
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
