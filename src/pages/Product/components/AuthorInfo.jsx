import classNames from 'classnames/bind';

import defaultProfileImg from '@/assets/imgs/default_profile.png';
import styles from '@/pages/Product/styles/AuthorInfo.module.scss';

// eslint-disable-next-line react-refresh/only-export-components
export const AUTHOR_INFO_VARIANTS = {
  product: 'product',
  community: 'community',
  comment: 'comment',
};
export default function AuthorInfo({
  variant = AUTHOR_INFO_VARIANTS.product,
  nickname,
  updateAt,
}) {
  const cn = classNames.bind(styles);
  return (
    <div className={styles.authorInfo}>
      <img
        className={cn('profileImg', {
          profileImgProduct: variant === AUTHOR_INFO_VARIANTS.product,
          profileImgComment: variant === AUTHOR_INFO_VARIANTS.comment,
          profileImgCommunity: variant === AUTHOR_INFO_VARIANTS.community,
        })}
        src={defaultProfileImg}
        alt='기본 프로필 이미지'
      />
      <div
        className={cn('authorWrapper', {
          authorWrapperComment: variant === AUTHOR_INFO_VARIANTS.comment,
          authorWrapperCommunity: variant === AUTHOR_INFO_VARIANTS.community,
        })}
      >
        <span className={styles.nickname}>{nickname}</span>
        <span className={styles.updateAt}>{updateAt}</span>
      </div>
    </div>
  );
}
