import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

// 영화 포스터 컴포넌트
const MovieItem = ({ id, image }) => {
  const navigate = useNavigate();
  return (
    <Poster onClick={() => navigate(`/detail/${id}`)}>
      <img className="poster_image" src={image} alt="영화 포스터" />
    </Poster>
  );
};

export default MovieItem;

const Poster = styled.div`
  cursor: pointer;
  /* margin: auto; */
  width: 200px;
  flex-shrink: 0;
  background: #e8e8e8;

  .poster_image {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
