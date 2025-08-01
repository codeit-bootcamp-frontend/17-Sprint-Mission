export function validateEmailInput(inputEl, errorEl) {
  const value = inputEl.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let message = "";

  if (!value) {
    message = "이메일을 입력해주세요.";
  } else if (!emailRegex.test(value)) {
    message = "잘못된 이메일 형식입니다 .";
  }

  showValidation(inputEl, errorEl, message);
  return !message;
}

export function validatePasswordInput(inputEl, errorEl) {
  const value = inputEl.value;
  let message = "";

  if (!value) {
    message = "비밀번호를 입력해주세요.";
  } else if (value.length < 8) {
    message = "비밀번호를 8자 이상 입력해주세요.";
  }

  showValidation(inputEl, errorEl, message);
  return !message;
}

export function showValidation(inputEl, errorEl, message) {
  if (message) {
    inputEl.classList.add("input-error");
    errorEl.textContent = message;
    errorEl.style.display = "block";
  } else {
    inputEl.classList.remove("input-error");
    errorEl.style.display = "none";
  }
}

export function updateButtonState({ inputs, errors, button }) {
  const isEmpty = inputs.some((input) => !input.value);
  const hasError = errors.some((error) => error.style.display === "block");
  button.disabled = isEmpty || hasError;
}
