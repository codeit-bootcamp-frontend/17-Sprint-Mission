import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/Button';
import Loading from '@/components/ui/Loading';
import useDebouncedResizeEffect from '@/hooks/useDebouncedResizeEffect';
import { useQuery } from '@/hooks/useFetch';
import useIsMobile from '@/hooks/useIsMobile';
import DropdownButton from '@/pages/Items/components/DropdownButton';
import ItemBox from '@/pages/Items/components/ItemBox';
import Pagination from '@/pages/Items/components/Pagination';
import Search from '@/pages/Items/components/Search';
import { getProducts } from '@/pages/Items/lib/api';
import { ORDER_BY } from '@/pages/Items/lib/constants';
import { getAllItemsLimitByScreenSize } from '@/pages/Items/lib/utils';
import styles from '@/pages/Items/styles/AllItemsSection.module.scss';

export default function AllItemsSection() {
  const [totalCount, setTotalCount] = useState(1);
  const [orderBy, setOrderBy] = useState(ORDER_BY.RECENT);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getAllItemsLimitByScreenSize());
  const {
    loading,
    error,
    data: items,
  } = useQuery({
    queryFn: () =>
      getProducts({ orderBy, page, pageSize, keyword: searchInput }),
    deps: [orderBy, page, pageSize, searchInput],
  });

  const isMobile = useIsMobile();

  useEffect(() => {
    setTotalCount(items?.totalCount);
  }, [items]);

  useDebouncedResizeEffect(() => {
    setPageSize(getAllItemsLimitByScreenSize());
  });

  if (error) return <div>error</div>;
  if (!items || loading) return <Loading />;
  return (
    <section className={styles.container}>
      <div className={styles.sectionMenu}>
        <div className={styles.menuWrapper}>
          <h2 className={styles.title}>전체 상품</h2>
          {isMobile ? (
            <ButtonToAddItemPage />
          ) : (
            <Search onSubmit={setSearchInput} />
          )}
        </div>
        <div className={styles.menuWrapper}>
          {isMobile ? (
            <Search onSubmit={setSearchInput} />
          ) : (
            <ButtonToAddItemPage />
          )}
          <DropdownButton orderBy={orderBy} setOrderBy={setOrderBy} />
        </div>
      </div>
      <ul className={styles.itemList}>
        {items?.list.map((item) => (
          <Link to={`${item.id}`} key={item.id}>
            <ItemBox
              title={item.name}
              price={item.price}
              like={item.favoriteCount}
              imgUrl={item.images[0] || undefined}
              imgAlt={item.name}
            />
          </Link>
        ))}
      </ul>
      <Pagination totalCount={totalCount} page={page} setPage={setPage} />
    </section>
  );
}
const ButtonToAddItemPage = () => (
  <Button as='a' link='/additem' ariaLabel='상품 등록 페이지로 이동'>
    상품 등록하기
  </Button>
);
