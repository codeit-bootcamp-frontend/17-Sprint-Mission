import { Link } from "react-router-dom";
import pandaLogo from "@/assets/logo.png";
import { HeaderStyle } from "@/components/layout/Header.style";

function HomeHeader() {
  return (
    <HeaderStyle>
      <div className="width_container">
        <Link to="/" className="logo">
          <img src={pandaLogo} alt="판다로고" className="logo_img" />
          <h1>판다마켓</h1>
        </Link>
        <Link to="/login" className="login btn">
          로그인
        </Link>
      </div>
    </HeaderStyle>
  );
}

export default HomeHeader;
