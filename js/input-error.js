const emailInput = document.querySelector(".email_input");
const emailError = document.querySelector(".email_error");

const passwordInput = document.querySelector(".password_input");
const passwordError = document.querySelector(".password_error");

const passwordReInput = document.querySelector(".password_re_input");
const passwordReError = document.querySelector(".password_re_error");

const nicknameInput = document.querySelector(".nickname_input");
const nicknameError = document.querySelector(".nickname_error");

const loginBtn = document.querySelector(".login_btn");
const signupBtn = document.querySelector(".signup_btn");

function checkEmailForm(email) {
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function setInputBorder(input, hasError) {
  if (!input) return;
  if (hasError) {
    input.style.border = "1px solid #F74747";
  } else {
    input.style.border = "";
  }
}

function checkButtonState() {
  const checkEmailState =
    emailInput.value.trim() !== "" && checkEmailForm(emailInput.value);
  const checkPasswordState = passwordInput.value.length >= 8;

  let checkAllForm = checkEmailState && checkPasswordState;

  if (passwordReInput && nicknameInput) {
    const checkPasswordMatch = passwordInput.value === passwordReInput.value;
    const checkNicknameState = nicknameInput.value.trim() !== "";
    checkAllForm = checkAllForm && checkPasswordMatch && checkNicknameState;
  }

  if (loginBtn) {
    if (checkEmailState && checkPasswordState) {
      loginBtn.removeAttribute("disabled");
    } else {
      loginBtn.setAttribute("disabled", "");
    }
  }

  if (signupBtn) {
    if (checkAllForm) {
      signupBtn.removeAttribute("disabled");
    } else {
      signupBtn.setAttribute("disabled", "");
    }
  }
}

emailInput?.addEventListener("focusout", () => {
  if (emailInput.value.trim() === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.display = "block";
    setInputBorder(emailInput, true);
  } else if (!checkEmailForm(emailInput.value)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailError.style.display = "block";
    setInputBorder(emailInput, true);
  } else {
    emailError.style.display = "none";
    setInputBorder(emailInput, false);
  }
  checkButtonState();
});

passwordInput?.addEventListener("focusout", () => {
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.style.display = "block";
    setInputBorder(passwordInput, true);
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordError.style.display = "block";
    setInputBorder(passwordInput, true);
  } else {
    passwordError.style.display = "none";
    setInputBorder(passwordInput, false);
  }
  checkButtonState();
});

passwordReInput?.addEventListener("focusout", () => {
  if (passwordReInput.value.trim() === "") {
    passwordReError.textContent = "비밀번호를 입력해주세요.";
    passwordReError.style.display = "block";
    setInputBorder(passwordReInput, true);
  } else if (passwordReInput.value !== passwordInput.value) {
    passwordReError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordReError.style.display = "block";
    setInputBorder(passwordReInput, true);
  } else {
    passwordReError.style.display = "none";
    setInputBorder(passwordReInput, false);
  }
  checkButtonState();
});

nicknameInput?.addEventListener("focusout", () => {
  if (nicknameInput.value.trim() === "") {
    nicknameError.textContent = "닉네임을 입력해주세요.";
    nicknameError.style.display = "block";
    setInputBorder(nicknameInput, true);
  } else {
    nicknameError.style.display = "none";
    setInputBorder(nicknameInput, false);
  }
  checkButtonState();
});

emailInput?.addEventListener("input", checkButtonState);
passwordInput?.addEventListener("input", checkButtonState);
passwordReInput?.addEventListener("input", checkButtonState);
nicknameInput?.addEventListener("input", checkButtonState);

loginBtn?.addEventListener("click", (e) => {
  if (loginBtn.disabled) {
    e.preventDefault();
    return;
  }
  e.preventDefault();
  window.location.href = "/items";
});

signupBtn?.addEventListener("click", (e) => {
  if (signupBtn.disabled) {
    e.preventDefault();
    return;
  }
  e.preventDefault();
  window.location.href = "/login";
});
