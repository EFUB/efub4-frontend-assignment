import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import store from "./theme/store";
import DarkThemeProvider from "./theme/DarkThemeProvider";
import DarkThemeButton from "./theme/DarkThemeButton";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});
export const textColor = theme("theme", { light: "#000", dark: "#fff" });
const Container = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;
function App() {
  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <Container>
          <div style={{ padding: "20px", paddingBottom: "0px" }}>
            <DarkThemeButton></DarkThemeButton>
          </div>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/detail/:id" element={<MovieDetail />} />
          </Routes>
        </Container>
      </DarkThemeProvider>
    </ReduxProvider>
  );
}

export default App;
