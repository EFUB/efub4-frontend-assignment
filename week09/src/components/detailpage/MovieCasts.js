import React from "react";
import { styled } from "styled-components";
import CastItem from "./CastItem";

// 영화 배우 목록 컴포넌트
const MovieCasts = ({ casts }) => {
  return (
    <Wrapper>
      <Divider />
      <Title>Casts</Title>
      {/* 배우 목록 */}
      <Actors>
        {casts.map((cast, index) => {
          return <CastItem key={index} cast={cast} />;
        })}
      </Actors>
    </Wrapper>
  );
};

export default MovieCasts;

const Wrapper = styled.div`
  width: 100%;
  color: var(--font);
`;

const Divider = styled.div`
  background-color: #1b1c1d;
  width: 100%;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Actors = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 0;
  margin: 16px 0;
`;
