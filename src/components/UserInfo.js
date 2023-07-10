export default class UserInfo {
  constructor({ userName, userJob }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
    return userInfo;
  }

  setUserInfo(inputName, inputInfo) {
    this._userName.textContent = inputName;
    this._userJob.textContent = inputInfo;
  }
}
