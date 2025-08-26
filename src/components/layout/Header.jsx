import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import PandaLogo from '@/assets/icons/panda_icon_small.svg';
import defaultProfileImg from '@/assets/imgs/default_profile.png';
import styles from '@/components/layout/styles/Header.module.scss';

export default function Header() {
  const { pathname } = useLocation();
  const cn = classNames.bind(styles);
  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <PandaLogo aria-label='판다마켓 로고' />
          <h1 className={styles.title}>
            <Link to={'/'} aria-label='홈으로 이동'>
              판다마켓
            </Link>
          </h1>
        </div>
        <ul className={styles.navList}>
          <li>
            <NavLink
              className={({ isActive }) => {
                return cn({ activeLink: isActive });
              }}
              to='/community'
              aria-label='자유게시판으로 이동'
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/items'
              className={({ isActive }) => {
                const isItemsPage = isActive || pathname === '/additem';
                return cn({ activeLink: isItemsPage });
              }}
              aria-label='중고마켓 페이지로 이동'
            >
              중고마켓
            </NavLink>
          </li>
        </ul>
        {/* <LoginButton>로그인</LoginButton> */}
        <div className={styles.profileImgWrapper}>
          <Link to='/login' aria-label='로그인 화면으로 이동'>
            <img src={defaultProfileImg} alt='회색 기본 프로필 이미지' />
          </Link>
        </div>
      </nav>
    </header>
  );
}
