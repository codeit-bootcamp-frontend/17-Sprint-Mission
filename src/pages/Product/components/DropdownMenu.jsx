import { useState } from 'react';

import ThreeDotIcon from '@/assets/icons/ic_kebab.svg';
import styles from '@/pages/Product/styles/DropdownMenu.module.scss';

export default function DropdownMenu({ menuNameArray }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <button className={styles.menuButton} onClick={handleClick}>
        <ThreeDotIcon />
      </button>
      {isDropdownOpen && (
        <div className={styles.options}>
          {menuNameArray.map((menuName) => (
            <button key={menuName} className={styles.option}>
              {menuName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
