const eyeButtons = document.querySelectorAll('.eye_icon');

eyeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const inputSelector = button.dataset.target;
    const input = document.querySelector(inputSelector);
    const img = button.querySelector('.eye_icon_img');

    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    img.src = isHidden ? './image/password_on.png' : './image/password_off.png';
  });
});

