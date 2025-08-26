import AllItemsSection from '@/pages/Items/components/AllItemsSection';
import BestItemsSection from '@/pages/Items/components/BestItemsSection';
import styles from '@/pages/Items/styles/index.module.scss';

export default function Items() {
  return (
    <>
      <main className={styles.container}>
        <BestItemsSection />
        <AllItemsSection />
      </main>
    </>
  );
}
