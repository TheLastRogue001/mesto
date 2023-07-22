class Api {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-71/cards", {
      method: "GET",
      headers: {
        authorization: "60aadb55-160d-405b-85d4-d114cbcf9c50",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // другие методы работы с API
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-71",
  headers: {
    authorization: "60aadb55-160d-405b-85d4-d114cbcf9c50",
    "Content-Type": "application/json",
  },
});


