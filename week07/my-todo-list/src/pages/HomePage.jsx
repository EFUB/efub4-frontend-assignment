import React, { useState, useEffect } from "react";
import "../App.css";
import CustomDate from "../CustomDate";

const HomePage = () => {
  const quote_url = "https://api.quotable.io/random";
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const response = await fetch(quote_url);
      const data = await response.json();
      if (isMounted) {
        setQuote(data.content);
        setAuthor(data.author);
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <CustomDate />
      <div className="quote-box">
        <h2>오늘의 명언</h2>
        <blockquote className="quote">{quote}</blockquote>
        <span className="quote">{author}</span>
      </div>
    </div>
  );
};

export default HomePage;
