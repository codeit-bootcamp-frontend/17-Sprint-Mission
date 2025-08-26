import { useReducer } from 'react';

import Button from '@/components/ui/Button';
import FormContents from '@/pages/AddItem/components/FormContents';
import formReducer, {
  FORM_INITIAL_VALUES,
} from '@/pages/AddItem/lib/formReducer';
import styles from '@/pages/AddItem/styles/index.module.scss';

export default function AddItem() {
  const [values, dispatch] = useReducer(formReducer, FORM_INITIAL_VALUES);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const hasEveryInput =
    values.title &&
    values.description &&
    values.price > 0 &&
    values.tags.length > 0;
  return (
    <>
      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.title}>상품 등록하기</h1>
            <Button ariaLabel={'상품 등록하기'} disabled={!hasEveryInput}>
              등록
            </Button>
          </div>
          <FormContents values={values} dispatch={dispatch} />
        </form>
      </main>
    </>
  );
}
