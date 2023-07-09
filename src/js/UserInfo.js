export default class UserInfo {
  constructor({ userName, userInfo }) {
    this._userName = document.querySelector(userName);
    this._userInfo = document.querySelector(userInfo);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    };
    return userInfo;
  }

  setUserInfo(inputName, inputInfo) {
    this._userName.textContent = inputName;
    this._userInfo.textContent = inputInfo;
  }
}
