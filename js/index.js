const content = document.querySelector(".content");

// Modal
const popup = document.querySelector(".popup");
const popupContainerTemplate = popup.querySelector("#popup__container").content;
const popupContainer = popupContainerTemplate
  .querySelector(".popup__container")
  .cloneNode(true);

// ElementCard
const elementsCard = content.querySelector(".elements");
const elementTemplate = content.querySelector("#element").content;

// Title
const titleName = content.querySelector(".profile__title");
const subtitleJob = content.querySelector(".profile__subtitle");
const titlePopup = popupContainer.querySelector(".popup__title");

// Input
const inputName = popupContainer.querySelector("#input-name");
const inputSubtitle = popupContainer.querySelector("#input-info");

// Button
const editButton = content.querySelector(".profile__edit-button");
const addCardButton = content.querySelector(".profile__add-button");
const closeButton = popupContainer.querySelector(".popup__close");
const saveButton = popupContainer.querySelector(".popup__save");

// Form
const formSubmit = popupContainer.querySelector('[name="popup"]');

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

const setElementCard = () => {
  initialCards.forEach((item) => {
    const elementCard = elementTemplate
      .querySelector(".element")
      .cloneNode(true);
    const elementCardTitle = elementCard.querySelector(".element__title");
    const elementCardImg = elementCard.querySelector(".element__img");
    elementCardTitle.textContent = item.name;
    elementCardImg.alt = item.name;
    elementCardImg.src = item.link;
    elementsCard.append(elementCard);
  });
  console.log(initialCards);
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
  if (clickedAddCard) {
    evt.preventDefault();
    const elementCardDelAll = content.querySelectorAll(".element");
    [...[...elementCardDelAll].slice()].forEach((item) => item.remove());
    initialCards.unshift({
      name: inputName.value,
      link: inputSubtitle.value,
    });
    setElementCard();
    closePopup();
  }
  console.log(initialCards);
  clickedAddCard = false;
};

addCardButton.addEventListener("click", openPopupAddCard);
editButton.addEventListener("click", openPopupEditProfile);
closeButton.addEventListener("click", closePopup);
formSubmit.addEventListener("submit", handleFormSubmitEditProfile);
formSubmit.addEventListener("submit", handleFormSubmitAddCard);
