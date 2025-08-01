import {
  validateEmailInput,
  validatePasswordInput,
  preventPasswordSpaces,
  updateButtonState,
  validateNicknameInput,
} from "../shared/form-utils.js";

const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const nicknameInput = document.getElementById("nickname");
const nicknameError = document.getElementById("nickname-error");

const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("confirmPassword-error");

const signupBtn = document.querySelector(".signup-btn");
const signupForm = document.getElementById("signupForm");

function validateEmail() {
  return validateEmailInput(emailInput, emailError);
}

function validatePassword() {
  return validatePasswordInput(passwordInput, passwordError);
}

function validateNickname() {
  return validateNicknameInput(nicknameInput, nicknameError);
}

function updateSignupBtnState() {
  return updateButtonState({
    inputs: [emailInput, passwordInput, nicknameInput, confirmPasswordInput],
    errors: [emailError, passwordError, nicknameError, confirmPasswordError],
    button: signupBtn,
  });
}

emailInput.addEventListener("blur", () => {
  validateEmail();
  updateSignupBtnState();
});

passwordInput.addEventListener("blur", () => {
  validatePassword();
  updateSignupBtnState();
});

nicknameInput.addEventListener("blur", () => {
  validateNickname();
  updateSignupBtnState();
});

emailInput.addEventListener("input", () => {
  validateEmail();
  updateSignupBtnState();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
  updateSignupBtnState();
});

nicknameInput.addEventListener("input", () => {
  validateNickname();
  updateSignupBtnState();
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!signupBtn.disabled) {
    window.location.href = "/login";
  }
});

preventPasswordSpaces(passwordInput);
updateSignupBtnState();
