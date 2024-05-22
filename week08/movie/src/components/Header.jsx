import React from "react";
import styled from "styled-components";

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
    background-color: #e50914b9;
    color: white;

    height: 50px;
    padding-left: 10px;
`;

const Header = () => {
    return <HeaderComponent>{"Mooooovie"}</HeaderComponent>;
};

export default Header;
