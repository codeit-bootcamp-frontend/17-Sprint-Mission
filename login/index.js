const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const loginBtn = document.querySelector(".login-btn");
const loginForm = document.getElementById("LoginForm");

function validateEmail() {
  const value = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let message = "";

  if (!value) {
    message = "이메일을 입력해주세요.";
  } else if (!emailRegex.test(value)) {
    message = "잘못된 이메일 형식입니다 .";
  }

  if (message) {
    emailInput.classList.add("input-error");
    emailError.textContent = message;
    emailError.style.display = "block";
  } else {
    emailInput.classList.remove("input-error");
    emailError.style.display = "none";
  }
}

function validatePassword() {
  const value = passwordInput.value;
  let message = "";

  if (!value) {
    message = "비밀번호를 입력해주세요.";
  } else if (value.length < 8) {
    message = "비밀번호를 8자 이상 입력해주세요.";
  }

  if (message) {
    passwordInput.classList.add("input-error");
    passwordError.textContent = message;
    passwordError.style.display = "block";
  } else {
    passwordInput.classList.remove("input-error");
    passwordError.style.display = "none";
  }
}

function updateLoginBtnState() {
  const emailHasError = emailError.style.display === "block";
  const passwordHasError = passwordError.style.display === "block";

  const emailEmpty = !emailInput.value;
  const passwordEmpty = !passwordInput.value;

  if (emailHasError || passwordHasError || emailEmpty || passwordEmpty) {
    loginBtn.disabled = true;
  } else {
    loginBtn.disabled = false;
  }
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

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!loginBtn.disabled) {
    window.location.href = "/items";
  }
});

updateLoginBtnState(); // 초기 상태 업데이트
