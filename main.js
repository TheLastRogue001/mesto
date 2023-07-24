(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t,this._baseUrl=this._options.baseUrl,this._headers=this._options.headers}var r,n;return r=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"deleteInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getUserProfile",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"updateUserProfile",value:function(e,t){var r=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return r._checkResponse(e)}))}},{key:"updateAvatarProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponse(e)}))}},{key:"renderInitialCards",value:function(e,t){var r=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return r._checkResponse(e)}))}},{key:"likeActiveInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"likeEnabledInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}var u=function(){function e(t){var r,n,o,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&u.close()},(n=i(n="_handleClosePopupByEsc"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=t,this._buttonClose=this._popup.querySelector(".popup__close"),this._setEventListeners()}var t,r;return t=e,(r=[{key:"open",value:function(){document.addEventListener("keydown",this._handleClosePopupByEsc),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleClosePopupByEsc),this._popup.classList.remove("popup_opened")}},{key:"_setEventListeners",value:function(){var e=this;this._buttonClose.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===e._popup&&e.close()}))}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},c.apply(this,arguments)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._popup=t,r._handleFormSubmit=e,r._buttonSubmit=r._popup.querySelector(".popup__button"),r}return t=u,(r=[{key:"open",value:function(e,t,r){this._cardId=e,this._elementCard=t,this.removeElementCard=r,c(f(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;c(f(u.prototype),"_setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",(function(t){t.preventDefault(),e._handleFormSubmit(e._cardId,e._elementCard,e.removeElementCard,e._buttonSubmit)}))}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var d=function(){function e(t,r,n,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._likes=t.likes,this._cardId=t._id,this._userId=t.owner._id,this._currentUserId=o,this._elementTemplate=r,this._cardConf=n,this._callbacks=i,this._handleFullScreen=i.handleFullScreen,this._handleTrashDeleteCard=i.handleDeleteCard,this._handleLikeCard=i.handleLikeCard,this._isLiked=!1}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return this._elementTemplate.querySelector(this._cardConf.elementCard).cloneNode(!0)}},{key:"generateElementCardItem",value:function(){this._elementCard=this._getTemplate(),this._elementCardTitle=this._elementCard.querySelector(this._cardConf.elementCardTitle),this._elementCardImg=this._elementCard.querySelector(this._cardConf.elementCardImg),this._likeButton=this._elementCard.querySelector(this._cardConf.likeButton),this._likesCounter=this._elementCard.querySelector(this._cardConf.likesCounter),this._trashButton=this._elementCard.querySelector(this._cardConf.trashButton),this._userId!==this._currentUserId&&(this._trashButton.style.display="none");for(var e=0;e<this._likes.length;e++)this._likes[e]._id===this._currentUserId&&(this._likeButton.classList.add(this._cardConf.likeActiveButton),this._isLiked=!0);return this._setEventListeners(),this._elementCardTitle.textContent=this._name,this._elementCardImg.alt=this._name,this._elementCardImg.src=this._link,this._likesCounter.textContent=this._likes.length,this._elementCard}},{key:"removeElementCard",value:function(e){e.remove()}},{key:"setLikeCard",value:function(e,t,r){t.textContent=e.likes.length,r.classList.add(this._cardConf.likeActiveButton)}},{key:"removeLikeCard",value:function(e,t,r){t.textContent=e.likes.length,r.classList.remove(this._cardConf.likeActiveButton)}},{key:"_setEventListeners",value:function(){var e=this;this._elementCardImg.addEventListener("click",(function(){e._handleFullScreen.open(e._name,e._link)})),this._trashButton.addEventListener("click",(function(){e._handleTrashDeleteCard.open(e._cardId,e._elementCard,e.removeElementCard)})),this._likeButton.addEventListener("click",(function(){e._isLiked=!e._isLiked,e._handleLikeCard(e._data,e._cardConf,e._currentUserId,e._callbacks,e._cardId,e._isLiked,e._likesCounter,e._likeButton)}))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}var v=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validConf=t,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._validConf.inputSelector)),this._inputElement=this._validConf.inputSelector,this._submitButton=this._formElement.querySelector(this._validConf.submitButtonSelector),this._inactiveSubmitButton=this._validConf.inactiveButtonClass,this._inputError=this._validConf.inputErrorClass,this._errorClass=this._validConf.errorClass}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var r=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputError),r.textContent=t,r.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputError),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveSubmitButton)):(this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._inactiveSubmitButton))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"removeValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&_(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var g=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=n,this._renderer=o,this._container=r}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},w.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(o){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._titlePopupFullscreen=e.titlePopupFullscreen,r._elementFullScreenImg=e.elementFullScreenImg,r}return t=u,(r=[{key:"open",value:function(e,t){this._titlePopupFullscreen.textContent=e,this._elementFullScreenImg.alt=e,this._elementFullScreenImg.src=t,w(P(u.prototype),"open",this).call(this)}}])&&C(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},L.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(n);if(o){var r=T(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleFormSubmit=e,r._popup=t,r._popupCard=document.querySelector(".popup_card"),r._popupTrash=document.querySelector(".popup_trash"),r._popupForm=t.querySelector(".popup__form"),r._buttonSubmit=r._popupForm.querySelector(".popup__button"),r._inputList=Array.from(r._popupForm.querySelectorAll(".popup__input")),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;L(T(u.prototype),"_setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues(),e._buttonSubmit)}))}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){L(T(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}var U=function(){function e(t){var r=t.userName,n=t.userJob,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,job:this._userJob.textContent,avatar:this._userAvatar.src,userId:this._userId}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userJob.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}},{key:"setUserId",value:function(e){this._userId=e}}])&&A(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x={elementCard:".element",elementCardTitle:".element__title",elementCardImg:".element__img",trashButton:".element__trash",likeButton:".element__like",likesCounter:".element__like-count",likeActiveButton:"element__like_active"},F=document.querySelector(".content"),V=document.querySelector(".popup_edit"),D=document.querySelector(".popup_card"),N=document.querySelector(".popup_fullscreen"),J=document.querySelector(".popup_trash"),G=document.querySelector(".popup_avatar"),H=V.querySelector(".popup__container"),M=D.querySelector(".popup__container"),z=N.querySelector(".popup__container"),$=(J.querySelector(".popup__container"),z.querySelector(".popup__img")),K=F.querySelector(".elements"),Q=F.querySelector("#element").content,W=(F.querySelector(".profile__title"),F.querySelector(".profile__subtitle"),z.querySelector(".popup__title")),X=(V.querySelector("#name-input"),V.querySelector("#job-input"),D.querySelector("#card-input"),D.querySelector("#link-input"),F.querySelector(".profile__edit-button")),Y=F.querySelector(".profile__add-button"),Z=F.querySelector(".profile__avatar-button"),ee=(V.querySelector(".popup__close"),D.querySelector(".popup__close"),N.querySelector(".popup__close"),J.querySelector(".popup__close"),H.querySelector(".popup__form"),M.querySelector(".popup__form"),{elementFullScreenImg:$,titlePopupFullscreen:W,popupFullscreen:N});function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var re,ne={},oe=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-71",headers:{authorization:"60aadb55-160d-405b-85d4-d114cbcf9c50","Content-Type":"application/json"}}),ie=new U({userName:".profile__title",userJob:".profile__subtitle",userAvatar:".profile__avatar"}),ue=new p((function(e,t,r,n){n.textContent="Удаление...",oe.deleteInitialCards(e).then((function(){r(t),ue.close()})).catch((function(e){console.log("Ошибка данных: ".concat(e))})).finally((function(){n.textContent="Да"}))}),J),ae={handleFullScreen:new j(ee,ee.popupFullscreen),handleDeleteCard:ue,handleLikeCard:function(e,t,r,n,o,i,u,a){var l=new d(e,Q,t,r,n);i?oe.likeActiveInitialCards(o).then((function(e){l.setLikeCard(e,u,a)})).catch((function(e){console.log("Ошибка данных: ".concat(e))})):oe.likeEnabledInitialCards(o).then((function(e){l.removeLikeCard(e,u,a)})).catch((function(e){console.log("Ошибка данных: ".concat(e))}))}},le=function(e,t,r,n,o){return new d(e,t,r,n,o).generateElementCardItem()},ce=function(e,t,r,n,o){var i=new g({items:e,renderer:function(e){i.addItem(le(e,t,r,n,o))}},K);return i};Promise.all([oe.getInitialCards(),oe.getUserProfile()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ie.setUserInfo(i.name,i.about),ie.setUserAvatar(i.avatar),ie.setUserId(i._id),ce(o,Q,x,i._id,ae).renderItems()})).catch((function(e){console.log("Ошибка данных: ".concat(e))})),re={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(re.formSelector)).forEach((function(e){var t=new v(re,e),r=e.getAttribute("name");ne[r]=t,ne[r].enableValidation()}));var se=new B((function(e,t){t.textContent="Сохранение...",oe.updateUserProfile(e.name,e.job).then((function(e){ie.setUserInfo(e.name,e.about),se.close()})).catch((function(e){console.log("Ошибка данных: ".concat(e))})).finally((function(){t.textContent="Сохранить"}))}),V),fe=new B((function(e,t){t.textContent="Сохранение...",oe.updateAvatarProfile(e.avatar).then((function(e){ie.setUserAvatar(e.avatar),fe.close()})).catch((function(e){console.log("Ошибка данных: ".concat(e))})).finally((function(){t.textContent="Сохранить"}))}),G),pe=new B((function(e,t){t.textContent="Создание карточки...";var r=ie.getUserInfo().userId;oe.renderInitialCards(e.card,e.link).then((function(e){ce(e,Q,x,r,ae).prependItem(le(e,Q,x,r,ae)),pe.close()})).catch((function(e){console.log("Ошибка данных: ".concat(e))})).finally((function(){t.textContent="Создать"}))}),D);X.addEventListener("click",(function(){var e=ie.getUserInfo();se.setInputValues(e),ne["popup-edit"].removeValidationErrors(),se.open()})),Y.addEventListener("click",(function(){ne["popup-card"].removeValidationErrors(),pe.open()})),Z.addEventListener("click",(function(){ne["popup-avatar"].removeValidationErrors(),fe.open()})),se.setEventListeners(),pe.setEventListeners(),fe.setEventListeners(),ue.setEventListeners()})();