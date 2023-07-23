import "./index.css";
import Api from "../components/Api.js";
import PopupWithDeleteCard from "../components/PopupWithDeleteCard.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  cardConf,
  validConf,
  popupEdit,
  popupCard,
  popupTrash,
  elementsCard,
  elementTemplate,
  elementsFullScreen,
  editButton,
  addCardButton,
  avatarButton,
  popupAvatar,
} from "../utils/consts.js";

const formValidators = {};

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71",
  headers: {
    authorization: "60aadb55-160d-405b-85d4-d114cbcf9c50",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__subtitle",
  userAvatar: ".profile__avatar",
});

const popupWithDeleteCard = new PopupWithDeleteCard(
  (cardId, elementCard, buttonSubmit) => {
    Promise.all([api.deleteInitialCards(cardId)])
      .then(() => {
        buttonSubmit.textContent = "Удаление...";
        elementCard.remove();
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      })
      .finally(() => {
        buttonSubmit.textContent = "Да";
      });
    popupWithDeleteCard.close();
  },
  popupTrash
);

const popupWithImage = new PopupWithImage(
  elementsFullScreen,
  elementsFullScreen.popupFullscreen
);

//Добавляет и удаляет активный класс like
const cardLike = (cardId, isLiked, likesCounter, likeButton, cardConf) => {
  if (isLiked) {
    Promise.all([api.likeActiveInitialCards(cardId)])
      .then(([likeActive]) => {
        likesCounter.textContent = likeActive.likes.length;
        likeButton.classList.add(cardConf.likeActiveButton);
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      });
  } else {
    Promise.all([api.likeEnabledInitialCards(cardId)])
      .then(([likeEnabled]) => {
        likesCounter.textContent = likeEnabled.likes.length;
        likeButton.classList.remove(cardConf.likeActiveButton);
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      });
  }
};

const callbacks = {
  handleFullScreen: popupWithImage,
  handleDeleteCard: popupWithDeleteCard,
  handleLikeCard: cardLike,
};

//Обработчик Cards
const createCard = (
  data,
  elementTemplate,
  cardConf,
  currentUserId,
  callbacks
) => {
  const card = new Card(
    data,
    elementTemplate,
    cardConf,
    currentUserId,
    callbacks
  );
  const cardElement = card.generateElementCardItem();
  return cardElement;
};

//Генерация карточек
const renderCards = (
  initialCards,
  elementTemplate,
  cardConf,
  currentUserId,
  callbacks
) => {
  const renderInitialCards = new Section(
    {
      items: initialCards,
      renderer: (item) => {
        renderInitialCards.addItem(
          createCard(item, elementTemplate, cardConf, currentUserId, callbacks)
        );
      },
    },
    elementsCard
  );
  return renderInitialCards;
};

Promise.all([api.getInitialCards(), api.getUserProfile()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);

    renderCards(
      initialCards,
      elementTemplate,
      cardConf,
      userData._id,
      callbacks
    ).renderItems();
  })
  .catch((err) => {
    console.log(`Ошибка данных: ${err}`);
  });

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    formValidators[formName].enableValidation();
  });
};

enableValidation(validConf);

// Открывает модально окно с изменением профиля
const openEditProfilePopup = () => {
  const setUserInfo = userInfo.getUserInfo();
  popupWithFormEditProfile.setInputValues(setUserInfo);
  formValidators["popup-edit"].removeValidationErrors();
  popupWithFormEditProfile.open();
};

// Открывает модально окно с добавлением карточки
const openAddCardPopup = () => {
  formValidators["popup-card"].removeValidationErrors();
  popupWithFormAddCard.open();
};

// Открывает модально окно с добавлением карточки
const openAvatarPopup = () => {
  formValidators["popup-avatar"].removeValidationErrors();
  popupWithFormAvatar.open();
};

// Открывает модально окно с изменением профиля
const popupWithFormEditProfile = new PopupWithForm((data, buttonSubmit) => {
  Promise.all([api.updateUserProfile(data.name, data.job)])
    .then(([userData]) => {
      buttonSubmit.textContent = "Сохранение...";
      userInfo.setUserInfo(userData.name, userData.about);
      popupWithFormEditProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка данных: ${err}`);
    })
    .finally(() => {
      buttonSubmit.textContent = "Сохранить";
    });
}, popupEdit);

// Открывает модально окно с изменением профиля
const popupWithFormAvatar = new PopupWithForm((data, buttonSubmit) => {
  Promise.all([api.updateAvatarProfile(data.avatar)])
    .then(([userData]) => {
      buttonSubmit.textContent = "Сохранение...";
      userInfo.setUserAvatar(userData.avatar);
      popupWithFormAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка данных: ${err}`);
    })
    .finally(() => {
      buttonSubmit.textContent = "Сохранить";
    });
}, popupAvatar);

//Форма для отправки названия картинки и картинку
const popupWithFormAddCard = new PopupWithForm((item, buttonSubmit) => {
  Promise.all([
    api.renderInitialCards(item.card, item.link),
    api.getUserProfile(),
  ])
    .then(([newInitialCards, userData]) => {
      buttonSubmit.textContent = "Создание карточки...";
      renderCards(
        newInitialCards,
        elementTemplate,
        cardConf,
        userData._id,
        callbacks
      ).prependItem(
        createCard(
          newInitialCards,
          elementTemplate,
          cardConf,
          userData._id,
          callbacks
        )
      );
      popupWithFormAddCard.close();
    })
    .catch((err) => {
      console.log(`Ошибка данных: ${err}`);
    })
    .finally(() => {
      buttonSubmit.textContent = "Создать";
    });
}, popupCard);

editButton.addEventListener("click", openEditProfilePopup);
addCardButton.addEventListener("click", openAddCardPopup);
avatarButton.addEventListener("click", openAvatarPopup);
popupWithFormEditProfile.setEventListeners();
popupWithFormAddCard.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithDeleteCard.setEventListeners();
