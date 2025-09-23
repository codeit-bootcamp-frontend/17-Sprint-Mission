import { flexCenter, fullSize, textStyles } from "@/styles/commonStyle";
import { pxToRem } from "@/utils/pxToRem";
import { useState } from "react";
// import { toast } from "react-toastify";
import styled from "styled-components";

import SearchIcon from "@/assets/ic_search_gray.svg";

export default function ItemsSearch({ setSearchInput }) {
  const [inputValue, setInputValue] = useState("");

  //입력값 받아오기
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //입력값 보내기
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchInput(inputValue);
    }
  };

  const handleClick = () => {
    // 빈칸 입력시 경고 토스트
    // if (inputValue.trim() === "") {
    //   toast.warning("검색어를 입력해주세요", {
    //     toastId: "empty-search",
    //     position: "top-center",
    //     closeOnClick: false,
    //     style: {
    //       position: "fixed",
    //       top: pxToRem(100),
    //       background: "#fff",
    //       color: "var(--gray-600)",
    //       fontWeight: "bold",
    //       borderRadius: "8px",
    //       textAlign: "center",
    //       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    //     },
    //   });
    //   return;
    // }
    setSearchInput(inputValue);
  };

  return (
    <Div>
      <div className="search_wrapper">
        <label htmlFor="search">
          <SearchIcon
            className="search_icon"
            width={pxToRem(15)}
            height={pxToRem(15)}
          />
        </label>
        <input
          id="search"
          className="search_input"
          type="text"
          placeholder="검색할 상품을 입력해주세요."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button className="search_btn" onClick={handleClick}>
        검색
      </button>
    </Div>
  );
}

const Div = styled.div`
  ${flexCenter};
  > * {
    height: ${pxToRem(42)};
    padding: 0 ${pxToRem(13)};
  }

  .search_wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
  }

  .search_input {
    ${fullSize}
    padding-left: ${pxToRem(40)};
    background-color: var(--gray-100);
    border-radius: var(--border-10) 0 0 var(--border-10);
  }

  .search_input:focus {
    outline: none;
  }

  .search_icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .search_btn {
    ${textStyles["text-lg-medium"]}
    background-color: var(--primary-100);
    color: #fff;
    border-radius: 0 var(--border-10) var(--border-10) 0;
  }
`;
