import { flexCenter, fullSize, media, textStyles } from "@/styles/commomStyle";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 0.3rem 1.875rem rgba(0, 0, 0, 0.1);
  z-index: 9999;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 0;
  }

  .logo_img {
    max-width: 2.5rem;
    max-height: 2.5rem;
    width: 100%;
  }

  a.logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    color: var(--primary-100);
    font-family: "ROKAF Sans", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    white-space: nowrap;
  }

  a.login {
    display: block;
    max-width: 8rem;
    font-size: 1rem;
    text-align: center;
    flex-basis: 8rem;
    padding: 0.7rem 2.1rem;
    border-radius: var(--border-8);
  }

  /* Header */
  .header_left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav_group {
    ${flexCenter};
    ${textStyles["text-2lg-bold"]}
    margin-left: 2rem;
  }
  .nav_group a {
    color: var(--gray-600);
    padding: ${pxToRem(15)};
    white-space: nowrap;
  }
  .nav_group a.active {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }

  .user_img {
    max-width: 2.5rem;
    max-height: 2.5rem;
    ${fullSize}
  }

  ${media.pc} {
    padding: 0 12.5rem;
  }

  ${media.tablet} {
    padding: 0 1.5rem;
  }

  ${media.mobile} {
    padding: 0 1rem;

    .nav_group {
      ${textStyles["text-lg-bold"]}
    }
  }
`;
