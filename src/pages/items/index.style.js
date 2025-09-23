import { flexCenter, media, textStyles } from "@/styles/commonStyle";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const ItemsStyle = styled.div`
  max-width: ${pxToRem(1200)};
  margin: 0 auto;
  padding: ${pxToRem(24)} 0 ${pxToRem(58)};

  .itmes_title {
    ${textStyles["text-xl-bold"]}
    line-height: ${pxToRem(42)};
    margin-bottom: 0.5rem;
  }

  /* 상품 nav */
  .item_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${pxToRem(24)};
    line-height: ${pxToRem(42)};

    ${media.mobile} {
      position: relative;
      flex-wrap: wrap;
    }
  }

  .item_order {
    ${flexCenter};
    gap: ${pxToRem(12)};

    ${media.mobile} {
      width: 100%;
      justify-content: space-between;
    }
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

    ${media.mobile} {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  /* 상품 이미지 */
  .best_items {
    ${flexCenter};
    gap: ${pxToRem(24)};
  }

  .product_img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
  }

  .best_items > li {
    flex: 1;
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

  ${media.tablet} {
    max-width: ${pxToRem(696)};
  }

  ${media.mobile} {
    max-width: ${pxToRem(344)};
  }
`;
