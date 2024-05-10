import React, { useEffect, useState } from "react";
import useTheme from "./useTheme";
import { useNavigate } from "react-router-dom";
import "./weather.css";

const API_KEY = "b31e3faf809787649794d69379937866";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Seoul");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toggleTheme, buttonEmoji } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) throw new Error("날씨 정보를 가져올 수 없습니다.");
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-container">
      <div className="topbox_W">
        <button className="changeButton" onClick={toggleTheme}>
          {buttonEmoji}
        </button>
        <button
          className="weather"
          onClick={() => {
            navigate("/");
          }}
        >
          🌈
        </button>
      </div>
      <div className="W_box">
        <h1 className="title_W">오늘의 날씨</h1>
        <input
          className="city_W"
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
        />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {weather && !loading && (
          <div>
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
