import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const MovieBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 5px 0px;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
`;
const TitleText = styled.p`
  padding: 10px 0px 0px 0px;
  margin: 0 3px;
  margin-top: -3px;
  font-size: 15px;
  font-weight: 500;
  color: white;
`;
const YearText = styled.p`
  padding: 5px;
  margin: 0 3px;
  margin-top: -3px;
  font-size: 13px;
  color: white;
`;

const Poster = styled.img`
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 250px;
  height: 390px;
`;
function Movie({ id, title, year, summary, poster }) {
  return (
    <MovieBlock>
      <Poster src={poster} alt={title} />
      <TextBlock>
        <TitleText>{title}</TitleText>
        <YearText>{year}</YearText>
        {/* <p>{summary}</p> */}
      </TextBlock>
    </MovieBlock>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
