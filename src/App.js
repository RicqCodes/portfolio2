import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/global/global.styled";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import Home from "./components/pages/Home";
import { theme } from "./styles/global/theme";

function App() {
  return (
    <AppContainer data-current-section="">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
`;
