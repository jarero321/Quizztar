import { Fragment } from "react";
import GlobalStyle from "../src/styles/GlobalStyles";
import LandingPage from "../src/components/LandingPage";
import QuizzPage from "../src/components/QuizzPage";
import { ThemeProvider } from "../src/context/ThemeContext";
import { DataProvider } from "../src/context/DataContext";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Fragment>
          <DataProvider>
            <ThemeProvider>
              <GlobalStyle />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/Quizz" component={QuizzPage} />
            </ThemeProvider>
          </DataProvider>
      </Fragment>
    </Router>
  );
}

export default App;
