import { useState } from 'react';

import ArrowDownIcon from '@/assets/icons/ic_arrow_down.svg';
import SortIcon from '@/assets/icons/ic_sort.svg';
import useIsMobile from '@/hooks/useIsMobile';
import { ORDER_BY } from '@/pages/Items/lib/constants';
import styles from '@/pages/Items/styles/DropdownButton.module.scss';

const _ORDER_BY_ENG_TO_KOR = {
  favorite: '인기순',
  recent: '최신순',
};

export default function DropdownButton({ orderBy, setOrderBy }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useIsMobile();
  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleOptionClick = (e) => {
    setOrderBy(e.target.name);
  };

  return (
    <div className={styles.container}>
      <button className={styles.currentOption} onClick={handleClick}>
        {isMobile ? (
          <SortIcon />
        ) : (
          <>
            <span>{_ORDER_BY_ENG_TO_KOR[orderBy]}</span>
            <ArrowDownIcon />
          </>
        )}
      </button>
      {isDropdownOpen && (
        <div className={styles.options}>
          <button
            className={styles.option}
            onClick={handleOptionClick}
            name={ORDER_BY.RECENT}
          >
            최신순
          </button>
          <button
            className={styles.option}
            onClick={handleOptionClick}
            name={ORDER_BY.FAVORITE}
          >
            인기순
          </button>
        </div>
      )}
    </div>
  );
}
