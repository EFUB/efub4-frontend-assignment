import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";

const MovieLine = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  overflow: auto;
  scrollbar-width: none;
`;

class MovieList extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const { url } = this.props;
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(`https://yts-proxy.now.sh/list_movies.json${url}`);
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          //   <div className="loader">
          //     <span className="loader_text">Loading...</span>
          //   </div>
          console.log(isLoading)
        ) : (
          <MovieLine>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </MovieLine>
        )}
      </div>
    );
  }
}

export default MovieList;
