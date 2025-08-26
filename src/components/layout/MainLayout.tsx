import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';
import styles from '@/components/layout/styles/MainLayout.module.scss';

export function MainLayout() {
  return (
    <>
      <Header />
      <div className={styles.layoutContainer}>
        <Outlet />
      </div>
    </>
  );
}
