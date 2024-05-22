import React from "react";
import { styled } from "styled-components";
import Carousel from "./Carousel";

// 추천 탭 컴포넌트
const RecommendMovies = ({ movies }) => {
  const popularMovies = movies.slice(0, 10); // 인기 영화

  const comedyMovies = movies.filter(
    (movie) => movie.genres && movie.genres.includes("Comedy")
  ); // 코미디 영화

  const thrillerMovies = movies.filter(
    (movie) => movie.genres && movie.genres.includes("Thriller")
  ); // 스릴러 영화

  return (
    <Wrapper>
      {/* 평점 순 */}
      <Carousel title="인기 영화" movies={popularMovies} />
      {/* 코미디 영화 추천 */}
      <Carousel title="#코미디" movies={comedyMovies} />
      {/* 스릴러 영화 추천 */}
      <Carousel title="#스릴러" movies={thrillerMovies} />
    </Wrapper>
  );
};

export default RecommendMovies;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  color: var(--font);
`;
