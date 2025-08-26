import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import EmptyImg from '@/assets/imgs/Img_inquiry_empty.png';
import Loading from '@/components/ui/Loading';
import { useQuery } from '@/hooks/useFetch';
import AuthorInfo, {
  AUTHOR_INFO_VARIANTS,
} from '@/pages/Product/components/AuthorInfo';
import CommentForm from '@/pages/Product/components/CommentForm';
import DropdownMenu from '@/pages/Product/components/DropdownMenu';
import { getComments } from '@/pages/Product/lib/api';
import styles from '@/pages/Product/styles/CommentSection.module.scss';
import { getTimeDiffrenceString } from '@/utils/Date';

export default function CommentSection() {
  const { productId } = useParams();
  const { data, loading } = useQuery({
    queryFn: () => getComments({ productId }),
  });
  if (!data || loading) return <Loading />;
  const isEmptyComment = data.list.length === 0;
  return (
    <>
      <CommentForm />
      <section className={styles.section}>
        {isEmptyComment && (
          <div className={styles.emptyComment}>
            <img src={EmptyImg} alt='물음표를 띄우며 전화 받는 판다 이미지' />
            <span>아직 문의가 없어요</span>
          </div>
        )}
        {data.list.map((comment) => (
          <Fragment key={comment.id}>
            <div className={styles.commentContainer}>
              <div className={styles.commentWrapper}>
                <div className={styles.comment}>{comment.content}</div>
                <DropdownMenu menuNameArray={['수정하기', '삭제하기']} />
              </div>
              <AuthorInfo
                variant={AUTHOR_INFO_VARIANTS.comment}
                nickname={comment.writer?.nickname}
                updateAt={getTimeDiffrenceString(comment.updatedAt)}
              />
            </div>
          </Fragment>
        ))}
      </section>
    </>
  );
}
