import BackIcon from '@/assets/icons/ic_back.svg';
import Button from '@/components/ui/Button';
import CommentSection from '@/pages/Product/components/CommentSection';
import InfoSection from '@/pages/Product/components/InfoSection';
import styles from '@/pages/Product/styles/index.module.scss';

export default function Product() {
  return (
    <main className={styles.container}>
      <InfoSection />
      <CommentSection />
      <div className={styles.buttonWrapper}>
        <Button as='a' link={'/items'} ariaLabel='상품 목록으로 돌아가기'>
          목록으로 돌아가기
          <BackIcon />
        </Button>
      </div>
    </main>
  );
}
