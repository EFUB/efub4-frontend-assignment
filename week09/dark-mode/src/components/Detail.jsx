import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = styled.div`
    font-family: 'HSSanTokki20-Regular';
    color: ${({ textColor }) => textColor};
    font-size: 80px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Details = styled.div`
    font-family: 'HSSanTokki20-Regular';
    display: flex;
    flex-direction: column;
    margin: 10px;
    color: ${({ textColor }) => textColor};
`;

const String = styled.div`
    font-size: 30px;
    margin: 20px;
    `;

const Story = styled.div`
    font-family: 'Pretendard-Regular';
    width: 500px;
    font-size: 20px;
    margin: 10px;
    text-align: center;
    color: ${({ textColor }) => textColor};
`;

const Detail = ({ information }) => {
    const { title, large_cover_image: img, rating, genres, year, runtime, language, description_full: description } = information;
    const textColor = useSelector((state) => state.background.textColor);

    return (
        <div>
            <Title textColor={textColor}>{title}</Title>
            <Container>
                <img src={img} alt={title} />
                <Details>
                    <String>평점ㅤ|ㅤ{rating}</String>
                    <String>장르ㅤ|ㅤ{genres.join(" / ")}</String>
                    <String>개봉 연도ㅤ|ㅤ{year}</String>
                    <String>상영 시간ㅤ|ㅤ{runtime} 분</String>
                    <String>언어ㅤ|ㅤ{language}</String>
                    <String>영화 소개ㅤ|ㅤ</String>
                    <Story textColor={textColor}>{description}</Story>
                </Details>
            </Container>
        </div>
    );
};

export default Detail;
