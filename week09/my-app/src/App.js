import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import axios from "axios";

const rowList = [
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: "fetchNetflixOriginals",
    isLargeRow: true,
  },
  { title: "Trending now", fetchUrl: "fetchTrending" },
  { title: "Top Rated", fetchUrl: "fetchTopRated" },
  { title: "Action Movies", fetchUrl: "fetchActionMovies" },
  { title: "Comedy Movies", fetchUrl: "fetchComedyMovies" },
  { title: "Romance Movies", fetchUrl: "fetchRomanceMovies" },
  { title: "Documentary Movies", fetchUrl: "fetchDocumentMovies" },
  { title: "Horror Movies", fetchUrl: "fetchHorrorMovies" },
];

function App() {
  return (
    <div className="app">
      <Banner />
      {rowList.map((item) => (
        <Row
          key={item.title}
          title={item.title}
          fetchUrl={requests[item.fetchUrl]}
          isLargeRow={!!item.isLargeRow}
        />
      ))}
    </div>
  );
}

export default App;
