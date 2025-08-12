import { textStyles } from "@/styles/commomStyle";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ItemListStyle = styled.div`
  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .product_img {
    border-radius: var(--border-10);
  }

  .item_info > * {
    display: block;
    color: var(--gray-800);
  }

  .item_name a {
    ${textStyles["text-md-medium"]};
    color: var(--gray-800);
    margin-top: ${pxToRem(14)};
  }

  .item_price {
    ${textStyles["text-lg-bold"]};
    margin: ${pxToRem(4)} 0;
  }

  .item_favorit {
    display: inline-flex;
    align-items: center;
    ${textStyles["text-xs-medium"]};
    line-height: ${pxToRem(18)};
    gap: ${pxToRem(4)};
    color: var(--gray-600);
    cursor: pointer;
  }

  .favorite_icon {
    width: 1rem;
    height: 1rem;
  }
`;
