let page = document.querySelector(".page");
let content = document.querySelector(".content");
let popup = document.querySelector(".popup");
let editButton = content.querySelector(".profile__edit-button");
let titleName = content.querySelector(".profile__title");
let subtitleJob = content.querySelector(".profile__subtitle");
let inputName = popup.querySelector(".popup__input_name");
let inputSubtitle = popup.querySelector(".popup__input_job");
let closeButton = popup.querySelector(".popup__close");
let formSubmit = popup.querySelector(".popup__form");

function openPopup() {
  popup.classList.add("popup_opened");
  page.classList.add("page_overflow_hiden");
}

function closePopup() {
  popup.classList.remove("popup_opened");
  page.classList.remove("page_overflow_hiden");
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
