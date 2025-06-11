const inputs = document.querySelectorAll('.input_group');
const authBtn = document.querySelector('.auth.btn');

//forEach 공통 변수
function groupInput(group){
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

//input 오류TEXT
function errorInput(){
  inputs.forEach(group =>{
    const {input, errorText, type} = groupInput(group);
    
    //focusout
    input.addEventListener('focusout', (e) => {
      const target = e.target;
      const values = target.value.trim();

      const label = target.closest('.input_group').querySelector('label');
      const labelText = label.textContent.trim();

      const pw = document.querySelector('#user_password');

      //빈 값
      if(values === ''){
        target.style.border = '1px solid #ff0000';
        errorText.textContent = `${labelText}을(를) 입력해주세요.`
        return;
      }

      //이메일
      const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;

      if(type === 'email' && !(emailPattern.test(values))){
        errorText.textContent = '잘못된 이메일 형식입니다.';
        //비밀번호
      }else if(type === 'password'){
        if(values.length < 8){
          errorText.textContent = '비밀번호를 8자 이상 입력해주세요.';
        }else{
          clearError(input, errorText);
        }
        //비밀번호 일치
        const pwCheck = document.querySelector('#user_password_check');
        const pwCheckError = pwCheck?.closest('.input_warp')?.querySelector('.error_text');
        if(pwCheck && values !== pwCheck.value){
          pwCheckError.textContent = '비밀번호가 일치하지 않습니다..';
        }else{
          if(pwCheck && pwCheckError) clearError(pwCheck, pwCheckError);
        }
        
        //비밀번호 확인
      }else if(type === 'password_check' && pw.value !== values){
        errorText.textContent = '비밀번호가 일치하지 않습니다..';
      }else{
        clearError(input, errorText);
      }
      checkFormClick();
    }); 

  })
}

//submit버튼 활성화
function checkFormClick(){
  let isClick = true;

  inputs.forEach(group =>{
    const {input, errorText} = groupInput(group);

    const value = input.value.trim();
    const error = errorText.textContent.trim();

    if (error !== '' || value === '') {
      isClick = false;
    }

  });
  authBtn.disabled = !isClick;
  authBtn.style.backgroundColor = isClick ? 'var(--primary-100)' : 'var(--gray-400)';
  authBtn.style.cursor = isClick ? 'pointer' : 'unset';
}



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

errorInput();