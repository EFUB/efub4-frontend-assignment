import React, { useEffect } from "react";
import MainPage from "./pages/MainPage";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.themeSlicer.theme);

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = theme.mode === "dark" ? "#111" : "#ffd464";
    body.style.backgroundImage =
      theme.mode === "light"
        ? "linear-gradient(0deg, rgba(17, 17, 17, 1) 0%, rgba(34, 34, 34, 1) 45%, rgba(84, 84, 84, 1) 100%)"
        : "linear-gradient(0deg, rgba(255,212,100,1) 0%, rgba(251,231,185,1) 25%, rgba(255,255,255,1) 72%)";

    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";
  }, [theme]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="main">
          <MainPage />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
