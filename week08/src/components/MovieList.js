import MovieItem from "./MovieItem";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TitleStyle = styled.div`
  font-size: 30px;
  margin: 20px;
  padding: 20px;
  background-color: lightgrey;
`;
const TitleStyle2 = styled.div`
  font-size: 25px;
  margin: 10px;
  padding: 10px;
  font-weight: bold;
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "10px",
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: false,
  fade: false,
  arrows: true,
  vertical: false,
  initialSlide: 1,
  pauseOnFocus: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
};
const MovieList = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://yts-proxy.now.sh/list_movies.json?"
        );
        setMovies(response.data.data.movies);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  const [movies1, setMovies1] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        setMovies1(response.data.data.movies);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>대기중...</h2>;
  }
  if (!movies) {
    return null;
  }
  if (!movies1) {
    return null;
  }
  return (
    <div>
      <TitleStyle>🎬Movies🎥</TitleStyle>
      <div
        style={{
          border: "1px solid black",
          margin: "20px",
          padding: "5px",
        }}
      >
        <TitleStyle2>All Movies</TitleStyle2>
        <Slider {...settings}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie}></MovieItem>
          ))}
        </Slider>
      </div>
      <br></br>
      <br></br>
      <div
        style={{ border: "1px solid black", margin: "20px", padding: "5px" }}
      >
        <TitleStyle2>High Rating</TitleStyle2>
        <Slider {...settings}>
          {movies1.map((movie) => (
            <MovieItem key={movie.id} movie={movie}></MovieItem>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default MovieList;
