import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: 30px;
`;
const Title = styled.div`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

const Movie = ({ title, image }) => {
    return (
        <MovieContainer>
            <img src={image} />
            <Title>{title}</Title>
        </MovieContainer>
    );
};

export default Movie;