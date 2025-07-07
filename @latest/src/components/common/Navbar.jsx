import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: white;
  border-bottom: 1px solid #dee2e6;
`;

const NavLogo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #3692FF;
  text-decoration: none;

  &::before {
    content: '🐼'; /* Panda emoji as a placeholder */
    margin-right: 8px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;

  &.active {
    color: #3692FF;
  }
`;

const UserActions = styled.div`
  /* Placeholder for user icon */
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e9ecef;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLogo to="/">판다마켓</NavLogo>
      <NavLinks>
        <NavLink to="/board">자유게시판</NavLink>
        <NavLink to="/items">중고마켓</NavLink>
      </NavLinks>
      <UserActions />
    </Nav>
  );
};

export default Navbar;