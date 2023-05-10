let content = document.querySelector(".content");
let profileFormContainer = content.querySelector(".profile__form-container");
let editButton = content.querySelector(".profile__edit-button");

function openForm() {
  profileFormContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="profile__form">
      <div class="profile__form-content">
        <h2 class="profile__form-title">Редактировать профиль</h2>
        <input
          class="profile__form-input profile__form-input-title"
          type="text"
          value="Жак-Ив Кусто"
        />
        <input
          class="profile__form-input profile__form-input-subtitle"
          type="text"
          value="Исследователь океана"
        />
        <button type="submit" class="profile__form-save">Сохранить</button>
      </div>
      <button class="profile__form-close"></button>
    </div>
  `
  );
  let saveButton = profileFormContainer.querySelector(".profile__form-save");
  let closeButton = profileFormContainer.querySelector(".profile__form-close");
  closeButton.addEventListener("click", closeForm);
  saveButton.addEventListener("click", handleFormSubmit);
}

function closeForm() {
  let closeButton = profileFormContainer.querySelector(".profile__form-close");
  closeButton.parentNode.remove();
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  let titleName = content.querySelector(".profile__title");
  let inputName = content.querySelector(".profile__form-input-title").value;
  let subtitleJob = content.querySelector(".profile__subtitle");
  let inputSubtitle = content.querySelector(
    ".profile__form-input-subtitle"
  ).value;
  titleName.textContent = inputName;
  subtitleJob.textContent = inputSubtitle;
  closeForm();
}

editButton.addEventListener("click", openForm);
profileFormContainer.addEventListener("submit", handleFormSubmit);
