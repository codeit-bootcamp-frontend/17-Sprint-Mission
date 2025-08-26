import LoadingDots from '@/assets/icons/ic_loading_dots.svg';
import styles from '@/components/ui/styles/Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <LoadingDots />
    </div>
  );
}
