const eyeButtons = document.querySelectorAll('.eye_icon');

eyeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const wrapper = button.closest('.eye_wrapper, .eye_wrapper_re');
    const input = wrapper.querySelector('.password_input');
    const img = button.querySelector('.eye_icon_img');

    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    img.src = isHidden ? './image/password_on.png' : './image/password_off.png';
  });
});
