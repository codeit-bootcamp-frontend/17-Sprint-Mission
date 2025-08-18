import React from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';


const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
    </>
  )
}

//design
const ContainerWrapper = styled.div`
  max-width: 1200px;
  margin: 24px auto 58px;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;

   @media (max-width: 375px) {
    padding: 16px 14px;
  }


`;
export default Layout;
