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
  (cardId, elementCard, removeElementCard) => {
    popupWithDeleteCard.setTextSubmitButton("Удаление...");
    api
      .deleteInitialCards(cardId)
      .then(() => {
        removeElementCard(elementCard);
        popupWithDeleteCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      })
      .finally(() => {
        popupWithDeleteCard.setTextSubmitButton("Да");
      });
  },
  popupTrash
);

const popupWithImage = new PopupWithImage(
  elementsFullScreen,
  elementsFullScreen.popupFullscreen
);

//Добавляет и удаляет активный класс like
const cardLike = (card, cardId, isLiked, likesCounter, likeButton) => {
  if (isLiked) {
    api
      .likeActiveInitialCards(cardId)
      .then((likeActive) => {
        card.setLikeCard(likeActive, likesCounter, likeButton);
      })
      .catch((err) => {
        console.log(`Ошибка данных: ${err}`);
      });
  } else {
    api
      .likeEnabledInitialCards(cardId)
      .then((likeEnabled) => {
        card.removeLikeCard(likeEnabled, likesCounter, likeButton);
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
    userInfo.setUserId(userData._id);

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
const popupWithFormEditProfile = new PopupWithForm((data) => {
  popupWithFormEditProfile.setTextSubmitButton("Сохранение...");
  api
    .updateUserProfile(data.name, data.job)
    .then((userData) => {
      userInfo.setUserInfo(userData.name, userData.about);
      popupWithFormEditProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка данных: ${err}`);
    })
    .finally(() => {
      popupWithFormEditProfile.setTextSubmitButton("Сохранить");
    });
}, popupEdit);

// Открывает модально окно с изменением профиля
const popupWithFormAvatar = new PopupWithForm((data) => {
  popupWithFormAvatar.setTextSubmitButton("Сохранение...");
  api
    .updateAvatarProfile(data.avatar)
    .then((userData) => {
      userInfo.setUserAvatar(userData.avatar);
      popupWithFormAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка данных: ${err}`);
    })
    .finally(() => {
      popupWithFormAvatar.setTextSubmitButton("Сохранить");
    });
}, popupAvatar);

//Форма для отправки названия картинки и картинку
const popupWithFormAddCard = new PopupWithForm((item) => {
  popupWithFormAddCard.setTextSubmitButton("Создание карточки...");
  const userId = userInfo.getUserId();
  api
    .renderInitialCards(item.card, item.link)
    .then((newInitialCards) => {
      renderCards(
        newInitialCards,
        elementTemplate,
        cardConf,
        userId,
        callbacks
      ).prependItem(
        createCard(
          newInitialCards,
          elementTemplate,
          cardConf,
          userId,
          callbacks
        )
      );
      popupWithFormAddCard.close();
    })
    .catch((err) => {
      console.log(`Ошибка данных: ${err}`);
    })
    .finally(() => {
      popupWithFormAddCard.setTextSubmitButton("Создать");
    });
}, popupCard);

editButton.addEventListener("click", openEditProfilePopup);
addCardButton.addEventListener("click", openAddCardPopup);
avatarButton.addEventListener("click", openAvatarPopup);
popupWithFormEditProfile.setEventListeners();
popupWithFormAddCard.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupWithDeleteCard.setEventListeners();
