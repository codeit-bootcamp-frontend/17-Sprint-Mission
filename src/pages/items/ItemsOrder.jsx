import styled from "styled-components";

import { pxToRem } from "@/utils/pxToRem";
import arrowIcon from "@/assets/arrow_icon.png";
import { flexCenter, textStyles } from "@/styles/commomStyle";
import { useState } from "react";

export default function ItemsOrder({ orderBy, setOrderBy }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setOrderBy(value);
    setIsOpen(false);
  };

  return (
    <Div>
      <div className={`listBox ${isOpen ? "open" : ""}`}>
        <div className="listLabel" onClick={() => setIsOpen((prev) => !prev)}>
          <span>{orderBy === "recent" ? "최신순" : "인기순"}</span>
          <img className="arrow_icon" src={arrowIcon} alt="arrowIcon" />
        </div>
        {isOpen && (
          <div className="listOptions">
            <div className="listOption" onClick={() => handleSelect("recent")}>
              최신순
            </div>
            <div
              className="listOption"
              onClick={() => handleSelect("favorite")}
            >
              인기순
            </div>
          </div>
        )}
      </div>
    </Div>
  );
}

const Div = styled.div`
  .listBox {
    position: relative;
    cursor: pointer;
  }

  .listLabel,
  .listOptions {
    ${textStyles["text-lg-regular"]};
    ${flexCenter}
    align-items: center;
    width: ${pxToRem(130)};
    border: 1px solid var(--gray-200);
    border-radius: var(--border-10);
  }

  .listLabel {
    line-height: ${pxToRem(42)};
    gap: ${pxToRem(28)};
  }

  .arrow_icon {
    width: 1rem;
    transition: transform 0.2s ease;
  }
  .listBox.open .arrow_icon {
    transform: rotate(180deg);
  }

  .listOptions {
    position: absolute;
    top: ${pxToRem(52)};
    display: block;
    text-align: center;
    background-color: #fff;
  }

  .listOption:hover {
    background-color: var(--gray-200);
  }

  .listOption {
    line-height: ${pxToRem(42)};
  }

  .listOption:not(:first-of-type) {
    border-top: 1px solid var(--gray-200);
  }
`;
