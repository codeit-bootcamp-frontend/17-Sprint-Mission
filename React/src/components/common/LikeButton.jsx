import React, { useState } from 'react';
import styled from 'styled-components';

// API-related imports are no longer needed
// import useApi from '../../hooks/useApi.jsx';
// import { endpoints } from '../../api/endpoints.js';

import likeFilledIcon from '../../icon/ic_like_filled.svg';
import likeEmptyIcon from '../../icon/ic_like_empty.svg';


const ButtonContainer = styled.div`
  text-align: left;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #4B5563;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

// 'productId' is no longer needed since we are not making an API call
const LikeButton = ({ initialLikes = 0 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  // The handler now only updates the local state
  const handleToggle = () => {
    setIsLiked(prev => !prev);
    setLikeCount(prev => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <ButtonContainer>
      <Button onClick={handleToggle}>
        <Icon src={isLiked ? likeFilledIcon : likeEmptyIcon} alt="Like" />
        <span>{likeCount}</span>
      </Button>
    </ButtonContainer>
  );
};

export default LikeButton;