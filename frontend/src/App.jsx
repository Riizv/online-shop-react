import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

import { Layout } from "./containers";
import Router from "./router/Router";

import { themes } from "./themes";
import { selectTheme } from "./store/themeSlice";
import { selectFont } from "./store/fontSlice";

const App = () => {
  const theme = useSelector(selectTheme);
  const font = useSelector(selectFont);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle font={font} />
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    * {
      font-family: ${({ font }) => font};
    }
  }
`;
