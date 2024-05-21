import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import Header from "../components/Header";
import axios from "axios";

const Title = styled.div`
    font-family: 'HSSanTokki20-Regular';
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    background-color: none;
`;

const MovieList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
    color: #FFFFFF;
    text-decoration-line: none;
`;

const MainPage = () => {
    const [movies, setMovies] = useState([]);
    const [sort, setSort] = useState("");
    const [genre, setGenre] = useState("");
    const [title, setTitle] = useState("영화 목록");

    useEffect(() => {
        async function getMovies() {
            try {
                const genreQuery = genre ? `&genre=${genre}` : "";
                const res = await axios.get(
                    `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}${genreQuery}`
                );
                setMovies(res.data.data.movies);
            } catch (error) {
                console.log(error);
            }
        }
        getMovies();
    }, [sort, genre]);

    const changeTitle = (criteria) => {
        let newTitle = "";
        switch (criteria) {
            case "":
                newTitle = "영화 목록";
            case "rating":
                newTitle = "평점 순";
                break;
            case "year":
                newTitle = "개봉 순";
                break;
            default:
                newTitle = "";
        }
        setTitle(newTitle);
        setSort(criteria);
    };

    const selectGenre = (selectedGenre) => {
        setGenre(selectedGenre);
    };

    return (
        <Container>
            <Header changeTitle={changeTitle} selectGenre={selectGenre} />
            <MainContainer>
                <Title>{title}</Title>
                <MovieList>
                    {movies.map((movie) => (
                        <StyledLink key={movie.id} to={`/detail/${movie.id}`}>
                            <Movie title={movie.title} image={movie.medium_cover_image} />
                        </StyledLink>
                    ))}
            </MovieList>
            </MainContainer>
        </Container>
    );
};

export default MainPage;
