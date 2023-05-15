let content = document.querySelector(".content");
let popup = document.querySelector(".popup");
let editButton = content.querySelector(".profile__edit-button");
let titleName = content.querySelector(".profile__title");
let subtitleJob = content.querySelector(".profile__subtitle");
let inputName = popup.querySelector(".popup__input:nth-child(1)");
let inputSubtitle = popup.querySelector(".popup__input:nth-child(2)");
let closeButton = popup.querySelector(".popup__close");
let formSubmit = popup.querySelector(".popup__form");

function openPopup() {
  inputName.value = titleName.textContent;
  inputSubtitle.value = subtitleJob.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  titleName.textContent = inputName.value;
  subtitleJob.textContent = inputSubtitle.value;
  closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formSubmit.addEventListener("submit", handleFormSubmit);
