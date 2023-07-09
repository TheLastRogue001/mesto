import dolinaImage from "../images/eberhard-grossgasteiger-DsdlOxx2mz0-unsplash.jpg";
import ozeroImage from "../images/thomas-de-luze-w8PWj40lmAk-unsplash.jpg";
import plyazhImage from "../images/jeff-james-IGzNdZPu4c4-unsplash.jpg";
import waterImage from "../images/neom-CuoJHB42D1I-unsplash.jpg";
import kanionImage from "../images/neom-s3leOixsIX0-unsplash.jpg";
import tropikiImage from "../images/reinaldo-photography-Nim4ksJEYFs-unsplash.jpg";

// CardItem
const initialCards = [
  {
    name: "Долина гор",
    link: dolinaImage,
  },
  {
    name: "Озеро",
    link: ozeroImage,
  },
  {
    name: "Пляж",
    link: plyazhImage,
  },
  {
    name: "Подводный мир",
    link: waterImage,
  },
  {
    name: "Каньон",
    link: kanionImage,
  },
  {
    name: "Тропики",
    link: tropikiImage,
  },
];

// Object Validation
const validConf = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Object Card
const cardConf = {
  elementCard: ".element",
  elementCardTitle: ".element__title",
  elementCardImg: ".element__img",
  trashButton: ".element__trash",
  likeButton: ".element__like",
  likeActiveButton: "element__like_active",
};

const content = document.querySelector(".content");

// Modal
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
const titlePopupFullscreen =
  popupContainerFullscreen.querySelector(".popup__title");

// Input
const inputName = popupEdit.querySelector("#name-input");
const inputJob = popupEdit.querySelector("#job-input");
const inputCard = popupCard.querySelector("#card-input");
const inputLink = popupCard.querySelector("#link-input");

// Button
const editButton = content.querySelector(".profile__edit-button");
const addCardButton = content.querySelector(".profile__add-button");
const closeButtonEdit = popupEdit.querySelector(".popup__close");
const closeButtonCard = popupCard.querySelector(".popup__close");
const closeButtonFullscreen = popupFullscreen.querySelector(".popup__close");

// Form
const formSubmitEditProfile = popupContainerEdit.querySelector(".popup__form");
const formSubmitAddCard = popupContainerCard.querySelector(".popup__form");

//ElementsFullScreen
const elementsFullScreen = {
  elementFullScreenImg: elementFullScreenImg,
  titlePopupFullscreen: titlePopupFullscreen,
  popupFullscreen: popupFullscreen,
};

const popupList = [popupEdit, popupCard, popupFullscreen];
const buttonsClosePopup = [
  closeButtonEdit,
  closeButtonCard,
  closeButtonFullscreen,
];

export {
  initialCards,
  validConf,
  cardConf,
  content,
  popupEdit,
  popupCard,
  popupFullscreen,
  popupList,
  popupContainerEdit,
  popupContainerCard,
  popupContainerFullscreen,
  elementsFullScreen,
  elementFullScreenImg,
  elementsCard,
  elementTemplate,
  titleName,
  subtitleJob,
  titlePopupFullscreen,
  inputName,
  inputJob,
  inputCard,
  inputLink,
  editButton,
  addCardButton,
  closeButtonEdit,
  closeButtonCard,
  closeButtonFullscreen,
  buttonsClosePopup,
  formSubmitEditProfile,
  formSubmitAddCard,
};
