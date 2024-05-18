import React, { useState, useEffect } from "react";
import requests from "./requests";
import axios from "axios";
import instance from "./instance";
import "./Row.css";
import styled from "styled-components";

const base_url = "https://image.tmdb.org/t/p/original/";
const RowContainer = styled.div`
  margin-left: 20px;
  color: white;
`;
const RowTitle = styled.h2``;
const RowPosters = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowPosters>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </RowPosters>
    </RowContainer>
  );
}

export default Row;
