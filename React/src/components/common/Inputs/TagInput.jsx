import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from './TextInput.jsx';
import { StyledLabel } from './TextInput.jsx';
import ic_X from '../../../icon/ic_X.svg'; // Assuming you have an X icon for removing tags


function TagInput({ tags, onTagsChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {

    if (e.nativeEvent.isComposing) {
    return;
  }
    if (e.key === 'Enter' && inputValue.trim() && !tags.includes(inputValue.trim())) {
      e.preventDefault();
      onTagsChange([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove) => {
    onTagsChange(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <InputContainer>
      <StyledLabel>태그</StyledLabel>
        <TextInput
          as="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="태그를 입력해주세요"
        />
        {/* 현재 태그 목록을 보여주는 부분 */} 
        <TagArea>
        {tags.map((tag, index) => (
          <Tag key={index}>
            {tag}
            <RemoveTagButton onClick={() => removeTag(tag)}>
                <img src={ic_X} alt="Remove tag" />
            </RemoveTagButton>
          </Tag>
        ))}

      </TagArea>
    </InputContainer>
  );
}

//design
const InputContainer = styled.div`
  margin-bottom: 24px;
`;

const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 14px;
  border-radius: 8px;
  gap: 12px;

  &:focus-within {
    border-color: #333;
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F4F6;
  border-radius: 26px;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  color: #1F2937;
`;

const RemoveTagButton = styled.span`
  margin-left: 8px;
  cursor: pointer;
    display: flex;

    .img {
      width: 22px;
      height: 24px;}
`;

const TagInputField = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
`;

export default TagInput;