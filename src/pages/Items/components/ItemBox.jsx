import LikeIcon from '@/assets/icons/ic_heart.svg';
import ItemImg from '@/components/ui/ItemImg';
import styles from '@/pages/Items/styles/ItemBox.module.scss';

export default function ItemBox({ title, price, like, imgUrl, imgAlt }) {
  const localePriceString = Number(price).toLocaleString('ko-KR');
  return (
    <li className={styles.container}>
      <ItemImg imgUrl={imgUrl} alt={imgAlt} />
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{localePriceString}원</span>
      <div className={styles.likeWrapper}>
        <LikeIcon aria-label='좋아요 버튼' />
        <span className={styles.like}>{like}</span>
      </div>
    </li>
  );
}
