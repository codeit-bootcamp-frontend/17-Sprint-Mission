import { Link } from 'react-router-dom';

import FacebookIcon from '@/assets/icons/ic_facebook.svg';
import InstagramIcon from '@/assets/icons/ic_instagram.svg';
import TwitterIcon from '@/assets/icons/ic_twitter.svg';
import YoutubeIcon from '@/assets/icons/ic_youtube.svg';
import styles from '@/components/layout/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.copyright}>©codeit - 2024</span>
        <div className={styles.info}>
          <Link to='privacy' aria-label='개인정보 관리 정책 화면으로 이동'>
            Privacy Policy
          </Link>
          <Link to='faq' aria-label='FAQ 화면으로 이동'>
            FAQ
          </Link>
        </div>
        <div className={styles.icons}>
          <Link
            to='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='페이스북 페이지로 이동'
          >
            <FacebookIcon aria-label='트위터 아이콘' />
          </Link>
          <Link
            to='https://www.x.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='트위터 페이지로 이동'
          >
            <TwitterIcon aria-label='트위터 아이콘' />
          </Link>
          <Link
            to='https://www.youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='유튜브 페이지로 이동'
          >
            <YoutubeIcon aria-label='유튜브 아이콘' />
          </Link>
          <Link
            to='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='인스타그램 페이지로 이동'
          >
            <InstagramIcon aria-label='인스타그램 아이콘' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
