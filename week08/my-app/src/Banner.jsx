import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./requests";
import instance from "./instance";
import styled from "styled-components";

const BannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 300px;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerButtons = styled.div``;

const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 4px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #fff;
    transition: all 0.2s;
  }
`;

const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

const BannerFadeBottom = styled.div`
  height: 148px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
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

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        color: "white",
        backgroundSize: "100% 100%",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <BannerContents>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <BannerButtons>
          <BannerButton>Play</BannerButton>
          <BannerButton>My list</BannerButton>
        </BannerButtons>
        <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>
      </BannerContents>
      <BannerFadeBottom />
    </header>
  );
}

export default Banner;
