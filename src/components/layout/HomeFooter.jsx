import { Link } from "react-router-dom";
import { snsImages } from "@/components/layout/snsData";
import { FooterStyle } from "@/components/layout/Footer.style";

function HomeFooter() {
  return (
    <FooterStyle>
      <div className="width_container footer_container">
        <p className="company_since">©codeit - 2024</p>
        <div className="faq">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <ol className="sns_wrapper">
          {snsImages.map((sns, index) => (
            <li key={index}>
              <a href={sns.href} target="_blank">
                <img src={sns.img} alt={sns.alt} />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </FooterStyle>
  );
}

export default HomeFooter;
