import { Link } from "react-router-dom";
import { FooterStyle } from "@/components/layout/Footer.style";
import { WidthContainer } from "@/styles/commonStyle";
import SnsList from "@/components/layout/SnsList";

function HomeFooter() {
  return (
    <FooterStyle>
      <WidthContainer>
        <div className="footer_container">
          <p className="company_since">©codeit - 2024</p>
          <div className="faq">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <SnsList />
        </div>
      </WidthContainer>
    </FooterStyle>
  );
}

export default HomeFooter;
