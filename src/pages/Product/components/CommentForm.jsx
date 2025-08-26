import { useState } from 'react';

import Button from '@/components/ui/Button';
import styles from '@/pages/Product/styles/CommentForm.module.scss';

export default function CommentForm() {
  const [input, setInput] = useState('');
  const onChangeTextArea = (e) => setInput(e.target.value);
  const hasInput = input.length > 0;
  return (
    <form className={styles.form}>
      <h3 className={styles.title}>문의하기</h3>
      <textarea
        className={styles.commentInput}
        placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
        value={input}
        onChange={onChangeTextArea}
      />
      <div className={styles.buttonWrapper}>
        <Button disabled={!hasInput}>등록</Button>
      </div>
    </form>
  );
}
