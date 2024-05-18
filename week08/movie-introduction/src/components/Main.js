import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AllComponents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div`
  margin-top: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 100px;
  margin-bottom: 10px;
  font-size: 50px;
  //background-color: #7469b6;
  color: white;
`;
const MainBack = styled.div`
  //background-color: #7469b6;
  width: 80%;
  height: auto;
  border-radius: 10px;
  padding: 20px;
  color: white;
  margin-bottom: 80px;
`;

const Movies = styled.div`
  display: flex;
  justify-content: row;
`;

const TodayMovietxt = styled.div`
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
`;

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [latestMovie, setLatestMovie] = useState([]);
  const [downlodaMovie, setDownlodaMovie] = useState([]);
  const navigate = useNavigate();

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
              limit: 5,
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
              limit: 5,
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
      <AllComponents>
        <Header>Gaeun's recommendation</Header>
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
