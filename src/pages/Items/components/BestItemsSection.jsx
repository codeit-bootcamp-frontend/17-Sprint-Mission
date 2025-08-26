import { useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '@/components/ui/Loading';
import useDebouncedResizeEffect from '@/hooks/useDebouncedResizeEffect';
import { useQuery } from '@/hooks/useFetch';
import ItemBox from '@/pages/Items/components/ItemBox';
import { getProducts } from '@/pages/Items/lib/api';
import { ORDER_BY } from '@/pages/Items/lib/constants';
import { getBestItemsLimitByScreenSize } from '@/pages/Items/lib/utils';
import styles from '@/pages/Items/styles/BestItemsSection.module.scss';

const _BEST_ITEMS_DEFAULT_VALUES = {
  page: 1,
  pageSize: 5,
  orderBy: ORDER_BY.FAVORITE,
  keyword: '',
};
export default function BestItemsSection() {
  const [pageSize, setPageSize] = useState(getBestItemsLimitByScreenSize());
  const {
    loading,
    error,
    data: items,
  } = useQuery({
    queryFn: () => getProducts({ ..._BEST_ITEMS_DEFAULT_VALUES, pageSize }),
    deps: [pageSize],
  });
  useDebouncedResizeEffect(() => {
    setPageSize(getBestItemsLimitByScreenSize());
  });

  if (error) return <div>error</div>;
  if (!items || loading) return <Loading />;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>베스트 상품</h2>
      <ul className={styles.items}>
        {items?.list.map((item) => (
          <Link to={`${item.id}`} key={item.id}>
            <ItemBox
              title={item.name}
              price={item.price}
              like={item.favoriteCount}
              imgUrl={item.images[0]}
              imgAlt={item.name}
            />
          </Link>
        ))}
      </ul>
    </section>
  );
}
