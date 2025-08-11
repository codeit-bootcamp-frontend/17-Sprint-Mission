import React, { useEffect } from 'react';
import styled from 'styled-components';
import ic_plus from '../../../icon/ic_plus.svg'; 
import { StyledLabel } from './TextInput';
import ic_X from '../../../icon/ic_X.svg'; 


function ImageInput({ images, onImagesChange }) {

  const imageToShow = images && images.length > 0 ? images[0] : null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 미리보기 URL 생성
    const newImage = {
        file: file,
        preview: URL.createObjectURL(file),
    };

    onImagesChange([newImage]);
  };

  // 이미지 삭제 핸들러
    const handleDeleteImage = () => {
    onImagesChange([]);
    };

  // 컴포넌트가 언마운트될 때 메모리 누수 방지를 위해 URL 해제
  useEffect(() => {
    const previewUrl = imageToShow?.preview;
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [imageToShow]); 

  return (
    <ImageInputContainer>
      <StyledLabel>상품 이미지</StyledLabel>
      <PreviewAndUploadContainer>

        {/* 이미지 업로드 버튼 */}
        <UploadBoxLabel htmlFor="image-upload">
          <img className="plus-icon" src={ic_plus} alt="이미지 업로드 아이콘" />
          <div>이미지 등록</div>
        </UploadBoxLabel>

        {/* 현재 이미지 미리보기 */}
          {imageToShow && (
            <PreviewImageContainer>
            <PreviewImage src={imageToShow.preview} alt="preview-image" />
            <DeleteButton onClick={handleDeleteImage}>
                <img src={ic_X} alt="이미지 삭제 아이콘" />
            </DeleteButton>
          </PreviewImageContainer>
          )
          }

        <StyledFileInput
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleFileChange}
        />
      </PreviewAndUploadContainer>
     {imageToShow && <AlertMessage>*이미지 등록은 최대 1개까지 가능합니다.</AlertMessage>}
    </ImageInputContainer>
  );
}

// design

// 미리보기 이미지들과 업로드 버튼을 묶는 컨테이너

const ImageInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const PreviewAndUploadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

// 파일 선택을 위한 숨겨진 input
const StyledFileInput = styled.input`
  display: none;
`;

// Upload Button
const UploadBoxLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  cursor: pointer;
  color: #9CA3AF;
  background-color: #F3F4F6;
  font-size: 16px;
  font-weight: 400;
  gap: 12px;

  &:hover {
    border-color: #333;
  }

 .img {
    width: 48px;
    height: 48px;
 }
`;

// 미리보기 이미지 컨테이너
const PreviewImageContainer = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover; /* 이미지가 잘리더라도 비율을 유지 */
`;

//Delete Button
const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0; 

    img {
        width: 22px;
        height: 24px;
    }
`;

const AlertMessage = styled.div`
    font-weight: 400;
    font-style: Regular;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #F74747;
    margin-top: 16px;
`;

export default ImageInput;