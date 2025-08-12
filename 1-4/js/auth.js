const inputs = document.querySelectorAll('.input_group');
const authBtn = document.querySelector('.auth.btn');

//input상태 저장소
const inputValidState = {};

//forEach 공통 변수
function parseGroupInput(group){
  const  input = group.querySelector('.input_text');
  const  errorText = group.querySelector('.error_text');
  const  type = group.dataset.type;
  
  return { input, errorText, type };
}

//error_text 초기화
function clearError(target, text){
  target.style.border = '';
  text.textContent = '';
}

//label변수
function getLabelText(input) {
  const label = input.closest('.input_group')?.querySelector('label');
  const labelText = label.textContent.trim();

  return labelText;

}

//에러메세지
const ERROR_MESSAGES = {
  REQUIRED: (field) => `${field}을(를) 입력해주세요.`,
  EMAIL: '잘못된 이메일 형식입니다.',
  PASSWORD_LENGTH: '비밀번호를 8자 이상 입력해주세요.',
  PASSWORD_MISMATCH: '비밀번호가 일치하지 않습니다.'
};

//password 일치 비교
function validatePasswordMatch(){
  const pw = document.querySelector('#user_password');        
  const pwCheck = document.querySelector('#user_password_check');
  const pwCheckError = pwCheck?.closest('.input_wrap')?.querySelector('.error_text');

  if(pw && pwCheck){
      if(pw?.value !== pwCheck?.value){
      pwCheckError.textContent = ERROR_MESSAGES.PASSWORD_MISMATCH;
      inputValidState[pw] = false;
      inputValidState[pwCheck] = false;
    }else{
      clearError(pwCheck, pwCheckError);
      inputValidState[pw] = true;
      inputValidState[pwCheck] = true;
    }
  }
}

//에러메세지 적용
function validateInput(type, value){
  const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;

  switch(type){
    case 'email':
      return emailPattern.test(value) ? '' : ERROR_MESSAGES.EMAIL;
    case 'password':
      return value.length < 8 ? ERROR_MESSAGES.PASSWORD_LENGTH : '';
    default:
      return '';
  }
}

//오류메세지 이벤트
function attachValidationHandlers(){
  inputs.forEach(group =>{
    const {input, errorText, type} = parseGroupInput(group);

    inputValidState[type] = false;
    
    //focusout
    input.addEventListener('focusout', (e) => {
      const target = e.target;
      const values = target.value.trim();

      const labelText = getLabelText(target);

      //빈 값
      if(values === ''){
        target.style.border = '1px solid #ff0000';
        errorText.textContent = ERROR_MESSAGES.REQUIRED(labelText);
        inputValidState[type] = false;
        return;
      }

      //input 오류메세지
      const errorMessage = validateInput(type, values);

      if (errorMessage) {
        errorText.textContent = errorMessage;
        input.style.border = '1px solid #ff0000';
        inputValidState[type] = false;
      } else {
        clearError(input, errorText);
        inputValidState[type] = true;
      }

      //비밀번호 일치 비교
      if (type === 'password' || type === 'password_check') {
        validatePasswordMatch();
      }
      updateAuthButtonState();
    }); 
  });
}

//모든 input 작성 확인
//true, false값 반환
function updateInputState(){
  return Object.values(inputValidState).every(Boolean);
}

//submit버튼 활성화
function updateAuthButtonState(){

  const isvalid = updateInputState();

  authBtn.disabled = !isvalid;
  authBtn.style.backgroundColor = isvalid ? 'var(--primary-100)' : 'var(--gray-400)';
  authBtn.style.cursor = isvalid ? 'pointer' : 'not-allowed';
}

//실시간 반영
inputs.forEach(group => {
  const {input} = parseGroupInput(group);

  ['input', 'change', 'focusout'].forEach(eventName => {
  input.addEventListener(eventName, () => {
    updateAuthButtonState();
  });
});
});



//패스워드 아이콘 활성화/비활성화
const passwordIcon = document.querySelectorAll('.password_icon');

passwordIcon.forEach( icons => {
  const prevInput = icons.previousElementSibling;

  icons.addEventListener('click', (e) => {
    const target = e.target;

    if(prevInput.type === 'password'){
      target.classList.add('show');
      prevInput.type = 'text'
      target.textContent = 'visibility'
    }else{
      target.classList.remove('show');
      prevInput.type = 'password'
      target.textContent = 'visibility_off'
    }
  });
});

attachValidationHandlers();