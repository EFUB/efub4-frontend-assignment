import React from "react";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

import { useSelector } from "react-redux";

const AppContainer = styled.div`
    @font-face {
        font-family: "Pretendard-ExtraLight";
        src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff")
            format("woff");
        font-weight: 200;
        font-style: normal;
    }
    font-family: "Pretendard-ExtraLight";

    background-color: ${(props) => (props.isDark ? "black" : "white")};
    color: ${(props) => (props.isDark ? "white" : "black")};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function App() {
    const isDark = useSelector((state) => state.isDark);
    return (
        <AppContainer isDark={isDark}>
            <StyledLink to="/">
                <Header />
            </StyledLink>
            <Routes>
                <Route path="/" element={<HomePage isDark={isDark} />} />
                <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
        </AppContainer>
    );
}

export default App;
