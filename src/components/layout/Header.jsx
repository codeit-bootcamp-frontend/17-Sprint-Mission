import { Link, NavLink } from "react-router-dom";

import pandaLogo from "@/assets/logo.png";
import userIcon from "@/assets/user_icon.png";
import { HeaderStyle } from "@/components/layout/Header.style";

function Header() {
  return (
    <HeaderStyle>
      <div className="width_container">
        <div className="header_left">
          <Link to="/" className="logo">
            <img src={pandaLogo} alt="판다로고" className="logo_img" />
            <h1>판다마켓</h1>
          </Link>
          <nav className="header_nav">
            <ol className="nav_group">
              <li>
                <NavLink
                  to="/boards"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  자유게시판
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/items"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  중고마켓
                </NavLink>
              </li>
            </ol>
          </nav>
        </div>
        <img src={userIcon} alt="사용자 이미지" className="user_img" />
      </div>
    </HeaderStyle>
  );
}

export default Header;
