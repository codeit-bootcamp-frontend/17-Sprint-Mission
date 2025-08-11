// src/components/TextInput.js

import React from 'react';
import styled from 'styled-components';

function TextInput({ as, label, name, value, onChange, ...rest }) {

 if (as === 'textarea') {
    return (
      <div className="text-input-container">
        <StyledLabel>{label}</StyledLabel>
        <StyledTextArea
          name={name}
          value={value}
          onChange={onChange}
          {...rest} // placeholder, type 등을 받을 수 있게 함
        />
      </div>
    );
  }
    // 일반 input인 경우
  return (
    <div className="text-input-container">
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        name={name}
        value={value}
        onChange={onChange}
        {...rest} // placeholder, type 등을 받을 수 있게 함
      />
    </div>
  );
}

// design
export const StyledLabel = styled.label`
font-weight: 700;
font-style: Bold;
font-size: 18px;
line-height: 26px;
letter-spacing: 0%;
vertical-align: middle;
margin-bottom: 16px;
display: block;
`;

const StyledInput = styled.input`
  display: block;
  font-size: 16px; 
  font-weight: 400;
  padding: 16px 24px;
  color: #1F2937;
  background-color: #F3F4F6;
  border-radius: 12px;
  border: 1px solid #F3F4F6; /* Tailwind gray-300 */
  width: 100%;

  input::placeholder {
    color: #9CA3AF
  }

    &:focus {
        outline: none;
        border-color: #3692FF;
    }

`;

const StyledTextArea = styled(StyledInput).attrs({ as: 'textarea' })`
    min-height: 282px;
    resize: vertical;
`;

export default TextInput;