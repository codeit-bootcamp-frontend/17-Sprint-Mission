import { media } from "@/styles/commomStyle";
import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: var(--gray-900);
  .footer_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 0 3.5rem;
    font-size: 1rem;
  }

  .faq,
  .sns_wrapper {
    display: flex;
    gap: 0.625rem;
  }

  .company_since {
    color: var(--gray-400);
  }

  ${media.tablet} {
    .footer_container {
      margin: 0 6.5rem;
    }
    .company_since {
      color: var(--gray-200);
    }
  }

  ${media.mobile} {
    .footer_container {
      flex-wrap: wrap;
      margin: 0 auto;
      padding: 2rem;
    }
    .company_since {
      order: 3;
      width: 100%;
      padding-top: 3.75rem;
    }
  }
`;
