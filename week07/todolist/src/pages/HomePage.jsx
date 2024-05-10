import React from "react";
import { Link } from "react-router-dom";
import Clock from "../components/Clock";
import "../css/home.css";

const HomePage = () => {
    return (
        <div className="home">
            <h1>How to React</h1>
            <div className="line1" />
            <Clock />
            <div className="line1" />
            <Link to="/todo">투두리스트✅</Link>
            <Link to="/video">비밀의 방🚪</Link>
            <div className="tbc">To be continued...</div>
        </div>
    );
};
export default HomePage;
