import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/global/global.styled";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/global/theme";
import { IntersectionProvider } from "./utils/context/IntersectionContext";

import Home from "./pages/home";
import Work from "./pages/work";
import Description from "./components/description/Description";
import Layout from "./layout/Layout";
import WorkPage from "./components/work/WorkPage";

function App() {
  return (
    <AppContainer data-current-section="">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <IntersectionProvider>
                    <Home />
                  </IntersectionProvider>
                }
              />
              <Route path="/work" element={<Work />}>
                <Route path="" element={<WorkPage />} />
                <Route path=":id" element={<Description />} />
              </Route>
            </Route>
          </Routes>
        </>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
