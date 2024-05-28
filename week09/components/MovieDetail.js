import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";
import "./MovieDetail.css";

const MovieDetailBlock = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.5);
  border: 1px solid black;
  width: 700px;
  #title {
    margin: 30px;
    font-size: 25px;
    display: flex;
    padding: 5px;
    font-weight: bold;
  }
  #year {
    font-size: 20px;
    margin: 10px;
    text-align: center;
  }
  #summary {
    width: 500px;
    margin: 10px;
    display: flex;
    text-align: center;
    padding: 10px;
  }
  #button {
    width: 80px;
    height: 30px;
    font-size: 20px;
    margin: 20px;
    background-color: white;
    font-weight: bold;
  }
`;
const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`
        );
        setMovies(response.data.data.movie);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>대기중...</h2>;
  }
  if (!movies) {
    return null;
  }
  return (
    <div id="background">
      <MovieDetailBlock>
        <div id="title">Title : {movies.title}</div>
        <img src={movies.medium_cover_image} alt="poster"></img>
        <div id="year">
          Year : {movies.year} <br></br>Rating : {movies.rating}
        </div>
        <div id="summary">Summary : {movies.description_intro}</div>
        <Link to="/">
          <button id="button">Home</button>
        </Link>
      </MovieDetailBlock>
    </div>
  );
};
MovieDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
};
export default MovieDetail;
