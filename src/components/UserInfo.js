export default class UserInfo {
  constructor({ userName, userJob, userAvatar }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._userAvatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
    const userInfo = {
      name: this._userName.textContent,
      job: this._userJob.textContent,
      avatar: this._userAvatar.src,
      userId: this._userId,
    };
    return userInfo;
  }

  setUserInfo(inputName, inputInfo) {
    this._userName.textContent = inputName;
    this._userJob.textContent = inputInfo;
  }

  setUserAvatar(inputAvatar) {
    this._userAvatar.src = inputAvatar;
  }

  setUserId(userId) {
    this._userId = userId;
  }
}
