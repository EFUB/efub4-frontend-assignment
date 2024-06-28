import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  // useSelector로 현재 상태 받아오기
  const lightMode = useSelector((state) => state.isLightMode);

  return (
    <>
      <GlobalStyle isLightMode={lightMode}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
