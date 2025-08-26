import DeleteIcon from '@/assets/icons/ic_X.svg';
import styles from '@/components/ui/styles/Tag.module.scss';

export default function Tag({
  canDelete = false,
  onDeleteClick = () => {},
  children,
}) {
  return (
    <div className={styles.wrapper}>
      <span>#{children}</span>
      {canDelete && (
        <button className={styles.button} onClick={onDeleteClick}>
          <DeleteIcon />
        </button>
      )}
    </div>
  );
}
