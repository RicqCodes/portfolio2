import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./molecules/Header";
import Footer from "./molecules/Footer";

const Layout = () => {
  return (
    <Container>
      <Header />
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
`;

const Main = styled.main`
  width: 100%;
  margin: auto;
  padding: 24px 0;

  :focus {
    outline: none;
  }

  @media (min-width: 701px) {
    touch-action: none;
  }
`;
