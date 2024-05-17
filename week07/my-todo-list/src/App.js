import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#a9c9ff",
        }}
      >
        <div className="nav">
          <NavLink
            to="/video"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            Video
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            Todo
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/video" element={<VideoPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
