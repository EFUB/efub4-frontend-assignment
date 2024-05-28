import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
const AllComponents = styled.div`
  width: 99vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
`;
const Header = styled.div`
  color: inherit;
  margin-top: -2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100px;
  margin-bottom: 10px;
  font-size: 50px;
  //background-color: #7469b6;
`;
const MainBack = styled.div`
  //background-color: #7469b6;
  color: inherit;
  height: auto;
  border-radius: 10px;
  padding: 20px;

  margin-bottom: 80px;

  display: flex;

  align-items: start;
  flex-direction: column;
`;

const Movies = styled.div`
  display: flex;
  justify-content: row;
`;

const TodayMovietxt = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: 20px;
  font-size: 25px;
`;

const TodayMovie = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-top: 20px;
`;

const MoviePoster = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
  cursor: pointer;
`;

const MovieTitle = styled.div`
  font-size: 15px;
  margin-top: 10px;
  width: 9vw;
  color: inherit;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  color: inherit;
`;

const ToggleChange = styled.div`
  position: relative;
  margin-top: 1rem;

  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(0, 200, 102);
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [latestMovie, setLatestMovie] = useState([]);
  const [downlodaMovie, setDownlodaMovie] = useState([]);
  const navigate = useNavigate();

  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    if (backgroundColor === "white") {
      dispatch({ type: "black" });
    } else {
      dispatch({ type: "white" });
    }
  };

  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const fontColor = useSelector((state) => state.fontColor);

  useEffect(() => {
    const fetchMyFavorite = async () => {
      try {
        const movieTitles = ["Moana", "Cruella", "Bohemian Rhapsody"];
        const moviePromises = movieTitles.map(async (title) => {
          const response = await axios.get(
            "https://yts.mx/api/v2/list_movies.json",
            {
              params: {
                query_term: title,
              },
            }
          );
          const latestMovie = response.data.data.movies.reduce(
            (latest, current) => {
              return new Date(latest.year) > new Date(current.year)
                ? latest
                : current;
            }
          );

          return latestMovie;
        });

        const movieResults = await Promise.all(moviePromises);
        const moviesWithPosters = movieResults.map((movie) => ({
          movieCd: movie.id,
          movieNm: movie.title,
          posterUrl: movie.medium_cover_image,
        }));

        setFavoriteMovies(moviesWithPosters);
      } catch (err) {
        setError(err);
      }
    };

    const fetchLatestMovies = async () => {
      try {
        const ytsResponse = await axios.get(
          "https://yts.mx/api/v2/list_movies.json",
          {
            params: {
              limit: 6,
              sort_by: "date_added",
            },
          }
        );

        const movieList = ytsResponse.data.data.movies;

        const moviesWithPosters = movieList.map((movie) => ({
          movieCd: movie.id,
          movieNm: movie.title,
          posterUrl: movie.medium_cover_image,
        }));

        setLatestMovie(moviesWithPosters);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    const fetchDownloadMovies = async () => {
      try {
        const ytsResponse = await axios.get(
          "https://yts.mx/api/v2/list_movies.json",
          {
            params: {
              limit: 6,
              sort_by: "download_count",
            },
          }
        );

        const movieList = ytsResponse.data.data.movies;

        const moviesWithPosters = movieList.map((movie) => ({
          movieCd: movie.id,
          movieNm: movie.title,
          posterUrl: movie.medium_cover_image,
        }));

        setDownlodaMovie(moviesWithPosters);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchMyFavorite();
    fetchDownloadMovies();
    fetchLatestMovies();
  }, []);

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (loading) return <p>Loading... Wait Please</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div>
      <AllComponents bgColor={backgroundColor} fontColor={fontColor}>
        <TopBar>
          <ToggleChange onClick={toggleHandler}>
            <div
              className={`toggle-container ${
                backgroundColor === "black" ? "toggle--checked" : null
              }`}
            />
            <div
              className={`toggle-circle ${
                backgroundColor === "black" ? "toggle--checked" : null
              }`}
            />
          </ToggleChange>
          <Header>Gaeun's recommendation</Header>
        </TopBar>
        <MainBack>
          <TodayMovietxt>Gaeun's Movie</TodayMovietxt>
          <Movies>
            {favoriteMovies.map((movie) => (
              <TodayMovie key={movie.movieCd}>
                <MoviePoster
                  onClick={() => handleClick(movie.movieCd)}
                  src={movie.posterUrl}
                  alt={movie.movieNm}
                />
                <MovieTitle>{movie.movieNm}</MovieTitle>
              </TodayMovie>
            ))}
          </Movies>
          <TodayMovietxt>Latest Movie</TodayMovietxt>
          <Movies>
            {latestMovie.map((movie) => (
              <TodayMovie key={movie.movieCd}>
                <MoviePoster
                  onClick={() => handleClick(movie.movieCd)}
                  src={movie.posterUrl}
                  alt={movie.movieNm}
                />
                <MovieTitle>{movie.movieNm}</MovieTitle>
              </TodayMovie>
            ))}
          </Movies>

          <TodayMovietxt>Popular Movie</TodayMovietxt>
          <Movies>
            {downlodaMovie.map((movie) => (
              <TodayMovie key={movie.movieCd}>
                <MoviePoster
                  src={movie.posterUrl}
                  alt={movie.movieNm}
                  onClick={() => handleClick(movie.movieCd)}
                />
                <MovieTitle>{movie.movieNm}</MovieTitle>
              </TodayMovie>
            ))}
          </Movies>
        </MainBack>
      </AllComponents>
    </div>
  );
};

export default Main;
