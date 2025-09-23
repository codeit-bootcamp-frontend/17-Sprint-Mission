import { Link, NavLink, useLocation } from "react-router-dom";

import pandaLogo from "@/assets/logo.png";
import UserIcon from "@/assets/ic_user.svg";
import { HeaderStyle } from "@/components/layout/Header.style";
import { WidthContainer } from "@/styles/commonStyle";

function Header() {
  const { pathname } = useLocation();

  const itemsActive = pathname.startsWith("/items") || pathname === "/additem";
  return (
    <HeaderStyle>
      <WidthContainer>
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
                  className={({ isActive }) =>
                    isActive || itemsActive ? "active" : ""
                  }
                >
                  중고마켓
                </NavLink>
              </li>
            </ol>
          </nav>
        </div>
        <UserIcon className="user_img" />
      </WidthContainer>
    </HeaderStyle>
  );
}

export default Header;
