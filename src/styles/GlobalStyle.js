import { pxToRem } from "@/utils/pxToRem";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard", sans-serif;
  }

  :root {
    /* 색상 */
    --primary-100: #3692ff;
    --primary-200: #1967d6;
    --primary-300: #1251aa;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
    --error-red: #f74747;

    /* border-radius */
    --border-8: ${pxToRem(8)};
    --border-10: ${pxToRem(10)};
    --border-16: ${pxToRem(16)};

  }

  /* pc기준 */
  .width_container {
    max-width: 70rem;
    margin: 0 auto;
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
