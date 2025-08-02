import {
  preventPasswordSpaces,
  updateButtonState,
  validateEmailInput,
  validatePasswordInput,
  togglePasswordVisiblity,
} from "../shared/form-utils.js";

const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const loginBtn = document.querySelector(".login-btn");
const loginForm = document.getElementById("LoginForm");
const eyeIcon = document.getElementById("eyeIcon");

function validateEmail() {
  return validateEmailInput(emailInput, emailError);
}

function validatePassword() {
  return validatePasswordInput(passwordInput, passwordError);
}

function eyeIconClickHandler() {
  togglePasswordVisiblity(passwordInput, eyeIcon);
}

function updateLoginBtnState() {
  return updateButtonState({
    inputs: [emailInput, passwordInput],
    errors: [emailError, passwordError],
    button: loginBtn,
  });
}

emailInput.addEventListener("blur", () => {
  validateEmail();
  updateLoginBtnState();
});

passwordInput.addEventListener("blur", () => {
  validatePassword();
  updateLoginBtnState();
});

emailInput.addEventListener("input", () => {
  validateEmail();
  updateLoginBtnState();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
  updateLoginBtnState();
});

eyeIcon.addEventListener("click", () => {
  eyeIconClickHandler();
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!loginBtn.disabled) {
    window.location.href = "/items";
  }
});

preventPasswordSpaces(passwordInput);
updateLoginBtnState(); // 초기 상태 업데이트
