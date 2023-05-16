const content = document.querySelector(".content");

// Modal
const popup = document.querySelector(".popup");
const popupContainerTemplate = popup.querySelector("#popup__container").content;
const popupContainer = popupContainerTemplate
  .querySelector(".popup__container")
  .cloneNode(true);

// Title
const titleName = content.querySelector(".profile__title");
const subtitleJob = content.querySelector(".profile__subtitle");

// Input
const inputName = popupContainer.querySelector("#input-name");
const inputSubtitle = popupContainer.querySelector("#input-info");

// Button
const editButton = content.querySelector(".profile__edit-button");
const addCardButton = content.querySelector(".profile__add-button");
const closeButton = popupContainer.querySelector(".popup__close");

// Form
const formSubmit = popupContainer.querySelector('[name="popup"]');

let clickedEditProfile = false;
let clickedAddCard = false;

function openPopupEditProfile() {
  clickedEditProfile = true;
  popup.classList.add("popup_opened");
  popupContainer.querySelector(".popup__title").textContent =
    "Редактировать профиль";
  popupContainer.querySelector(".popup__save").textContent = "Сохранить";
  inputName.placeholder = "ФИО";
  inputSubtitle.placeholder = "Работа";
  inputName.value = titleName.textContent;
  inputSubtitle.value = subtitleJob.textContent;
  popup.append(popupContainer);
}

function openPopupAddCard() {
  clickedAddCard = true;
  popup.classList.add("popup_opened");
  popupContainer.querySelector(".popup__title").textContent = "Новое место";
  popupContainer.querySelector(".popup__save").textContent = "Создать";
  inputName.placeholder = "Название";
  inputSubtitle.placeholder = "Ссылка на картинку";
  inputName.value = "";
  inputSubtitle.value = "";
  popup.append(popupContainer);
}

function closePopup() {
  clickedEditProfile = false;
  clickedAddCard = false;
  popup.classList.remove("popup_opened");
}

function handleFormSubmitEditProfile(evt) {
  if (clickedEditProfile) {
    evt.preventDefault();
    titleName.textContent = inputName.value;
    subtitleJob.textContent = inputSubtitle.value;
    closePopup();
  }
  clickedEditProfile = false;
}

function handleFormSubmitAddCard(evt) {
  if (clickedAddCard) {
    evt.preventDefault();
    closePopup();
  }
  clickedAddCard = false;
}

addCardButton.addEventListener("click", openPopupAddCard);
editButton.addEventListener("click", openPopupEditProfile);
closeButton.addEventListener("click", closePopup);
formSubmit.addEventListener("submit", handleFormSubmitEditProfile);
formSubmit.addEventListener("submit", handleFormSubmitAddCard);
