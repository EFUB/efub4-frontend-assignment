import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const MovieDetailBack = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: white;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 60px;
`;

const PosterAndInfo = styled.div`
  display: flex;

  flex-direction: row;
`;

const Poster = styled.img`
  width: auto;
  height: 700px;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-left: 20px;
  width: 1000px;
`;
const Title = styled.div`
  font-size: 55px;
`;

const YearAndrate = styled.div`
  font-size: 25px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 17px;
`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          "https://yts.mx/api/v2/movie_details.json",
          {
            params: {
              movie_id: id,
            },
          }
        );

        setMovie(response.data.data.movie);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading)
    return <p style={{ color: "white" }}>로딩중... 기다려주세요🙏</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <MovieDetailBack>
      {movie && (
        <div>
          <PosterAndInfo>
            <Poster src={movie.large_cover_image} alt={movie.title} />
            <Information>
              <Title>{movie.title}</Title>
              <YearAndrate>
                <strong> Year:</strong> {movie.year}
                <strong>&nbsp;&nbsp;&nbsp;Rating:</strong> {movie.rating}
              </YearAndrate>
              <Description>{movie.description_full}</Description>
            </Information>
          </PosterAndInfo>
        </div>
      )}
    </MovieDetailBack>
  );
};
export default MovieDetails;
