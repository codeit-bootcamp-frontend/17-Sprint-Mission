import { useParams } from 'react-router-dom';

import LikeIcon from '@/assets/icons/ic_heart.svg';
import KebabIcon from '@/assets/icons/ic_kebab.svg';
import ItemImg from '@/components/ui/ItemImg';
import Loading from '@/components/ui/Loading';
import Tag from '@/components/ui/Tag';
import { useQuery } from '@/hooks/useFetch';
import AuthorInfo, {
  AUTHOR_INFO_VARIANTS,
} from '@/pages/Product/components/AuthorInfo';
import { getProduct } from '@/pages/Product/lib/api';
import styles from '@/pages/Product/styles/InfoSection.module.scss';
import { getFormattedDate } from '@/utils/Date';

export default function InfoSection() {
  const { productId } = useParams();
  const { data, loading } = useQuery({
    queryFn: () => getProduct({ productId }),
  });
  if (!data || loading) return <Loading />;
  const formattedDate = getFormattedDate(data?.createdAt);
  return (
    <section className={styles.section}>
      <div className={styles.imgWrapper}>
        <ItemImg imgUrl={data.images[0]} />
      </div>
      <div className={styles.contentsContainer}>
        <div className={styles.texts}>
          <hgroup className={styles.titles}>
            <h1 className={styles.title}>{data.name}</h1>
            <h2 className={styles.price}>
              {data.price.toLocaleString('ko-KR') + '원'}
            </h2>
            <button>
              <KebabIcon />
            </button>
          </hgroup>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoLabel}>상품 소개</h3>
            <article className={styles.description}>{data.description}</article>
            <h3 className={styles.infoLabel}>상품 태그</h3>
            <div className={styles.tags}>
              {data.tags.map((tag) => (
                <Tag key={`${crypto.randomUUID()}-${tag}`}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.sectionFooter}>
          <AuthorInfo
            variant={AUTHOR_INFO_VARIANTS.product}
            nickname={data.ownerNickname}
            updateAt={formattedDate}
          />
          <div className={styles.likeButtonWrapper}>
            <button className={styles.likeButton}>
              <LikeIcon />
              <span className={styles.count}>{data.favoriteCount}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
