const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailInput.addEventListener("blur", () => {
  if (!emailInput.value) {
    emailInput.classList.add("input-error");
    emailError.style.display = "block";
  } else {
    emailInput.classList.remove("input-error");
    emailError.style.display = "none";
  }
});
