import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
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
  buttonsClosePopup,
  formSubmitEditProfile,
  formSubmitAddCard,
} from "./consts.js";

const formEditValidator = new FormValidator(validConf, formSubmitEditProfile);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(validConf, formSubmitAddCard);
formAddValidator.enableValidation();

const setElementWithImage = new PopupWithImage(
  elementsFullScreen,
  elementsFullScreen.popupFullscreen,
  buttonsClosePopup
);

const openPopup = (popup) => {
  const modal = new Popup(popup, buttonsClosePopup);
  const openModal = modal.open();
  return openModal;
};

const createUserInfo = () => {
  const setUserInfo = new UserInfo({
    userName: ".profile__title",
    userInfo: ".profile__subtitle",
  });
  return setUserInfo;
};

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
  const userInfo = createUserInfo().getUserInfo();
  inputName.value = userInfo.name;
  inputJob.value = userInfo.info;
  formEditValidator.removeValidationErrors();
  openPopup(popupEdit);
};

// Открывает модально окно с добавлением карточки
const openAddCardPopup = () => {
  formAddValidator.removeValidationErrors();
  openPopup(popupCard);
};

// Открывает модально окно с изменением профиля
const handleFormSubmitEditProfile = new PopupWithForm(
  (data) => {
    createUserInfo().setUserInfo(data.name, data.job);
    handleFormSubmitEditProfile.close();
  },
  popupEdit,
  buttonsClosePopup
);


//Форма для отправки названия картинки и картинку
const handleFormSubmitAddCard = new PopupWithForm(
  (item) => {
    const dataObj = {
      name: item.card,
      link: item.link,
    };
    elementsCard.prepend(
      createCard(dataObj, elementTemplate, cardConf, setElementWithImage)
    );
    handleFormSubmitAddCard.close();
  },
  popupCard,
  buttonsClosePopup
);


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