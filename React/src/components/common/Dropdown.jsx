import React, { useState, useEffect, useRef } from 'react';
import ChevronDownIcon from '../../icon/ic_arrow_down.svg';
import styled from 'styled-components';

const Dropdown = ({ options, defaultOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef(null);

 
  // 바깥쪽 클릭했을 때 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

// 드롭다운 옵션 선택 핸들러
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };


  return (
    // ref를 연결하여 이 div의 외부 클릭을 감지
    <DropdownContainer ref={dropdownRef}>
      {/* 선택된 값을 보여주는 버튼 */}
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption.label}</span>
        <img className="DropdownArrow" src={ChevronDownIcon}/>
      </DropdownButton>

      {/* isOpen이 true일 때만 메뉴 목록을 렌더링 */}
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
              <DropdownItem onClick={() => handleOptionClick(option)}>
              {option.label}
              </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}


//design

const DropdownContainer = styled.div`
  position: relative;
  width: 120px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1F2937
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 8px 12px;
  background-color: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  
  &:hover {
    border-color: #adadad;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  list-style: none;
  padding: 4px 0;
  margin: 8px 0 0 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default Dropdown;