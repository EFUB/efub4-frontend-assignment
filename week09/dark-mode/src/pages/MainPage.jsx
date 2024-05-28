import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Header from "../components/Header";
import axios from "axios";
import { useSelector } from 'react-redux';

const Title = styled.div`
    font-family: 'HSSanTokki20-Regular';
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 40px;
    color: ${({ textColor }) => textColor};
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    background-color: ${({ backGroundColor }) => backGroundColor};
`;

const MovieList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
    color: ${({ movieTitleColor }) => movieTitleColor};
    text-decoration-line: none;
`;

const MainPage = () => {
    const [movies, setMovies] = useState([]);
    const [sort, setSort] = useState("");
    const [genre, setGenre] = useState("");
    const [title, setTitle] = useState("영화 목록");
    const backGroundColor = useSelector((state) => state.background.backGroundColor);
    const textColor = useSelector((state) => state.background.textColor);
    const movieTitleColor = useSelector((state) => state.background.movieTitleColor);

    const getMovies = async (sort, genre) => {
        try {
            const res = await axios.get(
                `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}${genre ? `&genre=${genre}` : ""}`
            );
            setMovies(res.data.data.movies);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        getMovies(sort, genre);
    }, [sort, genre]);

    const changeTitle = (criteria) => {
        const titles = {
            "": "영화 목록",
            rating: "평점 순",
            year: "개봉 순",
            genre: "장르별",
        };
        const newTitle = titles[criteria] || "";
        setTitle(newTitle);
        setSort(criteria);
    };

    const selectGenre = (selectedGenre) => {
        setGenre(selectedGenre);
        //changeTitle(genre);
    };

    return (
        <Container backGroundColor={backGroundColor}>
            <Header changeTitle={changeTitle} selectGenre={selectGenre} />
            <MainContainer>
                <Title textColor={textColor}>{title}</Title>
                <MovieList>
                    {movies.map((movie) => (
                        <StyledLink key={movie.id} to={`/detail/${movie.id}`} movieTitleColor={movieTitleColor}>
                            <Movie title={movie.title} image={movie.medium_cover_image} />
                        </StyledLink>
                    ))}
            </MovieList>
            </MainContainer>
        </Container>
    );
};

export default MainPage;
