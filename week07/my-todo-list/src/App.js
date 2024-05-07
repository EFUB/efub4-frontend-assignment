import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SubPage from "./pages/SubPage";
import "./App.css";

function App() {
  const style = {
    width: "300px",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "lightgray",
    padding: "10px",
  };
  const activeStyle = {
    color: "darkred",
    fontWeight: "bold",
  };
  return (
    <>
      <div style={style}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/sub"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Sub
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sub" element={<SubPage />} />
      </Routes>
    </>
  );
}

export default App;
