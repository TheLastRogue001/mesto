const content = document.querySelector(".content");

// Modal
const popup = document.querySelector(".popup");
const popupContainerTemplate = popup.querySelector("#popup__container").content;
const popupContainer = popupContainerTemplate
  .querySelector(".popup__container")
  .cloneNode(true);
const popupImage = document.querySelector(".popup-image");
const popupImageContainerTemplate = popupImage.querySelector(
  "#popup-image__container"
).content;
const popupImageContainer = popupImageContainerTemplate
  .querySelector(".popup-image__container")
  .cloneNode(true);

// ElementCardImg
const elementFullScreenImg =
  popupImageContainer.querySelector(".popup-image__img");

// ElementCard
const elementsCard = content.querySelector(".elements");
const elementTemplate = content.querySelector("#element").content;

// Title
const titleName = content.querySelector(".profile__title");
const subtitleJob = content.querySelector(".profile__subtitle");
const titlePopup = popupContainer.querySelector(".popup__title");
const titlePopupImage = popupImageContainer.querySelector(
  ".popup-image__title"
);

// Input
const inputName = popupContainer.querySelector("#input-name");
const inputSubtitle = popupContainer.querySelector("#input-info");

// Button
const editButton = content.querySelector(".profile__edit-button");
const addCardButton = content.querySelector(".profile__add-button");
const closeButton = popupContainer.querySelector(".popup__close");
const closeImageButton = popupImageContainer.querySelector(".popup-image__close");
const saveButton = popupContainer.querySelector(".popup__save");

// Form
const formSubmit = popupContainer.querySelector('[name="popup-submit"]');

// CardItem
const initialCards = [
  {
    name: "Долина гор",
    link: "./images/eberhard-grossgasteiger-DsdlOxx2mz0-unsplash.jpg",
  },
  {
    name: "Утренний лес",
    link: "./images/kristaps-ungurs-VkuRDf0lm5c-unsplash.jpg",
  },
  {
    name: "Звёздное небо",
    link: "./images/neom-0rvKw0fDiHk-unsplash.jpg",
  },
  {
    name: "Подводный мир",
    link: "./images/neom-CuoJHB42D1I-unsplash.jpg",
  },
  {
    name: "Каньон",
    link: "./images/neom-s3leOixsIX0-unsplash.jpg",
  },
  {
    name: "Тропики",
    link: "./images/reinaldo-photography-Nim4ksJEYFs-unsplash.jpg",
  },
];

let clickedEditProfile = false;
let clickedAddCard = false;

const checkLikeActive = (evt) => {
  evt.target.classList.toggle("element__like_active");
};

const closePopupFullScreenImage = () => {
  popupImage.classList.remove("popup-image_opened");
};

const setElementCard = () => {
  initialCards.forEach((item, index, object) => {
    const elementCard = elementTemplate
      .querySelector(".element")
      .cloneNode(true);

    const elementCardTitle = elementCard.querySelector(".element__title");

    const elementCardImg = elementCard.querySelector(".element__img");

    const checkFullScreenImage = () => {
      popupImage.classList.add("popup-image_opened");
      elementFullScreenImg.src = item.link;
      titlePopupImage.textContent = item.name;
      popupImage.append(popupImageContainer);
    };

    const trashButton = elementCard.querySelector(".element__trash");
    const removeElementCard = () => {
      object.splice(object.indexOf(item), 1);
      trashButton.parentNode.remove();
    };

    const likeButton = elementCard.querySelector(".element__like");

    elementCardTitle.textContent = item.name;
    elementCardImg.alt = item.name;
    elementCardImg.src = item.link;

    elementsCard.append(elementCard);

    elementCardImg.addEventListener("click", checkFullScreenImage);
    trashButton.addEventListener("click", removeElementCard);
    likeButton.addEventListener("click", checkLikeActive);
  });
};

setElementCard();

const openPopupEditProfile = () => {
  clickedEditProfile = true;
  popup.classList.add("popup_opened");
  titlePopup.textContent = "Редактировать профиль";
  saveButton.textContent = "Сохранить";
  inputName.placeholder = "ФИО";
  inputSubtitle.placeholder = "Работа";
  inputName.value = titleName.textContent;
  inputSubtitle.value = subtitleJob.textContent;
  popup.append(popupContainer);
};

const openPopupAddCard = () => {
  clickedAddCard = true;
  popup.classList.add("popup_opened");
  titlePopup.textContent = "Новое место";
  saveButton.textContent = "Создать";
  inputName.placeholder = "Название";
  inputSubtitle.placeholder = "Ссылка на картинку";
  inputName.value = "";
  inputSubtitle.value = "";
  popup.append(popupContainer);
};

const closePopup = () => {
  clickedEditProfile = false;
  clickedAddCard = false;
  popup.classList.remove("popup_opened");
};

const handleFormSubmitEditProfile = (evt) => {
  if (clickedEditProfile) {
    evt.preventDefault();
    titleName.textContent = inputName.value;
    subtitleJob.textContent = inputSubtitle.value;
    closePopup();
  }
  clickedEditProfile = false;
};

const handleFormSubmitAddCard = (evt) => {
  evt.preventDefault();
  if (clickedAddCard) {
    const removeElementCardAll = content.querySelectorAll(".element");
    for (let i = 0; i < removeElementCardAll.length; i++) {
      removeElementCardAll[i].remove();
    }
    initialCards.unshift({
      name: inputName.value,
      link: inputSubtitle.value,
    });
    setElementCard();
    closePopup();
  }
  clickedAddCard = false;
};

addCardButton.addEventListener("click", openPopupAddCard);
editButton.addEventListener("click", openPopupEditProfile);
closeButton.addEventListener("click", closePopup);
closeImageButton.addEventListener("click", closePopupFullScreenImage);
formSubmit.addEventListener("submit", handleFormSubmitEditProfile);
formSubmit.addEventListener("submit", handleFormSubmitAddCard);
