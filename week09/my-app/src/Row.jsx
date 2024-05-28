import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const base_url = "https://image.tmdb.org/t/p/original/";
const RowContainer = styled.div`
  margin-left: 20px;
  color: white;
`;
const RowTitle = styled.h2`
  #light & {
    color: black;
  }
`;
const RowPosters = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RowImage = styled.img`
  object-fit: contain; /*비율 유지*/
  width: 100%;
  max-height: ${(props) => (props.$islarge ? "250px" : "100px")};
  transition: transform 450ms; /*전환되는 속도, 여기선 커지는 속도*/
  margin-right: 10px;
  &:hover {
    transform: ${(props) => (props.$islarge ? "scale(1.09)" : "scale(1.08)")};
  }
`;

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
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
          <RowImage
            key={movie.id}
            $islarge={!!isLargeRow}
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
