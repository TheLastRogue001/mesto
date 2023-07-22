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
  likesCounter: ".element__like-count",
  likeActiveButton: "element__like_active",
};

const content = document.querySelector(".content");

// Modal
const popupEdit = document.querySelector(".popup_edit");
const popupCard = document.querySelector(".popup_card");
const popupFullscreen = document.querySelector(".popup_fullscreen");
const popupTrash = document.querySelector(".popup_trash");
const popupAvatar = document.querySelector(".popup_avatar");
const popupContainerEdit = popupEdit.querySelector(".popup__container");
const popupContainerCard = popupCard.querySelector(".popup__container");
const popupContainerFullscreen =
  popupFullscreen.querySelector(".popup__container");
const popupContainerTrash = popupTrash.querySelector(".popup__container");

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
const avatarButton = content.querySelector(".profile__avatar-button");
const closeButtonEdit = popupEdit.querySelector(".popup__close");
const closeButtonCard = popupCard.querySelector(".popup__close");
const closeButtonFullscreen = popupFullscreen.querySelector(".popup__close");
const closeButtonTrash = popupTrash.querySelector(".popup__close");

// Form
const formSubmitEditProfile = popupContainerEdit.querySelector(".popup__form");
const formSubmitAddCard = popupContainerCard.querySelector(".popup__form");

//ElementsFullScreen
const elementsFullScreen = {
  elementFullScreenImg: elementFullScreenImg,
  titlePopupFullscreen: titlePopupFullscreen,
  popupFullscreen: popupFullscreen,
};

export {
  validConf,
  cardConf,
  content,
  popupEdit,
  popupCard,
  popupFullscreen,
  popupTrash,
  popupAvatar,
  popupContainerEdit,
  popupContainerCard,
  popupContainerFullscreen,
  popupContainerTrash,
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
  avatarButton,
  closeButtonEdit,
  closeButtonCard,
  closeButtonFullscreen,
  closeButtonTrash,
  formSubmitEditProfile,
  formSubmitAddCard,
};
