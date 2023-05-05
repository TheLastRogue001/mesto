(function () {
  let modal = document.querySelector(".profile__form");
  let closeButton = document.querySelector(".profile__form-close");
  let formElement = document.getElementById("submit");
  let modalTriggers = document.querySelectorAll("[data-trigger]");

  let isModalOpen = false;
  let pageYOffset = 0;

  const openModal = function () {
    pageYOffset = window.pageYOffset;
    modal.classList.add("profile__form-open");
    isModalOpen = true;
  };

  const closeModal = function () {
    modal.classList.remove("profile__form-open");
    isModalOpen = false;
  };

  const onScroll = function (e) {
    if (isModalOpen) {
      e.preventDefault();
      window.scrollTo(0, pageYOffset);
    }
  };

  const handleFormSubmit = function (evt) {
    evt.preventDefault();
    document.querySelector(".profile__title").innerHTML =
      document.getElementById("name_input").value;
    document.querySelector(".profile__subtitle").innerHTML =
      document.getElementById("job_input").value;
    closeModal();
  };

  modalTriggers.forEach(function (item) {
    item.addEventListener("click", openModal);
  });

  document.addEventListener("scroll", onScroll);

  formElement.addEventListener("click", handleFormSubmit);

  closeButton.addEventListener("click", closeModal);
})();
