import SearchIcon from '@/assets/icons/ic_search.svg';
import styles from '@/pages/Items/styles/Search.module.scss';

export default function Search({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target['search'].value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <SearchIcon />
      <input
        className={styles.input}
        name='search'
        placeholder='검색할 상품을 입력해주세요'
      />
    </form>
  );
}
