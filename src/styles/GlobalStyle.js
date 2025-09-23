import { media } from "@/styles/commonStyle";
import { pxToRem } from "@/utils/pxToRem";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard", sans-serif;
  }

  a,
  .btn {
    color: var(--gray-100);
  }
  .text_tall {
    line-height: 3.5rem;
  }
  .btn.text_tall {
    border-radius: 2.5rem;
  }
  .btn {
    background-color: var(--primary-100);
  }
  a.btn:hover {
    background-color: var(--primary-200);
  }
  img {
    width: 100%;
  }

`;
