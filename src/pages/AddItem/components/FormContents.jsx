import FileSection from '@/pages/AddItem/components/FileSection';
import TagInput from '@/pages/AddItem/components/TagInput';
import { formReducerType } from '@/pages/AddItem/lib/formReducer';
import { getNumberOnly } from '@/pages/AddItem/lib/util';
import styles from '@/pages/AddItem/styles/FormContents.module.scss';

export default function FormContents({ values, dispatch }) {
  const handleTextChange = (e) => {
    let { name, value } = e.target;
    dispatch({
      type: formReducerType.EDIT_FORM_VALUE,
      name,
      value,
    });
  };
  const handlePriceChange = (e) => {
    let { name, value } = e.target;
    const cleanedValue = Number(getNumberOnly(value));
    dispatch({
      type: formReducerType.EDIT_FORM_VALUE,
      name,
      value: cleanedValue,
    });
  };
  const priceValue =
    values.price === 0 ? '' : values.price.toLocaleString('ko-KR');
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.label}>상품 이미지</h2>
        <FileSection imgFile={values.imgFile} dispatch={dispatch} />
      </section>
      <section className={styles.section}>
        <label className={styles.label} htmlFor='상품명'>
          상품명
        </label>
        <input
          className={styles.input}
          id='상품명'
          name='title'
          placeholder={'상품명을 입력해주세요'}
          value={values.title}
          type='text'
          onChange={handleTextChange}
          required
        />
      </section>
      <section className={styles.section}>
        <label className={styles.label} htmlFor='상품 소개'>
          상품 소개
        </label>
        <textarea
          className={styles.textArea}
          id='상품소개'
          name='description'
          placeholder={'상품 소개를 입력해주세요'}
          value={values.description}
          onChange={handleTextChange}
          required
        />
      </section>
      <section className={styles.section}>
        <label className={styles.label} htmlFor='판매가격'>
          판매가격
        </label>
        <input
          className={styles.input}
          id='판매가격'
          name='price'
          placeholder={'판매가격을 입력해주세요'}
          type='text'
          inputMode='numeric'
          value={priceValue}
          onChange={handlePriceChange}
          required
        />
      </section>
      <TagInput values={values} dispatch={dispatch} />
    </>
  );
}
