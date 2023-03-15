import React from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./molecules/Header";
import Footer from "./molecules/Footer";

const Layout = () => {
  const location = useLocation();
  return (
    <Container>
      {location.pathname.includes("/work") && <Header />}
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  margin: auto;
  padding: 24px 0;
  position: relative;

  :focus {
    outline: none;
  }

  @media (min-width: 701px) {
    touch-action: none;
  }
`;
