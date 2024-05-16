import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./requests";
import instance from "./instance";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      if (request.data.results.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        setMovie(request.data.results[randomIndex]);
      }
    }

    fetchData();
  }, []);

  console.log(movie);

  // Separate style properties
  const backgroundStyles = {
    backgroundSize: "auto",
    backgroundImage: movie
      ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
      : "",
    backgroundPosition: "center center",
  };

  return (
    <header className="banner" style={backgroundStyles}>
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
