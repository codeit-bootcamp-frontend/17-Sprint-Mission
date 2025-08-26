import { Link } from 'react-router-dom';

import GoogleIcon from '@/assets/icons/ic_google.svg';
import KakaoTalkIcon from '@/assets/icons/ic_kakao.svg';
import PandaLogo from '@/assets/icons/panda_icon_small.svg';

export default function Login() {
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
            <span className='sign__input-error' id='email-error'>
              이메일을 입력해주세요.
            </span>
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
                autoComplete='current-password'
                required
              />
              <button
                className='sign__visibility-icon'
                id='password-visibility-btn'
                aria-label='비밀번호 표시'
                aria-pressed='false'
                type='button'
              ></button>
            </div>
            <span className='sign__input-error' id='password-error'>
              비밀번호를 입력해주세요.
            </span>
          </div>
          <Link to='/items'>
            <button
              className='sign__btn'
              id='form-btn'
              type='button'
              aria-label='로그인 및 제품 목록으로 이동'
              disabled
            >
              로그인
            </button>
          </Link>
          <section className='sign__sns-login-wrapper'>
            <span className='sign__sns-login-text'>간편 로그인하기</span>
            <div>
              <Link
                to='https://www.google.com/'
                className='sign__sns-login-btn'
                aria-label='구글 계정으로 로그인'
              >
                <GoogleIcon aria-label='구글 아이콘' />
              </Link>
              <Link
                to='https://www.kakaocorp.com/page/'
                className='sign__sns-sign-btn'
                aria-label='카카오톡 계정으로 로그인'
              >
                <KakaoTalkIcon aria-label='카카오톡 아이콘' />
              </Link>
            </div>
          </section>
          <div className='sign__signup-guide'>
            판다마켓이 처음이신가요?
            <Link
              className='sign__signup-link'
              to='/signup'
              aria-label='회원가입 화면으로 이동'
            >
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
