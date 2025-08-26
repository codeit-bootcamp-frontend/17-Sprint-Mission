import classNames from 'classnames/bind';

import defaultBox from '@/assets/imgs/default_box.png';
import styles from '@/components/ui/styles/ItemImg.module.scss';

export default function ItemImg({ imgUrl = '', alt = '' }) {
  const cn = classNames.bind(styles);
  const onErrorImg = (e) => {
    e.target.src = defaultBox;
  };
  if (imgUrl === '') {
    return <div className={cn('image', 'imageSkeleton')} />;
  }
  return (
    <img className={styles.image} src={imgUrl} onError={onErrorImg} alt={alt} />
  );
}
