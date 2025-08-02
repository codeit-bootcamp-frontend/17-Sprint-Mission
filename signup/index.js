import {
  validateEmailInput,
  validatePasswordInput,
  preventPasswordSpaces,
  updateButtonState,
  validateNicknameInput,
  validateConfirmPasswordInput,
  togglePasswordVisiblity,
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

const eyePassword = document.getElementById("eye-password");
const eyeConfirm = document.getElementById("eye-confirm");

function validateEmail() {
  return validateEmailInput(emailInput, emailError);
}

function validateNickname() {
  return validateNicknameInput(nicknameInput, nicknameError);
}

function validatePassword() {
  return validatePasswordInput(passwordInput, passwordError);
}

function eyePasswordHandler() {
  togglePasswordVisiblity(passwordInput, eyePassword);
}

function eyeConfirmClickHandler() {
  togglePasswordVisiblity(confirmPasswordInput, eyeConfirm);
}

function validateConfirmPassword() {
  return validateConfirmPasswordInput(
    passwordInput,
    confirmPasswordInput,
    confirmPasswordError
  );
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

nicknameInput.addEventListener("blur", () => {
  validateNickname();
  updateSignupBtnState();
});

passwordInput.addEventListener("blur", () => {
  validatePassword();
  updateSignupBtnState();
});

confirmPasswordInput.addEventListener("blur", () => {
  validateConfirmPassword();
  updateSignupBtnState();
});

emailInput.addEventListener("input", () => {
  validateEmail();
  updateSignupBtnState();
});

nicknameInput.addEventListener("input", () => {
  validateNickname();
  updateSignupBtnState();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
  updateSignupBtnState();
});

confirmPasswordInput.addEventListener("input", () => {
  validateConfirmPassword();
  updateSignupBtnState();
});

eyePassword.addEventListener("click", () => {
  eyePasswordHandler();
});

eyeConfirm.addEventListener("click", () => {
  eyeConfirmClickHandler();
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!signupBtn.disabled) {
    window.location.href = "/login";
  }
});

preventPasswordSpaces(passwordInput);
updateSignupBtnState();
