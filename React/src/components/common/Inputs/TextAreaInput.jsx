import React from 'react';
import styled from 'styled-components';

// 스타일 정의
const InputContainer = styled.div`
  margin-bottom: 24px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical; /* 사용자가 세로 크기만 조절할 수 있도록 함 */

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #333;
  }
`;

function TextAreaInput({ label, name, value, onChange, ...rest }) {
  return (
    <InputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledTextArea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </InputContainer>
  );
}

export default TextAreaInput;