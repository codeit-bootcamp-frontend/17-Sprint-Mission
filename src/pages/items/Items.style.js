import { flexCenter, fullSize, media, textStyles } from "@/styles/commomStyle";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ItemsStyle = styled.div`
  max-width: ${pxToRem(1200)};
  margin: 0 auto;
  padding: ${pxToRem(24)} 0 ${pxToRem(58)};

  h3 {
    ${textStyles["text-xl-bold"]}
  }

  /* 상품 nav */
  .item_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${pxToRem(24)};
    line-height: ${pxToRem(42)};
  }

  .item_order {
    ${flexCenter};
    gap: ${pxToRem(12)};
  }

  .item_all_list {
    margin: ${pxToRem(40)} 0 ${pxToRem(43)};
  }

  .add_btn {
    color: #fff;
    ${textStyles["text-lg-semibold"]}
    height: ${pxToRem(42)};
    border-radius: var(--border-10);
    background-color: var(--primary-100);
    padding: 0 ${pxToRem(23)};
  }

  /* 상품 이미지 */
  .best_items {
    ${flexCenter};
    gap: ${pxToRem(24)};
  }

  .all_items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${pxToRem(40)} ${pxToRem(24)};

    ${media.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${media.mobile} {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .best_item .product_img {
    width: ${pxToRem(282)};
    height: ${pxToRem(282)};

    ${media.tablet} {
      width: ${pxToRem(343)};
      height: ${pxToRem(343)};
    }
  }

  .all_items .product_img {
    width: ${pxToRem(221)};
    height: ${pxToRem(221)};
    ${media.mobile} {
      width: ${pxToRem(168)};
      height: ${pxToRem(168)};
    }
  }

  ${media.tablet} {
    max-width: ${pxToRem(696)};
  }

  ${media.mobile} {
    max-width: ${pxToRem(344)};
  }
`;
