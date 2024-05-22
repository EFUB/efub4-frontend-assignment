import React from "react";
import { styled } from "styled-components";
import MovieItem from "./MovieItem";

// 전체 탭 컴포넌트
const TotalMovies = ({ movies }) => {
  return (
    <Wrapper>
      {movies.map((el) => {
        return <MovieItem id={el.id} image={el.large_cover_image} />;
      })}
    </Wrapper>
  );
};

export default TotalMovies;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 0;

  color: var(--font);
  margin-bottom: 32px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
