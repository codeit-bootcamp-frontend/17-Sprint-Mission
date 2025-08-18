import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import logo_img from '../../img/logo_sm.svg';
import logo_text from '../../img/logo_text.svg';
import default_user_img from '../../img/default_user_img.svg';


const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
      <LogoContainer to="/">
      <NavLogoImg src={logo_img} alt="Panda Market Logo"/>
      <NavLogoText src={logo_text} alt="Panda market Logo"/>
      </LogoContainer>
  
      <NavLinks>
        <NavLink to="/board">자유게시판</NavLink>
        <NavLink to="/items">중고마켓</NavLink>
      </NavLinks>
      <UserActions>
        <img src={default_user_img} alt="User Profile" />

      </UserActions>
      </NavContainer>
    </Nav>

  );
};

const Nav = styled.nav`
  border-bottom: 1px solid #DFDFDF
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  max-width: 1200px;
  margin: 0 auto;
  
  //tablet
  @media ${props => props.theme.tablet} {
    padding: 16px 20px;
  }  

`;

const LogoContainer = styled(Link)`
  display: inline-block;
  text-decoration: none;
  line-height: 1;
`;

const NavLogoImg = styled.img`
  width: 153px;
  height: auto;
  display: block;

  // Hide on mobile using the theme 
  @media ${props => props.theme.mobile} {
    display: none;
  }
`;

const NavLogoText = styled.img`
  // Hide by defualt
  display: none;
  height: 40px;
  width: auto; 

  // Show on mobile using the theme
  @media ${props => props.theme.mobile} {
    display: block; 
  }
`;

const NavLinks = styled.div`
  display: flex;
  margin: 0px 32px;

  //tablet
  @media ${props => props.theme.tablet} {
    margin: 0px 16px;
  }  

`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #4B5563;
  font-weight: 700;
  padding: 21px 15px;

  &.active {
    color: #3692FF;
  }
  //mobile
  @media ${props => props.theme.moble} {
    padding: 4px 15px;
  }  

`;

const UserActions = styled.div`
  /* Placeholder for user icon */
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e9ecef;
  margin-left: auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Devider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #dee2e6;
`
export default Navbar;