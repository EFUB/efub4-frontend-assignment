import React, { useState } from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
    @font-face {
        font-family: 'HSSanTokki20-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405@1.0/HSSanTokki20-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'HSSanTokki20-Regular';
    font-size: 40px;
    color: #00ff84;
    display: flex;
    align-items: center;
    background-color: #000000;
    height: 80px;
    padding-left: 40px;
`;

const HowtoSort = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 30px;
    padding-right: 10px;

    button {
        margin-left: 20px;
        background: none;
        border: none;
        border-radius: 7px;
        padding: 10px;
        color: #00ff84;
        font-family: 'HSSanTokki20-Regular';
        font-size: 18px;
        cursor: pointer;

        &:hover {
            color: #000000;
            background-color: #00ff84;
        }
    }
`;

const GenreList = styled.div`
    position: absolute;
    top: 80px;
    right: 30px;
    background-color: none;
    color: #00ff84;
    border: 1px solid #00ff84;
    border-radius: 7px;
    padding: 10px;
    display: flex;
    flex-direction: column;

    button {
        background: none;
        border: none;
        color: #00ff84;
        cursor: pointer;
        margin: 5px 0;
    }
`;

const Header = ({ selectGenre, changeTitle }) => {
    const [showGenres, setShowGenres] = useState(false);

    const sortingFunc = (criteria) => () => {
        console.log(criteria);
        changeTitle(criteria);
        setShowGenres(false);
    };

    return (
        <HeaderStyle>
            <div>Movillie</div>
            <HowtoSort>
                <button onClick={sortingFunc("")}>기본 정렬</button>
                <button onClick={sortingFunc("rating")}>평점 순</button>
                <button onClick={sortingFunc("year")}>개봉 순</button>
                <button onClick={() => setShowGenres(!showGenres)}>장르 별</button>
                {showGenres && (
                    <GenreList>
                        <button onClick={() => selectGenre("Drama")}>드라마</button>
                        <button onClick={() => selectGenre("Horror")}>호러</button>
                        <button onClick={() => selectGenre("Comedy")}>코미디</button>
                        <button onClick={() => selectGenre("Romance")}>로맨스</button>
                    </GenreList>
                )}
            </HowtoSort>
        </HeaderStyle>
    );
};

export default Header;
