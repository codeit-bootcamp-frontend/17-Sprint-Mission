import { useEffect, useRef, useState } from 'react';

import PlusIcon from '@/assets/icons/ic_plus.svg';
import ClearIcon from '@/assets/icons/ic_X.svg';
import ItemImg from '@/components/ui/ItemImg';
import { formReducerType } from '@/pages/AddItem/lib/formReducer';
import styles from '@/pages/AddItem/styles/FileSection.module.scss';

export default function FileSection({ imgFile, dispatch }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleFileSelectorPopUp = () => {
    if (imgFile) {
      setError(true);
      return;
    }
    if (!inputRef.current) return;
    inputRef.current.click();
  };
  const dispatchFile = (name, value) => {
    dispatch({
      type: formReducerType.EDIT_FORM_VALUE,
      name,
      value,
    });
  };
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      dispatchFile(e.target.name, file);
    }
  };
  const handleClearClick = () => {
    const inputNode = inputRef.current;
    const imgFile = inputNode.name;

    if (!inputNode) return;
    inputNode.value = '';
    dispatchFile(imgFile, null);
    setError(false);
  };

  useEffect(() => {
    if (!imgFile) return;
    const objectURL = URL.createObjectURL(imgFile);
    setPreview(objectURL);
    return () => {
      URL.revokeObjectURL(objectURL);
      setPreview(null);
    };
  }, [imgFile, setPreview]);

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.fileInputButton}
          onClick={handleFileSelectorPopUp}
        >
          <PlusIcon />
          <label className={styles.label} htmlFor='imgFile'>
            이미지 등록
          </label>
          <input
            className={styles.input}
            id='imgFile'
            name='imgFile'
            type='file'
            accept='image/*'
            onChange={handleChange}
            multiple={false}
            ref={inputRef}
          />
        </button>
        {preview && (
          <div className={styles.previewWrapper}>
            <ItemImg imgUrl={preview} />
            <button className={styles.clearButton} onClick={handleClearClick}>
              <ClearIcon />
            </button>
          </div>
        )}
      </div>
      {error && (
        <div className={styles.errorMessage}>
          *이미지 등록은 최대 1개까지 가능합니다.
        </div>
      )}
    </>
  );
}
