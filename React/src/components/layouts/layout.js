import styled from 'styled-components';
import Navbar from '../common/Navbar';


const Container = ({ children }) => {
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
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export default Layout;
