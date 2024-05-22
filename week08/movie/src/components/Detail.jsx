import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-size: 40px;
    margin: 10px;
`;
const ImgAndInfo = styled.div`
    display: flex;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;
const Desc = styled.div`
    font: 10px;
    margin: 10px;
`;

const Div = styled.div`
    font-size: 23px;
    margin: 10px;
`;

const Detail = ({ info }) => {
    const title = info.title;
    const img = info.medium_cover_image;
    const year = info.year;
    const rating = info.rating;
    const runtime = info.runtime;
    const genres = info.genres;
    const description = info.description_full;

    return (
        <div>
            <Title>{title}</Title>
            <ImgAndInfo>
                <img src={img} />
                <Info>
                    <Div>Year : {year}</Div>
                    <Div>Rating : {rating}</Div>
                    <Div>Runtime : {runtime} min</Div>
                    <Div>Genres : {genres.join(", ")}</Div>
                </Info>
            </ImgAndInfo>
            <Div>Description</Div>
            <Desc>{description}</Desc>
        </div>
    );
};

export default Detail;
