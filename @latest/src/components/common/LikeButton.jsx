import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  padding: 0 15px 15px 15px;
  text-align: left;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0;
  /* Change color based on the isLiked state */
  color: ${props => (props.isLiked ? '#ff4d4f' : '#adb5bd')};
  transition: color 0.2s, transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const LikeButton = ({ initialLikes = 0 }) => {
  // State to track if the button is liked or not
  const [isLiked, setIsLiked] = useState(false);
  // State to track the count of likes
  const [likeCount, setLikeCount] = useState(initialLikes);

  const handleToggle = () => {
    // 1. Toggle the visual state
    setIsLiked(prevIsLiked => !prevIsLiked);

    // 2. Update the like count based on the toggle
    setLikeCount(prevCount => (isLiked ? prevCount - 1 : prevCount + 1));

    // 3. (Future Step) Here you would add an API call to tell the server
    //    that this user liked or unliked the item.
  };

  return (
    <ButtonContainer>
      <Button onClick={handleToggle} isLiked={isLiked}>
        {/* Show a filled or empty heart based on the state */}
        {isLiked ? '♥' : '♡'}
        <span>{likeCount}</span>
      </Button>
    </ButtonContainer>
  );
};

export default LikeButton;