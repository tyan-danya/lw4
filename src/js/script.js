function validator(_value) {
  return {
    value: _value,
    isValid: null,
    validate() {
      return this.isValid;
    },
    min(value) {
      this.isValid = this.value > value;
      return this;
    },
    isEmail() {
      const result = this.value.match(/\w*@\w*\.\w*/);
      if (result != null) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      return this;
    },
    isValidPassword() {
      if (!validator(this.value.length).min(6).validate()) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
      return this;
    },
  };
}

window.onload = function onload() {
  const sendButton = document.querySelector('.main-form__submit-btn');
  sendButton.onclick = function check() {
    const firstName = document.querySelector('#person-first-name-input');
    const lastName = document.querySelector('#person-last-name-input');
    const email = document.querySelector('#email-input');
    const password = document.querySelector('#password-input');

    const errorItems = document.querySelectorAll('.main-form-input-item__error');
    for (let i = 0; i < errorItems.length; i++) {
      errorItems[i].classList.remove('main-form-input-item__error--active');
    }
    if (firstName.value === '') {
      const firstNameError = document.querySelector('#person-first-name-error');
      firstNameError.classList.add('main-form-input-item__error--active');
    }

    if (lastName.value === '') {
      const lastNameError = document.querySelector('#person-last-name-error');
      lastNameError.classList.add('main-form-input-item__error--active');
    }

    if (email.value === '') {
      const emailError = document.querySelector('#email-error__empty');
      emailError.classList.add('main-form-input-item__error--active');
    } else if (!validator(email.value).isEmail().validate()) {
      const emailError = document.querySelector('#email-error__invalid');
      emailError.classList.add('main-form-input-item__error--active');
    }

    if (password.value === '') {
      const passwordError = document.querySelector('#password-error__empty');
      passwordError.classList.add('main-form-input-item__error--active');
    } else if (!validator(password.value).isValidPassword().validate()) {
      const passwordError = document.querySelector('#password-error__invalid');
      passwordError.classList.add('main-form-input-item__error--active');
    }
  };
};
