import React from "react";
import { Navigation } from "../../components";
import styled from "styled-components";

const WrapperLayout = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 5rem;
  /* opacity: 0; */
`;

const MainWrapper = styled.main`
  margin: 1rem;
  width: calc(100% - 2rem);
`;

const Layout = ({ children }) => {
  return (
    <WrapperLayout>
      <MainWrapper>{children}</MainWrapper>
      <Navigation />
    </WrapperLayout>
  );
};

export default Layout;
