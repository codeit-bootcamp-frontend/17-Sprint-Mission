import { Link } from 'react-router-dom';

import GoogleIcon from '@/assets/icons/ic_google.svg';
import KakaoTalkIcon from '@/assets/icons/ic_kakao.svg';
import PandaLogo from '@/assets/icons/panda_icon_small.svg';

export default function Signup() {
  return (
    <div>
      <div className='sign'>
        <div className='sign__header'>
          <PandaLogo aria-label='판다마켓 로고' />
          <h1 className='sign__title'>
            <Link to='/' aria-label='홈으로 이동'>
              판다마켓
            </Link>
          </h1>
        </div>
        <form className='sign__form'>
          <div className='sign__input-container'>
            <label htmlFor='email' className='sign__label'>
              이메일
            </label>
            <div className='sign__input-wrapper'>
              <input
                type='email'
                id='email'
                className='sign__input'
                placeholder='이메일을 입력하세요'
                autoComplete='email'
                required
              />
            </div>
            <span className='sign__input-error' id='email-error'></span>
          </div>
          <div className='sign__input-container'>
            <label htmlFor='nickname' className='sign__label'>
              닉네임
            </label>
            <div className='sign__input-wrapper'>
              <input
                type='text'
                id='nickname'
                className='sign__input'
                placeholder='닉네임을 입력하세요'
                autoComplete='nickname'
                required
              />
            </div>
            <span className='sign__input-error' id='nickname-error'></span>
          </div>
          <div className='sign__input-container'>
            <label htmlFor='password' className='sign__label'>
              비밀번호
            </label>
            <div className='sign__input-wrapper'>
              <input
                type='password'
                id='password'
                className='sign__input'
                placeholder='비밀번호를 입력하세요'
                autoComplete='new-password'
                required
              />
              <button
                className='sign__visibility-icon'
                aria-label='비밀번호 표시'
                aria-pressed='false'
                type='button'
              ></button>
            </div>
            <span className='sign__input-error' id='password-error'></span>
          </div>
          <div className='sign__input-container'>
            <label htmlFor='check-password' className='sign__label'>
              비밀번호 확인
            </label>
            <div className='sign__input-wrapper'>
              <input
                type='password'
                id='confirm-password'
                className='sign__input'
                placeholder='비밀번호를 다시 입력하세요'
                required
              />
              <button
                className='sign__visibility-icon'
                aria-label='비밀번호 표시'
                aria-pressed='false'
                type='button'
              ></button>
            </div>
            <span
              className='sign__input-error'
              id='confirm-password-error'
            ></span>
          </div>
          <Link to='/login'>
            <button
              type='button'
              className='sign__btn'
              id='form-btn'
              aria-label='회원가입 및 로그인 화면으로 이동'
              disabled
            >
              회원가입
            </button>
          </Link>
          <section className='sign__sns-login-wrapper'>
            <span className='sign__sns-login-text'>간편 로그인하기</span>
            <div>
              <Link
                to='https://www.google.com/'
                className='sign__sns-login-btn'
              >
                <img
                  className='sign__sns-icon'
                  src={GoogleIcon}
                  alt='구글 아이콘'
                  aria-label='구글 계정으로 로그인'
                />
              </Link>
              <Link
                to='https://www.kakaocorp.com/page/'
                className='sign__sns-sign-btn'
                aria-label='카카오톡 계정으로 로그인'
              >
                <img
                  className='sign__sns-icon'
                  src={KakaoTalkIcon}
                  alt='카카오톡 아이콘'
                />
              </Link>
            </div>
          </section>
          <div className='sign__signup-guide'>
            이미 회원이신가요?
            <Link
              className='sign__signup-link'
              to='/login'
              aria-label='로그인 화면으로 이동'
            >
              로그인
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
