import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const AppStyle = styled.div`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    font-family: "Pretendard-ExtraLight";
    color: white;
    background-color: #000000;
`;

function App() {
    const changeTitle = (criteria) => {
        // 여기에서 MainPage 컴포넌트로 전달하는 방식으로 변경
    };

    return (
        <AppStyle>
            <Routes>
                <Route path="/" element={<MainPage changeTitle={changeTitle} />} />
                <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
        </AppStyle>
    );
}

export default App;
