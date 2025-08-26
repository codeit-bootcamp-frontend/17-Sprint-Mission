import { Link } from 'react-router-dom';

import styles from '@/components/ui/styles/Button.module.scss';

export default function Button({
  onClick = () => {},
  as = 'button',
  link = '',
  disabled = false,
  ariaLabel = '',
  children,
}) {
  switch (as) {
    case 'button':
      return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
          {children}
        </button>
      );
    case 'a':
      return (
        <Link className={styles.button} to={link} aria-label={ariaLabel}>
          {children}
        </Link>
      );
  }
}
