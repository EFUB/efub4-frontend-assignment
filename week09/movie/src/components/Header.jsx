import React from "react";
import styled from "styled-components";

import ToggleBtn from "./ToggleBtn";

const HeaderComponent = styled.div`
    @font-face {
        font-family: "Freesentation-9Black";
        src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2")
            format("woff2");
        font-weight: 900;
        font-style: normal;
    }
    font-family: "Freesentation-9Black";
    font-size: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e50914;
    color: white;

    height: 50px;
    padding: 0 10px;
`;

const Header = () => {
    return (
        <HeaderComponent>
            <div>{"Mooooovie"}</div>
            <ToggleBtn />
        </HeaderComponent>
    );
};

export default Header;
