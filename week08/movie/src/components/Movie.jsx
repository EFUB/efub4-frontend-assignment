import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;
const Title = styled.div`
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
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
