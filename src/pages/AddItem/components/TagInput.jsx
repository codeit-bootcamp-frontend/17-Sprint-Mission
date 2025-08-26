import Tag from '@/components/ui/Tag';
import { formReducerType } from '@/pages/AddItem/lib/formReducer';
import styles from '@/pages/AddItem/styles/TagInput.module.scss';

export default function TagInput({ values, dispatch }) {
  const addTag = (tagToAdd) => {
    const hasSameTag = values.tags.includes(tagToAdd);
    if (hasSameTag) return;
    dispatch({
      type: formReducerType.ADD_TAG,
      tagToAdd,
    });
  };
  const removeTag = (tagToRemove) => {
    dispatch({
      type: formReducerType.REMOVE_TAG,
      tagToRemove,
    });
  };
  const handleTagEnter = (e) => {
    const inputText = e.target.value;
    if (e.nativeEvent.isComposing) return; // 한글 조합 중이면 무시
    if (e.key === 'Enter' && inputText) {
      addTag(inputText);
      e.target.value = '';
      e.preventDefault(); // 입력 후 focus 이동 방지
    }
  };

  return (
    <section className={styles.section}>
      <label className={styles.label} htmlFor='태그'>
        태그
      </label>
      <input
        className={styles.input}
        id='태그'
        placeholder={'태그를 입력해주세요'}
        type='text'
        onKeyDown={handleTagEnter}
      />
      <div className={styles.tags}>
        {values.tags.map((tag) => (
          <Tag
            key={`${crypto.randomUUID()}-${tag}`}
            canDelete={true}
            onDeleteClick={() => removeTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </section>
  );
}
