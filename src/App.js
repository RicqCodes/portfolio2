import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/global/global.styled";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import Home from "./components/pages/home/Home";
import { theme } from "./styles/global/theme";
import Work from "./components/pages/work/Work";
import ProjectDetails from "./components/pages/work/components/ProjectDetails";

function App() {
  return (
    <AppContainer data-current-section="">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work">
              <Route path="" element={<Work />} />
              <Route path=":projectname" element={<ProjectDetails />} />
            </Route>
          </Routes>
        </Router>
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
