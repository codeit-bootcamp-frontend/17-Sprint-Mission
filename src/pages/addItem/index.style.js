import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";
import "@/styles/variables.css";
import { textStyles } from "@/styles/commonStyle";

export const AddItemStyle = styled.div`
  .input_list {
    margin-bottom: ${pxToRem(60)};
  }

  .item_add {
    display: flex;
    justify-content: space-between;
    margin: ${pxToRem(50)} 0 ${pxToRem(24)};
  }
  .item_submit {
    width: ${pxToRem(74)};
    height: ${pxToRem(42)};
    border-radius: var(--border-8);
  }

  .item_submit:disabled {
    background-color: var(--gray-400);
    cursor: unset;
  }

  label {
    ${textStyles["text-2lg-bold"]}
  }

  .image_add,
  .input_style {
    background-color: var(--gray-100);
    border-radius: ${pxToRem(12)};
    ${textStyles["text-lg-regular"]}
  }

  .image_add,
  .input_style::placeholder {
    color: var(--gray-400);
  }

  .input_style {
    display: block;
    width: 100%;
    outline: none;
    line-height: ${pxToRem(56)};
    padding: 0 ${pxToRem(24)};
    margin: 1rem 0 2rem;
    color: var(--gray-800);
  }

  .has_error {
    position: relative;
  }

  .has_error .input_style {
    outline: 2px solid var(--error-red);
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.08);
  }

  .errorText {
    position: absolute;
    display: block;
    bottom: ${pxToRem(-30)};
    color: var(--error-red);
    ${textStyles["text-lg-regular"]}
  }
`;
